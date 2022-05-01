import {
    defaultWall,
    defaultObject
} from "../../defaultData"

export default class WallMethods {

    static getDefaultWallHeight(data) { return data.defaultWallHeight }
    static setDefaultWallHeight(setData, height) {
        setData(prev => {
            const newData = { ...prev }
            newData.defaultWallHeight = height
            return newData
        })
    }

    static getWallsAmount(data) { return data.wallsAmount }
    static setWallsAmount(setData, amount) {
        setData(prev => {
            const newData = { ...prev }

            const wallFormat = {
                ...defaultWall,
                height: WallMethods.getDefaultWallHeight(newData)
            }

            //Handles expansion and retraction of wallsArray            
            let wallsArray = newData.wallsArray
            amount > wallsArray.length
                ? wallsArray = WallMethods.arrayExpansion(wallsArray, amount, wallFormat)
                : wallsArray = WallMethods.arrayContraction(wallsArray, amount)

            newData.wallsAmount = amount
            newData.wallsArray = wallsArray
            return newData
        })
    }

    static getWallName(data, wall_index) { return data.wallsArray[wall_index].wallName }
    static setWallName(setData, wall_index, name) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].wallName = name
            return newData
        })
    }

    static getWallHeight(data, wall_index) { return data.wallsArray[wall_index].height }
    static setWallHeight(setData, wall_index, height) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].height = height
            return newData
        })
    }

    static getWallWidth(data, wall_index) { return data.wallsArray[wall_index].width }
    static setWallWidth(setData, wall_index, width) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].width = width
            return newData
        })
    }

    static getWallDuplicates(data, wall_index) { return data.wallsArray[wall_index].duplicates }
    static setWallDuplicates(setData, wall_index, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].duplicates = amount
            return newData
        })
    }

    static getObjectsAmount(data, wall_index) { return data.wallsArray[wall_index].objectsAmount }
    static setObjectsAmount(setData, wall_index, amount) {
        setData(prev => {
            const newData = { ...prev }

            //Handles expansion and retraction of objectsArray            
            let objectsArray = newData.wallsArray[wall_index].objectsArray
            amount > objectsArray.length
                ? objectsArray = WallMethods.arrayExpansion(objectsArray, amount, defaultObject)
                : objectsArray = WallMethods.arrayContraction(objectsArray, amount)

            newData.wallsArray[wall_index].objectsAmount = amount
            newData.wallsArray[wall_index].objectsArray = objectsArray

            return newData
        })
    }

    static getObjectName(data, wall_index, object_index) { return data.wallsArray[wall_index].objectsArray[object_index].objectName }
    static setObjectName(setData, wall_index, object_index, name) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].objectsArray[object_index].objectName = name
            return newData
        })
    }

    static getObjectHeight(data, wall_index, object_index) { return data.wallsArray[wall_index].objectsArray[object_index].height }
    static setObjectHeight(setData, wall_index, object_index, height) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].objectsArray[object_index].height = height
            return newData
        })
    }

    static getObjectWidth(data, wall_index, object_index) { return data.wallsArray[wall_index].objectsArray[object_index].width }
    static setObjectWidth(setData, wall_index, object_index, width) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].objectsArray[object_index].width = width
            return newData
        })
    }

    static getObjectDuplicates(data, wall_index, object_index) { return data.wallsArray[wall_index].objectsArray[object_index].duplicates }
    static setObjectDuplicates(setData, wall_index, object_index, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].objectsArray[object_index].duplicates = amount
            return newData
        })
    }

    static getLenghtUnit(data) { return data.config.lenghtUnit }
    static setLenghtUnit(setData, LENGHT_UNIT) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.lenghtUnit = LENGHT_UNIT
            return newData
        })
    }

    static getGallonUnity(data) { return data.config.gallonUnity }
    static setGallonUnity(setData, GALLON_UNIT) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonUnity = GALLON_UNIT
            return newData
        })
    }

    static arrayExpansion(array, arraySize, data) {

        let newArray = [...array]

        let diff = arraySize - newArray.length
        for (let i = 0; i < diff; i++)
            newArray.push({ ...data })

        return newArray
    }

    static arrayContraction(array, arraySize) {

        let newArray = [...array]

        let diff = newArray.length - arraySize
        for (let i = 0; i < diff; i++)
            newArray.pop()

        return newArray
    }
}

