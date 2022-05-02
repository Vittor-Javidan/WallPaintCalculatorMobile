import React from 'react'
import { AppContext } from '../../../../App'

import {
    View,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../../Scripts/utilClasses/WallMethods'

import ObjectForm from './ObjectsArrayForm/ObjectForm'

export default function ObjectsArray({ index }) {

    const { data } = React.useContext(AppContext)
    const inputsArray = []

    const objectsAmount = Math.floor(Number(WallMethods.getObjectsAmount(data, index)))
    for (let i = 0; i < objectsAmount; i++) {

        inputsArray.push(
            <ObjectForm key={i} index_i={index} index_j={i} />
        )
    }

    return (
        <>
            {objectsAmount > 0 && (
                <View style={styles.Array}>
                    {inputsArray}
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    Array: {
        width: '97%',
        marginBottom: 8
    }
})