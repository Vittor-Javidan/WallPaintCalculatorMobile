import React from 'react'
import { AppContext } from '../App'
import { configOptions } from '../defaultData'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import WallMethods from '../Scripts/utilClasses/WallMethods'
import LitersFormatMethods from '../Scripts/utilClasses/LitersFormatMethods'
import GallonsFormatMethods from '../Scripts/utilClasses/GallonsFormatMethods'
import ResultMethods from '../Scripts/utilClasses/ResultMethods'

import verifyConditions from '../Scripts/Rules/RulesDefinition'
import CalculationButton from './OutputComponents/CalculationButton'

export default function Output() {

    const { 
        language, 
        data 
    } = React.useContext(AppContext)
    const T = language.Output

    const [status, setStatus] = React.useState('Press Calculate')

    let gallonUnity = WallMethods.getGallonUnity(data)
    let lenghtUnit = WallMethods.getLenghtUnit(data)

    let coats
    gallonUnity === configOptions.GALLON_UNIT.GALLONS
        ? coats = GallonsFormatMethods.getCoatAmount(data)
        : coats = LitersFormatMethods.getCoatAmount(data)

    let resultTime = ResultMethods.getResultsTime(data)
    let totalWallArea = ResultMethods.getTotalWallArea(data)
    let totalObjectArea = ResultMethods.getTotalObjectArea(data)
    let areaToPaint = ResultMethods.getTotalAreaToPaint(data)
    let totalGallons = ResultMethods.getTotalGallons(data)
    let totalPrice = ResultMethods.getTotalPrice(data)

    React.useEffect(() => {
        verifyConditions(data, setStatus)
    }, [data])

    console.log('output rendered')

    return (
        totalPrice === 'press calculate'
            ? (
                <View style={styles.Output}>
                    <CalculationButton status={status} setStatus={setStatus} />
                    <Text style={styles.Title}>
                        {T.Status}:
                    </Text>
                    <Text style={styles.Texts}>
                        {status}
                    </Text>
                </View>
            )
            : (
                <View style={styles.Output}>
                    <CalculationButton status={status} setStatus={setStatus} />
                    <Text style={styles.Title}>
                        {T.Status}:
                    </Text>
                    <Text style={styles.Texts}>
                        {status}
                    </Text>
                    <Text style={styles.Title}>
                        {T.Last_Results}:
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Time}: {resultTime}
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Total_wall_area}: {totalWallArea} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Total_objects_area}: {totalObjectArea} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Total_area_to_paint}: {areaToPaint} {lenghtUnit}2 x {coats} {T.Coats} = {areaToPaint * coats} {lenghtUnit}2
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Total_gallons}: {totalGallons}
                    </Text>
                    <Text style={styles.Texts}>
                        {T.Total_price}: {totalPrice}
                    </Text>
                </View>
            )
    )
}

const styles = StyleSheet.create({
    Output: {
        marginTop: 2,
        borderWidth: 1,
        borderRadius: 5,
        width: '99%',
        backgroundColor: '#EDE0D4',
        marginBottom: 10
    },
    Title: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '700',
        color: '#7F5539',
        marginVertical: 5
    },
    Texts: {
        alignSelf: 'center',
        color: '#7F5539',
        fontSize: 17,
        marginBottom: 3
    }
})