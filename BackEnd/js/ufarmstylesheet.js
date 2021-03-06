/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mysidenav");
    if (x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }
}
var isNavOpen=false;
var sideNav=document.getElementById('mysidenav');
var navToggle=document.getElementById('navbartoggle');

navToggle.addEventListener('click',function(){
    if(isNavOpen){
        sideNav.style.display="none";
        isNavOpen=false;
    }else{
        sideNav.style.display="block";
        isNavOpen=true;
    }
});
// var $  = require( 'jquery' );
// var dt = require( 'datatables.net' )();
// $(document).ready(function() {
//     $('#example').DataTable( {
//         "scrollY":        "200px",
//         "scrollCollapse": true,
//         "paging":         false
//     } );
// } );