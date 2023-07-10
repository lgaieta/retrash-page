"use client";
import { useRef } from "react";
import Webcam from "react-webcam";

function Camera() {
    const cameraRef = useRef(null);

    return <Webcam audio={false} ref={cameraRef} onUserMedia={() => setTimeout(() => console.log(cameraRef.current.getScreenshot()), 1500)} screenshotFormat="image/jpeg" />
}

export default Camera