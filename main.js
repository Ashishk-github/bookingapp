const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
if(userList.value===undefined){
    let obj_deser=JSON.parse(localStorage.getItem('myobj'));
    userList.appendChild(document.createElement('li').appendChild(document.createTextNode(obj_deser.name+ ' : ' + obj_deser.email)));

}
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    let myobj={
        name:nameInput.value,
        email:emailInput.value
    };
    let obj_ser=JSON.stringify(myobj);
    localStorage.setItem('myobj',obj_ser);
    


    nameInput.value = '';
    emailInput.value = '';
  }
}