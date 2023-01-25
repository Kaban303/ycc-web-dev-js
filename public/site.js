let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        let newItem = document.createElement('li')
        let newBlock = 
        `<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">${myInput.value}</label>`;
        newItem.innerHTML = newBlock
        newItem.classList.add('list-group-item')
        myList.appendChild(newItem)
        myInput.value = '';
    }
}
function finishTask (lableId){
    let elem = document.get
}
document.addEventListener('keydown', function (f) {
    if (f.keyCode === 13) {
        addItem()
    }
})