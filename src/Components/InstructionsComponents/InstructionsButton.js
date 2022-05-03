import React from 'react'
import { AppContext } from '../../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import WallMethods from '../../Scripts/utilClasses/WallMethods'

export default function InstructionsButton() {

    const {
        language,
        data, setData
    } = React.useContext(AppContext)
    const T = language.InstructionsButton

    const showInstructions = WallMethods.getShowInstructions(data)

    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={() => {
                    WallMethods.setShowInstructions(setData, !showInstructions)
                }}
            >
                {showInstructions
                    ? (
                        <Text style={styles.Text}>
                            {T.Hide_Instructions}
                        </Text>
                    )
                    : (
                        <Text style={styles.Text}>
                            {T.Show_Instructions}
                        </Text>
                    )
                }
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
        backgroundColor: '#7F5539',
        marginBottom: 10,
    },
    Text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
    }
})