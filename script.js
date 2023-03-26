let input = document.querySelector('.input');
let addbtn = document.querySelector('.add-btn')
let tasks = document.querySelector('.tasks');


addbtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p>${input.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        tasks.appendChild(newItem);
        input.value = '';

    } else {
        alert('please enter a task')
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})