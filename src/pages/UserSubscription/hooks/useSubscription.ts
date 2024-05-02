import { useNavigate } from "react-router-dom";
import { useToast } from "../../../hooks/useToast";
import { useState } from "react";
import {object, string} from "yup";
import { api } from "../../../api";
import { FormSchema } from "../types";


export const useSubscription = () => {
  const { toastMessage } = useToast();
  const navigate = useNavigate();
  const [subscriptionData, setSubscriptionData] = useState<FormSchema>()

  const getSubscriptionById = async (id: string) => {
    const response = await api.get(`/subscriptions/${id}`)
    return setSubscriptionData(response.data[0])
  }

  const handleSubmitData = (data: FormSchema) => {
    api.post('/subscriptions', {
      name: data.name,
      email: data.email,
      plan: data.plan,
      status: "Ativo",
      address: data.address,
      cep: data.cep,
      cpf: data.cpf,
      state: data.state,
      city: data.city
    })
    .then(() => {
      toastMessage({
        message: 'Cadastro criado com sucesso.',
        type: 'success',
        position: 'top-right'
      })
      navigate('/home')
    })
    .catch((err => {
      console.log(err)
      toastMessage({
        message: 'Erro ao criar cadastro.',
        type: 'error',
        position: 'top-right'
      })
    }))
  }
 
  const handleUpdateData = (data: FormSchema, id: string, status: string) => {
    api.put(`/subscriptions/${id}`, {
      ...data,
      status
    })
    .then(() => {
      toastMessage({
        message: 'Assinatura atualizada com sucesso.',
        type: 'success',
        position: 'top-right'
      })
      navigate('/home')
    })
    .catch((err => {
      console.log(err)
      toastMessage({
        message: 'Erro ao atualizar assinatura.',
        type: 'error',
        position: 'top-right'
      })
    }))
  }
  

  const schemaValidation = object({
    name: string().required("Campo obrigatório"),
    address: string().required("Campo obrigatório"),
    cep: string().required("Campo obrigatório").min(7, "CEP incompleto.").max(8, "CEP inválido"),
    cpf: string().required("Campo obrigatório").min(10, "CPF incompleto").max(11, "CPF inválido."),
    state: string().required("Campo obrigatório"),
    city: string().required("Campo obrigatório"),
    email: string().email("Email inválido").required("Campo obrigatório"),
    plan: string().required("Campo obrigatório"),
    status: string()
  })
  
  return {
    navigate,
    toastMessage,
    getSubscriptionById,
    handleSubmitData,
    handleUpdateData,
    subscriptionData,
    schemaValidation
  };
};
