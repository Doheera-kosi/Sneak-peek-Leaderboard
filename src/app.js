const array = [
  {
    name: 'Evans',
    score: 34,
  },

  {
    name: 'Harry',
    score: 34,
  },

  {
    name: 'Mark',
    score: 34,
  },

  {
    name: 'Aecwood',
    score: 34,
  },

  {
    name: 'MagDee',
    score: 34,
  },

  {
    name: 'Shallot',
    score: 34,
  },
];

const display = document.querySelector('#list');
const element = document.createElement('li');

const render = () => {
  array.forEach((a) => {
    element.innerHTML += `
    <li class='litem'>
      <label class='lname'> ${a.name} : </label> 
      <label class='lscore'> ${a.score} </label>
    </li>
    `;
  })
}
window.onload = () => {
  render();
  document.querySelector('#list').appendChild(element)
}
