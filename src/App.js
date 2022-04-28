import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import appConfig from './AppConfig'

import Walls from './Components/Walls'
import CalculationButton from './Components/CalculationButton'
import Output from './Components/Output'

export const AppContext = React.createContext()

function wallInit() {

    const wallsArray = []
    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
        wallsArray.push({
            width: appConfig.WALL_WIDTH,
            duplicates: appConfig.DUPLICATES_AMOUNT,
            wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
            objectsArray: []
        })
    }
    return wallsArray
}

export default function App() {

    const [walls, setWalls] = React.useState({
        height: appConfig.WALL_HEIGHT,
        wallsAmount: appConfig.WALLS_AMMOUNT,
        inkLayers: appConfig.INK_LAYERS,
        inkEfficiency: appConfig.INK_EFFICIENCY,
        cansString: appConfig.CANS_SIZES,
        cansAmount: appConfig.CANS_AMOUNT_ARRAY,
        cansPricesString: appConfig.CANS_PRICES_STRING,
        pricesArray: appConfig.CANS_PRICES,
        totalCans: appConfig.TOTAL_CANS,
        wallsArray: wallInit(),
    })

    const props = {
        walls,
        setWalls
    }

    console.log(walls)

    return (
        <AppContext.Provider value={props}>
            <View style={styles.AppScreen}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.AppBody}>
                        <Text style={styles.title}>
                            Calculadora de latas de tinta
                        </Text>
                        <Walls />
                        <CalculationButton/>
                        <Output/>
                    </View>
                </ScrollView>
            </View>
        </AppContext.Provider>
    )
}

const styles = StyleSheet.create({
    AppScreen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#7F5539',
        alignItems: 'center'
    },
    ScrollView: {
        width: '100%',
    },
    AppBody: {
        backgroundColor: '#7F5539',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#EDE0D4',
        color: '#7F5539',
        borderColor: '#000000',
        borderWidth: 1,
        width: '100%',
        height: 40
    }
})