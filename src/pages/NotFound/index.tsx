import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-image.webp";

export const NotFound: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="mx-auto my-16 flex justify-between flex-col items-center">
            <div className="flex justify-center mb-4">
                <img src={Logo} alt="logo-company" className="w-3/12 rounded-full border-4 border-white"/>
            </div>

            <div className="flex justify-center flex-col items-center">
                <h3 className="text-weldon-blue font-bold text-7xl mb-4 opacity-40">404</h3>
                <h3 className="text-warm-black font-bold text-3xl mb-2">Página não encontrada!</h3>
                <label className="text-deep-space-sparkle font-light mb-8">Não foi possível encontrar a página que você tentou acessar.</label>
                <button className="w-3/12 bg-pink-600 rounded-lg p-3 text-white hover:bg-pink-400" onClick={() => navigate('/home')}>Voltar</button>
            </div>
        </div>
    )
}