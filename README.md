# Sorting Hat  [![Netlify Status](https://api.netlify.com/api/v1/badges/c9892978-61ce-43b2-86f3-0dabf5ef8b14/deploy-status)](https://app.netlify.com/sites/awc-sorting-hat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

In The Sorting Hat project, the users will enter their name and will be sorted into a random house. The user can filter the students by house and can even expel students. Once students are expelled, they will be removed from the First Years and into Voldemort's Army.
This project is focused on creating an array of objects and printing them to the DOM. The project utilizes loops, event listeners, and filter buttons all built within functions.

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
https://www.loom.com/share/c8d85532094a4b48b69199ee2a240804

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-sorting-hat.netlify.app/)
- [Wireframes](https://docs.google.com/presentation/d/1gv22M3hHxgfFMewJT2STMWWveQ6aVWaZ-nXvqgQczH8/edit?usp=sharing)
- [Project Board](https://github.com/albertchitta/sorting-hat/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
This function deletes a pet from the array and prints it to the DOM. It will also keep you on the current filter selection.
```
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
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![Welcome](Sorting_Hat_Welcome.PNG)
![Overview](Sorting_Hat_Overview.PNG)
![Filter](Sorting_Hat_Filter.PNG)
## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
