"use client";
import { useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

function Camera() {
    const cameraRef = useRef(null);
    const testModel = async () => {
        const model = await tf.loadLayersModel("/api");
        console.log(model.summary);
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
