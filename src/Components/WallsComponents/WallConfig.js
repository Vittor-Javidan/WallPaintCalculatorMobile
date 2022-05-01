import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import MaxWallsAmountInput from './WallConfigComponents/MaxWallsAmountInput'
import MaxWallObjecsAmountInput from './WallConfigComponents/MaxWallObjecsAmountInput'
import DefaultHeightInput from './WallConfigComponents/DefaultHeightInput'
import WallsAmountInput from './WallConfigComponents/WallsAmountInput'

export default function WallConfig() {

    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                Wall Config:
            </Text>
            <View style={styles.Inputs}>
                <MaxWallsAmountInput />
                <MaxWallObjecsAmountInput />
                <DefaultHeightInput />
                <WallsAmountInput />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#7F5539',
        alignItems: 'center',
        marginBottom: 2
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#EDE0D4',
        marginVertical: 5
    },
    Inputs: {
        display: 'flex',
        width: '100%',
    },
})