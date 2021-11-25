import React from 'react';
import Nav from './header/Nav';
import Address from './header/Address';
import Logo from './header/Logo';
import ButtonMob from './header/ButtonMob';


export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <ButtonMob /> 
                <Nav />
            </div>
        );
    }
}
