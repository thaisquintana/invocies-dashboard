import {
  AlertCircleIcon,
  ArchiveIcon,
  CreditCardIcon,
  FilePenIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { columns, rows } from "../../constants";
import { useState } from "react";
import { Search } from "../../components/Search";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = Number(entity?.userCount) >= 60 ? 60 : 10
  const pageSize = 10 >= 60 ? 60 : 10;
  const navigate = useNavigate()
  const { toastMessage } = useToast()

  const handleDelete = (id: number) => {
    console.log(id);
    toastMessage({
      message: 'Assinatura cancelada com sucesso.',
      type: 'success',
      position: "bottom-right"
    })
  };

  const redirectAddNewSubscription = () => {
    navigate('/register-new-user')
  };

  const prevPageList = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };

  const nextPageList = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };
  //   const userCount = Number(entity?.userCount)
  const userCount = 1;
  const pageSizeCount =
    userCount >= 60 ? Math.ceil(userCount / 60) : Math.ceil(userCount / 10);

  return (
    <div className="p-8 h-screen">
      <ul className="grid gap-4 grid-cols-4 mb-20">
        <li>
          <Card
            icon={<CreditCardIcon size={20} color="#d8168a" />}
            title="Assinaturas ativas"
            label="Clube NewTrips"
            value="300.00,00"
          />
        </li>
        <li>
          <Card
            icon={<FilePenIcon size={20} color="#d8168a" />}
            title="Novos assinantes"
            label="Clube NewTrips"
            value="200/ dia"
          />
        </li>
        <li>
          <Card
            icon={<AlertCircleIcon size={20} color="#d8168a" />}
            title="Assinaturas canceladas"
            label="Clube NewTrips"
            value="50/dia"
          />
        </li>
        <li>
          <Card
            icon={<ArchiveIcon size={20} color="#d8168a" />}
            title="Contas desativadas"
            label="Clube NewTrips"
            value="1.000"
          />
        </li>
      </ul>
      <hr />
      <div className="mt-10">
        <h4 className="text-pink-500 font-semibold text-3xl">Assinaturas</h4>
        <label className="text-deep-space-sparkle text-base">
          Lista de assinaturas ativas e inativas
        </label>
      </div>
      <div className="my-2 flex justify-end">
        <Search />
      </div>
      <div className="my-4 flex justify-end">
        <div className="mr-2">
          <button className="bg-white border rounded-lg border-weldon-blue p-3 text-deep-space-sparkle  hover:text-warm-black hover:border-warm-black hover:bg-ghost-writer">
            Mostrar ativos
          </button>
        </div>
        <div className="mr-2">
          <button className="bg-white border rounded-lg border-weldon-blue p-3 text-deep-space-sparkle hover:text-warm-black hover:border-warm-black hover:bg-ghost-writer">
            Mostrar inativos
          </button>
        </div>
        <div className="mr-2">
          <button
            className="bg-pink-600 rounded-lg p-3 text-white hover:bg-pink-400"
            onClick={() => redirectAddNewSubscription()}
          >
            Adicionar nova assinatura
          </button>
        </div>
      </div>
      <Table
        columns={columns}
        data={rows}
        perPage={pageSize}
        currentPage={currentPage}
        totalData={userCount}
        nextPageList={() => {
          nextPageList();
        }}
        prevPageList={() => {
          prevPageList();
        }}
        pageCount={pageSizeCount}
        buttonActions={(id: number) => (
          <div className="flex gap-8">
            <div className="cursor-pointer">
              <Link to={`/edit-user-subscription/${id}`}>
                <PencilIcon className="hoverIcon" />
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => handleDelete(id)}>
              <Trash2Icon className="hoverIcon" />
            </div>
          </div>
        )}
      />
    </div>
  );
};
