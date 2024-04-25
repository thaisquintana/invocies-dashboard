import { Search } from "lucide-react";

export const CancelSubscription: React.FC = () => {
  const handleSearch = () => {
    console.log("search");
  };
  return (
    <div className="mt-10 w-8/12 mx-auto my-0 h-screen">
      <div className="flex items-center relative max-w-screen-xl">
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg w-full p-3 border	border-gray-500 bg-transparent text-gray-700 placeholder-gray-700 focus:border-blue-500 focus:bg-gray-200 focus-visible:outline-none lowercase"
          onKeyDown={handleSearch}
          onChange={(e) => console.log(e.target.value.toLowerCase())}
        />
        <Search className="absolute right-4 text-gray-700" />
      </div>
      <div className="mt-10 p-2">
        <div className="flex">
          <p>Nome do ser humano</p>
          <p>serhumano@gmail.com</p>
        </div>
        <div className="flex">
          <p>Endereço: Rua das casas numeros 0 - CEP: 000000-00</p>
          <p>São Paulo / SP</p>
        </div>
        <div>
          <p>CPF: 000.000.000-00</p>
        </div>
        <div className="flex justify-end">
          <button
            className="w-3/12 h-16 rounded-lg hover:bg-st-patricks-blue hover:text-white mt-8 bg-pink-700 text-pink-50 font-semibold"
          >
            Cancelar assinatura
          </button>
        </div>
      </div>
    </div>
  );
};
