function showMap() {
    const location = document.getElementById('locationSelect').value;
    const maps = document.querySelectorAll('.map');

    // Hide all maps initially
    maps.forEach(map => map.style.display = 'none');

    // Display the selected map
    if (location) {
        const selectedMap = document.getElementById(location);
        if (selectedMap) {
            selectedMap.style.display = 'block';
        }
    } else {
        console.error(`Map with id "${location}" not found.`);
    }
}

// New code for calculating total fees
document.getElementById('calculateButton').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[name="courses"]:checked');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    let total = 0;
    let courseCount = checkboxes.length;

    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.getAttribute('data-price'));
    });

    // Calculate discount based on course selection
    let discount = 0;
    if (courseCount === 1) {
        discount = 0;
    } else if (courseCount === 2) {
        discount = 0.05; // 5%
    } else if (courseCount === 3) {
        discount = 0.10; // 10%
    } else if (courseCount > 3) {
        discount = 0.15; // 15%
    }

    const discountAmount = total * discount;
    const totalAfterDiscount = total - discountAmount;
    const vat = totalAfterDiscount * 0.15; // 15% VAT
    const grandTotal = totalAfterDiscount + vat;

    // Display the invoice
    document.getElementById('totalAmount').innerText = `Total Amount (after discount): R${totalAfterDiscount.toFixed(2)}`;
    document.getElementById('vatAmount').innerText = `VAT (15%): R${vat.toFixed(2)}`;
});

