import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

import WallForm from './WallArrayComponents/WallForm'

export default function WallsArray (){

    const { data } = React.useContext(AppContext)
    const inputsArray = []

    const wallsAmount = Math.floor(Number(WallMethods.getWallsAmount(data)))
    for (let wall_index = 0; wall_index < wallsAmount; wall_index++) {

        inputsArray.push(
            <WallForm key={wall_index} index={wall_index}>Wall</WallForm>
        )
    }

    return (
        <View style={styles.Array}>
            {inputsArray}
        </View>
    )
}

const styles = StyleSheet.create({
    Array: {
        width: '99%',
    }
})
