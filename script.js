let number = parseInt(prompt("Enter a number between 0 and 1 million:"));


if (number >= 0 && number <= 1000000) {
    
    let totalSum = 0;
    for (let i = 1; i <= number; i++) {
        totalSum += i;
    }
    
    
    console.log(`Sum of numbers up to ${number} is ${totalSum}`);
} else {
    
    console.log("Invalid number");
}