import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo-image.webp";

export const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-midnight h-screen my-0 mx-auto flex justify-center items-center flex-col">
      <div>
        <img
          src={Logo}
          alt="logo-company"
          className="w-2/12 mx-auto my-8 rounded-full border-4 border-white"
        />
      </div>
      <div className="bg-white w-6/12 rounded-lg h-3/6 my-0 mx-auto p-8 flex flex-col">
        <h3 className="text-center mb-8 mt-4 font-semibold text-gray-600">
          Bem-vindo(a)!
        </h3>
        <input
          type="email"
          name="email"
          placeholder="Digite o email"
          className="h-5 rounded-lg border border-midnight border-1 p-8 my-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Digite a senha"
          className="h-5 rounded-lg border border-midnight border-1 p-8 my-2"
        />
        <button className="size-5/12 rounded-lg hover:bg-st-patricks-blue hover:text-white mt-8 p-4 flex items-center justify-center self-end bg-pink-700 text-pink-50 font-semibold" onClick={() => navigate('/home')}>
          Entrar
        </button>
      </div>
    </div>
  );
};
