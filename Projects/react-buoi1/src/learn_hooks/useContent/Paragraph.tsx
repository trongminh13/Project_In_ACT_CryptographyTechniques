import React, { useContext } from "react";
import {ThemeContext} from "../../App4";
function Paragraph(){
    const theme =useContext(ThemeContext);
    return(
        <div className={theme}>
            afdfadfadfdfdsfadfdsfadf
        </div>
    );
}

export default Paragraph;