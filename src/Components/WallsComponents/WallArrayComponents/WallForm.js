import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

import NameInput from './WallFormComponents/NameInput'
import HeightInput from './WallFormComponents/HeightInput'
import WidthInput from './WallFormComponents/WidthInput'
import WallDuplicates from './WallFormComponents/WallDuplicates'
import ObjectsAmountInput from './WallFormComponents/ObjectsAmountInput'
import ShowObjectsButton from './WallFormComponents/ShowObjectsButton'

import ObjectsArray from './WallFormComponents/ObjectsArray'

export default function WallForm({ index }) {

    const { data } = React.useContext(AppContext)
    const showObjects = WallMethods.getShowObjects(data, index)
    const maxWallObjectAmount = WallMethods.getMaxWallObjectsAmout(data)

    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                Wall {index + 1}: {WallMethods.getWallName(data, index)}
            </Text>
            <View style={styles.Inputs}>
                <NameInput index={index} />
                <WidthInput index={index} />
                <HeightInput index={index} />
                <WallDuplicates index={index} />
                {maxWallObjectAmount > 0 && (
                    <>
                        <ObjectsAmountInput index={index} />
                        <ShowObjectsButton index={index} />
                    </>
                )}
            </View>
            {showObjects && <ObjectsArray index={index} />}
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#7F5539',
        alignItems: 'center',
        marginBottom: 2,
    },
    Title: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 5,
    },
    Inputs: {
        display: 'flex',
        width: '100%'
    }
})
