function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const obj = {
        name,
        email
        }
    const params = new URLSearchParams();
    params.append('username', name);
    params.append('email', email);
    axios.post('http://localhost:7000/addnewuser', params)
    .then((res)=>{showNewUserOnScreen(res.data)})
        .catch((err)=>crossOriginIsolated.log(err));
        
    //showNewUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:7000/getusers')
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
    const childHTML = `<li id=${user.id}> ${user.username} - ${user.email}
                            <button id='del' onclick=deleteUser('${user.id}')><img src="del.png" width=20 depth=20></button>
                            <button id='edit' onclick=editUser('${user.id}','${user.email}','${user.username}')><img src="edit.png" width=20 depth=20></button>
                         </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User
function editUser(id,mail,name){
    // let url='http://localhost:7000/addnewuse'
    // url=url+'/'+id;
    document.getElementById('emailId').value = mail;
    document.getElementById('username').value = name;
    deleteUser(id)
}


function deleteUser(id){
    let url='http://localhost:7000/deleteuser'
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

// const params = new URLSearchParams();
// params.append('username', 'aaa');
// params.append('email', 'bbb');
// axios.post('http://localhost:7000/addnewuser', params);




