function donation(donationIndex) {
    const donatedMoneyContent = document.getElementsByClassName('donated')[donationIndex].textContent.replace(' BDT', '');
    const donatedMoney = parseFloat(donatedMoneyContent);

    const donateAmount = document.getElementsByClassName('donateAmount')[donationIndex];

    const amountDonated = parseFloat(donateAmount.value);

    if (isNaN(amountDonated)) {
        alert('Enter a valid number for donation');
    } else if (amountDonated < 0) {
        alert('Your input cant be negative');
    } else {
        const donationTotalMoney = donatedMoney + amountDonated;
        document.getElementsByClassName('donated')[donationIndex].textContent = donationTotalMoney + ' BDT';

        const donationTotalElement = document.getElementById('donation-total');
        if (donationTotalElement) {
            const donationTotal = donationTotalElement.textContent.replace(' BDT', '');
            const totalMoney = parseFloat(donationTotal);

            const newTotalMoney = totalMoney - amountDonated;

            document.getElementById('donation-total').textContent = newTotalMoney + ' BDT';
        }

        donateAmount.value = '';
    }
}

function setupDonationButtons() {
    const donationButtons = document.getElementsByClassName('donateBtn');

    for (let i = 0; i < donationButtons.length; i++) {
        donationButtons[i].addEventListener('click', function() {
            donation(i); // Change here to call the correct function
        });
    }
}

setupDonationButtons();
