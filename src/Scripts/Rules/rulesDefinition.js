import LanguageSystem from '../utilClasses/LanguageSystem'

import WallMethods from '../utilClasses/WallMethods'
import LitersFormatMethods from '../utilClasses/LitersFormatMethods'
import GallonsFormatMethods from '../utilClasses/GallonsFormatMethods'

function checkWallLimitAmount(data, setStatus, wall_index, warningMsgs) {
    const wallMaxAmount = WallMethods.getMaxWallsAmount(data)
    if (wallMaxAmount < 0 || isNaN(wallMaxAmount))
        return setStatus(warningMsgs.wallLimitAmountText())
}

function checkObjectsLimitAmount(data, setStatus, wall_index, warningMsgs) {
    const objectsMaxAmount = WallMethods.getMaxWallObjectsAmout(data)
    if (objectsMaxAmount < 0 || isNaN(objectsMaxAmount))
        return setStatus(warningMsgs.objectsLimitAmountText())
}

function checkDefaultHeight(data, setStatus, wall_index, warningMsgs) {

    const defaultHeight = WallMethods.getDefaultWallHeight(data)
    if (defaultHeight < 0 || isNaN(defaultHeight))
        return setStatus(warningMsgs.defaultHeightText())
}

function checkWallHeight(data, setStatus, wall_index, warningMsgs) {

    const height = WallMethods.getWallHeight(data, wall_index)
    if (height < 0 || isNaN(height))
        return setStatus(warningMsgs.wallHeightText(wall_index))
}

function checkWallWidth(data, setStatus, wall_index, warningMsgs) {

    const width = WallMethods.getWallWidth(data, wall_index)
    if (width < 0 || isNaN(width))
        return setStatus(warningMsgs.wallWidthText(wall_index))
}

function checkWallDuplicates(data, setStatus, wall_index, warningMsgs) {

    const duplicates = WallMethods.getWallDuplicates(data, wall_index)
    if (duplicates < 0 || isNaN(duplicates))
        return setStatus(warningMsgs.wallDuplicatesText(wall_index))
}

function checkWallObjectsAmount(data, setStatus, wall_index, warningMsgs) {

    const objectsAmount = WallMethods.getObjectsAmount(data, wall_index)
    if (objectsAmount < 0 || isNaN(objectsAmount))
        return setStatus(warningMsgs.wallObjectsAmountText(wall_index))
}

function checkObjectsInfo(data, setStatus, wall_index, warningMsgs) {

    for (let object_index = 0; object_index < WallMethods.getObjectsAmount(data, wall_index); object_index++) {

        const height = WallMethods.getObjectHeight(data, wall_index, object_index)
        if (height < 0 || isNaN(height))
            return setStatus(warningMsgs.objectHeighText(wall_index, object_index))

        const width = WallMethods.getObjectWidth(data, wall_index, object_index)
        if (width < 0 || isNaN(width))
            return setStatus(warningMsgs.objectWidthText(wall_index, object_index))

        const duplicates = WallMethods.getObjectDuplicates(data, wall_index, object_index)
        if (duplicates < 1 || isNaN(duplicates))
            return setStatus(warningMsgs.objectDuplicatesText(wall_index, object_index))
    }
}

function checkLitersUnitFormatInputs(data, setStatus, wall_index, warningMsgs) {

    const gallonsSizes = LitersFormatMethods.getGallonsSizes(data).split(';')
    const gallonsRespectivePrices = LitersFormatMethods.getGallonsRespectivePrices(data).split(';')

    //Check input amount
    if (gallonsSizes.length !== gallonsRespectivePrices.length)
        return setStatus(warningMsgs.LitersInputAmountText())

    //Checks if the numbers have a valid format
    for (let i = 0; i < gallonsSizes.length; i++) {
        if (isNaN(gallonsSizes[i]) || isNaN(gallonsRespectivePrices[i]))
            return setStatus(warningMsgs.LitersValidFormatText1())
        else if (gallonsSizes[i] < 0 || gallonsRespectivePrices[i] < 0)
            return setStatus(warningMsgs.LitersValidFormatText2())
    }

    //Check if coatAmount have a valid format
    const coatAmount = LitersFormatMethods.getCoatAmount(data)
    if (coatAmount < 1 || isNaN(coatAmount))
        return setStatus(warningMsgs.LitersCoatAmountText())

    //check if paintEfficiency
    const paintEfficiency = LitersFormatMethods.getPaintEfficiency(data)
    if (paintEfficiency < 0 || isNaN(paintEfficiency))
        return setStatus(warningMsgs.LitersPaintEfficiencyText())

}

function checkGallonsUnitFormat(data, setStatus, wall_index, warningMsgs) {

    //Check if gallonPrice have a valid format
    const gallonPrice = GallonsFormatMethods.getGallonPrice(data)
    if (gallonPrice < 0 || isNaN(gallonPrice))
        return setStatus(warningMsgs.GallonPriceText())

    //Check if coatAmount have a valid format
    const coatAmount = GallonsFormatMethods.getCoatAmount(data)
    if (coatAmount < 1 || isNaN(coatAmount))
        return setStatus(warningMsgs.GallonCoatAmountText())

    //check if paintEfficiency have a valid format
    const paintEfficiency = GallonsFormatMethods.getPaintEfficiency(data)
    if (paintEfficiency < 0 || isNaN(paintEfficiency))
        return setStatus(warningMsgs.GallonPaintEfficiencyText())
}

const rulesArray = [

    checkGallonsUnitFormat,
    checkLitersUnitFormatInputs,
    checkObjectsInfo,
    checkWallObjectsAmount,
    checkWallDuplicates,
    checkWallWidth,
    checkWallHeight,
    checkDefaultHeight,
    checkWallLimitAmount,
    checkObjectsLimitAmount
]

export default function verifyConditions(data, setStatus) {

    const warningMsgs = LanguageSystem.getWarningMsg(data)
    setStatus('ok')

    for (let wall_index = 0; wall_index < WallMethods.getWallsAmount(data); wall_index++) {

        rulesArray.forEach(element => {
            element(data, setStatus, wall_index, warningMsgs)
        });
    }

    console.log('verifyDone')
}