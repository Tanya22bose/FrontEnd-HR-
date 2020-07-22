import React from 'react';

class Navbar extends React.Component {
    
    render(){
        return(
            <div>
        <div className="Navbar">
         <div className = 'box1'style={ { textAlign:'center'}}>
         <img className = 'img3' alt = 'pic' src = 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'></img>
         <h5 id = 'name'>Elon Musk</h5>
         <p id = 'prof'>American Enterpreneur</p>
         </div>
         <div className = 'm' style={ { textAlign:'center'}}>
         <button className = 'container'>
         <i class="fa fa-home" aria-hidden="true"></i><p>Home</p>
         </button>
         <button className = 'container'>
         <i class="fa fa-user" aria-hidden="true"></i><p>View Profile</p>
         </button>
         <button className = 'container'>
         <i class="fa fa-pencil" aria-hidden="true"></i><p>Edit Profile</p>
         </button>
         <button className = 'container'>
         <i class="fa fa-users" aria-hidden="true"></i><p>Student Dashboard</p>
         </button>
         <button id = 'sp' className = 'container'>
         <i class="fa fa-shopping-cart" aria-hidden="true"></i><p>Subscription Plans</p>
         </button>
         <button className = 'container'>
         <i class="fa fa-font-awesome" aria-hidden="true"></i><p>My Plan</p>
         </button>
         </div>
        </div> 
        </div>   
        );
    }


}
export default Navbar;