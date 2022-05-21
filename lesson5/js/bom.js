const input = document.querySelector('input');
const buildButton = document.querySelector('button');
const list = document.querySelector('.list');


buildButton.addEventListener('click', function () {
    console.log(input.value);

    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        });
});

