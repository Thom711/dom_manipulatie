const buttons = Array.from(document.getElementsByClassName('big-five-button'));
const removeFirstButton = document.querySelector('#remove-first-item-button');
const removeAllButton = document.querySelector('#remove-all-button');
const list = document.querySelector('#spotted-animals-list');

const clickButton = (value) => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    listElement.textContent = value;
    list.appendChild(listElement);
};

const removeFirstAnimal = () => {
    const child = list.getElementsByTagName('li')[0];
    list.removeChild(child);
};

const removeAllAnimals = () => {
    const children = Array.from(list.getElementsByTagName('li'));
    children.forEach((child) => {
        list.removeChild(child);
    });
};

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        clickButton(e.target.innerText);
    });
});

removeFirstButton.addEventListener('click', removeFirstAnimal);

removeAllButton.addEventListener('click', removeAllAnimals);