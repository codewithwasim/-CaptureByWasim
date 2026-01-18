function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    
    lbImg.src = src;
    lb.style.display = 'flex';
    
    // Background scrolling ko band karne ke liye
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.style.display = 'none';
    
    // Background scrolling ko wapas on karne ke liye
    document.body.style.overflow = 'auto';
}