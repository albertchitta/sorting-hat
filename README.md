# Sorting Hat  [![Netlify Status](https://api.netlify.com/api/v1/badges/c9892978-61ce-43b2-86f3-0dabf5ef8b14/deploy-status)](https://app.netlify.com/sites/awc-sorting-hat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

The Sorting Hat project is focused on creating an array of objects and printing them to the DOM. The project utilizes loops, event listeners, and filter buttons all built within functions.

[View App](https://awc-sorting-hat.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/sorting-hat.git
$ cd sorting-hat
```
## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a professor who wants to sort students into a house based on their beliefs.
- They want to be able to enter a student's name and have them sorted into a house. 
- They also want to be able to filter through each house and be able to expel the students if they must.
- The problem this app solves is it filters students to make it easy navigating through, potentially, a large number of students.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- The DOM will populate a welcome message, followed by a form to enter the student's name.
- The DOM will then populate with filter buttons on top and all of the students in the array.
- Filter Buttons: There are five buttons (Show All, Gryffindor, Hufflepuff, Ravenclaw, and Slytherin) that will filter each type of house.
- House Colors: The color of each studnet's card changes depending on the type of house.
- Expel Button: An expel button is used to remove a student from the student array and into Voldemort's array.

## Video Walkthrough of Pet Adoption <!-- A loom link is sufficient -->
<!-- https://www.loom.com/share/ba38ea11daa94efdaae1e5a36b8e4508 -->

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-sorting-hat.netlify.app/)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
<!-- This function deletes a pet from the array and prints it to the DOM. It will also keep you on the current filter selection.
```
// Deletes the pet card
const deletePet = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;

  if (currentPage !== "all" && targetType === "button") {   // Check if the pets have been filtered and the delete button was pressed
    const tempArray = pets.filter(pet => pet.type === currentPage);   // Filter the pets again and assign it to a temporary array
    for (let i = 0; i < pets.length; i++) {   
      if (pets[i] === tempArray[targetId]) {    // Loop through the main array to find the pet in the filtered array
        tempArray.splice(targetId, 1);    // Delete the pet from the filtered array
        pets.splice(i, 1);    // Delete the pet from the main array
        petBuilder(tempArray);    // Rebuild the filtered page
        break;    // Break out of the loop
      }
    }
  } else if (targetType === "button") {   // Check if the pets were not filtered and the delete button was pressed
    pets.splice(targetId, 1);   // Delete the pet from the main array
    petBuilder(pets);   // Rebuild the main page
  }
};
``` -->

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<!-- ![Show All](Pet_Adoption_Show_All.PNG)
![Cats](Pet_Adoption_Cats.PNG)
![Dogs](Pet_Adoption_Dogs.PNG)
![Dinos](Pet_Adoption_Dinos.PNG) -->

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
