import { Mail, Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { postLogin} from "../../services/login/iniciarSesion.services.ts";
import { useHookUsuario } from "./hook/user.hook.ts";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
    correo: string;
    contrasenia: string;
    nombreUsuario: string;
};

function IniciarSesion() {
    const  navigate = useNavigate();
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin },
    } = useForm<LoginFormData>();

    const onLoginSubmit = async (data: LoginFormData) => {
        const respuestaLogin =  await postLogin(data.correo, data.contrasenia, data.nombreUsuario);
        let userData = {};

        if (respuestaLogin.data) {
            userData = {
                id: respuestaLogin.data.id,
                rol: respuestaLogin.data.rol,
                token: respuestaLogin.data.token,
            };
        }
        useHookUsuario.getState().login(userData);
        if ( respuestaLogin.data.rol === 'user' )  {
            navigate('/');
        } else {
            navigate('/admin');
        }

    };

    return (
        <form onSubmit={handleSubmitLogin(onLoginSubmit)} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usuario
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Juan Perez"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsLogin.nombreUsuario ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerLogin('nombreUsuario', {
                            required: 'El usuario es obligatorio',
                            maxLength: {
                                value: 15,
                                message: 'El usuario no puede tener más 15 carateres',
                            },
                        })}
                    />
                </div>
                {errorsLogin.nombreUsuario && (
                    <p className="text-red-500 text-xs mt-1">{errorsLogin.nombreUsuario.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsLogin.correo ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerLogin('correo', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                </div>
                {errorsLogin.correo && (
                    <p className="text-red-500 text-xs mt-1">{errorsLogin.correo.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contraseña
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsLogin.contrasenia ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerLogin('contrasenia', {
                            required: 'La contraseña es obligatoria',
                            minLength: {
                                value: 5,
                                message: 'La contraseña debe tener al menos 5 caracteres',
                            },
                        })}
                    />
                </div>
                {errorsLogin.contrasenia && (
                    <p className="text-red-500 text-xs mt-1">{errorsLogin.contrasenia.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium cursor-pointer"
            >
                Iniciar Sesión
            </button>
        </form>
    );
}

export default IniciarSesion;