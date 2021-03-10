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
                <input id="input-title" className="upload-form" type="text" placeholder="Title (max 20 characters)"></input>
                <input id="input-description" className="upload-form" type="text" placeholder="Description (max 100 characters)"></input>
                <select className="upload-category" name="Category" id="input-category">
                    <option value="" hidden>Please Choose a Category</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Movie">Movie</option>
                    <option value="Music">Music</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Shoe">Shoe</option>
                    <option value="Other">Other</option>
                </select>
                <input id="input-image" className="upload-image" type="file"></input>
                <button type="button" className="upload-submit" onClick={() => props.handleSubmit()}>Submit</button>
            </div>
        </div>
    ) : "";
}

function Upload() {
    const [buttonPopup, setButtonPopup] = useState(false);
    function handleSubmit() {
        let username;
        console.log(document.getElementById("input-title").value);
        console.log(document.getElementById("input-description").value);
        console.log(document.getElementById("input-category").value);
        console.log(document.getElementById("input-image").files[0]);
        axios.get("http://localhost:5000/users/getCurrentUser").then(response => {
            username = response.data.username;
            console.log(username);
        })
        let formdata = new FormData();
        formdata.append("author", username)
        formdata.append("title", document.getElementById("input-title").value)
        formdata.append("description", document.getElementById("input-description").value)
        formdata.append("category", document.getElementById("input-category").value)
        formdata.append("image", document.getElementById("input-image").files[0])
        for (var pair of formdata.entries()) {
            console.log(pair[0] + " - " + pair[1]);
        }

        axios({
            method: "post",
            url: "http://localhost:5000/posts",
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
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
