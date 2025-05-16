 const menuButton = document.querySelector('.menu-button');
        const navLinks = document.querySelector('.nav-links');

        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
 
 // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get all the 3D container elements
        const containers = document.querySelectorAll('.img-3d-container');
        
        // For each container, add the 3D effect
        containers.forEach(container => {
            const link = container.querySelector('a');
            const shine = container.querySelector('.img-shine');
            
            // Mouse move event to create the 3D effect
            container.addEventListener('mousemove', function(e) {
                // Get position of mouse relative to container
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage position
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                
                // Calculate rotation angles based on mouse position
                const maxTilt = 12; // Maximum tilt in degrees
                const rotateY = ((xPercent - 50) / 50) * maxTilt;
                const rotateX = -((yPercent - 50) / 50) * maxTilt;
                
                // Apply transform to the link containing the image
                link.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                
                // Move shine effect with mouse
                shine.style.background = `linear-gradient(
                    ${135 + (xPercent - 50) / 5}deg, 
                    rgba(255,255,255,${0.3 - Math.abs((yPercent - 50) / 150)}) 0%, 
                    rgba(255,255,255,0) 60%
                )`;
                shine.style.opacity = '1';
            });
            
            // Reset image when mouse leaves
            container.addEventListener('mouseleave', function() {
                link.style.transform = 'rotateX(0) rotateY(0) scale(1)';
                shine.style.opacity = '0';
            });
        });
    });
    
    