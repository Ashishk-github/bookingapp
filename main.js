function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const obj = {
        name,
        email
        }
    axios.post('https://crudcrud.com/api/a69ce81d4dc04192ad00658f6dd62692/userDetails',obj.email ={
        name,
        email
        }).then((res)=>{showNewUserOnScreen(res.data)})
        .catch((err)=>crossOriginIsolated.log(err));
        
    //showNewUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/a69ce81d4dc04192ad00658f6dd62692/userDetails')
        .then((res)=>{
            for(var i =0; i< res.data.length; i++){
                showNewUserOnScreen(res.data[i])
            }
        })
    
})

function showNewUserOnScreen(user){
    document.getElementById('emailId').value = '';
    document.getElementById('username').value = '';
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button id='del' onclick=deleteUser('${user._id}')><img src="del.png" width=20 depth=20></button>
                            <button id='edit' onclick=editUser('${user._id}','${user.email}','${user.name}')><img src="edit.png" width=20 depth=20></button>
                         </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User
function editUser(id,mail,name){
    let url='https://crudcrud.com/api/a69ce81d4dc04192ad00658f6dd62692/userDetails'
    url=url+'/'+id;
    document.getElementById('emailId').value = mail;
    document.getElementById('username').value = name;
    deleteUser(id)
}


function deleteUser(id){
    let url='https://crudcrud.com/api/a69ce81d4dc04192ad00658f6dd62692/userDetails'
    url=url+'/'+id;
    axios.delete(url);
    removeUserFromScreen(id);

}

function removeUserFromScreen(id){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(id);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}






