import React, { useState } from "react";
import { Document, Page } from "react-pdf";


export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  const width = window.innerWidth;

  if (width > 400) {
    return (
      <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}/>
        </Document>
      </div>
    );
  } else {
    return (
      <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} className = "pdf-page" width={width}/>
        </Document>
      </div>
    );
  }
  
}