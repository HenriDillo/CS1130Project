const payrollData = [];
let actionType;

document.getElementById('addEmployeeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    addEmployee();
});

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value.trim();
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (!employeeName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const employee = { employeeName, daysWorked, dailyRate, deductionAmount };
    payrollData.push(employee);

    updateTable();
    clearInputFields();
}

function updateTable() {
    const tableBody = document.getElementById('payrollBody');
    tableBody.innerHTML = '';

    payrollData.forEach((employee, index) => {
        const grossPay = employee.daysWorked * employee.dailyRate;
        const netPay = grossPay - employee.deductionAmount;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.employeeName}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${grossPay.toFixed(2)}</td>
            <td>${employee.deductionAmount.toFixed(2)}</td>
            <td>${netPay.toFixed(2)}</td>
            <td><button class="deleteBtn" onclick="deleteEmployee(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });

    updateEmployeeCounter();
}

function deleteEmployee(index) {
    payrollData.splice(index, 1);
    updateTable();
}

function clearInputFields() {
    document.getElementById('employeeForm').reset();
}

function updateEmployeeCounter() {
    const employeeCounter = document.getElementById('employeeCounter');
    employeeCounter.textContent = `Total Employees: ${payrollData.length}`;
}
