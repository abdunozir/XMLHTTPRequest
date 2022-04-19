window.addEventListener('load', () => {
  mypro();
  showcard();
});
let newD = [];
function mypro() {
  let outres = new XMLHttpRequest();

  outres.open('GET', 'https://reqres.in/api/users');

  outres.onload = function () {
    let obj = JSON.parse(outres.responseText);

    obj.data.forEach((item) => {
      newD.push(item);
    });
    showcard();
  };
  outres.send();
}
let hero_container = document.querySelector('.hero-container');
let str = '';

function showcard() {
  newD.forEach((item) => {
    str += `<div class="card">
        <div class="card-header">
        <img src="${item.avatar}" alt="" />
        <div class="user-name">
        <h5>${item.first_name}</h5>
        <p>${item.last_name}</p>
        </div>
        </div>
        <div class="card-body">
        <h5><span>first name</span><span>${item.first_name}</span></h5>
        <p><span>last name</span><span>${item.last_name}</span></p>
        <p><span>Email</span><span>${item.email}</span></p>
        </div>
        <div class="hovered"><button onclick="del(${item.id})">delete</button></div>
        </div>`;
  });
  hero_container.innerHTML = str;
  str = '';
}

function del(id) {
  for (let i = 0; i < newD.length; i++) {
    if (newD[i].id == id) {
      newD.splice(i, 1);
    }
  }

  showcard();
}

// let outData = new XMLHttpRequest();

// outData.open(
//   'GET',
//   'https://learnwebcode.github.io/json-example/animals-1.json'
// );

// outData.onload = function () {
//   let outResult = JSON.parse(outData.responseText);
//   console.log(outRequest);
// };
// outData.send();
