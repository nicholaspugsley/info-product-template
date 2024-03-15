document.getElementById('buyNow').addEventListener('click', function() {
    // Show upsell offer
    document.getElementById('upsellOffer').classList.remove('hidden');
});

document.getElementById('addUpsell').addEventListener('click', function() {
    localStorage.setItem('upsell', 'accepted');
    window.location.href = 'thankyou.html'; // Redirect to thank you page
});

document.getElementById('skipUpsell').addEventListener('click', function() {
    localStorage.setItem('upsell', 'declined');
    window.location.href = 'thankyou.html'; // Redirect to thank you page
});

// On the Thank You page, check if upsell was accepted and adjust message
if (window.location.pathname.endsWith('thankyou.html')) {
    if (localStorage.getItem('upsell') === 'accepted') {
        document.getElementById('purchaseSummary').textContent = "Here's what you've got: [Product Name], [Upsell Product]";
    }
}
