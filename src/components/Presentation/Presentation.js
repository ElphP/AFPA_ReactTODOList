import "./Presentation.css" ;


function Presentation () {

const prenom= "Elphège"
const etude = "étudiant à l'AFPA d'Istres en DWWM";

return (
    <div className="presentation">
        <h1>Salut je m'appelle {prenom}</h1>
        <p>Je suis actuellement {etude}.</p>
    </div>
);
}

export default Presentation;