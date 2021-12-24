// initial count set to 0
let count = 0;

// we will select all buttons instead of having to create multiple
// add event listeners with query selectorall

const btns = document.querySelectorAll(".btn");
// linking to value on index, we need to use # because
//value is an id and not a class
const value = document.querySelector("#value");

// The forEach() method executes a provided function once
// for each array element.
//                  the btn paramater will allow us to use all of the buttons
btns.forEach(function (btn) {
  // when button is clicked, function will invoke
                        // the event will check which button is clicked
  btn.addEventListener("click", function (e) {
      // setting variable, so that when event function is passed, it will search for the associated classList
      // such as 'decrease' below will link up with the index.html class="btn decrease"
      const styles = e.currentTarget.classList;
      if (styles.contains('decrease')) {
          // negative counter
        count--;
      } else if (styles.contains('increase')) {
          // positive counter
          count++;
      } else {
          count = 0;
      }
      // below sets counter to be different colours whether neautral, positive or negative.
      if (count > 0) {
          value.style.color= 'green';
      } 
      if (count < 0 ) {
          value.style.color = 'red';
      }
      if (count === 0 ) {
          value.style.color = 'black';
      }
      // replaces the number with the current number of clicks 
      value.textContent = count;
  });
});
