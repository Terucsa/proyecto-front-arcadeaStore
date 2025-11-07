import './App.css';
import Header from './components/Header.tsx';
import Login from './components/login/Login.tsx';
import CardJuegos from "./components/cards/CardJuegos.tsx";
import Admin from   "./components/admin/Admin.tsx"
import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <CardJuegos />
                        </>
                    } />
                    <Route path="/loginRegister" element={
                        <Login />
                    } />
                    <Route path="/admin" element={
                        <>
                            <Header />
                            <Admin />
                         </>
                    } />
                </Routes>
            </div>
        </>
    );
}

export default App
