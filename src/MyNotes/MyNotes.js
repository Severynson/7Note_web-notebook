import Note from "./Note";
import Card from "../UI/Card";
import './MyNotes.css'

const NotesList = function () {

    const lists = {
        "University subjects": "1)Biology; 2)Phisiology; 3)English",
        "Plans for the weekends": " Go to Ontario lake and make steak there with a company of old friends!",
        "Books to read": "1)Respublica- Plato; 2)Short histoory of time- Steven Hawking"
    }

  return (
      <Card>
    <div className="container">
      <Note name="University subjects" text="1)Biology; 2)Phisiology; 3)English"></Note>
      <Note name="Plans for the weekends" text=" Go to Ontario lake and make steak there with a company of old friends!"></Note>
      <Note name="Books to read" text="1)Respublica- Plato; 2)Short histoory of time- Steven Hawking"></Note>

      </div>
      </Card>
  );
};

export default NotesList;
