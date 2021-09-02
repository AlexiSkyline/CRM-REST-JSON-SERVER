
const formulario = document.querySelector( '#formulario' );

export const newAlert = ( message, typeMessage ) => {

    const newAlertaDiv = document.createElement( 'div' );
    newAlertaDiv.classList.add( 'px-4', 'py-3', 'rouded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta' );

    const classError    = [ 'bg-red-100', 'border-red-400', 'text-red-700' ];
    const classRight = [ 'bg-green-100', 'border-green-400', 'text-green-700' ];

    const wicthClass = ( typeMessage ) ? classError : classRight;
        
    newAlertaDiv.classList.add( ...wicthClass );


    newAlertaDiv.textContent = message;

    formulario.appendChild( newAlertaDiv );

    setTimeout(() => newAlertaDiv.remove(), 3000);

};

export const clearInputs = () => {

    const inputName      = document.querySelector( '#nombre' ).value = '';
    const inputEmail     = document.querySelector( '#email' ).value = '';
    const inputTelephone = document.querySelector( '#telefono' ).value = '';
    const inputCompany   = document.querySelector( '#empresa' ).value = '';

}