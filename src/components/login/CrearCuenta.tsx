import { Mail, Lock, User, UserPen } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { postCrearUsuario, postCrearCliente } from "../../services/login/crearCuenta.services.ts";

type RegisterFormData = {
    nombreUsuario: string;
    nombreCompleto: string;
    apellidoCompleto: string;
    correo: string;
    contrasenia: string;
};

function CrearCuenta() {
    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: errorsRegister }
    } = useForm<RegisterFormData>();

    const onRegisterSubmit = async (data: RegisterFormData) => {
        const respuestaUsuario = await postCrearUsuario(data.correo,
            data.contrasenia, data.nombreUsuario);
        data["usuarioId"] = respuestaUsuario.data;
        const respuestaCliente = await postCrearCliente( data.usuarioId,data.nombreCompleto,
            data.apellidoCompleto );
        console.log(respuestaCliente);
    };

    return (
        <form onSubmit={handleSubmitRegister(onRegisterSubmit)} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usuario
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Juan"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsRegister.nombreUsuario ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerRegister('nombreUsuario', {
                            required: 'El nombre de usuario es obligatorio',
                            maxLength: {
                                value: 15,
                                message: 'El nombre de usurio no debe tener más de 15 caracteres',
                            },
                        })}
                    />
                </div>
                {errorsRegister.nombreUsuario && (
                    <p className="text-red-500 text-xs mt-1">{errorsRegister.nombreUsuario.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombres:
                </label>
                <div className="relative">
                    <UserPen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Belter Emanuel"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsRegister.nombreCompleto ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerRegister('nombreCompleto', {
                            required: 'Los nombres son obligatorio',
                            maxLength: {
                                value: 25,
                                message: 'Los nombres no debe tener más de 25 caracteres',
                            },
                        })}
                    />
                </div>
                {errorsRegister.nombreCompleto && (
                    <p className="text-red-500 text-xs mt-1">{errorsRegister.nombreCompleto.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellidos:
                </label>
                <div className="relative">
                    <UserPen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Vásquez Flores"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsRegister.apellidoCompleto ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerRegister('apellidoCompleto', {
                            required: 'Los apellidos son obligatorio',
                            maxLength: {
                                value: 25,
                                message: 'Los apellidos no debe tener más de 25 caracteres',
                            },
                        })}
                    />
                </div>
                {errorsRegister.apellidoCompleto && (
                    <p className="text-red-500 text-xs mt-1">{errorsRegister.apellidoCompleto.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder:text-gray-700 text-gray-900 ${
                            errorsRegister.correo ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerRegister('correo', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                </div>
                {errorsRegister.correo && (
                    <p className="text-red-500 text-xs mt-1">{errorsRegister.correo.message}</p>
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
                            errorsRegister.contrasenia ? 'border-red-500' : 'border-gray-200'
                        }`}
                        {...registerRegister('contrasenia', {
                            required: 'La contraseña es obligatoria',
                            minLength: {
                                value: 5,
                                message: 'La contraseña debe tener al menos 5 caracteres',
                            },
                        })}
                    />
                </div>
                {errorsRegister.contrasenia && (
                    <p className="text-red-500 text-xs mt-1">{errorsRegister.contrasenia.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">Mínimo 5 caracteres</p>
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
                Crear Cuenta
            </button>
        </form>
    )
}

export default CrearCuenta;