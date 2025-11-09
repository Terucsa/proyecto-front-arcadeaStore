import { Play, HandCoins } from "lucide-react";
import {useEffect, useState} from "react";
import { getJuegos } from "../../services/card/cardJuegos.services.ts";
import { getClientesId, postAgregarCarrito } from "../../services/clientes/clienete.services.ts";
import {useHookUsuario} from "../login/hook/user.hook.ts";
import {useNavigate} from "react-router-dom";
import {postJuegos} from "../../services/juegos/Juegos.services.ts";

type Games = {
    _id: string;
    nombreJuego: string;
    categoriaJuego: string;
    precio: number;
    logoJuego: string;
    logoComJue: string;
    juegoTerminado: string;
    categoriaEdad: string;
}

function CardJuegos() {
    const [juegos, setJuegos] = useState<Games[]>([]);

    const navigate = useNavigate();
    const iniciarSesion = () => {
            navigate('/loginRegister');
    }

    const agregarAlCarrito = async (idJuego: string, idCliente: string) => {
        const respuesta = await postAgregarCarrito(idJuego, idCliente);

        console.log(respuesta.data);
    }

    const manejarClickBoton = async (_id: string) => {
        const autenticacion = useHookUsuario.getState().autenticacion;
        const idCliente = useHookUsuario.getState().user.id;
        if (!autenticacion) {
            iniciarSesion();
        } else {
            const respuesta = await getClientesId(_id, idCliente);

            if ( respuesta.status == "success" ) {
                console.log("hola mundo");
            } else {
                agregarAlCarrito(_id,idCliente);
            }
        }
    }

    useEffect(() => {
        const dataJuegos = async () => {
            const dataJuegos = await getJuegos();
            setJuegos(dataJuegos.data.juegos);
        }

        dataJuegos();
    }, [])

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
                    {
                        juegos.map((juego) =>
                            <div key={juego._id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl"></div>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: juego.logoJuego }}
                                        className="w-20 h-20 flex items-center justify-center relative z-10 [&_svg]:max-w-full [&_svg]:max-h-full"
                                    />
                                </div>
                                <div className="mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                        {juego.nombreJuego}
                                    </h3>
                                    <span className="mr-2 inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                                        {juego.nombreJuego}
                                    </span>
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                                        {juego.categoriaEdad}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                      <span className="text-2xl font-bold text-green-600">
                                        {juego.precio > 0 ? `Q ${juego.precio}.00` : "Gratis"}
                                      </span>
                                    <button
                                        onClick={() => manejarClickBoton(juego._id)}
                                        className="cursor-pointer p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200">
                                        {juego.precio > 0 ? <HandCoins className="w-5 h-5" />
                                            : <Play className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default CardJuegos;