function displayMultiplicationTable(number) {
  console.log(`Multiplication Table of ${number}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

const userNumber = process.argv[2];

if (userNumber) {
  const number = parseInt(userNumber);

  if (!isNaN(number)) {
    displayMultiplicationTable(number);
  } else {
    console.log('Invalid input. Please provide a valid number.');
  }
} else {
  console.log('Please provide a number as a command line argument.');
}





