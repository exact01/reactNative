import { Stack, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { COLORS } from '@shared/lib/constants'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
    const insets = useSafeAreaInsets()
    const [fontsLoaded, fontError] = useFonts({
        SoraBold: require('@shared/lib/fonts/Sora-Bold.ttf'),
        SoraExtraBold: require('@shared/lib/fonts/Sora-ExtraBold.ttf'),
        SoraExtraLight: require('@shared/lib/fonts/Sora-ExtraLight.ttf'),
        SoraLight: require('@shared/lib/fonts/Sora-Light.ttf'),
        SoraMedium: require('@shared/lib/fonts/Sora-Medium.ttf'),
        SoraRegular: require('@shared/lib/fonts/Sora-Regular.ttf'),
        SoraSemiBold: require('@shared/lib/fonts/Sora-SemiBold.ttf'),
        SoraThin: require('@shared/lib/fonts/Sora-Thin.ttf'),
    })

    const onLayoutRootSafeAreaProvider = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <SafeAreaProvider onLayout={onLayoutRootSafeAreaProvider}>
            <StatusBar style='light' />
            <Stack
                screenOptions={{
                    statusBarColor: COLORS.black,
                    contentStyle: {
                        backgroundColor: COLORS.black,
                        paddingTop: insets.top,
                    },
                    headerShown: false,
                }}>
                <Stack.Screen name='index' />
            </Stack>
        </SafeAreaProvider>
    )
}
