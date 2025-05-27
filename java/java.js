'use strict';

const $root = document.getElementById('root')
let cards = `<div class="d-flex flex-wrap"`

fetch('file.json')
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {

      cards += `<div class="card">
        <img class="card-img-top" src="http://github.com/${info[i].usernameGithub}.png" alt="imagen de perfil de ${info[i].student}" />
        <div class="card-body">
          <h5 class="card-title">${info[i].student}</h5>
        </div>
        <div class="card-body">
         <a href="http://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer">github</a>
        </div>
      </div>`;
    }

    cards += ' </div>';
    $root.innerHTML= cards;
  })
  .catch((err) => {
    console.log('error:', err);
  });
document.writeln(info[i].student);