import { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface IProps {
    navItemName: string
    classname?: CSSProperties
}

const NavItem = (props: IProps) => {
    return (<div>
        <Link to={""}>
            {props.navItemName}
        </Link>
    </div>);
};

export default NavItem;
