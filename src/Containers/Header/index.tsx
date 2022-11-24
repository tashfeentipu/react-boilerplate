import { useState } from "react";
import NavItem from "Components/NavItem";
import { Logo } from "Assets";

interface IProps {

}

const Header = (props: IProps) => {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <header className="header">
            <div className="header__Logo">
                <img src={Logo} />
                <div className="header__Logo__Heading" >Electo </div>
            </div>
            <div className="header__container">
                <button>
                    Connect Wallet
                </button>

            </div>
        </header>
    );
}

export default Header;