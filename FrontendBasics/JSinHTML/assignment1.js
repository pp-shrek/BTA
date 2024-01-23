"use strict";

const students = [
    { name: "Sami", score: 24.75 },
    { name: "Heidi", score: 20.25 },
    { name: "Jyrki", score: 27.5 },
    { name: "Helinä", score: 26.0 },
    { name: "Maria", score: 17.0 },
    { name: "Yrjö", score: 14.5  }
];

const htmlContainer = document.querySelector(".container");
const toggleStudentBtn = document.querySelector("#toggleStudentBtn");

const createStudentTbl = () => {
    const table = document.createElement("table");
    // table header
    const tHead = document.createElement("thead");
    const tHeadTr = document.createElement("tr");
    const tHeadThName = document.createElement("th");
    const nameNode = document.createTextNode("Name");
    const tHeadThScore = document.createElement("th");
    const scoreNode = document.createTextNode("Score");
    tHeadThName.appendChild(nameNode);
    tHeadTr.appendChild(tHeadThName);
    tHeadThScore.appendChild(scoreNode);
    tHeadTr.appendChild(tHeadThScore);
    tHead.appendChild(tHeadTr);
    table.appendChild(tHead);
    // table body
    const tBody = document.createElement("tbody");
    students.forEach(student => {
        const tBodyTr = document.createElement("tr");
        const tBodyTdName = document.createElement("td");
        const studentNameNode = document.createTextNode(student.name);
        const tBodyTdScore = document.createElement("td");
        const studentScoreNode = document.createTextNode(student.score);
        tBodyTdName.appendChild(studentNameNode);
        tBodyTr.appendChild(tBodyTdName);
        tBodyTdScore.appendChild(studentScoreNode);
        tBodyTr.appendChild(tBodyTdScore);
        tBody.appendChild(tBodyTr);
    });
    table.appendChild(tBody);
    table.setAttribute("id","studentTbl");
    table.setAttribute("class","table table-dark table-hover");
    htmlContainer.appendChild(table);
};

toggleStudentBtn.addEventListener("click", () => {
    const studenTbl = document.querySelector("#studentTbl");
    if (document.contains(studenTbl)) {
        studenTbl.remove();
    } // if
    else {
        createStudentTbl();
    } // else
});


