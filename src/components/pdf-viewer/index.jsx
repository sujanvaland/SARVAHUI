import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function App(props) {
  // eslint-disable-next-line react/prop-types
  const { pdfUrl } = props;
  const canvasRef = useRef(null);
  const [pageState, setPageState] = useState(1);
  let pdfJS = null;
  let pdf = null;
  // const accessToken = localStorage.getItem("access_token");
  const [loadingStatus, setLoadingStatus] = useState(true);
  const accessToken = localStorage.getItem("access_token");
  function getPdfAsBase64(pdfUrl) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}file/DownloadFileNew`, {
          method: "POST",
          headers: new Headers({'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json'}),
          body: JSON.stringify({
            "Url": pdfUrl,
            "Content": "application/pdf"
          })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.arrayBuffer();
        })
        .then(buffer => {
            const bytes = new Uint8Array(buffer);
            const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
            return btoa(binary);
        });
  }

  const renderPdf = useCallback(async () => {
    
    if(!loadingStatus) {
      setLoadingStatus(true)
    }

    try {
      if (pdfJS == null) {
        pdfJS = await import('pdfjs-dist/build/pdf');
      }
      pdfJS.GlobalWorkerOptions.workerSrc = await import('pdfjs-dist/build/pdf.worker.min.mjs');

      if (pdf == null) {
        // const urlstr = `${process.env.REACT_APP_API_ENDPOINT}file/DownloadFile?url=${pdfUrl}`;
        getPdfAsBase64(pdfUrl)
        .then(async base64String => {
            // const dataURI = `data:text/plain;base64,${base64String}`;
            console.log('Base64 encoded PDF:', base64String);
            const pdfData = atob(base64String);
            pdf = await pdfJS.getDocument({data: pdfData}).promise;
            const page = await pdf.getPage(pageState);

            const viewport = page.getViewport({ scale: 1.5 });

            const canvas = canvasRef.current;
            const canvasContext = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = { canvasContext, viewport };
            page.render(renderContext);
            loadingStatus(false)
        })
        .catch(error => {
            console.error('Error:', error);
        });
      }

      
    } catch (err) {
      console.error(err);
    }
  }, [pageState]);

  // Memoize the handlePageChange function
  const handlePageChange = (e) => {
    e.stopPropagation();
    if (pdf?.numPages !== pageState) {
      setPageState((prevPageState) => prevPageState + 1);
    }
  };

  const handlePrvPageChange = (e) => {
    e.stopPropagation();
    if (pageState > 0) {
      setPageState((prevPageState) => prevPageState - 1);
    }
  };

  useEffect(() => {
    renderPdf();
  }, [renderPdf]);

  return (
    <>
      {loadingStatus.current ? (
        'Loading...'
      ) : (
        <>
          <canvas ref={canvasRef} style={{ height: '100vh',width:'100%' }} />
          {pageState !== 1 && <button type="button" onClick={handlePrvPageChange}>
            Previous
          </button>}
          <button type="button" onClick={handlePageChange}>
            Next
          </button>
        </>
      )}
    </>
  );
}
