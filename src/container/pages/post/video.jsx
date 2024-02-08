import React, { useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const VideoComponent = (props) => {
  const videoRef = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { url } = props;
  
  const onChange = (isVisible) => {
    if (isVisible) {
      videoRef.current.play();
    }else{
      videoRef.current.pause();
    }
  }

  // const handleMutedChange = () => {
  //   if (videoRef.current) {
  //     localStorage.setItem("ismuted",videoRef.current.muted);
  //   }
  // };

  // const [videoUrl, setVideoUrl] = useState('');

  // useEffect(() => {
  //   // Fetch video URL from .NET Core backend API
  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}File/StreamVideo?videoPath=${url}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Set the received video URL in state
  //       setVideoUrl(data.videoUrl);
  //     })
  //     .catch(error => console.error('Error fetching video:', error));
  // }, []);

  return (
    <>
    <VisibilitySensor onChange={onChange}>
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video ref={videoRef} autoPlay muted={false}  controls controlsList="nodownload" key={url} className='videobox'>
      <source src={url} type="video/mp4" />
      <source src={url} type="video/webm" />
      {/* Add more <source> elements for additional video formats */}
      Your browser does not support the video tag.
    </video>
    </VisibilitySensor>
    </>
  );
};

export default VideoComponent;
