const students = [];
const voldysArmy = [];
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// Global variable for knowing what page is currently active
let currentPage = "all";

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
      <p class="lead">The finest school of witchcraft and wizardy <strong>in the world</strong>. Click to see where you belong!</p>
      <p class="lead">
        <button id="startBtn" class="btn btn-primary btn-lg" href="#" role="button">Try on the Sorting Hat</button>
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

// Display the house filter buttons
const buttons = () => {
  const domString = `
    <button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true" id="all">All Students</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" id="slytherin">Slytherin</button>
  `;

  renderToDom("#buttonContainer", domString);
};

// Filters the students by house
const filterHouse = (array, house) => {
  return array.filter(student => student.house.toLowerCase() === house);
};

// Prints the filtered houses
const handleFilterButtons = (event) => {
  currentPage = event.target.id;
  if (event.target.id === "all" && event.target.type === "button") {
    studentCardBuilder(students);
  } else if (event.target.type === "button") {
    studentCardBuilder(filterHouse(students, event.target.id));
  }
};

// Sort student into a random house
const studentSort = (event) => {

  // Prevent browser from executing default action
  event.preventDefault();
  if (event.target.id === "sortBtn") {
    const studentName = document.querySelector("#name").value;

    if (studentName.length < 1) {
      printWarning();
    } else {
      clearWarning();
      buttons();
      randomHouse = houseSort();

      if (students.length === 0) {
        studentId = 0;
      } else {
        studentId = students.length;
      }
      
      let houseCrest = "";
      if(randomHouse === "Gryffindor") {
        houseCrest = "https://i.pinimg.com/originals/93/85/bf/9385bf3ca546d3c750363a78a68e0c70.jpg";
      } else if (randomHouse === "Hufflepuff") {
        houseCrest = "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507644096.jpg?c=2";
      } else if (randomHouse === "Ravenclaw") {
        houseCrest = "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88363/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507642983.jpg?c=2";
      } else {
        houseCrest = "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.jpg?c=2";
      }
  
      const newStudent = {
        name: studentName,
        house: randomHouse,
        id: studentId,
        crest: houseCrest
      }
  
      students.push(newStudent);
      sortByName(students);
      studentCardBuilder(students);
    }
  }
};

// Print warning message if a name was not entered in the form
const printWarning = () => {
  let domString = `<h6>Please type a name!</h6>`;
  renderToDom("#warning", domString);
}

// Clear warning message
const clearWarning = () => {
  let domString = `<h5></h5>`;
  renderToDom("#warning", domString);

  // Clear form after submitting
  document.getElementById("myForm").reset();
}

// Randomizes a house to a student in the array
const houseSort = () => {
  const house = houses[Math.floor(Math.random() * houses.length)];
  const elem = document.getElementById("studentCard");

  return house;
};

// Sorts the students by first name
const sortByName = (array) => {
  array.sort((a,b) => {
    let name1 = a.name.toLowerCase();
    let name2 = b.name.toLowerCase();

    if (name1 < name2) {    
      return -1;
    }
    if (name1 > name2) {    
      return 1;
    }

    return 0;
  });
};

// Expels a student to Voldy's Army
const studentExpel = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;

  if (currentPage !== "all" && targetType === "button") {   // Check if the houses have been filtered and the expel button was pressed
    const tempArray = students.filter(student => student.house.toLowerCase() === currentPage);    // Filter the houses again and assign it to a temporary array
    let i = 0;
    while (i < students.length) {
      if (students[i] === tempArray[targetId]) {    // Loop through the main array to compare the students in the filtered
        tempArray.splice(targetId, 1);    // Delete the student from the filtered aray
        const expelledStudent = students.splice(i, 1);    // Delete the student from the main array
        voldysArmy.push(expelledStudent[0]);    // Add the expelled student to Voldy's array
        studentCardBuilder(tempArray);    // Build the filtered array
        sortByName(voldysArmy);   // Sort cards by name
        deathEaterCardBuilder(voldysArmy);    // Build Voldy's array 
        break;    // Break out of the loop;
      }
      i++;
    };
  } else if (targetType === "button") {
    expelledStudent = students.splice(targetId, 1);
    voldysArmy.push(expelledStudent[0]);
    studentCardBuilder(students);
    sortByName(voldysArmy);
    deathEaterCardBuilder(voldysArmy);
  }
};

// Updates a student card
const updateStudent = (event) => {
  //create edit button
  //event listener for edit button
  //event handler for edit button
};

// Builds the Death Eater card
const deathEaterCardBuilder = (voldysArray) => {
  let domString = "";

  voldysArray.forEach((deathEater) => {
    deathEater.house = "Death Eater"
    domString += `
      <div id="Death_Eater" class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0030/6003/9729/products/il_fullxfull.1619712634_nn9z_452x.jpg?v=1556590059" alt="death eater mark">
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
      domString += `
      <div id="${student.house}" class="card" style="width: 18rem;">
        <img class="card-img-top" src="${student.crest}" alt="student house crest">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button id="${i}" type="button" class="btn btn-primary expel">Expel</button>
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
  document.querySelector("#buttonContainer").addEventListener("click", handleFilterButtons);
  document.querySelector("#cardContainer").addEventListener("click", studentExpel);
  // document.querySelector("#cardContainer").addEventListener("click", studentUpdate);
}

// Starts the app
const init = () => {
  welcomeBanner();
  buttonEvents();
};

init();
