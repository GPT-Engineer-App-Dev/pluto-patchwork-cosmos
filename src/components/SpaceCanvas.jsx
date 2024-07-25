import { useEffect, useRef } from 'react';

const SpaceCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 300;

    // Stars
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move stars
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
        }
      });

      // Draw Mars
      const marsGradient = ctx.createRadialGradient(75, 150, 5, 75, 150, 70);
      marsGradient.addColorStop(0, '#ff6b6b');
      marsGradient.addColorStop(1, '#cc4e4e');
      ctx.fillStyle = marsGradient;
      ctx.beginPath();
      ctx.arc(75, 150, 50, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[300px]" />;
};

export default SpaceCanvas;
