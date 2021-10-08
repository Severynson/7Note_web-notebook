import Note from "./Note";
import Card from "../UI/Card";
import './MyNotes.css'

const NotesList = function () {

    const lists = [
        ["University subjects", "1)Biology; 2)Phisiology; 3)English"],
        ["Plans for the weekends", " Go to Ontario lake and make steak there with a company of old friends!"],
        ["Books to read", "1)Respublica- Plato; 2)Short histoory of time- Steven Hawking"]
    ]

  return (
      <Card>
    <div className="container">
      <Note name={lists[0][0]} text={lists[0][1]}></Note>
      <Note name={lists[1][0]} text={lists[1][1]}></Note>
      <Note name={lists[2][0]} text={lists[2][1]}></Note>

      </div>
      </Card>
  );
};

export default NotesList;
