import { PressableProps } from 'react-native'
import { Dispatch, SetStateAction } from 'react'

export interface IFilterButton extends PressableProps {
    text: string
    isClicked: boolean
    setClicked: Dispatch<SetStateAction<string>>
}
