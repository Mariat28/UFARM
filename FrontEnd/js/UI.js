// const showpoultrydiv = () => {
//     let poultrydiv = document.getElementById("poultry").innerHTML;
//     document.getElementById("collections").innerHTML = poultrydiv;
//     poultrydiv.style.display = "block";

// }
// const showdairydiv = () => {
//     let dairydiv = document.getElementById("dairydiv").innerHTML;
//     document.getElementById("collections").innerHTML = dairydiv;
//     //dairydiv.style.display="block";

// }
// const showhort = () => {
//     let hortidiv = document.getElementById("horticulture").innerHTML;
//     document.getElementById("collections").innerHTML = hortidiv;
//     hortidiv.style.display = "block"
// }
var activepilllink = document.querySelectorAll(".pill-toggle.active")[0];
var activepilldiv = document.querySelectorAll(".pill-div.active")[0];
var pill_links = document.getElementsByClassName("pill-toggle");
var pill_divs = document.getElementsByClassName("pill-div");

for (let i = 0; i < pill_links.length; i++) {
    pill_links[i].addEventListener("click", function (e) {
        e.preventDefault();
        activepilllink.classList.remove("text-success");
        activepilllink.classList.remove("active");
        activepilllink.classList.add("text-secondary");
        activepilllink = pill_links[i];
        pill_links[i].classList.add("text-success");
        var new_div = document.querySelector(pill_links[i].dataset.target);
        if (new_div != activepilldiv) {
            activepilldiv.hidden = true;
            new_div.removeAttribute("hidden");
            activepilldiv = new_div;
        }
    })
}
// for (link of pill_links) {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         console.log(link);

//         link.classList.add("active");
//         activepilllink = link;
//     })
// }
