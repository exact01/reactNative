import { FC } from 'react'
import { COLORS, RADIUS } from '@shared/lib/constants'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { skeletonFilterButtonStyles as styles } from '@features/filterButton/lib'

export const SkeletonFilterButton: FC = () => {
    return (
        <ContentLoader
            speed={2.5}
            width={100}
            height={38}
            backgroundColor={COLORS.black}
            foregroundColor={COLORS.orange}
            style={styles.loader}>
            <Rect ry={RADIUS.r16} rx={RADIUS.r16} width='75' height='38' />
        </ContentLoader>
    )
}
