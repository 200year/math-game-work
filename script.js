function generateProblem() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operators = ['+', '-', '*', '/'];
  var operator = operators[Math.floor(Math.random() * operators.length)];

  // Display the problem
  document.getElementById('num1').textContent = num1;
  document.getElementById('num2').textContent = num2;
  document.getElementById('operator').textContent = operator;

  // Clear the previous result
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';
}

function checkAnswer() {
  var num1 = parseInt(document.getElementById('num1').textContent);
  var num2 = parseInt(document.getElementById('num2').textContent);
  var operator = document.getElementById('operator').textContent;
  var answer = parseInt(document.getElementById('answer').value);
  var correctAnswer;

  // Calculate the correct answer
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = Math.round((num1 / num2) * 100) / 100; // Round to 2 decimal places
      break;
    default:
      correctAnswer = 0;
  }

  // Check if the answer is correct
  if (answer === correctAnswer) {
    document.getElementById('result').textContent = 'คำตอบถูกต้อง! ยินดีด้วย!';
    // Generate a new problem after a short delay
    setTimeout(generateProblem, 1000);
  } else {
    document.getElementById('result').textContent = 'คำตอบไม่ถูกต้อง ลองอีกครั้ง';
  }
}

// Generate the first problem when the page loads
generateProblem();
