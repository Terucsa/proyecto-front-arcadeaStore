import axios from 'axios';

const getClientesId = async (idJuego: string, idCliente: string) =>  {
    try{
        const resp = await axios.get(`http://localhost:3001/clientes/${idJuego}/${idCliente}`);
        return resp.data;
    }catch(e){
        alert(e.response.data.message);
        return e.status;
    }
}

const postAgregarCarrito = async (idJuego: string, usuarioId: string) =>
{
    try{
        const resp = await axios.post('http://localhost:3001/clientes/insertCarrito',
            {idJuego,usuarioId},
        )
        return resp.data;
    }catch(e){
        console.log('Insertando datos', e);
    }
}

export {
    getClientesId,
    postAgregarCarrito
}