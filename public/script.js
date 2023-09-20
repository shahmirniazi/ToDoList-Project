document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the "Add" button with the class "add-button"
    document.querySelector(".add-button").addEventListener("click", addTask);
 
    
  
    // Get references to DOM elements
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    
  
    function addTask() {
      if (inputBox.value === '') {
        alert("You must write something!");
      } else {
        // Create a new list item and add it to the list
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
  
        // Create a "delete" button and add it to the list item
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
  
        // Attach the list item to the list
        listContainer.appendChild(li);
  
        // Clear the input box
        inputBox.value = "";
      }
    }
  
    // Add event delegation to the list container
    listContainer.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    }, false);
  
    // Testing if the JavaScript file is working
  });

  