import { useState } from "react";
import NavItem from "../../Components/NavItem";

interface IProps {

}

const Header = (props: IProps) => {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <header className="header">
            <nav>
                <NavItem navItemName={"Item 1"} />
                <NavItem navItemName={"Item 2"} />
                <NavItem navItemName={"Item 3"} />
                <NavItem navItemName={"Sign Up"} />
                <NavItem navItemName={"Sign In"} />
            </nav>
        </header>
    );
}

export default Header;