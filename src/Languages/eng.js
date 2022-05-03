const eng = {

    App: {
        Wall_Paint_Calculator: 'Wall Paint Calculator',
    },

    Walls: {},
    MeasureUnitConfig: {
        Measure_Unit: 'Measure Unit',
        Feets: 'Feets',
        Meters: 'Meters',
    },
    WallConfig: {
        Wall_Config: 'Wall Config'
    },
    MaxWallObjecsAmountInput: {
        Max_Wall_Objects_Amount: 'Objects Limit Amount / Wall',
        Del: 'Del'
    },
    MaxWallsAmountInput: {
        Max_Wall_Amount: 'Wall Limit Amount',
        Del: 'Del'
    },
    DefaultHeightInput: {
        Default_height: 'Default height',
        Del: 'Del'
    },
    WallsAmountInput: {
        Wall_Amount: 'Wall Amount'
    },
    ShowMoreOptionsButton: {
        More_Options: 'More Options',
        Hide_Options: 'Hide Options'
    },

    WallsArray: {},
    WallForm: {
        Wall: 'Wall'
    },
    WallDuplicates: {
        Copies: 'Copies'
    },
    WallNameInput: {
        Name: 'Name',
        Del: 'Del'
    },
    WallWidthInput: {
        Width: 'Width',
        Del: 'Del'
    },
    WallHeightInput: {
        Height: 'Height',
        Del: 'Del'
    },
    ObjectsAmountInput: {
        Objects_Amount: 'Objects Amount'
    },
    ShowObjectsButton: {
        HideObjects: 'Hide Objects',
        ShowObjects: 'Show Objects'
    },

    ObjectsArray: {},
    ObjectForm: {
        Objeto: 'Object'
    },
    ObjectDuplicatesInput: {
        Copies: 'Copies'
    },
    ObjectNameInput: {
        Name: 'Name',
        Del: 'Del'
    },
    ObjectWidthInput: {
        Width: 'Width',
        Del: 'Del'
    },
    ObjectHeightInput: {
        Height: 'Height',
        Del: 'Del'
    },

    Config: {
        Volume_Config: 'Volume Config'
    },
    GallonTypeButtons: {
        Gallons: 'Gallons',
        Liters: 'Liters'
    },

    GallonsForm: {},
    GallonPriceInput: {
        Gallon_Price: 'Gallon Price',
        Del: 'Del'
    },
    GallonPaintEfficiencyInput: {
        Coverage: 'Coverage',
        gallon: 'gallon',
        Del: 'Del'
    },
    GallonCoatAmountInput: {
        Coat_Amount: 'Coat Amount'
    },

    LitersForm: {},
    GallonsSizesInput: {
        Gallons_Sizes: 'Gallons Sizes',
        Liters: 'Liters',
        Del: 'Del'
    },
    GallonsPricesInput: {
        Gallons_Prices: 'Gallons Prices',
        Del: 'Del'
    },
    LiterPaintEfficiencyInput: {
        Coverage: 'Coverage',
        Liter: 'Liter',
        Del: 'Del'
    },
    LiterCoatAmountInput: {
        Coat_Amount: 'Coat Amount'
    },

    Output: {
        Status: 'Status',
        Time: 'time',
        Last_Results: 'Last Results',
        Total_wall_area: 'Total wall area',
        Total_objects_area: 'Total objects area',
        Total_area_to_paint: 'Total area to paint',
        Coats: 'coats',
        Total_gallons: 'Total gallons',
        Total_price: 'Total price'
    },
    CalculationButton: {
        Calculate: 'Calculate'
    },
    LanguageButton: {
        Languages: 'Languages'
    },
    InstructionsButton: {
        Hide_Instructions: 'Hide',
        Show_Instructions: 'Show Instructions'
    },
    Instructions: {
        Saving_data: 'Saving data',
        Saving_data_text: 'When the status is set to "ok" and you press the "Calculate" button, every info will be saved. If you accidentally lose any information for any reason, all you need to do is to close and open this app to retrive the last saved info.',
        Precautions: 'Precautions',
        Precautions_text: 'This app is extremely responsive. if you have set 2 walls amounts and then you set 1 right after, the second wall information will be lost. Use the direct input for fast config, but if you already put data, use the buttons intead.',
        Copies: 'Copies',
        Copies_text: 'The amount of walls and/or objects that are exacly the same. Use this to avoid input repetition.',
        Coat_Amount: 'Coat Amount',
        Coat_Amount_text: 'How many times you gonna paint the same area.',
        Wall_Amount: 'Wall Amount',
        Wall_Amount_text: 'The amount of wall you gonna paint.',
        Objects_Amount: 'Objects Amount',
        Objects_Amount_text: 'The amount of objects you have in a specific wall. Use this to subtract area values of walls with doors, windows, wardrobe, etc.',
        Volume_Config: 'Volume Config',
        Volume_Config_text: 'Chose the best way for you to calculate the gallons amount.',
        Volume_Config_Gallons: 'Volume Config (Gallons)',
        Volume_Config_Gallons_text: 'This is the best options if you want a fast result and if you are considering only one size of gallon. The gallon size is not important in this calculation',
        Volume_Config_Liters: 'Volume Config (Liters)',
        Volume_Config_Liters_text: 'This is for those who are considering diferent gallons sizes. Use this to calculate how many gallons of each size you gonna need.',
        Coverage_gallon_or_Liter: 'Coverage/(gallon or Liter)',
        Coverage_gallon_or_Liter_text: 'This means how much area a full gallon will paint, or how much area a Liter of paint will paint. An average gallon covers about 350 square feet per gallon or 32 square meter per gallon to be safe. To get the this value, all you need to do is to get the area coverage the gallon you considering use say to cover, and divide it by its own volume if you want this value in Liters.',
        Default_Height: 'Default Height',
        Default_Height_text: 'Makes every new wall you create starts with this value as their initial height. Use this if all your walls has the same height.',
        Wall_Limit_Amount: 'Wall Limit Amount',
        Wall_Limit_Amount_text: 'The maximum limit of walls you can create. The purpose of this tools is to give you flexibility and keep your app safe, in case you jump from 10 walls to like 100 walls.',
        Object_Limit_Amount: 'Object Limit Amount / Wall',
        Object_Limit_Amount_text: 'The maximum limit of objects you can create per wall. The idea of this tool is the same as "Wall Limit Amount".',
        Footer_text1: 'If you find any bug or feel this app is missing something crucial, please send me a email to',
        Footer_text2: 'with the subject',
        Footer_text3: '"Bug/Error Found"',
        Footer_text4: 'or',
        Footer_text5: '"Missing Feature"',
        Footer_text6: 'I will be glad to help, thanks!',
        Footer_text7: 'I hope i could help you with this app!',
        Footer_text8: 'If you downloaded this app for free somehow and enjoy it, please buy it from the store, you will be helping me pay my studies (ɔ◔‿◔)ɔ ♥'
    }
}

export default eng