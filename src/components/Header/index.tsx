import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo-image.webp";

export const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <header className="bg-midnight h-20 p-8 my-0 mx-auto flex items-center text-white justify-between">
            <div>
                <img src={Logo} alt="logo-company" className="w-1/12 rounded-full border-4 border-white"/>
            </div>
            <div>
                <button onClick={() => navigate('/')}>Sair</button>
            </div>
        </header>
    )
}