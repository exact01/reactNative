import { View, Text } from 'react-native'
import { styles } from '../lib/'

import React from 'react'
import { CustomLinkEditAddress } from '@shared/ui'
import { ROUTES } from '@shared/lib/constants'
const CatalogFromId = ({ id }: { id: string }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Описание</Text>
                <CustomLinkEditAddress
                    href={ROUTES.CATALOG}
                    address='Обратно'
                />
            </View>
        </View>
    )
}

export default CatalogFromId
