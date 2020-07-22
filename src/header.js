import React from 'react';

class Header extends React.Component {
    
    render(){
        return(
        <div className="Header">
        <img className = 'img1' alt = 'TYP' src='data:image/png;base64,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'></img>
        </div> 
        );
    }


}

export default Header;