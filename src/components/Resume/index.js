import './index.scss';
import React from 'react';
import resume from "./resume.pdf"
import SinglePagePDFViewer from "./single-page";

//When updating resume, update the resume file within this folder as well as the file in the public folder
export default function Resume() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className = 'resume-page'>
            <div>
                <SinglePagePDFViewer pdf={resume} />
                <button onClick={onButtonClick}>
                    Download
                </button>
            </div>
        </div>
    );
}
