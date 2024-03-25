import axios from 'axios'

export const BASE_URL = 'https://purpleschool.ru/'

export const instance = axios.create({
    baseURL: BASE_URL,
})
