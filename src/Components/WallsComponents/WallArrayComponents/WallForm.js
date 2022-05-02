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

    const { 
        language, data 
    } = React.useContext(AppContext)
    const T = language.WallForm

    const wallAmount = WallMethods.getWallDuplicates(data, index)
    const showObjects = WallMethods.getShowObjects(data, index)
    const maxWallObjectAmount = WallMethods.getMaxWallObjectsAmout(data)

    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                {wallAmount > 1 && `${wallAmount}x `}{T.Wall} {index + 1}: {WallMethods.getWallName(data, index)}
            </Text>
            <View style={styles.Inputs}>
                <WallDuplicates index={index} />
                <NameInput index={index} />
                <WidthInput index={index} />
                <HeightInput index={index} />
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
        marginBottom: 2
    },
    Title: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontWeight: '700',
        fontSize: 25,
        marginVertical: 5,
    },
    Inputs: {
        display: 'flex',
        width: '100%',
        marginBottom: 10,
    }
})
