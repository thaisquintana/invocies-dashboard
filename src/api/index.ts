import axios from 'axios'

export const baseURL = import.meta.env.VITE_FRONT_END_GRAPHQL_ENDPOINT as string

export const api = axios.create({
  baseURL: baseURL
})
