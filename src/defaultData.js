const configOptions = {

    LENGHT_UNIT: {
        METERS: 'm',
        FEETS: 'ft',
    },

    GALLON_UNIT: {
        LITERS: 'L',
        GALLONS: 'gallons',
    },
}

const defaultObject = {

    objectName: '',
    height: '0',
    width: '0',
    duplicates: '1',
}

const defaultWall = {

    wallName: '',
    height: '0',
    width: '0',
    duplicates: '1',

    showObjects: true,
    objectsAmount: '0',
    objectsArray: [],
}

const defaultData = {

    language: 'eng',

    maxWallsAmount: '10',
    maxWallObjectsAmout: '10',
    defaultWallHeight: '0',
    wallsAmount: '0', // just put 0 or 1 values
    wallsArray: [
        //{...defaultWall} // activate this only if you want walls amount = 1
    ],

    config: {

        lenghtUnit: configOptions.LENGHT_UNIT.FEETS,
        gallonUnity: configOptions.GALLON_UNIT.GALLONS,

        litersUnitFormat: {

            gallonsSizes: '5.00; 3.75; 18.00',
            gallonsRespectivePrices: '4.00; 2.00; 10.00',
            paintEfficiency: '10',
            coatAmount: '2',
        },

        gallonsUnitFormat: {

            gallonPrice: '2',
            paintEfficiency: '350',
            coatAmount: '2',
        },

    },

    condition: 'Press calculate',

    results: {
        time: '',
        totalWallArea: 'Press calculate',
        totalObjectArea: 'Press calculate',
        totalAreaToPaint: 'Press calculate',
        totalGallons: 'press calculate',
        totalPrice: 'press calculate',
    },

    /*
        All info must be strings, and the logics have to consider this
        to avoid type problems when receive a user input. Types conversion 
        must be handle when the calculation is done.
    */
}

export { 
    configOptions, 
    defaultData, 
    defaultWall, 
    defaultObject 
} 