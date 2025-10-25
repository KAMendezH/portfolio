// src/hooks/useBassAnalyzer.ts
import { useEffect, useRef, useState } from 'react'

export default function useBassAnalyzer(audioRef: React.RefObject<HTMLAudioElement | null>) {
  const [bassLevel, setBassLevel] = useState(0)
  const ctxRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const dataArrayRef = useRef<Uint8Array | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Crear AudioContext si no existe
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext()
    }

    const ctx = ctxRef.current

    // Crear AnalyserNode si no existe
    if (!analyserRef.current) {
      analyserRef.current = ctx.createAnalyser()
      analyserRef.current.fftSize = 256
      const bufferLength = analyserRef.current.frequencyBinCount
      dataArrayRef.current = new Uint8Array(bufferLength)
    }

    const analyser = analyserRef.current

    // Conectar solo si no se ha conectado antes
    if (!sourceRef.current) {
      sourceRef.current = ctx.createMediaElementSource(audio)
      sourceRef.current.connect(analyser!)
      analyser!.connect(ctx.destination)
    }

    const tick = () => {
      if (!analyser || !dataArrayRef.current) return
      analyser.getByteFrequencyData(dataArrayRef.current as Uint8Array<ArrayBuffer>)
      const bassBins = dataArrayRef.current.slice(0, 10)
      const avgBass = bassBins.reduce((a, b) => a + b, 0) / bassBins.length
      setBassLevel(avgBass)
      requestAnimationFrame(tick)
    }

    // Activar análisis al reproducir
    const handlePlay = () => {
      ctx.resume().then(tick)
    }

    audio.addEventListener('play', handlePlay)

    // Limpieza
    return () => {
      audio.removeEventListener('play', handlePlay)
    }
  }, [audioRef])

  return bassLevel
}