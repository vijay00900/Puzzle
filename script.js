document.getElementById('calculate').addEventListener('click', function() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    if (isNaN(ageInYears)) {
        document.getElementById('result').textContent = 'Please enter a valid birthdate.';
    } else {
        document.getElementById('result').textContent = `Your age is ${ageInYears} years.`;
    }
});
