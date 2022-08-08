import {Link} from 'react-router-dom'
import cssModules from '../assets/styles/components/NavbarBasic.module.scss'

function NavbarBasic(){
    return (
        <header className={cssModules.header}>
            <div className="container">
                <Link to="/">
                    <h3>Workout Buddy</h3>
                </Link>
            </div>
        </header>
    )
}

export default NavbarBasic;