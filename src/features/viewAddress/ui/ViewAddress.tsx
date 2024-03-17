import { IViewAddress } from './viewAddress.interfaces'
import { View, Text } from 'react-native'
import { CustomLinkEditAddress } from '@shared/ui'
import { ROUTES } from '@shared/lib/constants'

export function ViewAddress({ address }: IViewAddress) {
    return (
        <View>
            <Text>Адрес</Text>
            <View>
                <CustomLinkEditAddress
                    href={'/dsadasd'}
                    address='Перейти на unmatched'
                />
                <CustomLinkEditAddress
                    href={ROUTES.CATALOG}
                    address={'Каталог'}
                />
                <CustomLinkEditAddress
                    href={ROUTES.CATALOG_FROM_ID('id')}
                    address={'Каталог id'}
                />
                <CustomLinkEditAddress
                    href={ROUTES.ADDRESS}
                    address={'Адрес'}
                />
                <CustomLinkEditAddress href={ROUTES.CART} address={'Успех'} />
                <CustomLinkEditAddress href={ROUTES.CART} address={'Корзина'} />
            </View>
        </View>
    )
}
