import axios from "axios";

const postCrearUsuario = async (correo: string, contrasenia: string,
                                nombreUsuario: string) =>
{
    try{
        const resp = await axios.post('http://localhost:3001/usuarios',
            {correo, contrasenia, nombreUsuario},
        )
        return resp.data;
    }catch(e){
        console.log('Insertando datos', e);
    }
}

const postCrearCliente = async (usuarioId: string, nombreCompleto: string,
                apellidoCompleto: string) =>
{
    try{
        const resp = await axios.post('http://localhost:3001/clientes',
            {usuarioId, nombreCompleto, apellidoCompleto},
        )
        return resp.data;
    }catch(e){
        console.log('Insertando datos', e);
    }
}


export {
    postCrearUsuario,
    postCrearCliente,
}