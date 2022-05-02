import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import ResultMethods from '../../Scripts/utilClasses/ResultMethods'

export default function CalculationButton({ status }) {

    const { 
        language, 
        setData 
    } = React.useContext(AppContext)
    const T = language.CalculationButton

    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={() => {
                    if(status === 'ok'){
                        ResultMethods.setTotalWallArea(setData)
                        ResultMethods.setTotalObjectArea(setData)
                        ResultMethods.setTotalAreaToPaint(setData)
                        ResultMethods.setTotalGallonsAndPrice(setData)
                    }
                }}
            >
                <Text style={styles.Text}>{T.Calculate}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        marginTop: 5,
        width: '97%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00F',
        height: 40
    },
    Text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
    }
})