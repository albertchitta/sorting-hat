const students = [];
const voldysArmy = [];

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
        <a id="startBtn" class="btn btn-primary btn-lg" href="#" role="button">Let's Start Sorting</a>
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
        <input id="name" class="form-control" type="text" placeholder="Harry Potter" required>
      </div>
      <button id="sortBtn" type="submit" class="btn btn-primary">Sort</button>
    </form>
  `;

  renderToDom("#form", domString);
  }
};

// Sort student into a random house
const studentSort = (event) => {
  // Prevent browser from executing default action
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
      id: studentId,
      crest: randomHouse
    }

    students.push(newStudent);

    studentCardBuilder(students);

    // Clear form after submitting
    document.getElementById("myForm").reset();
  }
};

// Randomizes a house to a student in the array
const houseSort = () => {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const house = houses[Math.floor(Math.random() * houses.length)];
  console.log(house);
  const elem = document.getElementById("studentCard");

  return house;
};

// Expels a student to Voldy's Army
const studentExpel = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;

  if (event.target.type === "button") {
    const expelledStudent = students.splice(targetId, 1);
    voldysArmy.push(expelledStudent[0]);

    studentCardBuilder(students);
    deathEaterCardBuilder(voldysArmy);
  }
};

// Builds the Death Eater card
deathEaterCardBuilder = (voldysArray) => {
  let domString = "";

  voldysArray.forEach((deathEater) => {
    domString += `
      <div id="voldCard" class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${deathEater.name}</h5>
          <p class="card-text">${deathEater.house}</p>
        </div>
      </div>
    `;
  });

  renderToDom("#voldyContainer", domString);
};

// Builds the student card
const studentCardBuilder = (studentsArray) => {
  let domString = "";

  studentsArray.forEach((student, i) => {
    if (student.house === "Gryffindor") {
      domString += `
      <div id="Gryffindor" class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://thenichollsworth.com/wp-content/uploads/2020/11/C0441055-AEE4-4C0D-8F43-A708DDEB6C3B-721x900.jpeg" alt="student house crest">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="${i}" type="button" class="btn btn-primary">Expel</button>
        </div>
      </div>
    `;
    } else if (student.house === "Hufflepuff") {
      domString += `
      <div id="Hufflepuff" class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="student house crest">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="${i}" type="button" class="btn btn-primary">Expel</button>
        </div>
      </div>
    `;
    } else if (student.house === "Ravenclaw") {
      domString += `
      <div id="Ravenclaw" class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="student house crest">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="${i}" type="button" class="btn btn-primary">Expel</button>
        </div>
      </div>
    `;
    } else {
      domString += `
      <div id="Slytherin" class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="student house crest">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="${i}" type="button" class="btn btn-primary">Expel</button>
        </div>
      </div>
    `;
    }
  });

  renderToDom("#cardContainer", domString);
};

// Handles the button events
const buttonEvents = () => {
  document.querySelector("#welcome").addEventListener("click", studentForm);
  document.querySelector("#form").addEventListener("click", studentSort);
  document.querySelector("#cardContainer").addEventListener("click", studentExpel);
}

// Starts the app
const init = () => {
  welcomeBanner();
  buttonEvents();
};

init();
