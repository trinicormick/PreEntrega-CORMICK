import React from "react";
const Links = ({title, answerAmount, votes, views}) => {
    return (
        <nav>
            <ul>
                <li>remeras{title}</li>
                <li>pantalones{answerAmount}</li>
                <li>buzos{votes}</li>
                <li>camperas{views}</li>
             </ul>
        </nav>
    ); 
};
export default Links;