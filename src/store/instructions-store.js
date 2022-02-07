const DUMMY_DATA = [
    {
        id: 'i01',
        type: 'chance',
        eng: 'Instruction 1',
        rus: `ИДИТЕ НА БЛИЖАЙШЕЕ ПОЛЕ КОММУНАЛЬНОГО ПРЕДПРИЯТИЯ.`
    },
    {
        id: 'i02',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'БАНК ПЛАТИТ ВАМ ДИВИЕНДЫ В РАЗМЕРЕ 50.'
    },
    {
        id: 'i03',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ВЕРНИТЕСЬ НА ТРИ ПОЛЯ НАЗАД.'
    },
    {
        id: 'i04',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ОТПРАВЛЯЙТЕСЬ В ТЮРЬМУ. ОТПРАВЛЯЙТЕСЬ ПРЯМО В ТЮРЬМУ, НЕ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД" И НЕ ПОЛУЧАЙТЕ 200.'
    },
    {
        id: 'i05',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ШТРАФ ЗА ПРЕВЫШЕНИЕ СКОРОСТИ 15.'
    },
    {
        id: 'i06',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'НАСТУПИЛ СРОК ИСПОЛНЕНИЯ ПЛАТЕЖА ПО ВАШЕЙ ССУДЕ НА СТРОИТЕЛЬСТВО. ПОЛУЧИТЕ 150.'
    },
    {
        id: 'i07',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ИДИТЕ НА ПОЛЕ "ВПЕРЕД". (ПОЛУЧИТЕ 200)'
    },
    {
        id: 'i08',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ИДИТЕ НА БЛИЖАЙШУЮ Ж/Д СТАНЦИЮ.'
    },
    {
        id: 'i09',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'БЕСПЛАТНОЕ ОСВОБОЖДЕНИЕ ИЗ ТЮРЬМЫ.'
    },
    {
        id: 'i010',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'КАПИТАЛЬНЫЙ РЕМОНТ. 25 ЗА КАЖДЫЙ ДОМ, 100 ЗА КАЖДЫЙ ОТЕЛЬ.'
    },
    {
        id: 'i011',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА УЛ. ПОЛЯНКА. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i012',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ОТПРАВЛЯЙТЕСЬ ДО Ж/Д СТАНЦИИ РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i013',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА ПЛОЩАДЬ МАЯКОВСКОГО. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i014',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ВАС ИЗБРАЛИ ПРЕДСЕДАТЕЛЕМ СОВЕТА ДИРЕКТОРОВ. ЗАПЛАТИТЕ КАЖДОМУ ИГРОКУ ПО 50.'
    },
    {
        id: 'i015',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА УЛ. АРБАТ.'
    },
    {
        id: 'i016',
        type: 'chance',
        eng: 'Instruction 2',
        rus: 'ИДИТЕ НА БЛИЖАЙШУЮ Ж/Д СТАНЦИЮ.'
    },
    {
        id: 'i11',
        type: 'chest',
        eng: 'Instruction 3',
        rus: 'ОПЛАТИТЕ РАСХОДЫ НА ГОСПИТАЛИЗАЦИЮ В РАЗМЕРЕ 100.'
    },
    {
        id: 'i12',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ПОЛУЧИТЕ 25 ЗА КОНСАЛТИНГОВЫЕ УСЛУГИ.'
    },
    {
        id: 'i13',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'НА ПРОДАЖЕ АКЦИЙ ВЫ ЗАРАБАТЫВАЕТЕ 50.'
    },
    {
        id: 'i14',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ВОЗМЕЩЕНИЕ ПОДОХОДНОГО НАЛОГА. ПОЛУЧИТЕ 20.'
    },
    {
        id: 'i15',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'НАСТУПИЛ СРОК ПЛАТЕЖА ПО СТРАХОВАНИЮ ЖИЗНИ. ПОЛУЧИТЕ 100.'
    },
    {
        id: 'i16',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'БЕСПЛАТНОЕ ОСВОБОЖДЕНИЕ ИЗ ТЮРЬМЫ.'
    },
    {
        id: 'i17',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ОПЛАТИТЕ ОБУЧЕНИЕ В РАЗМЕРЕ 50.'
    },
    {
        id: 'i18',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'СЕГОДНЯ ВАШ ДЕНЬ РОЖДЕНИЯ. ПОЛУЧИТЕ 10 ОТ КАЖДОГО ИГРОКА.'
    },
    {
        id: 'i19',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ВЫ ЗАНЯЛИ ВТОРОЕ МЕСТО НА КОНКУРСЕ КРАСОТЫ. ПОЛУЧИТЕ 10.'
    },
    {
        id: 'i110',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ВЫ ПОЛУЧАЕТЕ В НАСЛЕДСТВО 100.'
    },
    {
        id: 'i111',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'НАСТУПИЛ СРОК ИСПОЛНЕНИЯ ПЛАТЕЖА ПО ОТПУСКНОМУ ФОНДУ. ПОЛУЧИТЕ 100.'
    },
    {
        id: 'i112',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ВИЗИТ К ВРАЧУ. ЗАПЛАТИТЕ 50.'
    },
    {
        id: 'i113',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ОТПРАВЛЯЙТЕСЬ В ТЮРЬМУ. ОТПРАВЛЯЙТЕСЬ ПРЯМО В ТЮРЬМУ, НЕ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД" И НЕ ПОЛУЧАЙТЕ 200.'
    },
    {
        id: 'i114',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'РЕМОНТНЫЕ УЛИЧНЫЕ РАБОТЫ. 40 ЗА КАЖДЫЙ ДОМ< 115 ЗА КАЖДЫЙ ОТЕЛЬ.'
    },
    {
        id: 'i115',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'БАНКОВСКАЯ ОШИБКА В ВАШУ ПОЛЬЗУ. ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i116',
        type: 'chest',
        eng: 'Instruction 4',
        rus: 'ИДИТЕ НА ПОЛЕ "ВПЕРЕД". (ПОЛУЧИТЕ 200)'
    },
];

export default DUMMY_DATA;