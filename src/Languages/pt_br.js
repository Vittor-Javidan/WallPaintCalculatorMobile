const pt_br = {

    App: {
        Wall_Paint_Calculator: 'Calculadora de Tinta de Parede',
    },

    Walls: {},
    MeasureUnitConfig: {
        Measure_Unit: 'Unidades de medida',
        Feets: 'Pés',
        Meters: 'Metros',
    },
    WallConfig: {
        Wall_Config: 'Configurações das Paredes'
    },
    MaxWallObjecsAmountInput: {
        Max_Wall_Objects_Amount: 'Limite de Objetos / parede',
        Del: 'Del'
    },
    MaxWallsAmountInput: {
        Max_Wall_Amount: 'Limite de Paredes',
        Del: 'Del'
    },
    DefaultHeightInput: {
        Default_height: 'Altura Padrão',
        Del: 'Del'
    },
    WallsAmountInput: {
        Wall_Amount: 'Quant. de paredes'
    },
    ShowMoreOptionsButton: {
        More_Options: 'Mais Opções',
        Hide_Options: 'Esconder Opções'
    },

    WallsArray: {},
    WallForm: {
        Wall: 'Parede'
    },
    WallDuplicates: {
        Copies: 'Cópias'
    },
    WallNameInput: {
        Name: 'Nome',
        Del: 'Del'
    },
    WallWidthInput: {
        Width: 'Largura',
        Del: 'Del'
    },
    WallHeightInput: {
        Height: 'Altura',
        Del: 'Del'
    },
    ObjectsAmountInput: {
        Objects_Amount: 'Quant. de Objetos'
    },
    ShowObjectsButton: {
        HideObjects: 'Esconder Objetos',
        ShowObjects: 'Mostrar Objetos'
    },

    ObjectsArray: {},
    ObjectForm: {
        Objeto: 'Objeto'
    },
    ObjectDuplicatesInput: {
        Copies: 'Cópias'
    },
    ObjectNameInput: {
        Name: 'Nome',
        Del: 'Del'
    },
    ObjectWidthInput: {
        Width: 'Largura',
        Del: 'Del'
    },
    ObjectHeightInput: {
        Height: 'Altura',
        Del: 'Del'
    },

    Config: {
        Volume_Config: 'Configuração de Volume'
    },
    GallonTypeButtons: {
        Gallons: 'Galões/Latas',
        Liters: 'Litros'
    },

    GallonsForm: {},
    GallonPriceInput: {
        Gallon_Price: 'Preço por Lata',
        Del: 'Del'
    },
    GallonPaintEfficiencyInput: {
        Coverage: 'Rendimento',
        gallon: 'Lata',
        Del: 'Del'
    },
    GallonCoatAmountInput: {
        Coat_Amount: 'Demãos'
    },

    LitersForm: {},
    GallonsSizesInput: {
        Gallons_Sizes: 'Tamanho das Latas',
        Liters: 'Litros',
        Del: 'Del'
    },
    GallonsPricesInput: {
        Gallons_Prices: 'Preço das Latas',
        Del: 'Del'
    },
    LiterPaintEfficiencyInput: {
        Coverage: 'Rendimento',
        Liter: 'Litro',
        Del: 'Del'
    },
    LiterCoatAmountInput: {
        Coat_Amount: 'Demãos'
    },

    Output: {
        Status: 'Condição',
        Time: 'Hora',
        Last_Results: 'Último Resultado',
        Total_wall_area: 'Área Total de Parede',
        Total_objects_area: 'Área Total de Objetos',
        Total_area_to_paint: 'Área Para Pintar',
        Coats: 'Demãos',
        Total_gallons: 'Total de Latas',
        Total_price: 'Preço Total'
    },
    CalculationButton: {
        Calculate: 'Calcular'
    },
    LanguageButton: {
        Languages: 'Idiomas'
    },
    InstructionsButton: {
        Hide_Instructions: 'Esconder',
        Show_Instructions: 'Mostrar Instruções de uso'
    },
    Instructions: {
        Saving_data: 'Salvando informações',
        Saving_data_text: 'Quando a condição estiver "ok" e você clicar no botão "Calcular", todas as informações preenchidas até o momento serão salvas. Se você acidentalmente perder qualquer informação por qualquer razão, tudo o que precisa ser feito é fechar e abrir o aplicativo para restaurar o último estado salvo',
        Precautions: 'Precauções',
        Precautions_text: 'Esse aplicativo é extremamente responsivo. Se você adicionar 2 paredes e depois voltar para o valor 1, as informações preenchidas na segunda parede serão perdidas. Use o campo de escrita para uma configuração rápida, mas se você já preencheu alguma informação, use os botões ao invés de escrever diretamente o valor',
        Copies: 'Cópias',
        Copies_text: 'Quantidade iguais de paredes e/ou objetos que são exatamente iguais. Use isso para evitar preenchimento repetitivo.',
        Coat_Amount: 'Demãos',
        Coat_Amount_text: 'Quantas vezes a mesma área será pintada.',
        Wall_Amount: 'Quant. de paredes',
        Wall_Amount_text: 'Quantidade de paredes que serão consideras no calculo.',
        Objects_Amount: 'Quant. de objetos',
        Objects_Amount_text: 'Quantidade de objetos existentes em uma específica parede. Use isso para subtrair do cálculo os valores de áreas de portas, janelas, guarda-roupas, etc.',
        Volume_Config: 'Configuração de volume',
        Volume_Config_text: 'Escolha o melhor jeito de calcular a quantidade de latas que você precisará.',
        Volume_Config_Gallons: 'Configuração de volume (Galões/Latas)',
        Volume_Config_Gallons_text: 'Essa é a melhor opção se você desejar um resultado rápido caso esteja considerando apenas um tamanho de lata. O tamanho da lata não é importante nesse calculo.',
        Volume_Config_Liters: 'Configuração de volume (Litros)',
        Volume_Config_Liters_text: 'Essa opção é para aqueles que estão considerando diferentes tipos de tamanho de latas. Use isso para calcular quantas latas de cada tamanho você precisará',
        Coverage_gallon_or_Liter: 'Rendimento/(Lata ou Litro)',
        Coverage_gallon_or_Liter_text: 'Significa o quanto de área uma lata cheia conseguirá pintar, ou quanto 1 Litro de tinta pintará. Internacionalmente a média por galão é 350 pés quadrados ou 32 metros quadrados. Para conseguir um valor mais seguro, você só precisa encontrar o rendimento da lata que está pensando em usar, e dividir pelo volume da lata caso queira o valor em Litros',
        Default_Height: 'Altura padrão',
        Default_Height_text: 'Faz com que toda nova parede criada já comece com o valor inicial colocado nesse campo. Use isso no caso de todas as paredes possuirem a mesma altura.',
        Wall_Limit_Amount: 'Limite de paredes',
        Wall_Limit_Amount_text: 'Limite máximo de parede que o aplicativo permite criar. O propósito dessa ferramenta é te fornecer flexibilidade e segurança, para caso o valor da quantidade de paredes pule de 10 para 100.',
        Object_Limit_Amount: 'Limite de Objetos / parede',
        Object_Limit_Amount_text: 'Limite máximo de objetos que o aplicativo permite criar por parede. A ideia dessa ferramenta é a mesma do "Limite de paredes".',
        Footer_text1: 'Caso tenha encontrado algum bug/erro e sente que o aplicativo esqueceu de fornecer algo crucial, por favor me envie um email para',
        Footer_text2: 'com o título',
        Footer_text3: '"Bug/Erro encotrado"',
        Footer_text4: 'ou',
        Footer_text5: '"Recurso faltando"',
        Footer_text6: 'Farei questão de ajudar, obrigado!',
        Footer_text7: 'E espero que o app tenha te ajudado!',
        Footer_text8: 'Se caso você fez download/baixou esse aplicativo de graça de algum modo e gostou de usar, por favor o compre na loja, você estará me ajudando a pagar meus estudos (ɔ◔‿◔)ɔ ♥'
    }
}

export default pt_br