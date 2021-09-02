import { clearInputs, newAlert } from "./function.js";

const urlCRUDCustumer = 'http://localhost:8086/clientes';

const createCustumerAPI = async custumer => {

    try {

        await fetch( urlCRUDCustumer, {
            method: 'POST',
            body: JSON.stringify( custumer ),
            headers: {
                'Content-Type' : 'application/json',
            }  
        });

        newAlert( 'El Cliente se Agregó correctamento' );
        clearInputs();
        window.location.href = 'index.html';

    } catch (error) {
        newAlert( 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde', 'error' );
    }

}

const readCustumersApi = async() => {

    const answerAPI = await fetch( urlCRUDCustumer );
    
    return await answerAPI.json();
}

const updateCustumerAPI = async custumer  => {

    try {
        
        await fetch( `${ urlCRUDCustumer }/${ custumer.id }`, {
            method: 'PUT',
            body: JSON.stringify( custumer ),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        newAlert( 'Editado Correctamente' );
        clearInputs();
        window.location.href = 'index.html';

    } catch (error) {
        newAlert( 'Hubo un error al registrar el combio', 'error' );
    }

}

const deleteCustumerApi = async id  => {

    try {
        
        await fetch( `${ urlCRUDCustumer }/${ id }`, {
            method:'DELETE',
        });
        
    } catch (error) {
        newAlert( 'Ocurrio un problema al eliminarlo', 'error' );
    }

}


const readCustumerAPI = async id  => {

    const answerAPI = await fetch( `${ urlCRUDCustumer }/${ id }` );

    return await answerAPI.json();
}
export {
    createCustumerAPI,
    readCustumersApi,
    updateCustumerAPI,
    deleteCustumerApi,
    readCustumerAPI
}