import { IViewAddress } from './viewAddress.interfaces'
import { View, Text, Image } from 'react-native'
import { stylesAddress } from '@features/viewAddress/lib'

export function ViewAddress({ address }: IViewAddress) {
    return (
        <View style={stylesAddress.wrapper}>
            <Text style={stylesAddress.label}>Адресс</Text>
            <View style={stylesAddress.wrapperAddress}>
                <Text style={stylesAddress.text}>{address}</Text>
                <Image
                    style={stylesAddress.icon}
                    source={require('@assets/images/Icon_edit.png')}
                />
            </View>
        </View>
    )
}
