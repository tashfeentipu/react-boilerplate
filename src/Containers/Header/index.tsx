import React, { useState } from "react";

interface IProps {

}

const Header = (props: IProps) => {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div className="header">

        </div>
    );
}

export default Header;