import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

import ObjectForm from './ObjectForm'

export default function ObjectsArray({ index }) {

    const { walls } = React.useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < WallMethods.getWallObjectsAmount(walls, index); i++) {

        inputsArray.push(
            <ObjectForm key={i} index_i={index} index_j={i}/>
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
        width: '97%',
    }
})