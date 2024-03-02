import { Button, Text, View } from 'react-native'
import { styles } from './styles.main'
export const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Одно из самых вкусных кофе в городе!</Text>
                <Text>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                <Button title={'Начать'}/>
            </View>
        </View>
    )
}

