// Student Array
// {
//   name:
//   house:
// }
const students = [];

// Render to DOM
const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Print the welcome banner
const welcomeBanner = () => {
  const domString = `
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Hogwarts!</h1>
      <p class="lead">We are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardry. Click below to see where you belong!</p>
      <p class="lead">
        <a id="startBtn" class="btn btn-primary btn-lg" href="#" role="button">Find My House</a>
      </p>
      <hr class="my-4">
    </div>
  `;

  renderToDom("#welcome", domString);
};

// Print the student form
const studentForm = (event) => {
  if (event.target.id === "startBtn") {
    const domString = `
    <form id="myForm">
      <div class="form-group">
        <label>Enter your name</label>
        <input id="name" class="form-control" type="text" placeholder="Harry Potter">
      </div>
      <button id="sortBtn" type="submit" class="btn btn-primary">Sort</button>
    </form>
  `;

  renderToDom("#form", domString);
  }
};

// Sort student into a random house
const studentSort = (event) => {
  event.preventDefault();
  if (event.target.id === "sortBtn") {
    randomHouse = houseSort();

    if (students.length === 0) {
      studentId = 0;
    } else {
      studentId = students.length;
    }

    const newStudent = {
      name: document.querySelector("#name").value,
      house: randomHouse,
      id: studentId
    }

    students.push(newStudent);
    console.log(students);

    studentCardBuilder(students);

    // Clear form after submitting
    document.getElementById("myForm").reset();
  }
};

// Randomizes a house to a student in the array
const houseSort = () => {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const house = houses[Math.floor(Math.random() * houses.length)];

  return house;
};

// Builds the student card
const studentCardBuilder = (studentsArray) => {
  let domString = "";

  studentsArray.forEach((student) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="expelBtn" type="submit" class="btn btn-primary">Expel</button>
        </div>
      </div>
    `;
  });

  renderToDom("#cardContainer", domString);
};

// Handles the button events
const buttonEvents = () => {
  document.querySelector("#welcome").addEventListener("click", studentForm);
  document.querySelector("#form").addEventListener("click", studentSort);
}

// Starts the app
const init = () => {
  welcomeBanner();
  buttonEvents();
};

init();
