// CSS
import './CSS/MusicPlayer.css'
// REACT
import { useState, useEffect } from 'react'

// Icons
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { BsFillMusicPlayerFill } from "react-icons/bs";
// ELEMENTS
import TextP from '../elements/TextP';
// FRAMER MOTION
import { motion, AnimatePresence } from 'framer-motion';
// STORES
import useStatusMusic from '../stores/PlayerMusicStore';
// AUDIO DE PRUEBA
import track1 from '../assets/audio/The_Weeknd_Less_Than_Zero.mp3'
import track2 from '../assets/audio/Kendrick_Lamar_ All_The_Stars.mp3'
import track3 from '../assets/audio/The_weeknd_starboy.mp3'
// CONTEXT
import { useBassLevel } from '../context/BassContext';

interface Props{
    audioRef: React.RefObject<HTMLAudioElement | null>;
}


function MusicPlayer( { audioRef }: Props ){
    // ESTADOS
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    // Estado para cambiar entre pause y play
    const [isPlaying, setIsPlaying] = useState(false);
    // SONGS
    const tracks = [track1, track2, track3];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Solo reproduce si ya estaba en modo "play"
        if (isPlaying) {
            audio.play().catch((err) => {
            console.warn("No se pudo reproducir automáticamente:", err);
            });
        }
    }, [currentTrackIndex, isPlaying]);






    // Funciones de reproductor
    // MANEJADOR DE PAUSA
    const handlePause = ()=>{
        audioRef.current?.pause();
    }
    const handlePlay = ()=>{
        audioRef.current?.play();
    }
    // MANEJADOR DE SKIP FORDWAR Y SKIP BACK
    // SIGUIENTE
    const skipForward = ()=>{
        setCurrentTrackIndex(prev => (prev + 1 ) % tracks.length);
    }
    // ANTERIOR
    const skipBack = () => {
        setCurrentTrackIndex(prev => (prev - 1) % tracks.length);
    }


    // DETECTAR FINAL DE LA CANCIÓN ACTUAL
    useEffect(()=>{
        const audio = audioRef.current
        if(!audio) return;
        const handleEnded = () => {
            skipForward();
            setTimeout(()=>{
                handlePlay();
            }, 100)
            
        }
        audio.addEventListener("ended", handleEnded);
        return () => {audio.removeEventListener("ended", handleEnded)}
    }, [currentTrackIndex]);







    
    


   
    const handleActivarPausa = ()=>{
        setIsPlaying(true)
    }
    const handleDesactivarPausa = () => {
        setIsPlaying(false)
    }

    const bassLevel = useBassLevel();

    const { status } = useStatusMusic();

    return(
        <section className='MusicPlayer__content' style={{display: `${!status ? "none" : "" }`, border: `solid 2px ${bassLevel > 235 ? "#00ffff" : "transparent"}`}}>
            <audio
            ref={audioRef}
            src={tracks[currentTrackIndex]}
            />
            <div className='MusicPlayer__controllers'>
                <span className='MusicPlayer__span' onClick={() => {skipBack(); handlePause(); handleDesactivarPausa();}}>
                    <IoPlaySkipBack style={{color: ` ${bassLevel >= 190 && bassLevel <= 214 ? "#00ffff" : ""} `}}/>
                    <TextP text='Skip Back'/>
                </span>
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.span
                            key="pause"
                            className='MusicPlayer__span'
                            onClick={() => {handlePause(); handleDesactivarPausa();}}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPause style={{color: ` ${bassLevel > 215 && bassLevel <= 234 ? "#00ffff" : ""} `}}/>
                            <TextP text='Pause'/>
                        </motion.span>
                        ) : (
                        <motion.span
                            key="play"
                            className='MusicPlayer__span'
                            onClick={() => {handlePlay(); handleActivarPausa();}}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPlay />
                            <TextP text='Play'/>
                            </motion.span>
                    )}
                </AnimatePresence>
                <span className='MusicPlayer__span' onClick={skipForward}>
                    <IoPlaySkipForward style={{color: ` ${bassLevel >= 190 && bassLevel <= 214 ? "#00ffff" : ""} `}}/>
                    <TextP text='Skip Forward'/>
                </span>
            </div>
            <div className='MusicPlayer__music'>
                <span className='MusicPlayer__span'>
                    <BsFillMusicPlayerFill style={{color: ` ${bassLevel > 235 ? "#00ffff" : ""} `}}/>
                    <TextP text='Music'/>
                </span>
            </div>
        </section>
    );
};

export default MusicPlayer;