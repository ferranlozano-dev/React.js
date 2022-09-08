import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Greetingf = (props) => {

    //Breve introduccion a useState
    //Nos permite crear un estado privado
    // const [variable, metodoParaActualizarla] = useState(valorInicial)
    const [age, setAge] = useState(23);

    const birthday = () => {
        //Actualizamos el setState
        setAge(age +1)
    }

    return (
        <div>
            <h1>¡HOLA { props.name } desde Barcelona!</h1>
            <h2>Tu edad es de: { age }</h2>

            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};

Greetingf.propTypes = {
    name: PropTypes.string
};

export default Greetingf;
