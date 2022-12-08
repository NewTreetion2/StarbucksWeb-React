import "css/Header/MobileHeader.css"
import Logo from "components/Header/Logo"

function MobileHeader() {
    return( 
    <header className="mobile-header">
        <div className="header-logo">
            <Logo />
        </div>     
        <div className="header-menu">
            <button className="menu1"></button>
            <button className="menu2"></button>
            <button className="menu3"></button>
        </div>
    </header>
    )
}

export default MobileHeader