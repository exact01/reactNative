import { View, Text } from 'react-native'
import { styles } from '../lib/'
import { CatalogAddress } from '@widgets/catalogAddress/ui/CatalogAddress'
const Catalog = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Каталог ссылок</Text>
                <CatalogAddress />
            </View>
        </View>
    )
}

export default Catalog
