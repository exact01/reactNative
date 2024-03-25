import { StyleSheet } from 'react-native'
import { COLORS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
        borderRadius: 20,
        paddingTop: 10,
        paddingLeft: 48,
        paddingBottom: 10,
        paddingRight: 10,
        height: 52,
        marginTop: 35,
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        width: 20,
        height: 20,
        left: 18,
    },
    input: {
        fontSize: 16,
        color: COLORS.white,
    },
})
