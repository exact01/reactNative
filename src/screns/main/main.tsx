import { Dimensions, ImageBackground, Text, View } from 'react-native'
import { styles } from './styles.main'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '../../components/UI/button'

export const Main = () => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ImageBackground
                    source={require('../../assets/main.png')}
                    style={{
                        height: windowHeight / 1.5,
                        width: windowWidth,
                    }}
                    resizeMode='cover'
                >
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
                        locations={[0.7, 0.85, 1.0]}
                        style={styles.linearGradient}
                    />
                </ImageBackground>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
                    <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                    <Button text={'Начать'}/>
                </View>
            </View>
        </View>
    )
}

