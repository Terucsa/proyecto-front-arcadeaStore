import { Gamepad2, ShoppingCart, User, LogOut, CirclePlus, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useHookUsuario } from "./login/hook/user.hook.ts";
import { useAdminViewStore } from "./admin/hook/formularioTable.hook.ts";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [tituloButton, setTituloButton] = useState({
        funcion: "form",
        nombre: "Agregar Juegos",
    });
    const autenticacion = useHookUsuario.getState().autenticacion;
    const { user } = useHookUsuario();
    const navigate = useNavigate();

    const { setCurrentView } = useAdminViewStore();

    const handleAgregarJuegos = () => {
        setCurrentView(tituloButton.funcion);
        if ( tituloButton.nombre === "Agregar Juegos" ) {
            setTituloButton({
                funcion: "table",
                nombre: "Juegos"
            })
        } else {
            setTituloButton({
                funcion: "form",
                nombre: "Agregar Juegos"
            })
        }
    };

    const cerrarSesion = () => {
        useHookUsuario.getState().logout();
        navigate("/");
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Gamepad2 className="w-8 h-8 text-purple-500" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ARCADESTORE
              </span>
                        </div>
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Menu className="w-6 h-6 text-purple-600" />
                        </button>
                        <div className="hidden md:flex items-center space-x-4">
                            {autenticacion ? (
                                <>
                                    {user?.rol === "user" ? (
                                        <button
                                            type="button"
                                            className="cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative"
                                        >
                                            <ShoppingCart className="w-6 h-6" />
                                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            4
                                         </span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleAgregarJuegos}
                                            className="cursor-pointer flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                                        >
                                            <CirclePlus className="w-6 h-6" />
                                            <span>{tituloButton.nombre}</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={cerrarSesion}
                                        className="cursor-pointer flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Cerrar Sesión</span>
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/loginRegister"
                                    className="cursor-pointer flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                                >
                                    <User className="w-4 h-4" />
                                    <span>Iniciar Sesión</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden bg-white/80 backdrop-blur-sm shadow-lg">
                        <div className="flex flex-col items-center space-y-3 py-4 px-4">
                            {autenticacion ? (
                                <>
                                    {user?.rol === "user" ? (
                                        <button
                                            type="button"
                                            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 font-medium"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                            <span>Carrito (4)</span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={cerrarSesion}
                                            className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md font-medium"
                                        >
                                            <CirclePlus className="w-5 h-5" />
                                            <span>Agregar Juegos</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={cerrarSesion}
                                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md font-medium"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Cerrar Sesión</span>
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/loginRegister"
                                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md font-medium"
                                >
                                    <User className="w-4 h-4" />
                                    <span>Iniciar Sesión</span>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Header;
