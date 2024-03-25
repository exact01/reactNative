import React from 'react'
import { View, TextInput, Image } from 'react-native'
import { COLORS } from '@shared/lib/constants'
import { styles } from '@features/searchInput/lib'

export const SearchInput: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@assets/images/search-normal.png')}
                style={styles.icon}
            />
            <TextInput
                style={styles.input}
                placeholder='Найти кофе'
                placeholderTextColor={COLORS.grayLight}
            />
        </View>
    )
}
