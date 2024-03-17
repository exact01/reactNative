import { Animated, Dimensions, ImageBackground, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { animatedOpacity, animatedXY, styles } from '../lib'

import { CustomLink } from 'src/shared/ui'
import { ROUTES } from '@shared/lib/constants'

export const Main = () => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ImageBackground
                    source={require('assets/main.png')}
                    style={{
                        height: windowHeight / 1.5,
                        width: windowWidth,
                    }}
                    resizeMode='cover'>
                    <LinearGradient
                        colors={[
                            'transparent',
                            'rgba(0,0,0,0.2)',
                            'rgba(0,0,0,0.8)',
                        ]}
                        locations={[0.7, 0.85, 1.0]}
                        style={styles.linearGradient}
                    />
                </ImageBackground>
                <View style={styles.wrapper}>
                    <Animated.View style={styles.wrapperTitle}>
                        <Animated.Text
                            style={{
                                ...styles.title,
                                transform: [
                                    { translateX: animatedXY.x },
                                    { translateY: animatedXY.y },
                                ],
                                opacity: animatedOpacity,
                            }}>
                            Одно из самых вкусных кофе в городе!
                        </Animated.Text>
                        <Text style={styles.subtitle}>
                            Свежие зёрна, настоящая арабика и бережная обжарка
                        </Text>
                    </Animated.View>
                    <CustomLink
                        style={styles.link}
                        text='Начать'
                        href={ROUTES.CATALOG}
                    />
                </View>
            </View>
        </View>
    )
}
