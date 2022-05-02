import React from 'react'
import { AppContext } from '../../../../App'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import WallMethods from '../../../../Scripts/utilClasses/WallMethods'

export default function ShowObjectsButton({ index }) {

    const { L, data, setData } = React.useContext(AppContext)
    const T = L.App.Walls.WallsArray.WallForm.ShowObjectsButton.texts

    const showObjects = WallMethods.getShowObjects(data, index)
    const objectsAmount = WallMethods.getObjectsAmount(data, index)

    return (
        <>
            {objectsAmount > 0 && (
                <View style={styles.Container}>
                    <TouchableOpacity
                        onPress={() => WallMethods.setShowObjects(setData, index, !showObjects)}
                    >
                        {showObjects
                            ? <Text style={styles.HideText}>
                                {T.HideObjects}
                            </Text>
                            : <Text style={styles.ShowText}>
                                {T.ShowObjects}
                            </Text>}


                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        marginBottom: 2,
        width: '50%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#EDE0D4'
    },
    ShowText: {
        alignSelf: 'center',
        color: '#7F5539',
        fontSize: 20,
        fontWeight: '700',
    },
    HideText: {
        alignSelf: 'center',
        color: '#7F5539',
        fontSize: 20,
        fontWeight: '700',
    }
})