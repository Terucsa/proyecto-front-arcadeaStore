import axios from 'axios';

const postLogin = async (correo: string, contrasenia: string, nombreUsuario: string) => {
    try{
        const resp = await axios.post('http://localhost:3001/auth',
            {correo, contrasenia, nombreUsuario},
        )
        return resp.data;
    }catch(e){
        console.log('Error obteniendo datos', e);
    }
}


export {
    postLogin,
}