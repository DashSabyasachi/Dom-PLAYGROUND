let btn = document.getElementById('btn')

btn.addEventListener('click',Valid)

function Valid(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let cnfpw = document.getElementById('cnfrmPw').value
    let mobile = document.getElementById('mobile').value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let course = document.getElementById('course').value
    let unError = document.getElementById('unError')
    let pwError = document.getElementById('pwError')
    let mobError = document.getElementById('mobError')
    let isValid = true

    if(!username || !password || !cnfpw || !mobile || !gender || !course){
        isValid = false
        unError.textContent = "required*"
        pwError.textContent = "required*"
        mobError.textContent = "required*"
        

    }
    else if(!(username.trim().length > 5)){
        isValid = false
        unError.textContent = "username must be greaterthen 5 letter"
    }
    else if(!(cnfpw === password) ){
        isValid = false
        pwError.textContent = "invalid id"
    }
    else if(!(mobile.trim().length == 10)){
        isValid = false
        mobError.textContent = "Mobile number must be 10digit"
    }
    else if(!(mobile.toString()[0] === "9")){
        isValid = false
        mobError.textContent = "accept only 9th series"
    }
    else{
        isValid = true
        
    }
    if(isValid){
        alert('Form Submitted')
        
    }
    else{
        alert('Error')
    }
        
}
