export class LitersFormatMethods {

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

export class GallonsFormatMethods {

    static getGallonSize(data) { return data.config.gallonsUnitFormat.gallonSize }
    static setGallonSize(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.gallonSize = value
            return newData
        })
    }

    static getGallonPrice(data) { return data.config.gallonsUnitFormat.gallonPrice }
    static setGallonPrice(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.gallonPrice = value
            return newData
        })
    }

    static getCoatAmount(data) { return data.config.gallonsUnitFormat.coatAmount }
    static setCoatAmount(setData, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.coatAmount = amount
            return newData
        })
    }

    static getPaintEfficiency(data) { return data.config.gallonsUnitFormat.paintEfficiency }
    static setPaintEfficiency(setData, value) {
        setData(prev => {
            const newData = { ...prev }
            newData.config.gallonsUnitFormat.paintEfficiency = value
            return newData
        })
    }
}

export class ResultMethods {

    static getTotalWallArea(data) { return data.results.totalWallArea }
    static setTotalWallArea(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalWallArea = 0

            let wallAmount = Number(WallMethods.getWallsAmount(newData))
            for (let wall_index = 0; wall_index < wallAmount; wall_index++) {

                let wallHeight = Number(WallMethods.getWallHeight(newData, wall_index))
                let wallWidth = Number(WallMethods.getWallWidth(newData, wall_index))
                let wallDuplicates = Number(WallMethods.getWallDuplicates(newData, wall_index))

                let wallArea = wallWidth * wallHeight
                totalWallArea += wallArea * wallDuplicates
            }

            newData.results.totalWallArea = String(totalWallArea)
            return newData
        })
    }

    static getTotalObjectArea(data) { return data.results.totalObjectArea }
    static setTotalObjectArea(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalObjectArea = 0

            let wallAmount = Number(WallMethods.getWallsAmount(newData))
            for (let wall_index = 0; wall_index < wallAmount; wall_index++) {

                let objectsAmount = Number(WallMethods.getObjectsAmount(newData, wall_index))
                for (let object_index = 0; object_index < objectsAmount; object_index++) {

                    let objectHeight = Number(WallMethods.getObjectHeight(newData, wall_index, object_index))
                    let objectWidth = Number(WallMethods.getObjectWidth(newData, wall_index, object_index))
                    let objectDuplicates = Number(WallMethods.getObjectDuplicates(newData, wall_index, object_index))
                    let wallDuplicates = Number(WallMethods.getWallDuplicates(newData, wall_index))

                    let objectArea = objectWidth * objectHeight
                    totalObjectArea += objectArea * objectDuplicates * wallDuplicates
                }
            }

            newData.results.totalObjectArea = String(totalObjectArea)
            return newData
        })
    }

    static getTotalAreaToPaint(data) { return data.results.totalAreaToPaint }
    static setTotalAreaToPaint(setData) {
        setData(prev => {

            const newData = { ...prev }

            let totalWallArea = Number(ResultMethods.getTotalWallArea(newData))
            let totalObjectArea = Number(ResultMethods.getTotalObjectArea(newData))

            newData.results.totalAreaToPaint = String(totalWallArea - totalObjectArea)
            return newData
        })
    }

    static getResultsTime(data) { return data.results.time }
    static getTotalGallons(data) { return data.results.totalGallons }
    static getTotalPrice(data) { return data.results.totalPrice }
    static setTotalGallonsAndPrice(setData) {
        setData(prev => {

            const newData = { ...prev }

            if (newData.config.gallonUnity === 'gallons') {

                // set the amount of gallons
                const coatAmount = Number(GallonsFormatMethods.getCoatAmount(newData))
                const paintEfficiency = Number(GallonsFormatMethods.getPaintEfficiency(newData))
                const areaToPaint = Number(ResultMethods.getTotalAreaToPaint(newData))
                let totalGallons

                let gallons = Math.ceil(
                    (areaToPaint / paintEfficiency) * coatAmount
                )

                gallons > 1
                    ? totalGallons = `${gallons} gallons`
                    : totalGallons = `${gallons} gallon`

                if (!gallons)
                    totalGallons = 'No gallons'
                
                newData.results.totalGallons = totalGallons
                //===========================================================================

                //set result time
                const date = new Date()
                const hour = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                newData.results.time = `${hour}:${minutes}:${seconds}`
                //===================================================

                // set the price
                const gallonPrice = Number(GallonsFormatMethods.getGallonPrice(newData))
                const totalPrice = gallonPrice * gallons
                newData.results.totalPrice = String(totalPrice)
                //=============================================

                return newData

            } else if (newData.config.gallonUnity === 'L') {

                let areaToPaint = Number(ResultMethods.getTotalAreaToPaint(newData))
                let totalGallons = ''
                let totalPrice = 0
                
                let gallonsSizes = LitersFormatMethods.getGallonsSizes(newData).split(';')
                let gallonsRespectivePrices = LitersFormatMethods.getGallonsRespectivePrices(newData).split(';')

                let gallonsSizesNumbers = []
                let gallonPricesNumbers = []

                // Converts the gallonsSizes and gallonsRespectivePrices into a Number arrays, removing any invalid element
                for (let i = 0; i < gallonsSizes.length; i++) {
                    if (!isNaN(gallonsSizes[i]) && !isNaN(gallonsRespectivePrices[i])) {
                        gallonsSizesNumbers.push(Number(gallonsSizes[i]))
                        gallonPricesNumbers.push(Number(gallonsRespectivePrices[i]))
                    }
                }
                //==========================================================================================================

                //Sort gallonsSizesNumbers without losing index correlation with gallonPricesNumbers
                let tempVariable
                let swapCount
                let done = false

                while (!done) {
                    swapCount = 0
                    for (let i = 1; i < gallonsSizesNumbers.length; i++) {
                        if (gallonsSizesNumbers[i - 1] < gallonsSizesNumbers[i]) {

                            tempVariable = gallonsSizesNumbers[i]
                            gallonsSizesNumbers[i] = gallonsSizesNumbers[i - 1]
                            gallonsSizesNumbers[i - 1] = tempVariable

                            tempVariable = gallonPricesNumbers[i]
                            gallonPricesNumbers[i] = gallonPricesNumbers[i - 1]
                            gallonPricesNumbers[i - 1] = tempVariable

                            swapCount += 1
                        }
                    }
                    if (swapCount === 0) {
                        done = true
                    }
                }
                //=================================================================================

                // Loops through gallonsSizes and calculate how many gallons its needed to paint the wall area
                const coatAmount = Number(LitersFormatMethods.getCoatAmount(newData))
                const paintEfficiency = Number(LitersFormatMethods.getPaintEfficiency(newData))

                let areaPerGallon = gallonsSizesNumbers.map(gallon => gallon * paintEfficiency)
                areaToPaint = areaToPaint * coatAmount

                for (let gallon_index = 0; gallon_index < gallonsSizesNumbers.length; gallon_index++) {

                    let gallons = 0

                    if (areaToPaint / areaPerGallon[gallon_index] >= 1 && gallon_index !== gallonsSizesNumbers.length - 1) {

                        gallons = Math.floor(
                            (areaToPaint / areaPerGallon[gallon_index])
                        )

                        if (gallons > 0) {
                            areaToPaint -= areaPerGallon[gallon_index] * gallons
                            totalGallons += `${gallons} gallons of ${gallonsSizesNumbers[gallon_index]}L / `
                            totalPrice += gallonPricesNumbers[gallon_index] * gallons
                        }

                    } else if (areaToPaint / areaPerGallon[gallon_index] > 0 && gallon_index === gallonsSizesNumbers.length - 1) {

                        gallons = Math.ceil(
                            (areaToPaint / areaPerGallon[gallon_index])
                        )

                        areaToPaint -= areaPerGallon[gallon_index] * gallons
                        totalGallons += `${gallons} gallons of ${gallonsSizesNumbers[gallon_index]}L / `
                        totalPrice += gallonPricesNumbers[gallon_index] * gallons
                    }
                }

                if (totalGallons === '')
                    totalGallons = 'No gallons'
                
                newData.results.totalGallons = totalGallons
                newData.results.totalPrice = `${totalPrice} bucks`
                //===============================================================================================

                //set result time
                const date = new Date()
                const hour = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                newData.results.time = `${hour}:${minutes}:${seconds}`
                //===================================================

                
                

                return newData
            }
        })
    }
}