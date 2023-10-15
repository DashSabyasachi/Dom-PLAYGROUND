// variables

let input = document.getElementById('input-task')
let addTask = document.getElementById('add-task')
let taskContainer = document.getElementById('task-container')

let editTask = document.getElementsByClassName('.editTask')
let deleteButton = document.getElementsByClassName('.deleteTask')
let taskArray = []
let data


// EVENT LISTENER FOR ADD-TASK ENTER
input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (input.value == "")
            alert('Please Enter a task')
        else
            todo()
    }
})


// EVENT LISTENER FOR ADD-TASK CLICK
addTask.addEventListener('click', todo)
function todo() {

    if (input.value == "") {
        alert("Enter a task")
    }
    else {
        data = {
            id: Math.trunc(Math.random() * 1000),
            taskName: input.value
        }
        taskArray.unshift(data)
        console.log(taskArray);

        input.value = ""
        print()

    }
}


// PRINT FUNCTION
function print() {
    if (taskArray.length == 0) {
        alert("Enter a task")
    }

    else {

        let str = ''
        taskArray.map(function (value) {

            return str += `<div class="task">
                <li class="taskList">${value.taskName}</li>
                <span class="id">${value.id}</span>
                <button class="editTask"><i class="fa-solid fa-pen-to-square" onclick="edit(this)"></i></button>
                <button class="deleteTask"><i class="fa-solid fa-trash-can" onclick="delet('${value.id}','${value.taskName}')"></i></button>
            </div>`
        })
        taskContainer.innerHTML = str
    }
}

//EVENT LISTENER FUNCTION FOR EDIT

function edit(a) {
    let task = a.parentElement.parentElement.querySelector('.taskList')
    let id = a.parentElement.parentElement.querySelector('.id')
    let taskEarly = task.innerText
    task.toggleAttribute('contentEditable', true)
    task.style.backgroundColor = 'white'
    task.style.color = 'black'
    a.addEventListener('click', () => {
        task.toggleAttribute('contentEditable', true)
        task.style.backgroundColor = '#212121'
        task.style.color = 'white'
        // console.log('tasknew: ',task.innerText);
        // console.log(id.innerText);
        // console.log('taskearly: ',taskEarly);

        taskArray.forEach((value) => {
            if (value.id == id.innerText && value.taskName == taskEarly) {
                value.taskName = task.innerText
            }
        })
        console.log(taskArray)
        print()
    })
}

//EVENT LISTENER FUNCTION FOR DELETE

function delet(a, b) {
    console.log(a, b)
    let newArray = taskArray.filter((value) => {
        if (value.id != a || value.taskName != b)
            return value
    })
    console.log(newArray)
    taskArray = newArray
    print()
}



//-----------------------------------------------------------------------------------------------------------------------------------------------

//EVENT LISTENERS FOR EDIT AND DELETE 
// window.addEventListener('click', (e) => {
//     if (e.target.classList.contains('deleteTask')) {
//         let text = e.target.parentElement.querySelector(".taskList").innerHTML
//         let newArray = taskArray.filter((value) => {
//             return value.taskName != text
//         })
//         console.log(newArray)
//         taskArray = newArray
//         print()
//     }

// })
// window.addEventListener('click', (e) => {
//     if (e.target.classList.contains('editTask')) {
//         let text1 = e.target.parentElement.querySelector(".taskList").innerHTML
//         let textelement = e.target.parentElement.querySelector(".taskList")
//         let id = e.target.parentElement.querySelector(".id").innerHTML
//         textelement.toggleAttribute('contentEditable', true)
//         textelement.style.backgroundColor = 'white'
//         textelement.style.color = 'black'
//         e.target.innerHTML = `<i class="fa-solid fa-check"></i>`

//         // console.log(id)

//         window.addEventListener('click', (e) => {
//             if (e.target.classList.contains('editTask')) {
//                 textelement.toggleAttribute('contentEditable', false)
//                 textelement.style.backgroundColor = 'wheat'
//                 textelement.style.color = 'black'
//                 let text2 = e.target.parentElement.querySelector(".taskList").innerHTML

//                 taskArray.forEach((value) => {
//                     if (value.taskName === text1 && value.id == id) {
//                         value.taskName = text2
//                     }
//                 })
//                 console.log(taskArray)
//                 e.target.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
//                 print()
//             }
//         })
//     }
// })




