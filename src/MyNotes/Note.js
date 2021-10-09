import Card from '../UI/Card';
import './Note.css'

const Note = function (props) {
    return (
        <div className="note-handling-div">
        {/* <Card className="note-container"> */}
        {/* <img src="/img/notebook.png" /> */}
        <div className="note-name">{props.name}</div>
        <div className="note-text">{props.text}</div>
        {/* </Card> */}
        </div>
    )
}

export default Note;