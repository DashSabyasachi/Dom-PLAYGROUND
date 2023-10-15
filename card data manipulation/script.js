// Function to create a data card
function createDataCard(data) {
    const card = document.createElement('div');
    card.className = 'data-card';
    card.innerHTML = `
      <span>${data}</span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
  
    // Edit data when the "Edit" button is clicked
    const editButton = card.querySelector('.edit');
    editButton.addEventListener('click', () => {
      const newData = prompt('Edit the data:', data);
      if (newData !== null) {
        card.querySelector('span').textContent = newData;
      }
    });
  
    // Delete data when the "Delete" button is clicked
    const deleteButton = card.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
      card.remove();
    });
    return card;
  }
  
  // Add data to the list
  const addDataButton = document.getElementById('addData');
  addDataButton.addEventListener('click', () => {
   
    const dataInput = document.getElementById('dataInput');
    const data = dataInput.value.trim();
  
    if (data !== '') {
      const dataList = document.getElementById('dataList');
      dataList.appendChild(createDataCard(data));
      dataInput.value = '';
    }
  });
  