import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

export async function POST(request: Request) {
    const model = await tf.loadLayersModel("http://localhost:3000/ai/model")
    console.log(model.summary)
}