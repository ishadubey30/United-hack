// Getting Elements-//
// body
var body = document.getElementById("body");
// three buttons on top of page
var todoButton = document.getElementById("to-do-button");
var doingButton = document.getElementById("doing-button");
var doneButton = document.getElementById("done-button");
// Space for task cards on each page
var todoCardSpace = document.getElementById("todoCardSpace");
var doingCardSpace = document.getElementById("doingCardSpace");
var doneCardSpace = document.getElementById("doneCardSpace");

//Code to maintain horizonatal swiping //
// three sections of page
var sections = ["todo", "doing", "done"];
var currentSectionIndex = 0;

//hiding sections by default
hideAllSections();
showCurrentSection();

// create a simple instance
// by default, it only adds horizontal recognizers
var bodyListener = new Hammer(body);

bodyListener.on("swipeleft swiperight", function(ev) {
    if (ev.type === "swipeleft") {
        if (currentSectionIndex === 2) {
            return;
        }
        else {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        console.log("swipeleft", currentSectionIndex)
        }
    } else if (ev.type === "swiperight") {
        if (currentSectionIndex === 0) {
            return;
        }
        else {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        console.log("swiperight", currentSectionIndex)
        }
    }

    hideAllSections();
    showCurrentSection();
});

//Button events to change sections //
// Add click event listeners to the buttons
todoButton.addEventListener("click", function() {
    setCurrentSectionIndex(0);
    hideAllSections();
    showCurrentSection();
});

doingButton.addEventListener("click", function() {
    setCurrentSectionIndex(1);
    hideAllSections();
    showCurrentSection();
});

doneButton.addEventListener("click", function() {
    setCurrentSectionIndex(2);
    hideAllSections();
    showCurrentSection();
});

function hideAllSections() {
    sections.forEach(function(section) {
        document.getElementById(section).style.display = "none";
    });
}

function showCurrentSection() {
    document.getElementById(sections[currentSectionIndex]).style.display = "block";
}

function setCurrentSectionIndex(index) {
    currentSectionIndex = index;
}

// sample task from db
var task = {
    status: "todo",
    taskId: 1,
    title: "college work",
    description: "complete the assignment and submit it on time",
    date: "2020-10-10",
    priority: "red"        // high-red, medium-orange, low-yello
}

let data = task;

// Code for showing tasks from DB //
function TaskCard(data) {
 var res =`<div class="bg-dark-${data.priority} p-4 rounded-lg shadow mb-4">
 <h3 class="font-bold">${data.title}</h3>
 <p>${data.description}</p>
</div>
</div>`
}


 // opening the form
 const footer = document.querySelector('.footer')
 const taskButton = document.getElementById("add-task")

 // collaps add task by default
 footer.classList.remove('expanded');
 // Toggle on click
 const openForm = () => {
    footer.classList.toggle('expanded')
    footer.innerHTML = `<form id="adding-task" class="p-5">
    <div>
      <input type="text" class="w-full  text-center rounded-2xl px-2 text-2xl p-4 bg-logo-color text-white font-bold "
       placeholder="What do you need to do?" >
    </div>
    <div></div>
  </form>`
    
}

 taskButton.addEventListener('click' , openForm)