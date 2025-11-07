import { create } from "zustand";
import { persist } from 'zustand/middleware';

type Usuario =  {
    id: string;
    rol: string;
    token: string;
}
type Store = {
    user: Usuario | null;
    autenticacion: boolean;
    login: (userData: Usuario) => void;
    logout: () => void;
}

const useHookUsuario = create<Store>()(
    persist(
        (set) => ({
            user: null,
            autenticacion: false,
            login: (userData: Usuario) =>
                set(
                    {
                    user: userData,
                    autenticacion: true
                }),
            logout: () =>
                set({
                    user: null,
                    autenticacion: false
                }),
        }),
        {
            name: 'auth-storage',
        }
    )
);

export { useHookUsuario };