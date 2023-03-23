const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
console.log(gJavascript);
gJavascript.innerHTML = 'Javascript!!!';
const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list) {
    // console.log(list.textContent);
    // list.textContent = `book title: ${list.textContent} `; //add to every book list 
    list.textContent += ' book title: ';
})

const addBtn = document.querySelector('#add-list button'); // find button
const addText = document.querySelector('#add-list input'); // find text
const readingListUl = document.querySelector('#reading-list ul'); // find ul and li

addBtn.addEventListener('click', (e) =>{
    let newList = document.createElement('li');
    
    let newName = document.createElement('span');
    newName.className = 'name';
    newName.innerHTML = addText.value;

    let newDelete = document.createElement('span');
    newDelete.className = 'delete';
    newDelete.innerHTML = 'delete';

    newList.appendChild(newName);
    newList.appendChild(newDelete);

    readingListUl.appendChild(newList);    

    e.preventDefault();
});

//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode;
        list.removeChild(li);
    }
})

//Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

//create element
const createLi = document.createElement('li')
const createSpanTEXT = document.createElement('span') 
const createSpanDEL = document.createElement('span') 
createSpanTEXT.classList.add('name')
createSpanDEL.classList.add('delete')
//add content 
createSpanDEL.innerHTML = 'delete'
createSpanTEXT.textContent = `${value}`
//add classes
const parentElement = document.querySelector('ul');
//append to DOM
createLi.appendChild(createSpanDEL)
createLi.appendChild(createSpanTEXT)
parentElement.appendChild(createLi)
});