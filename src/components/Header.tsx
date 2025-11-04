import {Gamepad2, ShoppingCart, User} from "lucide-react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50  bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Gamepad2 className="w-8 h-8 text-purple-500"/>
                        <span
                            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ARCADESTORE
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button"
                                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative">
                            <ShoppingCart className="w-6 h-6"/>
                            <span
                                className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                4
                            </span>
                        </button>
                        <Link
                            to="/loginRegister"
                            className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
                            <User className="w-4 h-4"/>
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;