let tblData = [
    {Id: 1001 , Name: 'Kishore' , Role: 'MERN HOD' },
    {Id: 1002 , Name: 'Utsav' , Role: 'React JS' },
    {Id: 1003 , Name: 'Vicky' , Role: 'Node JS' }
  ]
  
  function createTable(){
    
    let tblContainer = document.getElementById('container')
    let  x = tblContainer.createElement = 'Deatils of MERN team'
    tblContainer.append(x)
    
    let tbl = document.createElement('table')
    tbl.setAttribute('border',1)
    tbl.setAttribute('style',"border-collapse:collapse")
    
    let thead = document.createElement('thead')
  // console.log(thead)
    let tbody = document.createElement('tbody')
  
    let hedRow = document.createElement('tr');
  // console.log(hedRow)
    let headerCell1 = document.createElement('th');
    let headerCell2 = document.createElement('th');
    let headerCell3 = document.createElement('th');
    
    headerCell1.innerText = 'Id';
    headerCell2.innerText = 'Name';
    headerCell3.innerText = 'Role';
    
    hedRow.appendChild(headerCell1);
    hedRow.appendChild(headerCell2);
    hedRow.appendChild(headerCell3);
    
    thead.appendChild(hedRow);
    thead.style.backgroundColor='blue';
    tbl.appendChild(thead);
    
    tblData.forEach(function (item,index) {
      let row = document.createElement('tr');
    
      let cell1= document.createElement('td');
      let cell2= document.createElement('td');
      let cell3= document.createElement('td');
    
      cell1.innerText = item.Id;
      cell2.innerText = item.Name;
      cell3.innerText = item.Role;
      
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      
      if(index % 2 === 0){
        row.style.backgroundColor='red';
      }
      else{
        row.style.backgroundColor ='blue';
      }
      tbody.appendChild(row);
      tbl.appendChild(tbody);
      tblContainer.appendChild(tbl)
    });
  }
  createTable();
  
  
  
  
  
  
  
  