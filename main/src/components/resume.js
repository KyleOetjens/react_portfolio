import React from 'react'
import Footer from './footer'

export default function Resume() {
    const texts = 'http://localhost:3000/testresume.pdf'
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className='resume-page'>
            <h1>Download my latest resume</h1>
            <div className="btnDiv">
                <button id="downloadBtn" onClick={() => downloadFileAtURL(texts)} value="download">Download my resume</button>
            </div>
            <p>Experience in</p>
            <ul>Front-End</ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Responsive web design</li>
            <ul>Back-End</ul>
            <li>APIs</li>
            <li>MongoDB</li>
            <li>Node</li>
        </div>
    );
}