import React from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

import GallonPriceInput from './GallonsFormComponents/GallonPriceInput'
import PaintEfficiencyInput from './GallonsFormComponents/PaintEfficiencyInput'
import CoatAmountInput from './GallonsFormComponents/CoatAmountInput'

export default function GallonsForm() {

    return (
        <View style={styles.Form}>
            <GallonPriceInput />
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