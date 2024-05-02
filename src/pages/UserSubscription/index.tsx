import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowLeftIcon } from 'lucide-react'

import { api } from '../../api'
import { useSubscription } from './hooks/useSubscription'
export const UserSubscription: React.FC = () => {
  const { schemaValidation, handleUpdateData, navigate, handleSubmitData } = useSubscription()

  const params = useParams()
  const subscriptionId = params.id

  const [statusPlan, setStatusPlan] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const reactivatePlan = statusPlan === 'Cancelado'

  const {
    register,
    reset,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      address: '',
      cep: '',
      state: '',
      city: '',
      status: '',
      plan: ''
    },
    resolver: yupResolver(schemaValidation)
  })

  useEffect(() => {
    if (subscriptionId) {
      if (subscriptionId) {
        api.get(`/subscriptions/${subscriptionId}`).then((res) => {
          reset(res.data[0])
          setStatusPlan(res.data[0].status)
        })
      }
    }
  }, [reset])

  const titleSection = subscriptionId ? 'Editar assinatura' : 'Nova assinatura'

  const handleSubmit = (data: any) => {
    if (subscriptionId) {
      const reactivatePlan = statusPlan ? 'Ativo' : 'Cancelado'
      handleUpdateData(data, subscriptionId, reactivatePlan)
    } else {
      handleSubmitData(data)
    }
  }

  return (
    <>
      <div className="mb-4 mt-4 p-8 ">
        <button
          className="flex items-center bg-warm-black font-semibold text-alice-blue p-4 rounded"
          onClick={() => {
            navigate('/home')
          }}
        >
          <ArrowLeftIcon color="#f1f7fc" size={18} style={{ marginRight: 8 }} />
          Voltar
        </button>
      </div>
      <div className="p-4 m-4 w-6/12">
        <div className="mx-4 mb-8 w-6/12 ">
          <h2 className="mb-4 text-deep-space-sparkle font-semibold text-3xl">{titleSection}</h2>
          <label className="text-deep-space-sparkle font-light">Todos os campos são de preenchimento obrigatório.</label>
        </div>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="flex flex-col m-4">
            <label htmlFor="name" className="text-gray-500 font-semibold">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Nome"
              id="name"
              {...register('name')}
              className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
            <span className="text-red-500 text-sm">{errors.name?.message}</span>
          </div>
          <div className="flex flex-col m-4">
            <label htmlFor="cpf" className="text-gray-500 font-semibold">
              CPF:
            </label>
            <input
              type="number"
              id="cpf"
              placeholder="CPF"
              {...register('cpf')}
              className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
            <span className="text-red-500 text-sm">{errors.cpf?.message}</span>
          </div>
          <div className="flex flex-row m-4 6/12">
            <div className="flex-2 w-3/6">
              <label htmlFor="address" className="text-gray-500 font-semibold">
                Endereço:
              </label>
              <input
                type="address"
                {...register('address')}
                id="address"
                placeholder="address"
                className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
              />
              <span className="text-red-500 text-sm">{errors.address?.message}</span>
            </div>
            <div className="ml-2 w-3/6">
              <label htmlFor="cep" className="text-gray-500 font-semibold">
                CEP:
              </label>
              <input
                type="number"
                {...register('cep')}
                id="cep"
                placeholder="CEP"
                className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
              />
              <span className="text-red-500 text-sm">{errors.cep?.message}</span>
            </div>
          </div>
          <div className="flex flex-row m-4 6/12">
            <div className="flex-2 w-3/6">
              <label htmlFor="state" className="text-gray-500 font-semibold">
                Estado:
              </label>
              <input
                type="text"
                {...register('state')}
                id="state"
                placeholder="Estado"
                className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
              />
              <span className="text-red-500 text-sm">{errors.state?.message}</span>
            </div>
            <div className="ml-2 w-3/6">
              <label htmlFor="city" className="text-gray-500 font-semibold">
                Cidade:
              </label>
              <input
                type="text"
                {...register('city')}
                id="city"
                placeholder="Cidade"
                className="w-full text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
              />
              <span className="text-red-500 text-sm">{errors.city?.message}</span>
            </div>
          </div>
          <div className="flex flex-col m-4">
            <label htmlFor="email" className="text-gray-500 font-semibold">
              Email:
            </label>
            <input
              type="email"
              {...register('email')}
              id="email"
              placeholder="Email"
              className="text-gray-500 h-5 rounded-lg border border-midnight border-1 p-8 my-2"
            />
            <span className="text-red-500 text-sm">{errors.email?.message}</span>
          </div>
          <div className="flex flex-col m-4">
            <label htmlFor="plans-select" className="text-gray-500 font-semibold">
              Plano:
            </label>
            <select
              id="plans-select"
              className="h-full rounded-lg border border-midnight border-1 p-4 my-2 text-taupe-gray"
              defaultValue={''}
              {...register('plan')}
            >
              <option value="" className="text-gray-500 font-semibold">
                Escolha um plano
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
            {subscriptionId ? (
              <>
                {reactivatePlan ? (
                  <button
                    type="submit"
                    className="w-4/12 h-16 rounded-lg hover:bg-pink-400 hover:text-white mt-8 mx-4 bg-pink-700 text-pink-50  font-semibold"
                    onClick={() => {
                      setIsChecked(!isChecked)
                    }}
                  >
                    Reativar assinatura
                  </button>
                ) : (
                  <></>
                )}

                <button
                  type="submit"
                  className="w-4/12 h-16  disabled:bg-slate-200 disabled:text-gray-400 rounded-lg hover:bg-pink-400 hover:text-white mt-8 mx-4 bg-pink-700 text-pink-50 font-semibold"
                  disabled={reactivatePlan}
                >
                  Atualizar assinatura
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="w-4/12 h-16 rounded-lg disabled:bg-slate-200 disabled:text-gray-400 hover:bg-pink-400 hover:text-white mt-8 mx-4 bg-pink-700 text-pink-50 font-semibold"
              >
                Criar assinatura
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
