import { View, Text } from 'react-native'
import { styles } from '../lib/'
import { CustomLinkEditAddress } from '@shared/ui'
import { ROUTES } from '@shared/lib/constants'
import React from 'react'
const Address = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Изменить адрес</Text>
                <CustomLinkEditAddress
                    href={ROUTES.CATALOG}
                    address='Обратно'
                />
            </View>
        </View>
    )
}

export default Address
