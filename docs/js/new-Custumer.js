import { Custumer } from './classes/Custumer.class.js';
import { createCustumerAPI } from './functions/crud-Custumer.js';
import { newAlert } from './functions/function.js';

( function() {

    const inputNombre = document.querySelector( '#nombre' );
    const inputEmail = document.querySelector( '#email' );
    const inputTelefono = document.querySelector( '#telefono' );
    const inputEmpresa = document.querySelector( '#empresa' );
    
    const validatorForm = e => {
        
        e.preventDefault();
        
        let listValuesInputs = [ inputNombre.value, inputEmail.value, inputTelefono.value, inputEmpresa.value ];

        listValuesInputs = listValuesInputs.map( input => input.trim() );

        if( listValuesInputs.includes( '' ) ) {

            newAlert( 'Todos Los Campos Son Obligatorios', 'error');
            return; 

        };

        const newId = Date.now();
        const newCustumer = new Custumer( ...listValuesInputs, newId );
        
        createCustumerAPI( newCustumer );

    };

    
    document.addEventListener( 'submit', validatorForm );

})();


