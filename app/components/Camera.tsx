"use client";
import { useRef } from "react";
import Webcam from "react-webcam";

function Camera() {
    const cameraRef = useRef(null);
    const testModel = async () => {
        await fetch("/ai", { method: "POST", body: JSON.stringify({ asdas: "asdas" }) })
    };

    return (
        <Webcam
            audio={false}
            ref={cameraRef}
            onUserMedia={() => setTimeout(() => testModel(), 1500)}
            screenshotFormat="image/jpeg"
        />
    );
}

export default Camera;
