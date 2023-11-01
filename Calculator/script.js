let string = "    ";
let buttons = document.querySelectorAll('.button');
let memoryValue = 0;

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'M+') {
      // Add the current value to the memoryValue
      const currentValue = parseFloat(string); 
      memoryValue += currentValue;
      console.log('Memory Value:', memoryValue);
    } else if (e.target.innerHTML === 'M-') {
      // Subtract the current value from the memoryValue
      const currentValue = parseFloat(string); 
      memoryValue -= currentValue;
      console.log('Memory Value:', memoryValue);
    }
    else{ 
     console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
}) 


document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const colorSchemeSelect = document.getElementById("color-scheme");
    const classicButton = document.getElementById("classic-btn");
    const modernButton = document.getElementById("modern-btn");
    const techButton = document.getElementById("tech-btn");
    const retroButton = document.getElementById("retro-btn");
    const playfulButton = document.getElementById("playful-btn");
    const accessibleButton = document.getElementById("accessible-btn");
    const container = document.querySelector(".container");
  
    // Add event listeners to color scheme buttons
    classicButton.addEventListener("click", () => setTheme("classic"));
    modernButton.addEventListener("click", () => setTheme("modern"));
    techButton.addEventListener("click", () => setTheme("tech"));
    retroButton.addEventListener("click", () => setTheme("retro"));
    playfulButton.addEventListener("click", () => setTheme("playful"));
    accessibleButton.addEventListener("click", () => setTheme("accessible"));
  
    // Function to set the color scheme
    function setTheme(theme) {
      container.className = `container color-scheme-${theme}`;
    }
  
    // Add event listener to the color scheme select
    colorSchemeSelect.addEventListener("change", (event) => {
      setTheme(event.target.value);
    });
  });
  