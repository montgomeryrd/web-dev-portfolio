import { useEffect, useRef } from 'react';
import profile from '../assets/images/profile.jpg';

const BlackAndWhite = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = 250;
        canvas.height = 250;
    
        const image = new Image();
        image.src = profile;
    
        image.addEventListener('load', function() {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const scannedData = scannedImage.data;
            
            for (let i = 0 ; i < scannedData.length ; i += 4) {
                const total = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
                const averageColorValue = total/3;
                scannedData[i] = averageColorValue;
                scannedData[i + 1] = averageColorValue;
                scannedData[i + 2] = averageColorValue;
            }
            ctx.putImageData(scannedImage, 0, 0);
        })
    }, []);

    return (
        <canvas className="black-and-white-profile" ref={canvasRef} />
    )
}

export default BlackAndWhite;