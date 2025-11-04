import './App.css';
import Header from './components/Header.tsx';
import CardJuegos from "./components/cards/CardJuegos.tsx";
import { Routes, Route } from "react-router-dom";
import Login from './components/login/Login.tsx';

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
                    <Route path="/loginRegister" element={<Login />} />
                </Routes>
            </div>
        </>
    );
}

export default App
