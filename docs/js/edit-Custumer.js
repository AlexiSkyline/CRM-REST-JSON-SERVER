import { Custumer } from "./classes/Custumer.class.js";
import { DB, createDB } from "./Create-Data-Base.js";
import { readCustumerAPI, updateCustumerAPI } from "./functions/crud-Custumer.js";
import { clearInputs, newAlert } from "./functions/function.js";


( function() {

    let idCustumer;

    const inputName = document.querySelector( '#nombre' );
    const inputEmail = document.querySelector( '#email' );
    const inputTelephone = document.querySelector( '#telefono' );
    const inputCompany = document.querySelector( '#empresa' );

    const fillForm = ({ nombre, email, telefono, empresa }) => {

        inputName.value      = nombre;
        inputEmail.value     = email;
        inputTelephone.value = telefono;
        inputCompany.value   = empresa;

    }

    const updateCustumer = e => {

        e.preventDefault();

        let listValuesInputs = [ inputName.value, inputEmail.value, inputTelephone.value, inputCompany.value ];

        listValuesInputs = listValuesInputs.map( input => input.trim() );

        if( listValuesInputs.includes( '' ) ) {

            newAlert( 'Todos Los Campos Son Obligatorios', 'error');
            return; 

        };

        const newCustumerUpdate = new Custumer( ...listValuesInputs, Number( idCustumer ) );
        updateCustumerAPI( newCustumerUpdate );

    };


    document.addEventListener( 'DOMContentLoaded', async () => {
        
        const URLParams = new URLSearchParams( window.location.search );
        idCustumer = URLParams.get( 'id' );
        
        const requestCustumerAPI = await readCustumerAPI( idCustumer );
        fillForm( requestCustumerAPI );
        
        document.addEventListener( 'submit', updateCustumer );
    
    });

})();