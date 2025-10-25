// CSS
import './CSS/Layout.css'
// REACT
import { useRef } from 'react'
// HOOKS
import useBassAnalyzer from '../Hooks/useBassAnalyzer';
// Components
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import MainContent from './MainContent';
import MenuModal from './MenuModal';
import ModalServices from './Modal/ModalServices';
// react-router-dom
import { Outlet } from 'react-router-dom';
 
// CONTEXT
import { BassContext } from '../context/BassContext';
import Footer from './Footer';

function Layout(){
    // obtener elemento audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const bassLevel = useBassAnalyzer(audioRef);
    return(
        <BassContext.Provider value={bassLevel}>
            <div className='Layout__content'>
                <ModalServices />
                <MenuModal/>
                <MusicPlayer audioRef={audioRef}/>
                <Header/>
                <MainContent>
                    <Outlet />
                </MainContent>
                <Footer />
            </div>
      </BassContext.Provider>
    );
};

export default Layout;