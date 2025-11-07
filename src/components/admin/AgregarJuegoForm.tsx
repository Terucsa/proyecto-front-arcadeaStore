import { useForm } from "react-hook-form";
import { useState } from "react";
import {postJuegos} from "../../services/juegos/Juegos.services.ts";

type JuegoFormData = {
    nombreJuego: string;
    categoriaJuego: string;
    precio: number;
    logoJuego: FileList;
    juegoTerminado: boolean;
    categoriaEdad: string;
};

function AgregarJuegoForm() {
    const [previewSvg, setPreviewSvg] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<JuegoFormData>();

    const onSubmit = async (data: JuegoFormData) => {
        console.log("Datos del juego:", data);
        const respuesta = await postJuegos(data)
    };

    const handleSvgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === "image/svg+xml") {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewSvg(e.target?.result as string);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre del Juego *
                    </label>
                    <input
                        type="text"
                        className={`text-gray-900 placeholder:text-gray-500 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                            errors.nombreJuego ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Speed Racer"
                        {...register("nombreJuego", {
                            required: "El nombre del juego es obligatorio",
                            minLength: {
                                value: 2,
                                message: "El nombre debe tener al menos 2 caracteres"
                            }
                        })}
                    />
                    {errors.nombreJuego && (
                        <p className="text-red-500 text-xs mt-1">{errors.nombreJuego.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Categoría *
                    </label>
                    <select
                        className={`text-gray-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                            errors.categoriaJuego ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register("categoriaJuego", {
                            required: "La categoría es obligatoria"
                        })}
                    >
                        <option value="" className="text-gray-500">Selecciona una categoría</option>
                        <option value="Racing">Racing</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Action">Action</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Arcade">Arcade</option>
                    </select>
                    {errors.categoriaJuego && (
                        <p className="text-red-500 text-xs mt-1">{errors.categoriaJuego.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Precio (Q) *
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        className={`text-gray-900 placeholder:text-gray-500 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                            errors.precio ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="50.00"
                        {...register("precio", {
                            required: "El precio es obligatorio",
                            min: {
                                value: 0,
                                message: "El precio no puede ser negativo"
                            },
                            valueAsNumber: true
                        })}
                    />
                    {errors.precio && (
                        <p className="text-red-500 text-xs mt-1">{errors.precio.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Logo del Juego (SVG) *
                    </label>
                    <input
                        type="file"
                        accept=".svg, image/svg+xml"
                        className={`text-gray-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 ${
                            errors.logoJuego ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register("logoJuego", {
                            required: "El logo SVG es obligatorio",
                            validate: {
                                isSvg: (files) => {
                                    if (files && files[0]) {
                                        return files[0].type === "image/svg+xml" ||
                                            "El archivo debe ser un SVG";
                                    }
                                    return true;
                                }
                            }
                        })}
                        onChange={handleSvgChange}
                    />
                    {errors.logoJuego && (
                        <p className="text-red-500 text-xs mt-1">{errors.logoJuego.message}</p>
                    )}
                    {previewSvg && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 mb-2">Vista previa:</p>
                            <div
                                className="w-20 h-20 mx-auto"
                                dangerouslySetInnerHTML={{ __html: previewSvg }}
                            />
                        </div>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Categoría de Edad *
                    </label>
                    <select
                        className={`text-gray-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                            errors.categoriaEdad ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register("categoriaEdad", {
                            required: "La categoría de edad es obligatoria"
                        })}
                    >
                        <option value="" className="text-gray-500">Selecciona categoría de edad</option>
                        <option value="E">Everyone (E)</option>
                        <option value="+7">+7 años</option>
                        <option value="+12">+12 años</option>
                        <option value="+16">+16 años</option>
                        <option value="+18">+18 años</option>
                    </select>
                    {errors.categoriaEdad && (
                        <p className="text-red-500 text-xs mt-1">{errors.categoriaEdad.message}</p>
                    )}
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="juegoTerminado"
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        {...register("juegoTerminado")}
                    />
                    <label htmlFor="juegoTerminado" className="ml-2 block text-sm text-gray-700">
                        Juego Terminado
                    </label>
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                    >
                        Guardar Juego
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AgregarJuegoForm;