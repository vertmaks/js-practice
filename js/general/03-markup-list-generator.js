const listArr = ['item1', 'item2', 'item3', 'item4', 'item5'];

const main = document.querySelector('.main');

function markupGenerator(arr) {
  // option 1:
  const ul = document.createElement('ul');
  ul.classList.add('test-list');
  main.append(ul);

  // const listMarkup = arr
  //   .map(item => `<li class="test-item">${item}</li>`)
  //   .join('');

  // ul.innerHTML = listMarkup;

  // option 2 (more secure):
  // for (const i of arr) {
  //   const li = document.createElement('li');
  //   li.classList.add('test-item');
  //   li.textContent = i;

  //   ul.appendChild(li);
  // }

  // option 3 (secure and optimize):
  const fragment = document.createDocumentFragment();

  arr.forEach(i => {
    const li = document.createElement('li');
    li.classList.add('test-item');
    li.textContent = i;
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
}

markupGenerator(listArr);
