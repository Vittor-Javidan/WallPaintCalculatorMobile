import {
    defaultWall,
    defaultObject
} from "../../defaultData"

export default class WallMethods {

    static getShowMoreOptions(data) { return data.showMoreOptions }
    static setShowMoreOptions(setData, boolean_value) {
        setData(prev => {
            const newData = { ...prev }
            newData.showMoreOptions = boolean_value
            return newData
        })
    }

    static getMaxWallsAmount(data) { return data.maxWallsAmount }
    static setMaxWallsAmount(setData, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.maxWallsAmount = amount

            //do a wall array contraction
            const wallsAmount = newData.wallsAmount
            if (amount < wallsAmount) {

                newData.wallsAmount = amount

                let newArray = newData.wallsArray
                newArray = WallMethods.arrayContraction(newArray, amount)

                newData.wallsArray = newArray
            }
            //===================================================================

            return newData
        })
    }

    static getMaxWallObjectsAmout(data) { return data.maxWallObjectsAmout }
    static setMaxWallObjectsAmout(setData, amount) {
        setData(prev => {
            const newData = { ...prev }
            newData.maxWallObjectsAmout = amount

            //do a object array contraction
            for (let wall_index = 0; wall_index < WallMethods.getWallsAmount(newData); wall_index++) {
                const objectsAmount = newData.wallsArray[wall_index].objectsAmount
                if (amount < objectsAmount) {

                    newData.wallsArray[wall_index].objectsAmount = amount

                    let newArray = newData.wallsArray[wall_index].objectsArray
                    newArray = WallMethods.arrayContraction(newArray, amount)

                    newData.wallsArray[wall_index].objectsArray = newArray
                }
            }
            //===================================================================

            return newData
        })
    }

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

            let wallsArray = newData.wallsArray
            const maxAmount = WallMethods.getMaxWallsAmount(newData)
            const validAmount = Number(amount) > Number(maxAmount)
                ? maxAmount
                : amount

            validAmount > wallsArray.length
                ? wallsArray = WallMethods.arrayExpansion(wallsArray, validAmount, wallFormat)
                : wallsArray = WallMethods.arrayContraction(wallsArray, validAmount)

            newData.wallsAmount = validAmount
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

    static getShowObjects(data, wall_index) { return data.wallsArray[wall_index].showObjects }
    static setShowObjects(setData, wall_index, boolean_value) {
        setData(prev => {
            const newData = { ...prev }
            newData.wallsArray[wall_index].showObjects = boolean_value
            return newData
        })
    }

    static getObjectsAmount(data, wall_index) { return data.wallsArray[wall_index].objectsAmount }
    static setObjectsAmount(setData, wall_index, amount) {
        setData(prev => {
            const newData = { ...prev }

            //Handles expansion and retraction of objectsArray            
            let objectsArray = newData.wallsArray[wall_index].objectsArray
            const maxWallObjectAmount = WallMethods.getMaxWallObjectsAmout(newData)
            const validAmount = Number(amount) > Number(maxWallObjectAmount)
                ? maxWallObjectAmount
                : amount

            validAmount > objectsArray.length
                ? objectsArray = WallMethods.arrayExpansion(objectsArray, validAmount, defaultObject)
                : objectsArray = WallMethods.arrayContraction(objectsArray, validAmount)

            newData.wallsArray[wall_index].objectsAmount = validAmount
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

    static getShowInstructions(data) { return data.showInstructions }
    static setShowInstructions(setData, booleanValue) {
        setData(prev => {
            const newData = { ...prev }
            newData.showInstructions = booleanValue
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