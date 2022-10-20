function setLocalStorage(name,value){
    localStorage.setItem(name,value);
}
function getLocalStorage(){
    alert(localStorage.getItem("name")); 
}

function removeLocalStorage(){
    alert(localStorage.removeItem("name")); 
}

function clearLocalStorage(){
    alert(localStorage.clear()); 
}

function getKey(){
    alert(localStorage.key(13));
}

function storageLength(){
    alert(localStorage.length);
}