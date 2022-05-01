import React from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

import GallonsSizesInput from './LitersFormComponents/GallonsSizesInput'
import GallonsPricesInput from './LitersFormComponents/GallonsPricesInput'
import PaintEfficiencyInput from './LitersFormComponents/PaintEfficiencyInput'
import CoatAmountInput from './LitersFormComponents/CoatAmountInput'


export default function LitersForm() {

    return (
        <View style={styles.Form}>
            <GallonsSizesInput />
            <GallonsPricesInput />
            <PaintEfficiencyInput />
            <CoatAmountInput />
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
})