import React from 'react'
import { AppContext } from '../../../../../App'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../../../Scripts/utilClasses/WallMethods'

import ObjectNameInput from './ObjectFormComponents/ObjectNameInput'
import ObjectWidthInput from './ObjectFormComponents/ObjectWidthInput'
import ObjectHeightInput from './ObjectFormComponents/ObjectHeightInput'
import ObjectDuplicatesInput from './ObjectFormComponents/ObjectDuplicatesInput'

export default function ObjectForm({ index_i, index_j }) {

    const { 
        language, 
        data 
    } = React.useContext(AppContext)
    const T = language.ObjectForm

    const objectDuplicates = WallMethods.getObjectDuplicates(data, index_i, index_j)

    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                {objectDuplicates > 1 && `${objectDuplicates}x `}{T.Objeto} {index_j + 1}: {WallMethods.getObjectName(data, index_i, index_j)}
            </Text>
            <View style={styles.Inputs}>
                <ObjectDuplicatesInput index_i={index_i} index_j={index_j} />
                <ObjectNameInput index_i={index_i} index_j={index_j} />
                <ObjectWidthInput index_i={index_i} index_j={index_j} />
                <ObjectHeightInput index_i={index_i} index_j={index_j} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 2,
    },
    Title: {
        alignSelf: 'center',
        color: '#7F5539',
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 5,
    },
    Inputs: {
        display: 'flex',
        width: '100%',
        marginBottom: 10
    }
})
