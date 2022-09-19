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
        const newTask = document.createElement("li")
        const task = document.createElement("p")
        task.innerText = tasks[i]
        newTask.appendChild(task)
        const delbtn = document.createElement("button")
        delbtn.innerText = "Delete"
        delbtn.setAttribute("onclick", "del(this,"+ (tasks.length-1) +")")
        newTask.appendChild(delbtn)
        taskList.appendChild(newTask) 
        num.innerText = tasks.length
        if(num.innerText != "" && num.innerText !== "1"){
            plural.innerText = "s"
        } 
    }
}

const del = function(e, currentIndex){
    let word = ("Delete Task?")
    if(confirm(word) == true){
        e.parentElement.remove()
    tasks.splice(currentIndex, 1)
    num.innerText = tasks.length
        if(num.innerText != "" && num.innerText !== "0" && num.innerText !== "1"){
            plural.innerText = "s"
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
        num.innerText = tasks.length
        if(num.innerText != "" && num.innerText !== "1"){
            plural.innerText = "s"
        }
        let data = JSON.stringify(tasks)
        localStorage.setItem("tasks", data)
    }
})

addbtn.addEventListener("click", function(e){
    e.preventDefault()
    if(input.value != ""){
        const newTask = document.createElement("li")
        const task = document.createElement("P")
        task.innerText = input.value
        newTask.appendChild(task)
        const delbtn = document.createElement("button")
        delbtn.innerText = "Delete"
        delbtn.setAttribute("onclick", "del(this,"+ (tasks.length-1) +")")
        newTask.appendChild(delbtn)
        tasks.push(input.value)
        taskList.appendChild(newTask)
        num.innerText = tasks.length
        if(num.innerText != "" && num.innerText !== "1"){
            plural.innerText = "s"
        }
        
        let data = JSON.stringify(tasks)
        localStorage.setItem("tasks", data)
        input.value = "";
    }
})