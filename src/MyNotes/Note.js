import Card from '../UI/Card';
import './Note.css'

const Note = function (props) {
    return (
        <div>
        <Card className="note-container">
        <div className="note-name">{props.name}</div>
        <div className="note-text">{props.text}</div>
        </Card>
        </div>
    )
}

export default Note;