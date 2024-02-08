import React from "react";
import { Document } from "react-pdf";

const RenderPDF = (props) => {

    // eslint-disable-next-line react/prop-types
    const { fileUrl } = props
    
    return (
        <div className="pdf-container">
        <Document
          file={{ url:fileUrl}}
          onLoadError={(error) => console.error('Error loading PDF:', error)}
        />
      </div>
    );
};

export default RenderPDF;