document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  const submit = document.querySelector("#submit");
  submit.addEventListener('click', submitForm)
  function submitForm(e){
    e.preventDefault();
    const newTask = document.getElementById("new-task-description").value;
    const list = document.getElementById("list-item");
    list.textContent += newTask;
  }   

});
