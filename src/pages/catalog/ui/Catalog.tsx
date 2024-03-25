import { View, ScrollView } from 'react-native'
import { styles } from '../lib/'
import { LocationSearchBar } from '@widgets/locationSearchBar/ui/LocationSearchBar'
import { FilterSearchButtons } from '@widgets/filterSearchButtons/ui/FilterSearchButtons'
import {
    useCatalogActions,
    useCatalogCoffeesState,
    useCatalogUniqCoffeeNamesState,
    useIsLoadingState,
} from '@entities/coffee/model/catalog.state'
import { useEffect } from 'react'
import { CoffeeCard } from '@widgets/coffeeCard/ui'

const Catalog = () => {
    const coffees = useCatalogCoffeesState()
    const uniqCoffeeNames = useCatalogUniqCoffeeNamesState()
    const isLoading = useIsLoadingState()
    const { getCoffees } = useCatalogActions()

    useEffect(() => {
        if (!coffees) {
            void getCoffees()
        }
    }, [])

    return (
        <View style={styles.content}>
            <View style={styles.contentLocationSearchBar}>
                <LocationSearchBar />
            </View>
            <View style={styles.mainContent}>
                <View style={styles.contentCoffee}>
                    <FilterSearchButtons
                        isLoading={isLoading}
                        names={uniqCoffeeNames || []}
                    />
                </View>
                <ScrollView
                    alwaysBounceVertical={true}
                    contentContainerStyle={styles.contentCardsCoffee}>
                    {coffees?.map((value, index) => (
                        <CoffeeCard
                            key={index}
                            data={value}
                            isLoading={isLoading}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default Catalog
