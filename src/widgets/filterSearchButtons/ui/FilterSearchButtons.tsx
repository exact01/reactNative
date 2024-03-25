import { FC, useState } from 'react'
import { styles } from '../lib'
import { View, ScrollView, FlatList } from 'react-native'
import { FilterButton } from '@features/filterButton/ui/FilterButton'
import { IFilterSearchButtons } from '@widgets/filterSearchButtons/ui/filterSearchButtons.interface'
import { SkeletonFilterButton } from '@features/filterButton/ui'

export const FilterSearchButtons: FC<IFilterSearchButtons> = ({
    names,
    isLoading,
}) => {
    const [pressed, setPressed] = useState('Все')

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ScrollView horizontal style={styles.content}>
                    {[...Array(10)].map((_, index) => (
                        <SkeletonFilterButton key={index} />
                    ))}
                </ScrollView>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.content}>
                {names.map((value, index) => (
                    <FilterButton
                        key={index}
                        setClicked={setPressed}
                        isClicked={value === pressed}
                        text={value}
                    />
                ))}
            </ScrollView>
        </View>
    )
}
