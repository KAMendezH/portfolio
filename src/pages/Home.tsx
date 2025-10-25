// COMPONENTS
import PageTransition from "../components/PageTransition";
import HeroHome from "../components/Home/HeroHome";
import SectionWrapper from "../components/Layout/SectionWrapper";
import Certificates from "../components/Home/Certificates";
import Services from "../components/Home/Services";
function Home(){
    return(
        <PageTransition>
            <section className="Home__content" style={{width: "100%", minHeight: "100vh"}}>
                <SectionWrapper>
                    <HeroHome />
                </SectionWrapper>
                <SectionWrapper id="services">
                    <Services />
                </SectionWrapper>
                <SectionWrapper id="certificates">
                    <Certificates />
                </SectionWrapper>
            </section>
            
        </PageTransition>
        
    );
};


export default Home;