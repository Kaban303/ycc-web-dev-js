let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

let countTask = 0

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        countTask = countTask + 1;
        let newItem = document.createElement('li')
        let newBlock =
            `<input onclick="finishTask(${countTask})" class="form-check-input me-1"  type="checkbox" value="" id="ch-${countTask}">
             <label id="${countTask}" class="form-check-label" for="ch-${countTask}">${myInput.value}<button class="delete">Delete</button></label>`
             
        newItem.innerHTML = newBlock
        newItem.classList.add('list-group-item')
        myList.appendChild(newItem)
        myInput.value = '';
    }
}document.querySelector('ul').onclick = function(e) {
  const btn = e.target.closest('.delete');
  if (!btn) {
    return;
  }
  
  btn.parentElement.remove();
  // btn.closest('li').remove();
}

function finishTask(lableId) {
    let elem = document.getElementById(lableId)
    if (elem.classList.contains('item-completed')) {
        elem.classList.remove('item-completed')
    } else {
        elem.classList.add('item-completed')
    }
}


let allbrow = document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addItem()
    }
})