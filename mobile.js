// Hero section - 3D Mobile rotation interaction
document.querySelector('.mobile-image').addEventListener('mousemove', (e) => {
    const xRotation = (window.innerHeight / 2 - e.pageY) / 20;
    const yRotation = (window.innerWidth / 2 - e.pageX) / 20;
    document.querySelector('.mobile-image').style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
