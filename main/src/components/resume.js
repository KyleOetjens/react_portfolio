import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

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
            <ul className='res-list'>Front-End</ul>
            <ListGroup>
        <ListGroup.Item className='list_item'>HTML</ListGroup.Item>
        <ListGroup.Item className='list_item'>CSS</ListGroup.Item>
        <ListGroup.Item className='list_item'>Javascript</ListGroup.Item>
        <ListGroup.Item className='list_item'>Bootstrap</ListGroup.Item>
        <ListGroup.Item className='list_item'>React</ListGroup.Item>
        <ListGroup.Item className='list_item'>Responsive web design</ListGroup.Item>
      </ListGroup>
            {/* <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Responsive web design</li> */}
            <ul className='res-list'>Back-End</ul>
            <ListGroup>
        <ListGroup.Item className='list_item'>APIs</ListGroup.Item>
        <ListGroup.Item className='list_item'>MongoDB</ListGroup.Item>
        <ListGroup.Item className='list_item'>Node</ListGroup.Item>
      </ListGroup>
            {/* <li>APIs</li>
            <li>MongoDB</li>
            <li>Node</li> */}
        </div>
    );
}

