import axios from 'axios';

type JuegoFormData = {
    nombreJuego: string;
    categoriaJuego: string;
    precio: number;
    logoJuego: string;
    juegoTerminado: boolean;
    categoriaEdad: string;
};

const postJuegos = async (juegoData: JuegoFormData) => {
    try {
        const resp = await axios.post('http://localhost:3001/juegos',
            {
                nombreJuego: juegoData.nombreJuego,
                categoriaJuego: juegoData.categoriaJuego,
                precio: juegoData.precio,
                logoJuego: juegoData.logoJuego,
                juegoTerminado: juegoData.juegoTerminado,
                categoriaEdad: juegoData.categoriaEdad
            },
        );
        return resp.data;
    } catch (e) {
        console.log('Error insertando datos del juego', e);
        throw e;
    }
}
export {
    postJuegos,
}