import { useEffect, useState } from "react";
import { getJuegos } from "../../services/card/cardJuegos.services.ts";
import { useHookUsuario } from "../login/hook/user.hook.ts";
import { useNavigate } from "react-router-dom";

type Games = {
    _id: string;
    nombreJuego: string;
    categoriaJuego: string;
    precio: number;
    logoJuego: string;
    logoComJue: string;
    juegoTerminado: string;
    categoriaEdad: string;
};

function Table () {
    const [juegos, setJuegos] = useState<Games[]>([]);
    const navigate = useNavigate();

    const iniciarSesion = () => {
        const autenticacion = useHookUsuario.getState().autenticacion;
        if (!autenticacion) {
            navigate("/loginRegister");
        }
    };

    useEffect(() => {
        const dataJuegos = async () => {
            const dataJuegos = await getJuegos();
            setJuegos(dataJuegos.data.juegos);
        };

        dataJuegos();
    }, []);

    return (
        <>
            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm">
                <table className="table w-full">
                    <thead className="bg-gradient-to-r from-purple-200 to-pink-200 text-gray-700">
                    <tr>
                        <th className="text-center">Logo</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Edad</th>
                        <th>Precio</th>
                        <th className="text-center">Actualizar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {juegos.map((juego) => (
                        <tr
                            key={juego._id}
                            className="hover:bg-purple-50 transition-colors duration-150"
                        >
                            <td className="p-3 text-center">
                                <div
                                    dangerouslySetInnerHTML={{ __html: juego.logoJuego }}
                                    className="w-10 h-10 mx-auto [&_svg]:max-w-full [&_svg]:max-h-full"
                                />
                            </td>
                            <td className="font-semibold text-gray-800">
                                {juego.nombreJuego}
                            </td>
                            <td>
                                    <span className="badge badge-outline badge-primary text-xs">
                                        {juego.categoriaJuego}
                                    </span>
                            </td>
                            <td>
                                    <span className="badge badge-outline badge-success text-xs">
                                        {juego.categoriaEdad}
                                    </span>
                            </td>
                            <td className="text-green-600 font-semibold">
                                {juego.precio > 0 ? `Q ${juego.precio}.00` : "Gratis"}
                            </td>
                            <td className="text-center">
                                <button
                                    onClick={iniciarSesion}
                                    className="btn btn-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-blue-500 hover:to-purple-500 rounded-full px-4 py-1 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Actualizar datos
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {juegos.length === 0 && (
                    <div className="p-6 text-center text-gray-500">
                        No hay juegos disponibles.
                    </div>
                )}
            </div>

            {/* Vista de cards para móvil */}
            <div className="md:hidden space-y-4">
                {juegos.map((juego) => (
                    <div
                        key={juego._id}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-200"
                    >
                        <div className="flex items-start gap-4 mb-3">
                            <div
                                dangerouslySetInnerHTML={{ __html: juego.logoJuego }}
                                className="w-12 h-12 flex-shrink-0 [&_svg]:max-w-full [&_svg]:max-h-full"
                            />
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-800 text-lg mb-2 truncate">
                                    {juego.nombreJuego}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="badge badge-outline badge-primary text-xs">
                                        {juego.categoriaJuego}
                                    </span>
                                    <span className="badge badge-outline badge-success text-xs">
                                        {juego.categoriaEdad}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <span className="text-green-600 font-bold text-lg">
                                {juego.precio > 0 ? `Q ${juego.precio}.00` : "Gratis"}
                            </span>
                            <button
                                onClick={iniciarSesion}
                                className="btn btn-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-blue-500 hover:to-purple-500 rounded-full px-4 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Actualizar
                            </button>
                        </div>
                    </div>
                ))}

                {juegos.length === 0 && (
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center text-gray-500">
                        No hay juegos disponibles.
                    </div>
                )}
            </div>
        </>
    )
}

export default Table;