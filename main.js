const students = [];
const voldysArmy = [];
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

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
      <p class="lead">The finest school of witchcraft and wizardy in the world. Click to see where you belong!</p>
      <p class="lead">
        <a id="startBtn" class="btn btn-primary btn-lg" href="#" role="button">Try on the Sorting Hat</a>
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
  // Prevent browser from executing default action
  event.preventDefault();
  if (event.target.id === "sortBtn") {
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
      name: document.querySelector("#name").value,
      house: randomHouse,
      id: studentId,
      crest: houseCrest
    }

    checkName(newStudent);
    sortByName(students);
    filterByHouse();
    studentCardBuilder(students);
  }
};

// Check to see if a name was entered in the form
const checkName = (student) => {
  if (student.name.length < 1) {
    let domString = `<h6>Please type a name!</h6>`;
    renderToDom("#warning", domString);
  } else {
    students.push(student);
    domString = `<h5></h5>`;
    renderToDom("#warning", domString);
  }

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

// Sorts the students by house
const filterByHouse = () => {
  students.sort((a,b) => {
    let house1 = a.house.toLowerCase();
    let house2 = b.house.toLowerCase();

    if (house1 < house2) {
      return -1;
    }
    if (house1 > house2) {
      return 1;
    }

    return 0;
  });
};

// Expels a student to Voldy's Army
const studentExpel = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;

  if (event.target.type === "button") {
    const expelledStudent = students.splice(targetId, 1);
    voldysArmy.push(expelledStudent[0]);

    studentCardBuilder(students);
    nameInOrder(voldysArmy);
    deathEaterCardBuilder(voldysArmy);
  }
};

// Builds the Death Eater card
deathEaterCardBuilder = (voldysArray) => {
  let domString = "";

  voldysArray.forEach((deathEater) => {
    deathEater.house = "Death_Eater"
    domString += `
      <div id="${deathEater.house}" class="card" style="width: 18rem;">
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
          <button id="${i}" type="button" class="btn btn-primary">Expel</button>
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
  document.querySelector("#cardContainer").addEventListener("click", studentExpel);
}

// Starts the app
const init = () => {
  welcomeBanner();
  buttonEvents();
};

init();
