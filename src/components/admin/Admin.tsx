import Table from "./Table.tsx";
import AgregarJuegoForm from "./AgregarJuegoForm.tsx";
import { useAdminViewStore } from "./hook/formularioTable.hook.ts";


function Admin() {
    const { currentView } = useAdminViewStore();
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 text-gray-800">
                {currentView === 'table'
                    ? 'Panel de Administración – Juegos'
                    : 'Agregar Nuevo Juego'
                }
            </h2>
            {currentView === 'table' ? (
                <Table />
            ) : (
                <AgregarJuegoForm />
            )
            }

        </div>
    );
}

export default Admin;