const NavLoginBtn = document.getElementById('NavLoginBtn')
const ConLoginBtn = document.getElementById('ConLoginBtn')
const loginContainer = document.getElementById('container-login')
const Inputdatafield = document.getElementById('data-field')
const btndiv = document.getElementById('btn-div')

btndiv.innerHTML = ""

NavLoginBtn.addEventListener('click',HaveContent)

function HaveContent(e){
    NavLoginBtn.innerText = "Logout"
    e.preventDefault()
    btndiv.innerHTML = `<button id="ConLoginBtn"  class="btn btn-outline-warning">Login</button>`
}

ConLoginBtn.addEventListener('click',addJSONdata)
function addJSONdata(){
    loginContainer.innerHTML= `<textarea name="" id="data-field" cols="60" rows="10"></textarea><br>
    <div id="btn-div"><button id="Submit-btn"  class="btn btn-outline-info">Submit</button></div>
    <h5>No Data</h5>`
    console.log(loginContainer);
}

function storeData() {
    
    const jsonData = Inputdatafield.value;

    if (jsonData) {
        
        const parsedData = JSON.parse(jsonData);
        localStorage.setItem('jsonData', JSON.stringify(parsedData));
        alert('Data stored in local storage.');
    } else {
        alert('No data to store.');
    }
}

