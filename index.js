// Add your code here
const userObj = {
    name : "",
    email : ""
}
const postUserObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userObj), 
};

function submitData(stringName, stringEmail) {
    userObj.name = stringName;
    userObj.email = stringEmail;
    postUserObj.body = JSON.stringify(userObj);
    return fetch("http://localhost:3000/users", postUserObj) 
    .then(response => response.json())
    .then(object => {
        console.log(object);
        document.body.innerHTML = object.id;
        console.log(document.body.innerHTML)
    })
    .catch(error => {
        console.log(error.message)
        document.body.append(error.message);
    })
}