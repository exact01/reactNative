import { FC } from 'react'
import { ViewAddress } from '@features/viewAddress'
import { styles } from '../lib'
import { View } from 'react-native'
import { SearchInput } from '@features/searchInput/ui'

export const LocationSearchBar: FC = () => {
    return (
        <View style={styles.content}>
            <ViewAddress address={'Москва, Новослободская 23'} />
            <SearchInput />
        </View>
    )
}
