document.querySelector('button').addEventListener('click', function() {
    let inputDate = new Date(document.getElementById('date').value);
    let currentDate = new Date();

    // Check if the input date is valid
    if (isNaN(inputDate.getTime())) {
        alert('Please enter a valid date. I am not an Astrologer.');
        return;
    }

    // Check if the input date is greater than today's date
    if (inputDate > currentDate) {
        alert('Please enter a date that is not in the future.');
        return;
    }

    // Calculate age in years
    let ageInYears = currentDate.getFullYear() - inputDate.getFullYear();
    
    // Check if the birth month and day have passed in the current year
    if (currentDate.getMonth() < inputDate.getMonth() || 
        (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() < inputDate.getDate())) {
        ageInYears--;
    }

    // Calculate age in months
    let ageInMonths = currentDate.getMonth() - inputDate.getMonth();
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    // Calculate age in days
    let ageInDays = currentDate.getDate() - inputDate.getDate();
    if (ageInDays < 0) {
        let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        ageInDays += (new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0)).getDate();
        ageInMonths--;
    }

    document.querySelector('.year span').textContent = ageInYears;
    document.querySelector('.month span').textContent = ageInMonths;
    document.querySelector('.day span').textContent = ageInDays; 

});


 







