import { Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import IniciarSesion from './IniciarSesion';
import CrearCuenta from './CrearCuenta';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <Gamepad2 className="w-12 h-12 text-purple-500" />
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ARCADESTORE
                        </h1>
                    </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    <div className="flex space-x-2 mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`cursor-pointer flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                                isLogin
                                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-purple-50'
                            }`}
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={` cursor-pointer flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                                !isLogin
                                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-purple-50'
                            }`}
                        >
                            Crear Cuenta
                        </button>
                    </div>
                    {isLogin ? (
                        <IniciarSesion />
                    ) : (
                        <CrearCuenta />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;