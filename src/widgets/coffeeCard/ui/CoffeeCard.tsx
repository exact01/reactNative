import { FC } from 'react'
import { styles } from '../lib'
import { View, Image, Text } from 'react-native'
import { ICoffeeCard } from '@widgets/coffeeCard/ui/coffeeCard.interface'
import { SkeletonCoffeeCard } from '@widgets/coffeeCard/ui/SkeletonCoffeeCard'
import { BlurView } from 'expo-blur'
import { AddCoffeeButton } from '@features/addCoffeButton'

export const CoffeeCard: FC<ICoffeeCard> = ({ isLoading, data }) => {
    if (isLoading) {
        return <SkeletonCoffeeCard />
    }

    return (
        <View style={styles.content}>
            <View style={styles.wrapperRating}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.rootRating}>
                    <BlurView intensity={10} style={styles.rating}>
                        <Image
                            style={styles.imageRating}
                            source={require('@assets/images/star.png')}
                        />
                        <Text style={styles.textRating}>{data.rating}</Text>
                    </BlurView>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.subTitle}>{data.subTitle}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.priceText}>{data.price} ₽</Text>
                    <AddCoffeeButton />
                </View>
            </View>
        </View>
    )
}
