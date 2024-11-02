  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Message sent successfully!");
  });
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector('.navlist');

// Adding scroll event to window
  window.addEventListener("scroll", function() {
     // Toggle the 'sticky' class based on the scroll position
    header.classList.toggle("sticky", this.scrollY > 120);
    
    // If the page is scrolled, remove the active class from navlist and toggle class from menu
    if (this.scrollY > 120) {
        menu.classList.remove('bx-x'); // Ensure menu icon is in the correct state when scrolling
        navlist.classList.remove('active');
    }
});

// Menu icon click event
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle the icon for the menu
    navlist.classList.toggle('active'); // Toggle the visibility of the navlist
};
  
