import type { ReactNode } from 'react'

interface Props{
    icon: ReactNode,
    intensity: number,
    thresholds: [number, number],
}

function ReactiveIcon({ icon, intensity, thresholds }: Props){
    const [low, high] = thresholds;
    const isActive = intensity >= low && intensity <= high;

    return(
        <div style={{color: isActive ? "#00ffff" : ""}}>
            {icon}
        </div>
    );
};

export default ReactiveIcon;