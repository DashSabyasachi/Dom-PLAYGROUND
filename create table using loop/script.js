let table = document.createElement('table')
table.setAttribute('border' ,1)
table.setAttribute('style', "border-collapse:collapse")
for(let i = 0;i<=5;i++){
    let row = document.createElement('tr')
    for(let j= 0;j<=5;j++){
        let td = document.createElement('td')
        if(j%2==0){
            td.style.backgroundColor='red'
        }
        else{
            td.style.backgroundColor='yellow'
        }
        td.innerText='xyz'
        row.appendChild(td)
    }
    table.appendChild(row)
}
let x = document.getElementById('container')
x.appendChild(table)