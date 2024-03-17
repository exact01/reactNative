import { Image, View, Text, SafeAreaView } from 'react-native'
import { styles } from '../lib'
import { CustomLink } from 'src/shared/ui'
import { ROUTES } from '@shared/lib/constants'
export default function Unmatched() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('@assets/images/pngegg.png')}
                    style={styles.image}
                />
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Ооо.. что-то пошло не так.</Text>
                    <Text style={styles.subTitle}>
                        Попробуйте вернуться на главный экран приложения
                    </Text>
                </View>
                <CustomLink
                    style={styles.link}
                    href={ROUTES.MAIN}
                    text='Перейти'
                />
            </View>
        </SafeAreaView>
    )
}
