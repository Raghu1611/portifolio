import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set dimensions
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Particle configuration
        const particlesArray = [];
        // Fewer particles for performance & cleaner Vercel-like design
        const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 70);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // very small dots
                this.speedX = (Math.random() - 0.5) * 0.3; // slow movement
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.alpha = Math.random() * 0.4 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Loop around edges
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;

                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw(isDark) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark 
                    ? `rgba(255, 255, 255, ${this.alpha})` 
                    : `rgba(0, 122, 255, ${this.alpha * 0.5})`; // Blue tint in light mode
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        // Interactive mouse connection lines
        let mouse = { x: null, y: null, radius: 100 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const connectParticles = (isDark) => {
            const maxDistance = 120;
            for (let a = 0; a < particlesArray.length; a++) {
                // Connect particle to mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = particlesArray[a].x - mouse.x;
                    const dy = particlesArray[a].y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = isDark 
                            ? `rgba(0, 122, 255, ${(1 - dist / mouse.radius) * 0.15})`
                            : `rgba(0, 122, 255, ${(1 - dist / mouse.radius) * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                // Connect to other particles
                for (let b = a + 1; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${(1 - dist / maxDistance) * 0.04})`
                            : `rgba(0, 122, 255, ${(1 - dist / maxDistance) * 0.04})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation Loop
        const animate = () => {
            const isDark = document.documentElement.classList.contains('dark');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw(isDark);
            }
            connectParticles(isDark);

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
            style={{ mixBlendMode: 'normal' }}
        />
    );
};

export default ParticleBackground;
