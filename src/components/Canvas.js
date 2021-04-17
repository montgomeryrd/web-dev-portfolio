import { useEffect, useRef } from 'react';

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = '400px';
        const ctx = canvas.getContext('2d');
        let particleArray = [];
    
        // handle mouse interaction
        const mouse = {
            x: null,
            y: null,
            radius: 150
        }
    
        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });
    
        ctx.fillStyle = 'black';
        ctx.font = '30px Verdana';
        ctx.fillText('A', 0, 30);
        const data = ctx.getImageData(0, 0, 100, 100);
    
        class Particle {
            constructor(x,y) {
                this.x = x;
                this.y = y;
                this.size = 3;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            };
    
            draw() {
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            };
        };
    
        function init() {
            particleArray = [];
            particleArray.push(new Particle(10, 10));
        };
        init();
        console.log(particleArray);
    
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0 ; i < particleArray.length; i++) {
                particleArray[i].draw();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <canvas ref={canvasRef} />
    );
};

export default Canvas;