import type { ReactNode } from 'react'
interface Props {
    children: ReactNode
}

export default function MainContent({children} : Props){
    return(
        <main>
            {children}
        </main>
    );
};