export interface ICreateOrder {
    address: string
    orderItems: IParamCoffee[]
}

export type TSizesCoffee = 'L' | 'Z' | 'M'
export interface IParamCoffee {
    id: number
    size: TSizesCoffee
    quantity: number
}
