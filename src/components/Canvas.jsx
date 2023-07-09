import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let circleArray = [];



        let mouse = {
            x: undefined,
            y: undefined,
            raidus: (canvas.height / 80) * (canvas.width / 80),
        };

        document.addEventListener("mousemove", function (e) {
            mouse.x = e.x;
            mouse.y = e.y;
        })

        document.addEventListener("touchmove", function (e) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        })

        document.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.raidus = ((canvas.height/80) * (canvas.height/80));
            init()
        });

        // mouse out event
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        })

        class Circle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = "white";
                ctx.fill();
            }
            update(){
                // collision detection
                if(this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if(this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                let dx = mouse.x -  this.x;
                let dy = mouse.y -  this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if (distance < mouse.raidus + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
                    if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
                    if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
                }
        
                this.x += this.directionX
                this.y += this.directionY
                this.draw()
            }
        }
        
        
        function init() {
            let numberOfCircles = (canvas.height * canvas.width) / 6500;
            for ( let i = 0; i < numberOfCircles;i++){
                let size = (Math.random() * 15) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 5) - 2.5;
                let directionY = (Math.random() * 5) - 2.5;
                let color = 'blue'
        
                circleArray.push(new Circle(x, y, directionX, directionY, 0, color))
            }
        }
        
        
        // check if particles are close enough to draw a line between them
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < circleArray.length; a++) {
                for (let b = a; b < circleArray.length; b++) {
                    let dx = circleArray[a].x - circleArray[b].x;
                    let dy = circleArray[a].y - circleArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < (canvas.width/7) * (canvas.height/7)) {
                        opacityValue = 1 - (distance / 100)
                        ctx.strokeStyle = `rgba(0,255,0,${opacityValue})`;
                        ctx.lineWidth = 1.8;
                        ctx.beginPath();
                        ctx.moveTo(circleArray[a].x, circleArray[a].y);
                        ctx.lineTo(circleArray[b].x, circleArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        // animation loop
        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0,0,canvas.width,canvas.height)
        
            for (let i = 0; i < circleArray.length;i++) {
                circleArray[i].update()
            }
            connect()
        }
        // resize event
        window.addEventListener("resize", ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.raidus = ((canvas.height/80) * (canvas.height/80));
            init()
        })
        
        // mouse out event
        window.addEventListener('mouseout', ()=>{
            mouse.x = undefined;
            mouse.y = undefined;
        })
        
        init()
        animate()



    }, [])

    return (
        <canvas className='w-full h-full -z-10 bg-black absolute left-0 top-0 ' ref={canvasRef} />
    )
}

export default Canvas