"use strict";

// const posts = [
//     { name: "John", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
//     { name: "Donald", content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
// ];

const createPostHtml = (name, post) => {
    const timestamp = Date.now();
    const holePostDiv = document.createElement("div")
    holePostDiv.setAttribute("id",timestamp);
    holePostDiv.setAttribute("class","row mx-2 mt-4 border border-3 rounded-3");
    const postHeaderDiv = document.createElement("div");
    postHeaderDiv.setAttribute("class", "d-flex border-bottom p-2");
    // post writer
    const postNameDiv = document.createElement("div");
    postNameDiv.setAttribute("class","flex-grow-1 align-self-center");
    const postNameEl = document.createElement("h3");
    postNameEl.setAttribute("class","my-sm-1");
    // const postNameElNode = document.createTextNode("jonh");
    const postNameElNode = document.createTextNode(name);
    postNameEl.appendChild(postNameElNode);
    postNameDiv.appendChild(postNameEl);
    postHeaderDiv.appendChild(postNameDiv);
    // post delete button
    const postDeleteBtnDiv = document.createElement("div");
    postDeleteBtnDiv.setAttribute("class","flex-shrink");
    const postDeleteBtn = document.createElement("button");
    postDeleteBtn.setAttribute("type","submit");
    postDeleteBtn.setAttribute("class","btn btn-outline-danger");
    postDeleteBtn.setAttribute("onclick","deletePost('" + timestamp + "')");
    const postDeleteBtnNode = document.createTextNode("Delete");
    postDeleteBtn.appendChild(postDeleteBtnNode);
    postDeleteBtnDiv.appendChild(postDeleteBtn);
    postHeaderDiv.appendChild(postDeleteBtnDiv);
    holePostDiv.appendChild(postHeaderDiv);
    // post content
    const postContentDiv = document.createElement("div");
    postContentDiv.setAttribute("class", "row");
    const postContentTagP = document.createElement("p");
    postContentTagP.setAttribute("class","mt-4");
    // const postContentTagPTxt = document.createTextNode("lorem");
    const postContentTagPTxt = document.createTextNode(post);
    postContentTagP.appendChild(postContentTagPTxt);
    postContentDiv.appendChild(postContentTagP);
    holePostDiv.appendChild(postContentDiv);
    // add post show
    htmlContainer.appendChild(holePostDiv);
};

const addPost = () => {
    const userName = document.getElementById("userName").value;
    const postText = document.getElementById("postText").value;
    if(userName === "") {
        if(!document.contains(document.querySelector("#nameAlert"))){
            const parentEl = document.querySelector("#formUserName");
            const alertDiv = document.createElement("div");
            alertDiv.setAttribute("id","nameAlert");
            alertDiv.setAttribute("class","alert alert-danger");
            const alertTagSpan = document.createElement("span");
            const alertTagSpanTxt = document.createTextNode("Looks like you forgot something!");
            alertTagSpan.appendChild(alertTagSpanTxt);
            alertDiv.appendChild(alertTagSpan);
            parentEl.appendChild(alertDiv);
        } // if
    } // if
    else {
        const alertDiv = document.querySelector("#nameAlert");
        if(document.contains(alertDiv)) {
            alertDiv.remove();
        } // if
    } // else
    if(postText === "") {
        if(!document.contains(document.querySelector("#contentAlert"))){
            const parentEl = document.querySelector("#formPostContent");
            const alertDiv = document.createElement("div");
            alertDiv.setAttribute("id","contentAlert");
            alertDiv.setAttribute("class","alert alert-danger");
            const alertTagSpan = document.createElement("span");
            const alertTagSpanTxt = document.createTextNode("Looks like you forgot something!");
            alertTagSpan.appendChild(alertTagSpanTxt);
            alertDiv.appendChild(alertTagSpan);
            parentEl.appendChild(alertDiv);
        } // if
    } // if
    else {
        const alertDiv = document.querySelector("#contentAlert");
        if(document.contains(alertDiv)) {
            alertDiv.remove();
        } // if
    } // else
    if(userName !== "" && postText !== "") {
        createPostHtml(userName,postText);
        document.getElementById("userName").value="";
        document.getElementById("postText").value="";
    } // if
};

const htmlContainer = document.querySelector(".container");
const addPostBtn = document.querySelector("#addPost");
addPostBtn.addEventListener("click", addPost);

const deletePost = (delPost) => {
    const delElement = document.getElementById(delPost);
    if(document.contains(delElement)) {
        delElement.remove();
    }
};