const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");



buttons.forEach((item) => {
  item.onclick = () => {

    // clear panel
    if (item.id == "clear") 
    {
      display.innerText = "";
    } 

    // delete no.
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }
    
    // operations
    else if (display.innerText != "" && item.id == "equal") {
      const result = eval(display.innerText);
      const threshold=1e6;

    //   for large no.
      if(Math.abs(result) >= threshold)
      {
        display.innerText=result.toExponential();
      }

    //   for small no.
      else{
        display.innerText=result;
      }      
    } 

    //empty panel
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Enter Number";
      setTimeout(() => (display.innerText = ""), 2000);
    }

    else {
      display.innerText += item.id;
    }
  };
});



const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
