import { FC } from 'react'

import { StyleSheet, View } from 'react-native'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { COLORS, RADIUS } from '@shared/lib/constants'

export const SkeletonCoffeeCard: FC = () => {
    return (
        <View style={styles.content}>
            <ContentLoader
                speed={2}
                backgroundColor={COLORS.black}
                foregroundColor={COLORS.opacityOrange}
                style={styles.content}>
                <Rect
                    ry={RADIUS.r16}
                    rx={RADIUS.r16}
                    width='149'
                    height='239'
                />
            </ContentLoader>
        </View>
    )
}

export const styles = StyleSheet.create({
    content: {
        width: 149,
        height: 239,
    },
})
