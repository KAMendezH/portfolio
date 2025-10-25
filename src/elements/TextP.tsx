import './CSS/TextP.css'

interface Props {
    text: string
}

function TextP({text} : Props){
    return(
        <p className="TextP">{text}</p>
    );
};

export default TextP;