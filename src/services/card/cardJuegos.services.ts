import axios from 'axios';

const getJuegos = async () =>  {
    try{
        const resp = await axios.get('http://localhost:3001/juegos')
        return resp.data;
    }catch(e){
        console.log('Obteniendo datos', e);
    }
}

export {
    getJuegos,
}