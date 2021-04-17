import { useEffect, useRef } from "react"

const Canvas = () => {

    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = 300;
    
        let particleArray = [];
    
        const mouse = {
            x: null,
            y: null,
            radius: 250
        };

        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        ctx.fillStyle = 'black';
        ctx.font = '30px Verdana';
        ctx.fillText('r', 0, 25);
        const textCoordinates = ctx.getImageData(0, 0, 100, 100);
    
        class Particle {
            constructor(x,y) {
                this.x = x;
                this.y = y;
                this.size = 3;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 40) + 5;
            };

            draw() {
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            };

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx/distance;
                let forceDirectionY = dy/distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance)/maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                if (distance < 300) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx/10;
                    }
                    if ( this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy/10;
                    }
                }
            }
        };
    
        const init = () => {
            particleArray = [];
            for (let y = 0, y2 = textCoordinates.height ; y < y2 ; y++) {
                for (let x = 0, x2 = textCoordinates.width ; x < x2 ; x++) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        let positionX = x;
                        let positionY = y;
                        particleArray.push(new Particle(positionX * 12, positionY * 12));
                    }
                }
            }
        };

        init();
    
        const connect = () => {
            let opacityValue = 1;
            for (let a = 0 ; a < particleArray.length ; a++) {
                for (let b = a ; b < particleArray.length ; b++) {
                    let dx = particleArray[a].x - particleArray[b].x;
                    let dy = particleArray[a].y - particleArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 50) {
                        opacityValue = 1 - (distance/50);
                        ctx.strokeStyle = 'rgba(0,0,0' + opacityValue + ')';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(particleArray[a].x, particleArray[a].y);
                        ctx.lineTo(particleArray[b].x, particleArray[b].y);
                        ctx.stroke();
                    };
                };
            };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0 ; i < particleArray.length ; i++) {
                particleArray[i].draw();
                particleArray[i].update();
            };
            connect();
            requestAnimationFrame(animate);
        };
        animate();

    }, []);

    return (
        <canvas ref={canvasRef} />
    )
}

export default Canvas;