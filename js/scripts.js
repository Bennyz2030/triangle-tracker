$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $("span#result").text("Not a Triangle")
    } else if (side1 === side2 && side2 === side3) {
      $("span#result").text("Equilateral")
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
      $("span#result").text("Isosceles")
    } else if (side1 !== side2 || side2!== side3 || side3 !== side1) {
      $("span#result").text("Scalene")      
    }
  });
});