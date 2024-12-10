// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', function () {
    const inputField = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const n = parseInt(inputField.value);

    // Validate input: Ensure it's a positive integer
    if (isNaN(n) || n <= 0) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a positive integer.</span>';
        return;
    }

    // 1. Calculate factorial using a while loop
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    // 2. Calculate the sum of the first n numbers using a do-while loop
    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);

    // 3. Calculate the average of the first n numbers using a for loop
    let total = 0;
    for (let k = 1; k <= n; k++) {
        total += k;
    }
    const average = total / n;

    // Display results
    resultDiv.innerHTML = `
        <p><strong>${n}th Factorial:</strong> ${factorial}</p>
        <p><strong>Sum of the first ${n} numbers:</strong> ${sum}</p>
        <p><strong>Average of the first ${n} numbers:</strong> ${average.toFixed(2)}</p>
    `;
});

// Event listener for the clear button
document.getElementById('clearButton').addEventListener('click', function () {
    // Clear input field and result display
    document.getElementById('numberInput').value = '';
    document.getElementById('result').innerHTML = '';
});
