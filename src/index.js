// document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  // add event listener for the submit event
  form.addEventListener("submit", function (event) {
    // always do this!
    const newTask = event.target.newTaskDescription.value
    event.preventDefault()
  
    // in the callback, get data from the form (look in the input fields)
    
    
  
    
  
    console.log(newTask)
    let task = document.getElementById("tasks")
    let li = document.createElement('li')  
     li.innerHTML = newTask
    //  <button = "remove()">X</button>;
    

    task.appendChild(li)
    // const groupOfLi = document.querySelectorAll('ul#tasks > li');
    
    // if (groupOfLi.length > 0){
    //   deleteButton = document.createElement("input").setAttribute("type", "button").id = "delete";
    // // slap on the dom
    // task.addEventListener("click", (event) => {
    //   if (event.target.nodeName === "BUTTON") {
    //     task.deleteTask(event.target.dataset.description);
        
    //   }
    // });

    
  }
);

// get the form information