import { RiRecycleFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Camera from "@/components/Camera";

export default function Home() {
    return (
        <main className="flex flex-col gap-6 items-center pt-6 text-dark px-6 max-w-[500px]">
            <h1 className="text-3xl font-bold text-center">
                Probá nuestra{" "}
                <em className="text-accent-dark not-italic">
                    inteligencia artificial
                </em>
            </h1>
            <p className="text-base text-center">
                Apuntá a un producto y averiguá si es reciclable o no.
            </p>
            <Camera />
            <div className="flex flex-col w-max justify-center items-center p-4 rounded-lg bg-accent-dark text-white border border-accent gap-2">
                <RiRecycleFill size={40} color="#FFFFFF" />
                <p className="text-xl font-bold text-center">
                    ¡El producto es reciclable!
                </p>
            </div>
            <div className="flex flex-col w-max justify-center items-center p-4 rounded-lg bg-dark text-white border border-accent gap-2">
                <FaTrash size={34} color="#FFFFFF" />
                <p className="text-xl font-bold text-center">
                    El producto no es reciclable
                </p>
            </div>
        </main>
    );
}
