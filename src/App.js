import React from 'react'
import { defaultData } from './defaultData'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import LanguageSystem from './Scripts/utilClasses/LanguageSystem'

import LanguageButton from './Components/LanguageButton'
import MeasureUnitConfig from './Components/MeasureUnitConfig'
import Walls from './Components/Walls'
import Config from './Components/Config'
import Output from './Components/Output'
import Instructions from './Components/Instructions'


export const AppContext = React.createContext()

const loadData = async (setData, setLanguage) => {
    let value = await AsyncStorage.getItem('newItem')
    value = await JSON.parse(value)
    if(value !==null){
        alert('Loading / Carregando')
        setData({
            ...defaultData, // Ensures that any new feature inside default data will be updated into save files
            ...value
        })
        setLanguage(LanguageSystem.getLoadedDataLanguage(value))
        alert('Done! / Pronto!')
    }
}

export default function App() {

    const [language, setLanguage] = React.useState(LanguageSystem.getDefaultLanguage())
    const [data, setData] = React.useState(defaultData)

    const T = language.App

    const props = {
        language, setLanguage,
        data, setData
    }

    React.useEffect(() => {
        loadData(setData, setLanguage)
    }, [])

    return (
        <AppContext.Provider value={props}>
            <View style={styles.AppScreen}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.AppBody}>
                        <Text style={styles.title}>
                            {T.Wall_Paint_Calculator}
                        </Text>
                        <LanguageButton />
                        <MeasureUnitConfig />
                        <Walls />
                        <Config />
                        <Output />
                        <Instructions />
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
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#EDE0D4',
        color: '#7F5539',
        borderColor: '#000000',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10
    }
})