import pic from './react_logo-512.webp';
import './styles.css';
export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={pic}className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}