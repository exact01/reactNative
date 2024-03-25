import { useLocalSearchParams } from 'expo-router'
import CatalogFromId from '@pages/catalogFromId/ui/CatalogFromId'

export default function Page() {
    const { id } = useLocalSearchParams()
    if (typeof id !== 'string') {
        return null
    }
    return <CatalogFromId id={id} />
}
