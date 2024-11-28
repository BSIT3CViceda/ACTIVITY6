function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      document.getElementById("result").textContent = `Result: ${num1 + num2}`;
    } else {
      document.getElementById("result").textContent = "Please enter valid numbers!";
    }
  }

  function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark");
  }