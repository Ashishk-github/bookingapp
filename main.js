function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const obj = {
        name,
        email
        }
    axios.post('https://crudcrud.com/api/d92030668a1640568956d97c074caf3a/userDetails',obj.email ={
        name,
        email
        }).then((res)=>{showNewUserOnScreen(res.data)})
        .catch((err)=>crossOriginIsolated.log(err));
        
    //showNewUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/d92030668a1640568956d97c074caf3a/userDetails')
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
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails(${emailId},${user.name},'${user._id}')>Edit User </button>
                         </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId,name,id){

    document.getElementById('emailId').value = emailId;
    document.getElementById('username').value = name;

    deleteUser(id);
 }

// deleteUser('abc@gmail.com')

function deleteUser(id){
    let url='https://crudcrud.com/api/d92030668a1640568956d97c074caf3a/userDetails'
    url=url+'/'+id.toString();
    alert(url)
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






