let rows = `
<tr> <th>Id</th> <th>Name</th> <th>Class</th> </tr>
<tr> <td>100</td> <td>Mukti</td> <td>10th</td> </tr>
<tr> <td>101</td> <td>Suman</td> <td>12th</td> </tr>
<tr> <td>102</td> <td>Subrat</td> <td>11th</td> </tr>
`;
let table = document.createElement('table')
document.getElementById('container').appendChild(table).setAttribute('class','tbldata')
document.querySelector('.tbldata').insertAdjacentHTML('beforeend',rows)