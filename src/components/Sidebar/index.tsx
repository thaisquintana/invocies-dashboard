import { HomeIcon, UserRoundCog, UserRoundMinus, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="p-8 w-full bg-slate-100 border border-slate-400">
      <ul>
        <li className="flex items-center gap-3 mb-4">
            <HomeIcon size={16} color="#d8168a"/>
          <Link to="/home" className="text-taupe-gray font-semibold">Início</Link>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <UserRoundPlus size={16} color="#d8168a"/>
          <Link to="/register-new-user" className="text-taupe-gray font-semibold">Cadastrar assinante</Link>
        </li>
        <li className="flex items-center gap-3 mb-4">
            <UserRoundCog size={16} color="#d8168a"/>
          <Link to="/edit-user-subscription" className="text-taupe-gray font-semibold">Editar assinatura</Link>
        </li>
        <li className="flex items-center gap-3 mb-4">
            <UserRoundMinus size={16} color="#d8168a"/>
          <Link to="/cancel-user-subscription" className="text-taupe-gray font-semibold">Cancelar assinatura</Link>
        </li>
      </ul>
    </div>
  );
};
