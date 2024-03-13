export const ROUTES = {
    MAIN: '/',
    CATALOG: '/catalog',
    CATALOG_FROM_ID: (id: string) => `/catalog/${id}`,
    ADDRESS: '/address',
    CART: '/cart',
    SUCCESS: '/success',
} as const
