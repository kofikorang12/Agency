
var ny = document.getElementById("ny");


// ny.addEventListener("mouseover", function () {
//     ny.style.fontSize = "20px";
//     ny.style.color = "#5a5a5a";
// })

// ny.addEventListener("mouseout", function () {
//     ny.style.fontSize = "16px";
//     ny.style.color = "#ffff";
// });


//Get all the column elements
var columns = document.getElementsByClassName("columns");

// Add event listener for mousemove on each column
Array.from(columns).forEach(function (column) {
    column.addEventListener("mousemove", function () {

        // Set the background color of the column
        column.style.background = "#FCE9F1"; //  C4B0FF
        column.style.fontStyle = "oblique";
        column.style.fontSize = "1.2rem"
    });

});
Array.from(columns).forEach(function (column) {
    column.addEventListener("mouseout", function () {

        // Set the background color of the column
        column.style.background = "white";
        column.style.fontStyle = "normal";
        column.style.fontSize = "initial";
    });

});




















// var columns = document.getElementsByClassName("columns");
// for (var i = 0; i < columns.length; i++) {
//     columns.addEventListener("mouseover", function () {
//         columns.style.background = "red";
//     });
// }
