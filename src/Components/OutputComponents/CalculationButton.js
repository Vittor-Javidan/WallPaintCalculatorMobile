import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { ResultMethods } from '../../Scripts/utilClasses/WallMethods'

export default function CalculationButton({ status }) {

    const { setData } = React.useContext(AppContext)

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
                <Text style={styles.Text}>clique para calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        marginTop: 2,
        width: '99%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00F'
    },
    Text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    }
})