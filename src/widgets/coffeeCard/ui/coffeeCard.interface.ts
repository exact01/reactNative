import { IResponseCoffee } from '@entities/coffee/model/interfaces'

export interface ICoffeeCard {
    isLoading: boolean
    data: IResponseCoffee
}
