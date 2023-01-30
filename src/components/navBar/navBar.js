import React from "react";
const NavBar = (NavBar) => {
    return (
        <div style = {{ border: "1 px solid red"}}>
        { props.children}
        </div> );
}

export default NavBar;