import { PackageSearch, Settings, ShoppingBag, Box, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="h-screen w-64 bg-blue-950 flex flex-col p-4 rounded-tr-xl rounded-br-xl shadow-[0_0_0_4px_rgba(0,0,0,0.1),_0_0_4px_4px_#2662EC]">
            <h1 className="text-xl font-bold text-white mb-6">Admin Painel</h1>
            <ul className="flex flex-col space-y-4">
                {/* Link para Produtos - no Admin */}
                <li>
                    <Link to="/admin" className="flex items-center text-white p-2 rounded-lg hover:bg-blue-700 transition">
                        <PackageSearch className="w-5 h-5 mr-3" />
                        <span>Produtos</span>
                    </Link>
                </li>

                {/* Link para Capas */}
                <li>
                    <Link to="/admin/covers" className="flex items-center text-white p-2 rounded-lg hover:bg-blue-700 transition">
                        <Box className="w-5 h-5 mr-3" />
                        <span>Capas</span>
                    </Link>
                </li>

                {/* Link para Pedidos */}
                <li>
                    <Link to="/admin/orders" className="flex items-center text-white p-2 rounded-lg hover:bg-blue-700 transition">
                        <ShoppingBag className="w-5 h-5 mr-3" />
                        <span>Pedidos</span>
                    </Link>
                </li>

                {/* Link para Categorias */}
                <li>
                    <Link to="/admin/category" className="flex items-center text-white p-2 rounded-lg hover:bg-blue-700 transition">
                        <LayoutGrid className="w-5 h-5 mr-3" />
                        <span>Categorias</span>
                    </Link>
                </li>

                <hr className="my-4 border-t border-white/50" />

                {/* Link para Configurações */}
                <li>
                    <h3 className="text-sm text-white font-semibold mb-2">Configurações</h3>
                    <Link to="/admin/config" className="flex items-center text-white p-2 rounded-lg hover:bg-blue-700 transition">
                        <Settings className="w-5 h-5 mr-3" />
                        <span>Configurações</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
