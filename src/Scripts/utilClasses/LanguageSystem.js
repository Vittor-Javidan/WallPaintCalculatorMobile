import {
    configOptions,
    defaultData
} from "../../defaultData"

import languages from "../../Languages/languages"
import warningMsgs from "../../Languages/Warnings/WarningMsgs"

export default class LanguageSystem {

    static getDefaultLanguage() {
        if (defaultData.language === configOptions.LANGUAGES.PT_BR)
            return languages.pt_br
        else
            return languages.eng
    }
    static getLoadedDataLanguage(data) {
        if (data.language === configOptions.LANGUAGES.PT_BR)
            return languages.pt_br
        else
            return languages.eng
    }
    static getDataLanguage(data) { return data.language }
    static setLanguage(setData, setLanguage, language) {

        setData(prev => {
            const newData = { ...prev }
            newData.language = language
            return newData
        })

        setLanguage(prev => {

            if (language === configOptions.LANGUAGES.PT_BR)
                return languages.pt_br
            else
                return languages.eng
        })
    }

    static getWarningMsg() {
        if (defaultData.language === configOptions.LANGUAGES.PT_BR)
            return warningMsgs.pt_br
        else
            return warningMsgs.eng
    }
}