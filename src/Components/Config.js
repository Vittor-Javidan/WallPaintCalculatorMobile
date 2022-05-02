import React from 'react'
import { AppContext } from '../App'
import { configOptions } from '../defaultData'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'

import GallonTypeButtons from './ConfigComponents/GallonTypeButtons'
import LitersForm from './ConfigComponents/LitersForm'
import GallonsForm from './ConfigComponents/GallonsForm'

export default function Config() {

    const { 
        language, 
        data 
    } = React.useContext(AppContext)
    const T = language.Config

    return (
        <View style={formStyles.Form}>
            <Text style={formStyles.Title}>
                {T.Volume_Config}
            </Text>
            <GallonTypeButtons />
            {WallMethods.getGallonUnity(data) === configOptions.GALLON_UNIT.LITERS
                ? <LitersForm />
                : <GallonsForm />}
        </View>
    )
}

const formStyles = StyleSheet.create({
    Form: {
        marginTop: 2,
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginBottom: 10
    },
    Title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
})
