import './Header.css'

const Header = () => {
    
    return (
        <div className="header-container">
            <span className="span-for-title">
            <span className="name-of-header">
            <h1 id="seven-note">💁🏾‍♀️📙7Note</h1>
            <h1 id="advertising">💥The best choise for saving your notes💥</h1>
            </span>
            </span>
            <div className="header-buttons">
            <h2 className="button">Homepage🏡</h2>
            <h2 className="button">My Notes📓</h2>
            <h2 className="button">How to use🙋</h2>
            <h2 className="button">Account🔒</h2>
            <h2 className="button">Options⚙️</h2>
            </div>
        </div>
    )
}

export default Header;