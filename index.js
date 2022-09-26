const input = document.querySelector(".text")
const addbtn = document.querySelector(".add")
const taskList = document.querySelector(".taskList")
const num = document.querySelector("#num")
const plural = document.querySelector("#s")
const clearbtn = document.querySelector("#clear")

var tasks = []

if(localStorage.getItem("tasks") == null){
    let data = JSON.stringify(tasks)
    localStorage.setItem("tasks", data)
}else{
    let data = JSON.parse(localStorage.getItem("tasks"))
    tasks = data
    for(let i = 0; i < tasks.length; i++){
        const index = i
        const newTask = document.createElement("li")
        const task = document.createElement("input")
        task.setAttribute("readonly", "readonly")
        task.value = tasks[i]
        newTask.appendChild(task)
        const editCont = document.createElement("div")
        editCont.setAttribute("class", "editCont")
        const editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.setAttribute("id", "edit")
        editCont.appendChild(editbtn)
        const delbtn = document.createElement("button")
        delbtn.innerText = "Delete"
        delbtn.setAttribute("onclick", "del(this," + index + ")")
        editCont.appendChild(delbtn)
        newTask.appendChild(editCont)
        taskList.appendChild(newTask)

        editbtn.addEventListener("click", function(e){
            if(editbtn.innerText == "Edit"){
                editbtn.innerText = "Save"
                task.removeAttribute("readonly")
                task.focus()
            }else if(editbtn.innerText == "Save"){
                editbtn.innerText = "Edit"
                task.setAttribute("readonly", "readonly")
                tasks[index] = task.value
                let data = JSON.stringify(tasks)
                localStorage.setItem("tasks", data)
            }
        })

        if(tasks !== "[]"){
            num.innerText = tasks.length
        }
        if(num.innerText != "" && num.innerText !== "0" && num.innerText !== "1"){
            plural.innerText = "s"
        }else{
            plural.innerText = ""
        }
    }
}

const del = function(e, currentIndex){
    let word = ("Delete Task?")
    if(confirm(word) == true){
        e.parentElement.parentElement.remove()
        tasks.splice(currentIndex, 1)
    if(tasks !== "[]"){
        num.innerText = tasks.length
    }else{
        num.innerText = "no"
    }
    if(num.innerText != "" && num.innerText !== "0" && num.innerText !== "1" && num.innerText !== "no"){
        plural.innerText = "s"
    }else{
        plural.innerText = ""
    }
    let data = JSON.stringify(tasks)
    localStorage.setItem("tasks", data)
    }
}

clearbtn.addEventListener("click", function(e){
    e.preventDefault()
    let clearAll = "Do you wish to clear all tasks?"
    if(confirm(clearAll) == true){
        taskList.innerHTML = ""
        tasks = []
        if(tasks !== "[]"){
            num.innerText = tasks.length
        }
        if(num.innerText != "" && num.innerText !== "0" && num.innerText !== "1"){
            plural.innerText = "s"
        }else{
            plural.innerText = ""
        }
        let data = JSON.stringify(tasks)
        localStorage.setItem("tasks", data)
    }
})

addbtn.addEventListener("click", function(e, index){
    e.preventDefault()
    if(input.value != ""){
        let ind = (tasks.length-1)
        const newTask = document.createElement("li")
        const task = document.createElement("input")
        task.setAttribute("readonly", "readonly")
        task.value = input.value
        tasks.push(input.value)
        newTask.appendChild(task)
        const editCont = document.createElement("div")
        editCont.setAttribute("class", "editCont")
        const editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.setAttribute("id", "edit")
        editCont.appendChild(editbtn)
        const delbtn = document.createElement("button")
        delbtn.innerText = "Delete"
        delbtn.setAttribute("onclick", "del(this," + ind + ")")
        editCont.appendChild(delbtn)
        newTask.appendChild(editCont)
        taskList.appendChild(newTask)

        editbtn.addEventListener("click", function(e){
            if(editbtn.innerText == "Edit"){
                editbtn.innerText = "Save"
                task.removeAttribute("readonly")
                task.focus()
            }else if(editbtn.innerText == "Save"){
                editbtn.innerText = "Edit"
                task.setAttribute("readonly", "readonly")
                tasks[index] = task.value
                let data = JSON.stringify(tasks)
                localStorage.setItem("tasks", data)
            }
        })

        if(tasks !== "[]"){
            num.innerText = tasks.length
        }
        if(num.innerText != "" && num.innerText !== "0" && num.innerText !== "1"){
            plural.innerText = "s"
        }else{
            plural.innerText = ""
        }
        
        let data = JSON.stringify(tasks)
        localStorage.setItem("tasks", data)
        input.value = "";
    }
})