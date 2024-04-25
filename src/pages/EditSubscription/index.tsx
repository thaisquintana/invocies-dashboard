export const EditSubscription: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submite");
  };
  return (
    <div className="p-4 m-4 w-6/12">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col m-4">
          <label htmlFor="name" className="text-gray-500 font-semibold">
            Nome:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            id="name"
            className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="cpf" className="text-gray-500 font-semibold">
            CPF:
          </label>
          <input
            type="cpf"
            name="cpf"
            id="cpf"
            placeholder="CPF"
            className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
          />
        </div>
        <div className="flex flex-row m-4 6/12">
          <div className="flex-2 w-3/6">
            <label htmlFor="address" className="text-gray-500 font-semibold">
              Endereço:
            </label>
            <input
              type="address"
              name="address"
              id="address"
              placeholder="address"
              className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
          </div>
          <div className="ml-2 w-3/6">
            <label htmlFor="cep" className="text-gray-500 font-semibold">
              CEP:
            </label>
            <input
              type="cep"
              name="cep"
              id="cep"
              placeholder="CEP"
              className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
          </div>
        </div>
        <div className="flex flex-row m-4 6/12">
          <div className="flex-2 w-3/6">
            <label htmlFor="state" className="text-gray-500 font-semibold">
              Estado:
            </label>
            <input
              type="state"
              name="state"
              id="state"
              placeholder="Estado"
              className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
          </div>
          <div className="ml-2 w-3/6">
            <label htmlFor="city" className="text-gray-500 font-semibold">
              Cidade:
            </label>
            <input
              type="city"
              name="city"
              id="city"
              placeholder="Cidade"
              className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="email" className="text-gray-500 font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
          />
        </div>
        <div className="flex flex-col m-4">
          <label className="text-gray-500 font-semibold">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="plans-select" className="text-gray-500 font-semibold">
            Plano:
          </label>
          <select
            name="planos"
            id="plans-select"
            className="h-full rounded-lg border border-midnight border-1 p-4 my-2 text-taupe-gray"
          >
            <option value="" className="text-gray-500 font-semibold">
              {" "}
              Escolha um plano{" "}
            </option>
            <option value="explorer" className="text-taupe-gray">
              Explorer
            </option>
            <option value="planet" className="text-taupe-gray">
              Planet
            </option>
            <option value="sky" className="text-taupe-gray">
              Sky
            </option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="w-4/12 h-16 rounded-lg hover:bg-st-patricks-blue hover:text-white mt-8 mx-4 bg-pink-700 text-pink-50 font-semibold"
            onSubmit={handleSubmit}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};
