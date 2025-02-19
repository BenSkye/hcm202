'use client'

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.log("Không tự động phát được:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && audioRef.current) {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.log("Tự động phát bị chặn:", error);
                });

            audioRef.current.addEventListener("ended", () => setIsPlaying(false));
        }
    }, [isMounted]);

    return (
        <div className="fixed bottom-4 right-4 p-2 bg-secondary rounded-full shadow-lg z-10 hover:bg-primary-dark transition-transform transform hover:scale-105">
            <audio ref={audioRef} src="https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Ftuyenngondoclap.mp3?alt=media&token=5ae6b72f-dfdd-4a02-9405-2c5845c8883d" preload="auto" loop />
            <button
                onClick={togglePlay}
                className=" p-2 rounded-full  transition"
            >
                {isPlaying ? <Pause size={24} color='red' /> : <Play size={24} color='red' />}
            </button>
        </div>
    );
}