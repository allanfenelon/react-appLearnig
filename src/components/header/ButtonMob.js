import React from 'react';

export default class ButtonMob extends React.Component{
    constructor(){
        super();
        this.state={
            visNav:'flex'
        }
    }
    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            });
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }
    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src="/img/botao.png" alt="Botão Mobile" />
            </div>
        );
    }
}
