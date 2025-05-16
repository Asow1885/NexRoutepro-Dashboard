document.addEventListener('DOMContentLoaded', () => {
    const placeBidButtons = document.querySelectorAll('.place-bid');
    const buyNowButtons = document.querySelectorAll('.buy-now');

    placeBidButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.auction-card');
            const bidAmount = prompt('Enter your bid amount:');
            if (bidAmount) {
                alert('Bid placed for $' + bidAmount);
            }
        });
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.auction-card');
            alert('Item purchased immediately!');
        });
    });
});