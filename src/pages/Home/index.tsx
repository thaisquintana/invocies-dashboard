import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AlertCircleIcon, ArchiveIcon, CreditCardIcon, FilePenIcon, PencilIcon, Trash2Icon, UserCheck2Icon, UserRoundXIcon } from 'lucide-react'

import { api } from '../../api'
import { Card } from '../../components/Card'
import { Table } from '../../components/Table'
import { columns } from '../../constants'
import { useToast } from '../../hooks/useToast'

export const Home: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const navigate = useNavigate()
  const { toastMessage } = useToast()

  const getSubscriptions = async () => {
    const response = await api.get('/subscriptions')
    setSubscriptions(response.data)
  }

  const handleCancelSubscription = async (id: string) => {
    api
    .get(`/subscriptions/${id}`)
    .then((response) => {
      api.put(`/subscriptions/${id}`, {
        ...response.data[0],
        status: 'Cancelado'
      })
      getSubscriptions()
      toastMessage({
        message: 'Assinatura cancelada com sucesso.',
        type: 'success',
        position: 'bottom-right'
      })
    })
    .catch(() => {
      toastMessage({
        message: 'Erro ao cancelar assinatura.',
        type: 'error',
        position: 'bottom-right'
      })
    })
  }

  const handleDelete = async (id: string) => {
    api
      .delete(`/subscriptions/${id}`)
      .then(() => {
        toastMessage({
          message: 'Assinatura excluída com sucesso.',
          type: 'success',
          position: 'bottom-right'
        })
        getSubscriptions()
      })
      .catch(() => {
        toastMessage({
          message: 'Erro ao excluir cadastro.',
          type: 'error',
          position: 'bottom-right'
        })
      })
  }

  const filterByActiveSubscriptions = async () => {
    const response = await api.get('/subscriptions?search=ativo')
    setSubscriptions(response.data)
  }

  const filterByCancelSubscriptions = async () => {
    const response = await api.get('/subscriptions?search=cancelado')
    if (response.data.lenght === 0) {
      setSubscriptions([])
      return
    } else {
      setSubscriptions(response.data)
      return
    }
  }

  useEffect(() => {
    if (subscriptions.length === 0) {
      getSubscriptions()
    }
  })

  const redirectAddNewSubscription = () => {
    navigate('/register-new-user')
  }

  return (
    <div className="p-8 h-screen">
      <ul className="grid gap-4 grid-cols-4 mb-20">
        <li>
          <Card icon={<CreditCardIcon size={20} color="#d8168a" />} title="Assinaturas ativas" label="Clube NewTrips" value="300.00,00" />
        </li>
        <li>
          <Card icon={<FilePenIcon size={20} color="#d8168a" />} title="Novos assinantes" label="Clube NewTrips" value="200/ dia" />
        </li>
        <li>
          <Card icon={<AlertCircleIcon size={20} color="#d8168a" />} title="Assinaturas canceladas" label="Clube NewTrips" value="50/dia" />
        </li>
        <li>
          <Card icon={<ArchiveIcon size={20} color="#d8168a" />} title="Contas desativadas" label="Clube NewTrips" value="1.000" />
        </li>
      </ul>
      <hr />
      <div className="mt-10">
        <h4 className="text-pink-500 font-semibold text-3xl">Assinaturas</h4>
        <label className="text-deep-space-sparkle text-base">Lista de assinaturas ativas e inativas</label>
      </div>
      <div className="my-4 flex justify-end">
        <div className="mr-2">
          <button
            className="bg-white border rounded-lg border-weldon-blue p-3 text-deep-space-sparkle  hover:text-warm-black hover:border-warm-black hover:bg-ghost-writer"
            onClick={async () => getSubscriptions()}
          >
            Mostrar todos
          </button>
        </div>
        <div className="mr-2">
          <button
            className="bg-white border rounded-lg border-weldon-blue p-3 text-deep-space-sparkle  hover:text-warm-black hover:border-warm-black hover:bg-ghost-writer"
            onClick={async () => filterByActiveSubscriptions()}
          >
            Mostrar ativos
          </button>
        </div>
        <div className="mr-2">
          <button
            className="bg-white border rounded-lg border-weldon-blue p-3 text-deep-space-sparkle hover:text-warm-black hover:border-warm-black hover:bg-ghost-writer"
            onClick={async () => filterByCancelSubscriptions()}
          >
            Mostrar cancelados
          </button>
        </div>
        <div className="mr-2">
          <button
            className="bg-pink-600 rounded-lg p-3 text-white hover:bg-pink-400"
            onClick={() => {
              redirectAddNewSubscription()
            }}
          >
            Adicionar nova assinatura
          </button>
        </div>
      </div>
      {subscriptions.length ? (
        <Table
          columns={columns}
          data={subscriptions}
          buttonActions={(id: number) => (
            <div className="flex gap-8">
              <div className="cursor-pointer">
                <Link to={`/edit-user-subscription/${id}`}>
                  <PencilIcon className="hoverIcon" />
                </Link>
              </div>
              <div className="cursor-pointer" onClick={async () => handleCancelSubscription(String(id))}>
                <UserRoundXIcon className="hoverIcon" />
              </div>
              <div className="cursor-pointer" onClick={async () => handleDelete(String(id))}>
                <Trash2Icon className="hoverIcon" />
              </div>
            </div>
          )}
        />
      ) : (
        <div className="flex justify-center my-20">
          <p className="text-gray-600">Não há dados para mostrar.</p>
        </div>
      )}
    </div>
  )
}
