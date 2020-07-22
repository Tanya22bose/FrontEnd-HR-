import React from 'react';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

class Body extends React.Component {

    render(){

        var navbar = <Navbar/>
        var footer = <Footer/>
        var header = <Header/>

        return(
            <div id = 'al'>
            {header}
            <div className = 'list'>
            <div className = 'planbox1'>
            <h3 id='head'>Ultimate Plan</h3>
            </div>
            <h2 id='rs1'>Rs. 699</h2>
            <p id = 'val' style = { { textAlign : 'center'}}>Validaity - 30 Days</p>
            <p style = { { textAlign : 'center'}}id='val1'>Can Visit 32 Profiles</p>
            <div className = 'buy1'>
            <div id='head1' style = { { textAlign : 'center'}}>Buy Plan</div>
            </div>
            </div>
            <div className = 'list1'>
            <div className = 'planbox2'>
            <h3 id='head2'>Premium Plan</h3>
            </div>
            <h2 id='rs1'>Rs. 599</h2>
            <p id = 'val' style = { { textAlign : 'center'}}>Validaity - 14 Days</p>
            <p style = { { textAlign : 'center'}}id='val1'>Can Visit 15 Profiles</p>
            <div className = 'buy1'>
            <div id='head1' style = { { textAlign : 'center'}}>Buy Plan</div>
            </div>
            </div>
            <div className = 'list2'>
            <div className = 'planbox3'>
            <h3 id='head3'>Initial Plan</h3>
            </div>
            <h2 id='rs1'>Rs. 399</h2>
            <p id = 'val' style = { { textAlign : 'center'}}>Validaity - 10 Days</p>
            <p style = { { textAlign : 'center'}}id='val1'>Can Visit 10 Profiles</p>
            <button><div className = 'buy1'>
            <div id='head1' style = { { textAlign : 'center'}}>Buy Plan</div>
            </div></button>
            </div>
            {navbar}
            {footer}
            </div>

        )
    }
}

export default Body;