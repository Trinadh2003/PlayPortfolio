// cursorEffects.js

document.addEventListener('mousemove', (e) => {
  const atroposElements = document.querySelectorAll('.atropos');
  atroposElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get the X position within the element
    const y = e.clientY - rect.top; // Get the Y position within the element
    const width = rect.width;
    const height = rect.height;

    // Calculate percentage of cursor position within the element
    const mouseX = (x / width) * 100;
    const mouseY = (y / height) * 100;

    // Calculate rotation based on cursor position
    const rotationX = (mouseY - 50) * 0.5; // Adjust factor as needed
    const rotationY = (mouseX - 50) * 0.5; // Adjust factor as needed

    // Set CSS variables
    element.style.setProperty('--mouse-x', `${rotationY}deg`);
    element.style.setProperty('--mouse-y', `${rotationX}deg`);
  });
});
