import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    StyleSheet
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

import WallForm from './WallForm'

export default function WallsArray (){

    const { walls } = React.useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < WallMethods.getWallsAmount(walls); i++) {

        inputsArray.push(
            <WallForm key={i} index={i}>Wall</WallForm>
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
