/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const navList = document.querySelector('#navbar__list');

// all sections 
const sections = document.getElementsByTagName("section")
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

// create a brand new <span> element
for (let i = 1; i <= sections.length; i++) {
    // creat li and a 
    let li = document.createElement('li');
    let ancher = document.createElement('a');
    // set the text of the ancher with section number 
    ancher.innerHTML = `section${i}`
    // add class to the a 
    ancher.classList.add("menu__link", `section${i}`)
    // set href attribute
    ancher.setAttribute("href", `#section${i}`);

    // put a into li 
    li.appendChild(ancher)
    // put li into ul --> navList
    navList.appendChild(li);
}


// add the <span> element as the last child element of the main heading



// Add class 'active' to section when near top of viewport



function activate(num) {
    // store the sections on constants
    let theSection = document.getElementById(`section${num}`);

    // add active to the menu-link
    let theLink = document.querySelector(`.section${num}`);

    // detrmin the Y offset of the section and want it to active when it apperd with 200 px 
    let sectionYOffset = theSection.getBoundingClientRect().y - 200;
    // to set it un active while it passes 
    let height = theSection.getBoundingClientRect().height;

    // if it has the class active 
    let isActive = theSection.classList.contains("active");

    if (sectionYOffset < 0 && sectionYOffset + height > 0) {
        // to not added it many times
        if (!isActive) {
            theSection.classList.add("active")
            //add active class to menu link
            theLink.classList.add("active")
        } else {
            return;
        }

    } else {
        theSection.classList.remove("active")
        //add active class to menu link
        theLink.classList.remove("active")
    }
}

// for each section of the page 
for (let i = 1; i <= sections.length; i++) {
    // we need to call the function on scrolling 
    document.addEventListener('scroll', function() {
        // excute the same function for all sections
        activate(i)
    });
}


// Scroll to anchor ID using scrollTO event

// let's save the anchers in to variable  

let menuLinks = document.getElementsByClassName("menu__link")

// make function that scroll to the section with id
function scrollToId(ID) {
    //define the section that we are going to 
    let theSection = document.getElementById(ID);
    // get the Y Offset of that section
    let sectionYOffset = theSection.getBoundingClientRect().y;
    // sum of the section Y offset to window Y Offset will get back the position of the section
    let windowYOffset = window.pageYOffset;
    // add 50 px to make it a little more under the nav bar 
    let sectionLocation = sectionYOffset + windowYOffset - 50

    //let's scroll to the section Location smooth with scrollTo();
    window.scrollTo(({
        top: sectionLocation,
        behavior: 'smooth',

    }))
}
//at first lets make sure the ancher has no events
// menuLinks is not an array but 'for of' works for HTML collection
for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", function(event) {
        event.preventDefault()
        // it will send the ID of the section to the function
        scrollToId(menuLink.textContent || menuLink.getAttribute("href").slice(1))
    })
}


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active