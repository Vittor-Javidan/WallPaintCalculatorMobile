export default class LitersFormatMethods {

    static getGallonsSizes(data) { return data.config.litersUnitFormat.gallonsSizes }
    static setGallonsSizes(setData, sizesString) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.litersUnitFormat.gallonsSizes = sizesString
            return newData
        })
    }

    static getGallonsRespectivePrices(data) { return data.config.litersUnitFormat.gallonsRespectivePrices }
    static setGallonsRespectivePrices(setData, pricesString) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.litersUnitFormat.gallonsRespectivePrices = pricesString
            return newData
        })
    }

    static getCoatAmount(data) { return data.config.litersUnitFormat.coatAmount }
    static setCoatAmount(setData, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.litersUnitFormat.coatAmount = amount
            return newData
        })
    }

    static getPaintEfficiency(data) { return data.config.litersUnitFormat.paintEfficiency }
    static setPaintEfficiency(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.litersUnitFormat.paintEfficiency = value
            return newData
        })
    }
}