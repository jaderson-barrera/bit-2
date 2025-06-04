"use strict";

const $root = document.getElementById("root");
let cards = `<div class="d-flex flex-wrap"`;

fetch("file.json")
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {
      cards += `<div class="card">
      <h4 class="card-title">Code ${info[i].code}</h4>
        <img class="card-img-top" src="https://github.com/${
          info[i].usernameGithub
        }.png" alt="imagen de perfil de ${info[i].student}" />
        <div class="card-body">
          <h5 class="card-title">${info[i].student}</h5>
           
        </div>
        <div class="card-body">
         <a href="https://github.com/${
           info[i].usernameGithub
         }" target="_blank" rel="noopener noreferrer">github</a>
         <h3 class="card-title">Intesidad ${info[i].intensity}</h3>
         <ul> <li>${info[i].projects
           .map((p) => {
             if (p.name === "bit-1" && p.score.length > 1) {
               const suma = p.score.reduce((acc, val) => acc + val, 0);
               const promedio = (suma / 2).toFixed(1);
               return `<div><strong>${p.name}:</strong> ${promedio}</div>`;
             } else if (p.name === "bit-1" && p.score > 5) {
               const promedio = (p.score[0] / 2).toFixed(1);
               return `<div><strong>${p.name}:</strong> ${promedio}</div>`;
             } else {
               return `<div><strong>${p.name}:</strong> ${p.score.join(
                 ", "
               )}</div>`;
             }
           })
           .join("")}
				</li></ul>
         </div>
         
      </div>`;
    }

    cards += " </div>";
    $root.innerHTML = cards;
  })
  .catch((err) => {
    console.log("error:", err);
  });
document.writeln(info[i].student);
