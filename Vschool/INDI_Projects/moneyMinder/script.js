let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear(); // Declare currentYear as a let variable
let selectedDateCell = null;

document.addEventListener('DOMContentLoaded', function() {
    initCalendar();
    displayCalendar(currentMonth, currentYear);
});
function initCalendar() {
    populateMonthDropdown();
    populateYearDropdown();
}

function populateMonthDropdown() {
    const monthDropdown = document.getElementById('monthDropdown');
    for (let i = 0; i < 12; i++) {
        const month = new Date(0, i).toLocaleString('default', { month: 'long' });
        const option = new Option(month, i);
        monthDropdown.options.add(option);
    }
    monthDropdown.value = currentMonth;
    monthDropdown.addEventListener('change', (e) => {
        currentMonth = parseInt(e.target.value);
        displayCalendar(currentMonth, currentYear);
    });
}

function populateYearDropdown() {
    const yearDropdown = document.getElementById('yearDropdown');
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
        const option = new Option(i, i);
        yearDropdown.options.add(option);
    }
    yearDropdown.value = currentYear;
    yearDropdown.addEventListener('change', (e) => {
        currentYear = parseInt(e.target.value);
        displayCalendar(currentMonth, currentYear);
    });
}

document.addEventListener('DOMContentLoaded', () => displayCalendar(currentMonth, currentYear));

function displayCalendar(month, year) {
    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';

            if (i === 0 && j < firstDayOfMonth) {
                cell.textContent = '';
            } else if (dayCounter > daysInMonth) {
                cell.textContent = '';
            } else {
                dayNumber.textContent = dayCounter;
                cell.appendChild(dayNumber);
                cell.addEventListener('dblclick', function() {
                    selectDateCell(this, dayCounter, month, year);
                });
                dayCounter++;
            }
            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

// Modify the previousMonth and nextMonth functions to update the dropdowns
function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    updateDropdowns(); // Add this line to update the dropdowns
    displayCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    updateDropdowns(); // Add this line to update the dropdowns
    displayCalendar(currentMonth, currentYear);
}

// Add this function to update the dropdowns
function updateDropdowns() {
    const monthDropdown = document.getElementById('monthDropdown');
    const yearDropdown = document.getElementById('yearDropdown');

    monthDropdown.value = currentMonth;
    yearDropdown.value = currentYear;
}


function selectDateCell(cell) {
    if (selectedDateCell) {
        selectedDateCell.classList.remove('selected-cell');
    }
    cell.classList.add('selected-cell');
    selectedDateCell = cell;

    const selectedDateString = new Date(currentYear, currentMonth, cell.textContent).toLocaleDateString();
    document.getElementById('selectedDate').textContent = `Selected Date: ${selectedDateString}`;
    document.getElementById('transactionBox').style.display = 'block';

    // Display existing transactions for the selected date
    displayTransactionsForDate(new Date(currentYear, currentMonth, cell.textContent));
}

function addTransaction() {
    if (!selectedDateCell) {
        alert('Please select a date.');
        return;
    }
    const transactionInput = document.getElementById('transactionInput');
    const transactionValue = parseFloat(transactionInput.value);
    if (isNaN(transactionValue)) {
        alert('Please enter a valid transaction value.');
        return;
    }

    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.textContent = `Date: ${selectedDateCell.textContent} - Amount: $${transactionValue}`;
    transactionList.appendChild(listItem);

    saveTransaction(new Date(currentYear, currentMonth, selectedDateCell.textContent), transactionValue);
    transactionInput.value = '';

    // Display transaction in the calendar cell
    const transactionAmountDiv = document.createElement('div');
    transactionAmountDiv.textContent = `$${transactionValue}`;
    selectedDateCell.appendChild(transactionAmountDiv);

    // Refresh the transaction list for the selected date
    displayTransactionsForDate(new Date(currentYear, currentMonth, selectedDateCell.textContent));
}

function displayTransactionsForDate(date) {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    const transactions = getTransactionsForDate(date);
    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${date.getDate()} - Amount: $${transaction.amount}`;
        transactionList.appendChild(listItem);
    });
}

function getTransactionsForDate(date) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate.getFullYear() === date.getFullYear() &&
               transactionDate.getMonth() === date.getMonth() &&
               transactionDate.getDate() === date.getDate();
    });
}

function saveTransaction(date, amount) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ date: date.toISOString(), amount: amount });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function removeAllTransactions() {
    // Clear the transaction list in the DOM
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    // Optionally, also clear transactions from local storage
    localStorage.removeItem('transactions');
}

function closeTransactionBox() {
    // Hide the transaction box
    document.getElementById('transactionBox').style.display = 'none';
}


function populateYearDropdown() {
    const yearDropdown = document.getElementById('yearDropdown');
    const now = new Date();
    // Remove the 'let' keyword here to reassign the global variable
    currentYear = now.getFullYear();
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
        const option = new Option(i, i);
        yearDropdown.options.add(option);
    }
    yearDropdown.value = currentYear;

    yearDropdown.addEventListener('change', (e) => {
        // Update the global currentYear variable without 'let'
        currentYear = parseInt(e.target.value);
        // Redisplay the calendar with the new year
        displayCalendar(currentMonth, currentYear);
    });
}