// Student Array
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
        <a id="sortBtn" class="btn btn-primary btn-lg" href="#" role="button">Find My House</a>
      </p>
      <hr class="my-4">
    </div>
  `;

  renderToDom("#welcome", domString);
};

// Print the student form
const studentForm = (event) => {
  if (event.target.id === "sortBtn") {
    const domString = `
    <form>
      <div class="form-group">
        <label>Enter your name</label>
        <input class="form-control" type="text" placeholder="Harry Potter">
      </div>
      <button type="submit" class="btn btn-primary">Sort</button>
    </form>
  `;

  renderToDom("#form", domString);
  }
};

// Handles the button events
const buttonEvents = () => {
  document.querySelector("#welcome").addEventListener("click", studentForm);
}

// Starts the app
const init = () => {
  welcomeBanner();
  buttonEvents();
};

init();
