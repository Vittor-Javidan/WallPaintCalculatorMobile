import React from 'react'
import { AppContext } from '../../../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../Scripts/utilClasses/WallMethods'

export default function ShowMoreOptionsButton() {

    const { 
        language, 
        data, setData 
    } = React.useContext(AppContext)
    const T = language.ShowMoreOptionsButton

    const showMoreOptions = WallMethods.getShowMoreOptions(data)

    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={() => WallMethods.setShowMoreOptions(setData, !showMoreOptions)}
            >
                {showMoreOptions
                    ? (
                        <Text style={styles.HideText}>
                            {T.Hide_Options}
                        </Text>
                    )
                    : (
                        <Text style={styles.ShowText}>
                            {T.More_Options}
                        </Text>
                    )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        marginBottom: 2,
        width: '50%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#7F5539',
        marginTop: 5,
        marginBottom: 15,
    },
    ShowText: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontSize: 20,
        fontWeight: '700',
    },
    HideText: {
        alignSelf: 'center',
        color: '#EDE0D4',
        fontSize: 20,
        fontWeight: '700',
    }
})
