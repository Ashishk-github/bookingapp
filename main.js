const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
if(userList.value===undefined && localStorage.length!=0){
    let obj_deser=JSON.parse(localStorage.getItem('myobj'));
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    var li= document.createElement('li');
    li.appendChild(document.createTextNode(obj_deser.name+ ' : ' + obj_deser.email));
    li.appendChild(deleteBtn)
    userList.appendChild(li);
}

myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click', del);
function del(e){
    console.log(e.target);
    localStorage.removeItem('myobj');
    var li = e.target.parentElement;
    userList.removeChild(li); 
}
function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    const del= document.createElement('button');
    del.textContent='X';
    li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
    li.appendChild(del);
    userList.appendChild(li);
    
    let myobj={
        name:nameInput.value,
        email:emailInput.value
    };
    let obj_ser=JSON.stringify(myobj);
    localStorage.setItem(obj_ser,obj_ser);
    


    nameInput.value = '';
    emailInput.value = '';
  }
}