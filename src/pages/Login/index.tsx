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
      <div className="bg-white w-3/12 rounded-lg  my-0 mx-auto p-8 flex flex-col">
        <h3 className="text-center mb-8 mt-4 font-semibold text-gray-600">
          Bem-vindo(a)!
        </h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="h-5 rounded-lg border border-midnight border-1 p-8 my-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="h-5 rounded-lg border border-midnight border-1 p-8 my-2"
        />
        <button className="w-full h-16 rounded-lg hover:bg-st-patricks-blue hover:text-white mt-8 flex items-center justify-center self-end bg-pink-700 text-pink-50 font-semibold" onClick={() => navigate(`${encodeURIComponent('/home')}`)}>
          Entrar
        </button>
      </div>
    </div>
  );
};
