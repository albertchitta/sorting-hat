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
      <p class="lead">We are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardry. Click below to find where you belong!</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      <hr class="my-4">
    </div>
  `;

  renderToDom("#welcome", domString);
};

const init = () => {
  welcomeBanner();
};

init();
