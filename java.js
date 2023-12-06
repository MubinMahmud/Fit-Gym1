document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
    var selectedPlan = document.querySelector('input[name="membershipPlan"]:checked').value;
    var price;
    var taxRate = 0.10; // 10% tax rate

    switch (selectedPlan) {
        case 'Basic':
            price = 40;
            break;
        case 'Standard':
            price = 80;
            break;
        case 'Premium':
            price = 120;
            break;
        default:
            price = 0;
    }

    var total = calculateTotalWithTax(price, taxRate);
    alert('You selected the ' + selectedPlan + ' plan. The total amount with tax is $' + total.toFixed(2) + '.');
});

function calculateTotalWithTax(price, taxRate) {
    return price + (price * taxRate);
}