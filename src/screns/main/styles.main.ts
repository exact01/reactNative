import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/constants'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
    content: {
        alignItems: 'center',
        margin: 0,
        padding: 0,
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    wrapper: {
        transform: [{ translateY: -30 }],
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    wrapperTitle: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 34,
        fontWeight: '600',
        lineHeight: 43,
        color: '#fff',
        margin: 0,
        paddingTop: 0,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        opacity: 0.5,
        color: '#fff',
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 0,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 24,
        margin: 0,
        textAlign: 'center',
    },
})
