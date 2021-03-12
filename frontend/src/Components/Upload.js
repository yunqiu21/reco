import React from 'react';
import './Upload.css';
import '../index.css';
import { useState } from 'react';
import axios from "axios";

function Popup(props) {
    const titleLimit = 30;
    const descriptionLimit = 500;
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close" onClick={() => props.setTrigger(false)}>Close</button>
                <input id="input-title" className="upload-form" type="textarea" maxLength={titleLimit} placeholder="Title"></input>
                <input id="input-description" className="upload-form" type="textarea" maxLength={descriptionLimit} placeholder="Description"></input>
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

        let user = localStorage.getItem('userInfo');
        user = JSON.parse(user);
        let formdata = new FormData();
        formdata.append("author", user.username);
        formdata.append("title", document.getElementById("input-title").value);
        formdata.append("description", document.getElementById("input-description").value);
        formdata.append("category", "Food");//document.getElementById("input-category").value);
        formdata.append("image", document.getElementById("input-image").files[0]);
        for (var pair of formdata.entries()) {
            console.log(pair[0] + " - " + pair[1]);
        };
        // const toUpload = {
        //     "author": "to be implemented",
        //     "title": document.getElementById("input-title").value,
        //     "description": document.getElementById("input-description").value,
        //     "category": document.getElementById("input-category").value
        // }
        // axios.post("/posts", toUpload).then(request => {
        //     console.log(request);
        // });
        axios({
            method: "post",
            url: "http://localhost:5000/posts",
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log("success");
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
