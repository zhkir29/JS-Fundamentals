function  va_lid(){

}

function ValidityCheck(){
    const inpObj=document.getElementById('id1');
    if(inpObj.validity.rangeOverflow){
        inpObj.setCustomValidity('Done rangeoverflow error.')

    }
    else if(inpObj.validity.rangeUnderflow){
        inpObj.setCustomValidity("Done ragneUnderflow Error.")
    }
    else if(inpObj.validity.valueMissing){
        inpObj.setCustomValidity("Your Input is missing.")
    }

    if(!inpObj.checkValidity()){
        document.getElementById('demo').innerHTML = inpObj.validationMessage;
    }else{
        document.getElementById('demo').innerHTML = "Your Input is OK"
    }
}