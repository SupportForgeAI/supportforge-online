// Simple script for future enhancements (e.g., smooth scroll or alerts)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Alert for contact (replace with real form later)
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        // Placeholder - later integrate email/X DM
        console.log('Contact clicked');
    });
});
