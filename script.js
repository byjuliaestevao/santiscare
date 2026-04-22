document.addEventListener('DOMContentLoaded', () => {
    // Menu Selectors
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const fullMenu = document.getElementById('fullMenu');

    // Slider Selectors
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imgLeft = document.getElementById('imgLeft');
    const imgRight = document.getElementById('imgRight');

    // Toggle Fullscreen Menu
    menuToggle.addEventListener('click', () => {
        fullMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        fullMenu.classList.remove('active');
    });

    // Slider Data (Using a mix of the generated image and curated Unsplash links)
    const images = [
        "C:\\Users\\Alunas\\.gemini\\antigravity\\brain\\bfa441e0-e559-4013-bd10-8e7289241db6\\skincare_product_1_1776881606772.png",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop"
    ];

    let leftIndex = 0;
    let rightIndex = 1;

    // Helper to change image with fade
    const changeImage = (imgElement, index) => {
        imgElement.style.opacity = '0';
        imgElement.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            imgElement.src = images[index];
            imgElement.style.opacity = '1';
            imgElement.style.transform = 'scale(1)';
        }, 500);
    };

    prevBtn.addEventListener('click', () => {
        leftIndex = (leftIndex - 1 + images.length) % images.length;
        changeImage(imgLeft, leftIndex);
    });

    nextBtn.addEventListener('click', () => {
        rightIndex = (rightIndex + 1) % images.length;
        changeImage(imgRight, rightIndex);
    });

    // Optional: Add some subtle parallax or mouse move effect to images
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        
        imgLeft.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        imgRight.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.05)`;
    });
});
