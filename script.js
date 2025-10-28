document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const pfps = document.querySelectorAll(".pfp");

  if (!overlay || !pfps.length) return;

  pfps.forEach(pfp => {
    pfp.addEventListener("mouseenter", () => {
      overlay.style.opacity = ".5";
    });
    pfp.addEventListener("mouseleave", () => {
      overlay.style.opacity = "0";
    });
  });
});

const img1 = document.querySelector('.image1');
const others1 = document.querySelectorAll('.image2, .image3, .image4, .image5, .image6');

img1.addEventListener('mouseenter', () => {
    others1.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img1.addEventListener('mouseleave', () => {
    others1.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});


const img2 = document.querySelector('.image2');
const others2 = document.querySelectorAll('.image1, .image3, .image4, .image5, .image6');

img2.addEventListener('mouseenter', () => {
    others2.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img2.addEventListener('mouseleave', () => {
    others2.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});

const img3 = document.querySelector('.image3');
const others3 = document.querySelectorAll('.image1, .image2, .image4, .image5, .image6');

img3.addEventListener('mouseenter', () => {
    others3.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img3.addEventListener('mouseleave', () => {
    others3.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});

const img4 = document.querySelector('.image4');
const others4 = document.querySelectorAll('.image1, .image2, .image3, .image5, .image6');

img4.addEventListener('mouseenter', () => {
    others4.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img4.addEventListener('mouseleave', () => {
    others4.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});

const img5 = document.querySelector('.image5');
const others5 = document.querySelectorAll('.image1, .image2, .image3, .image4, .image6');

img5.addEventListener('mouseenter', () => {
    others5.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img5.addEventListener('mouseleave', () => {
    others5.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});

const img6 = document.querySelector('.image6');
const others6 = document.querySelectorAll('.image1, .image2, .image3, .image4, .image5');

img6.addEventListener('mouseenter', () => {
    others6.forEach(img => {
        img.style.backgroundColor = 'rgba(75, 75, 75, 0.3)'; 
        img.style.transition = '0.7s ease';
        img.style.filter = 'blur(12px)';
    });
});

img6.addEventListener('mouseleave', () => {
    others6.forEach(img => {
        img.style.backgroundColor = ''; 
        img.style.filter = ''
    });
});