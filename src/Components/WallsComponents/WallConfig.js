import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import WallMethods from '../../Scripts/utilClasses/WallMethods'

import MaxWallsAmountInput from './WallConfigComponents/MaxWallsAmountInput'
import MaxWallObjecsAmountInput from './WallConfigComponents/MaxWallObjecsAmountInput'
import DefaultHeightInput from './WallConfigComponents/DefaultHeightInput'
import WallsAmountInput from './WallConfigComponents/WallsAmountInput'
import ShowMoreOptionsButton from './WallConfigComponents/ShowMoreOptionsButton'

export default function WallConfig() {

    const { 
        language, 
        data 
    } = React.useContext(AppContext)
    const T = language.WallConfig

    const showMoreOptions = WallMethods.getShowMoreOptions(data)

    return (
        <View style={styles.Form}>
            <Text style={styles.Title}>
                {T.Wall_Config}
            </Text>
            <View style={styles.Inputs}>
                <ShowMoreOptionsButton />
                {showMoreOptions && (
                    <>
                        <MaxWallsAmountInput />
                        <MaxWallObjecsAmountInput />
                        <DefaultHeightInput />
                    </>
                )}
                <WallsAmountInput />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: '99%',
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#EDE0D4',
        alignItems: 'center',
        marginTop: 1
    },
    Title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Inputs: {
        display: 'flex',
        width: '100%',
        marginBottom: 10
    },
})
