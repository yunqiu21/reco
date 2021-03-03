import React from 'react';
import './Upload.css';
import '../index.css';
import { useState } from 'react';
import axios from "axios";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close" onClick={() => props.setTrigger(false)}>Close</button>
                <input id="input-title" className="upload-form" type="text" placeholder="Title"></input>
                <input id="input-description" className="upload-form" type="text" placeholder="Description"></input>
                <button type="button" onClick={() => props.handleSubmit()}>Submit</button>
            </div>
        </div>
    ) : "";
}

function Upload() {
    const [buttonPopup, setButtonPopup] = useState(false);
    function handleSubmit() {
        console.log(document.getElementById("input-title").value);
        console.log(document.getElementById("input-description").value);
        const toUpload = {
            "author": "needs to be implemented",
            "title": document.getElementById("input-title").value,
            "description": document.getElementById("input-description").value
        }
        axios.post("/posts", toUpload).then(request => {
            console.log(request);
        });
        setButtonPopup(false);
    }

    return (
        <div className="button-container">
            <button className="button" type="button" onClick={() => setButtonPopup(true)}>
                Upload
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Upload;
