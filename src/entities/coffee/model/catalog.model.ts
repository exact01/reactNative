import type {
    ICreateOrder,
    IResponseCoffee,
    IResponseOrder,
} from '@entities/coffee/model/interfaces'

export interface ICatalogInitialState {
    coffees: IResponseCoffee[] | null
    coffee: IResponseCoffee | null
    uniqCoffeeNames: string[] | null
    orderMessage: IResponseOrder | null
    error: string | null
    isLoading: boolean
}

export interface ICatalogInitialActionState {
    actions: {
        getCoffees: () => Promise<void>
        getCoffee: (id: string) => Promise<void>
        postOrder: (order: ICreateOrder) => void
    }
}
