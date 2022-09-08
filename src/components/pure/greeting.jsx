import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    //Propiedad -> props (que datos le debo pasar)
    constructor(props){
        super(props);
        this.state = {
            age: 23
        }
    }

    render() {
        return (
            <div>
                <h1>¡HOLA { this.props.name }!</h1>
                <h2>Tu edad es de: { this.state.age }</h2>

                <div>
                {/*Boton para llamar a la función birthday 
                Y se actualicen los años*/}
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    //Tipo flecha
    
    birthday = () => {
        this.setState((prevState) => ({
            age: prevState.age +1
        }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
