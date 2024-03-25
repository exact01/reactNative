import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {
    ICreateOrder,
    IResponseCoffee,
    IResponseOrder,
} from '@entities/coffee/model/interfaces'
import type {
    ICatalogInitialActionState,
    ICatalogInitialState,
} from '@entities/coffee/model/catalog.model'
import { instance } from '@shared/api'
import { CATALOG_API } from '@entities/coffee/api'
import { AxiosError } from 'axios'

const initialState: ICatalogInitialState = {
    coffees: null,
    coffee: null,
    uniqCoffeeNames: null,
    orderMessage: null,
    error: null,
    isLoading: false,
}

const createCoffeeSlice: StateCreator<
    ICatalogInitialState & ICatalogInitialActionState,
    [['zustand/devtools', never]],
    [],
    ICatalogInitialState & ICatalogInitialActionState
> = set => ({
    ...initialState,
    actions: {
        getCoffees: async () => {
            try {
                set({ isLoading: true })

                const { data } = await instance.get<IResponseCoffee[]>(
                    CATALOG_API.GET_ALL
                )
                set({ coffees: data }, false, 'getCoffees')
                const names = data.map(coffee => coffee.name)
                set({ uniqCoffeeNames: ['Все', ...new Set(names)] })
                setTimeout(() => {
                    set({ isLoading: false })
                }, 1000)
            } catch (e) {
                if (e instanceof AxiosError) {
                    set({ error: e.message })
                }
                set({ isLoading: false })
            }
        },
        getCoffee: async (id: string) => {
            try {
                set({ isLoading: true })
                const { data } = await instance.get<IResponseCoffee>(
                    CATALOG_API.GET_BY_ID(id)
                )
                set({ coffee: data }, false, 'getCoffee')
                set({ isLoading: false })
            } catch (e) {
                if (e instanceof AxiosError) {
                    set({ error: e.message })
                }
                set({ isLoading: false })
            }
        },
        postOrder: async (newOrder: ICreateOrder) => {
            try {
                set({ isLoading: true })
                const { data } = await instance.post<IResponseOrder>(
                    CATALOG_API.CREATE_ORDER,
                    newOrder
                )
                set({ orderMessage: data }, false, 'postOrder')
                set({ isLoading: false })
            } catch (e) {
                if (e instanceof AxiosError) {
                    set({ error: e.message })
                }
                set({ isLoading: false })
            }
        },
    },
})

export const useCatalogStore = create<
    ICatalogInitialState & ICatalogInitialActionState
>()(
    devtools((...args) => ({ ...createCoffeeSlice(...args) }), {
        name: 'CoffeeStorage',
    })
)

export const useCatalogCoffeesState = () =>
    useCatalogStore(state => state.coffees)

export const useCatalogUniqCoffeeNamesState = () =>
    useCatalogStore(state => state.uniqCoffeeNames)
export const useCatalogCoffeeState = () =>
    useCatalogStore(store => store.coffee)

export const useIsLoadingState = () => useCatalogStore(state => state.isLoading)
export const useCatalogOrderMessageState = () =>
    useCatalogStore(store => store.orderMessage)
export const useCatalogActions = () => useCatalogStore(store => store.actions)
