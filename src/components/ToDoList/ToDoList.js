import "./ToDoList.css";
import { useState } from "react";

function ToDoList() {
    const [donnee,setDonnee] =useState("");
    const [list, setList] = useState([]);
    
   
    function ajouter() {
       setList(list.concat(donnee));
       setDonnee("");
    }
    function retirer() {
        if (list.includes(donnee) )  {
           setList(list.toSpliced(list.indexOf(donnee),1));
           setDonnee("");
        }
        if(!isNaN(donnee) && donnee<=list.length)  {
            setList(list.toSpliced(donnee-1, 1));
            setDonnee("");
        }
    }

    return (
        <div className="body">
            <h2>Ma première ToDoList React</h2>
            <button onClick={ajouter}>Ajouter une tâche</button>
            <button onClick={retirer}>Retirer une tâche</button><br />
            <input type="text" value={donnee} onChange={(e) => setDonnee(e.target.value)} />
            <ul>
                {list.map((tache, index) => {
                   return (<li key={index}>{tache}</li>)
                }
                )}
            </ul>
        </div>
    );
}

export default ToDoList;
