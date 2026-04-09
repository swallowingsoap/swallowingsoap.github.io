function resizeBlocks() {
    const header = document.querySelector('header');   // Get the header
    const navbar = document.querySelector('nav');      // Get the navbar
    const blocks = document.querySelectorAll('.block'); // Get all blocks

    const totalHeaderNav = header.offsetHeight + navbar.offsetHeight; // Total height of header + navbar
    const remainingHeight = window.innerHeight - totalHeaderNav; // Remaining height after header + navbar

    // Set each block to take up 50% of the remaining height
    blocks.forEach(block => {
        if (window.innerWidth > 768) { // For larger screens (above 768px)
            block.style.height = (remainingHeight / 2) + 'px';
        } else {
            block.style.height = 'auto'; // For smaller screens, allow natural height
        }
    });
}

// Initialize resizeBlocks on page load and when resizing
window.addEventListener('load', resizeBlocks);
window.addEventListener('resize', resizeBlocks);