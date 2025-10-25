// COMPONENTS
import PageTransition from "../components/PageTransition";
import SobreMi from "../components/About/Story";

function About(){
    return(
        <PageTransition>
            <section style={{padding: ".5rem"}}>
                <SobreMi />
            </section>
        </PageTransition>
    );
};

export default About;
