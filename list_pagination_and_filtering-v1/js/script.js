/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/* Global Variables */

const studentItem = document.querySelectorAll('.student-item'); // Get reference to all student items
const studentsPerPage = 10; // Max number of students per pagination page

/* Function to show page based on number of students while hiding the other pages */

const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage; // Reference to the start index of the list items to be shown on a page
   const endIndex = page * studentsPerPage;  // Reference to the end index of the list items to be shown on a page
   
   for (let i = 0; i < list.length; i++) {   // Loop through the list parameter which represents the list of students
      if (i  >= startIndex && i < endIndex) {  // If the index is greater than or equal to the start index and less than the end index, show it.  If not hide it
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/* Function to create the pagination buttons */

const appendPageLinks = (list) => {
   let div = document.createElement('div');  // Create the div element that will include the pagination elements
   div.classList.add('pagination');  // Add the .pagination CSS class to the div
   let ul = document.createElement('ul');  // Create a ul element that will go in the div
   div.appendChild(ul);   // Append the ul element to the div that we created
   const page = document.querySelector('.page');  // Get a reference to the element with the class name of .page
   page.appendChild(div);  // Append the div that we created to the page element
   let totalPages = Math.ceil(list.length / studentsPerPage) + 1;  // Figure out how many pages are needed.  Include + 1 to add additional page for numbers like 54
   
   for (let i = 1; i < totalPages; i++) {  // Loop through to total pages
      let listItem = document.createElement('li');  // Each time through the loop create an LI element
      let link = document.createElement('a');  // Each time through the loop create an anchor element
      link.setAttribute('href', '#');  // Each time through the loop set the attribute of the anchor element to #
      ul.appendChild(listItem);  //  Append the LI element to the ul element that was created above
      listItem.appendChild(link);  //  Append the anchor element to the LI element
      link.textContent = i;  // Set the textContent of the pagination to match the number from the loop
      link.addEventListener('click', (e) => {  // Create a click event for each anchor element
         let links = document.querySelectorAll('a');  // Select all the anchor links 
         for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');  // Remmove the .active class from all of the pagination links
            
         }
         e.preventDefault();  
         e.target.classList.add('active');  // Add the .active class to the pagination button that was clicked
         showPage(studentItem, i);  // Call the showPage function with two parameters.  The reference to all of the students, and the index of the specific page we want to show
      })
   }
}
appendPageLinks(studentItem);  // Call the appendPageLinks function to show the pagination buttons
showPage(studentItem, 1);  // Call the showPage function with the full list of students and page 1 showing by default on page load