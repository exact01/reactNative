import { IViewAddress } from '@features/viewAddress/ui/viewAddress.interfaces'
import { View, Text } from 'react-native'
import { CustomLinkEditAddress } from '@features/viewAddress/customLinkEditAddress'
import { ROUTES } from '@shared/lib/constants'

export function ViewAddress({ address }: IViewAddress) {
    return (
        <View>
            <Text>Адрес</Text>
            <View>
                <CustomLinkEditAddress
                    href={ROUTES.ADDRESS}
                    address={address}
                />
            </View>
        </View>
    )
}
