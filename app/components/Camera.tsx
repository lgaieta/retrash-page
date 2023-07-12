"use client";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

function Camera() {
    const cameraRef = useRef(null);
    const [isRecyclable, setIsRecyclable] = useState<boolean>(true);

    const testModel = async () => {
        console.log(cameraRef.current.getScreenshot());
        const request = await fetch("http://127.0.0.1:5000/image", {
            method: "POST",
            body: JSON.stringify({
                data: cameraRef.current ? "Camera is working!!" : "unable",
            }),
        });
        const data = await request.json();
        if (data.result === "recyclable") setIsRecyclable(true);
        else setIsRecyclable(false);
    };

    return (
        <>
            <Webcam
                audio={false}
                ref={cameraRef}
                onUserMedia={() => setTimeout(testModel, 1500)}
                screenshotFormat="image/jpeg"
            />
            {isRecyclable ? "reciclable" : "no reciclable"}
        </>
    );
}

export default Camera;
