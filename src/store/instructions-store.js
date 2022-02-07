const DUMMY_DATA = [
    {
        id: 'i01',
        type: 'chance',
        eng: 'GO TO THE NEWREST UTILITIES FIELD.',
        rus: `ИДИТЕ НА БЛИЖАЙШЕЕ ПОЛЕ КОММУНАЛЬНОГО ПРЕДПРИЯТИЯ.`
    },
    {
        id: 'i02',
        type: 'chance',
        eng: 'BANK PAYS YOU DIVIDENDS IN AMOUNT OF 50.',
        rus: 'БАНК ПЛАТИТ ВАМ ДИВИЕНДЫ В РАЗМЕРЕ 50.'
    },
    {
        id: 'i03',
        type: 'chance',
        eng: 'GO BACK THREE SPACES.',
        rus: 'ВЕРНИТЕСЬ НА ТРИ ПОЛЯ НАЗАД.'
    },
    {
        id: 'i04',
        type: 'chance',
        eng: 'GO TO JAIL. GO STRAIGHT TO JAIL, DO NOT PASS "GO" AND DO NOT GET 200.',
        rus: 'ОТПРАВЛЯЙТЕСЬ В ТЮРЬМУ. ОТПРАВЛЯЙТЕСЬ ПРЯМО В ТЮРЬМУ, НЕ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД" И НЕ ПОЛУЧАЙТЕ 200.'
    },
    {
        id: 'i05',
        type: 'chance',
        eng: 'SPEEDING TICKET. PAY 15.',
        rus: 'ШТРАФ ЗА ПРЕВЫШЕНИЕ СКОРОСТИ 15.'
    },
    {
        id: 'i06',
        type: 'chance',
        eng: 'TIME TO GET YOUR CONSTRUCTION LOAN BACK. RECEIVE 150.',
        rus: 'НАСТУПИЛ СРОК ИСПОЛНЕНИЯ ПЛАТЕЖА ПО ВАШЕЙ ССУДЕ НА СТРОИТЕЛЬСТВО. ПОЛУЧИТЕ 150.'
    },
    {
        id: 'i07',
        type: 'chance',
        eng: 'PASS "GO". (RECEIVE 200)',
        rus: 'ИДИТЕ НА ПОЛЕ "ВПЕРЕД". (ПОЛУЧИТЕ 200)'
    },
    {
        id: 'i08',
        type: 'chance',
        eng: 'GO TO THE NEAREST RAIL STATION.',
        rus: 'ИДИТЕ НА БЛИЖАЙШУЮ Ж/Д СТАНЦИЮ.'
    },
    {
        id: 'i09',
        type: 'chance',
        eng: 'FREE JAIL EXIT.',
        rus: 'БЕСПЛАТНОЕ ОСВОБОЖДЕНИЕ ИЗ ТЮРЬМЫ.'
    },
    {
        id: 'i010',
        type: 'chance',
        eng: 'RENOVATIONS. PAY 25 FOR EACH HOUSE, 100 FOR EACH HOTEL.',
        rus: 'КАПИТАЛЬНЫЙ РЕМОНТ. 25 ЗА КАЖДЫЙ ДОМ, 100 ЗА КАЖДЫЙ ОТЕЛЬ.'
    },
    {
        id: 'i011',
        type: 'chance',
        eng: 'GO TO PALL MALL. IF YOU PASS "GO", RECEIVE 200.',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА УЛ. ПОЛЯНКА. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i012',
        type: 'chance',
        eng: 'GO TO KINGS CROSS STATION. IF YOU PASS "GO", RECEIVE 200.',
        rus: 'ОТПРАВЛЯЙТЕСЬ ДО Ж/Д СТАНЦИИ РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i013',
        type: 'chance',
        eng: 'GO TO TRAFALGAR SQUARE. IF YOU PASS "GO", RECEIVE 200.',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА ПЛОЩАДЬ МАЯКОВСКОГО. ЕСЛИ ВЫ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД", ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i014',
        type: 'chance',
        eng: 'YOU GOT ELECTED A CHAIRMAN. PAY 50 TO EACH PLAYER.',
        rus: 'ВАС ИЗБРАЛИ ПРЕДСЕДАТЕЛЕМ СОВЕТА ДИРЕКТОРОВ. ЗАПЛАТИТЕ КАЖДОМУ ИГРОКУ ПО 50.'
    },
    {
        id: 'i015',
        type: 'chance',
        eng: 'GO TO MAYFAIR.',
        rus: 'ОТПРАВЛЯЙТЕСЬ НА УЛ. АРБАТ.'
    },
    {
        id: 'i016',
        type: 'chance',
        eng: 'GO TO THE NEAREST RAIL STATION.',
        rus: 'ИДИТЕ НА БЛИЖАЙШУЮ Ж/Д СТАНЦИЮ.'
    },
    {
        id: 'i11',
        type: 'chest',
        eng: 'PAY 100 FOR THE HOSPITAL.',
        rus: 'ОПЛАТИТЕ РАСХОДЫ НА ГОСПИТАЛИЗАЦИЮ В РАЗМЕРЕ 100.'
    },
    {
        id: 'i12',
        type: 'chest',
        eng: 'RECEIVE 25 FOR CONSULTING SERVICES.',
        rus: 'ПОЛУЧИТЕ 25 ЗА КОНСАЛТИНГОВЫЕ УСЛУГИ.'
    },
    {
        id: 'i13',
        type: 'chest',
        eng: 'YOU EARN 50 ON STOCK SALES.',
        rus: 'НА ПРОДАЖЕ АКЦИЙ ВЫ ЗАРАБАТЫВАЕТЕ 50.'
    },
    {
        id: 'i14',
        type: 'chest',
        eng: 'INCOME TAX RETURN. RECEIVE 20.',
        rus: 'ВОЗМЕЩЕНИЕ ПОДОХОДНОГО НАЛОГА. ПОЛУЧИТЕ 20.'
    },
    {
        id: 'i15',
        type: 'chest',
        eng: 'TIME TO PAY FOR LIFE INSURANCE. RECEIVE 100.',
        rus: 'НАСТУПИЛ СРОК ПЛАТЕЖА ПО СТРАХОВАНИЮ ЖИЗНИ. ПОЛУЧИТЕ 100.'
    },
    {
        id: 'i16',
        type: 'chest',
        eng: 'FREE JAIL EXIT.',
        rus: 'БЕСПЛАТНОЕ ОСВОБОЖДЕНИЕ ИЗ ТЮРЬМЫ.'
    },
    {
        id: 'i17',
        type: 'chest',
        eng: 'PAY TUITION FEE IN AMOUNT OF 50.',
        rus: 'ОПЛАТИТЕ ОБУЧЕНИЕ В РАЗМЕРЕ 50.'
    },
    {
        id: 'i18',
        type: 'chest',
        eng: 'TODAY IS YOUR BIRTHDAY. RECEIVE 10 FROM EACH PLAYER.',
        rus: 'СЕГОДНЯ ВАШ ДЕНЬ РОЖДЕНИЯ. ПОЛУЧИТЕ 10 ОТ КАЖДОГО ИГРОКА.'
    },
    {
        id: 'i19',
        type: 'chest',
        eng: 'YOU GOT SECOND PLACE IN BEAUTY CONTEST. RECEIVE 10.',
        rus: 'ВЫ ЗАНЯЛИ ВТОРОЕ МЕСТО НА КОНКУРСЕ КРАСОТЫ. ПОЛУЧИТЕ 10.'
    },
    {
        id: 'i110',
        type: 'chest',
        eng: 'YOU RECEIVE INGERITANCE OF 100.',
        rus: 'ВЫ ПОЛУЧАЕТЕ В НАСЛЕДСТВО 100.'
    },
    {
        id: 'i111',
        type: 'chest',
        eng: 'TIME TO PAY FOR VACATION FUND. RECEIVE 100.',
        rus: 'НАСТУПИЛ СРОК ИСПОЛНЕНИЯ ПЛАТЕЖА ПО ОТПУСКНОМУ ФОНДУ. ПОЛУЧИТЕ 100.'
    },
    {
        id: 'i112',
        type: 'chest',
        eng: 'YOU VISIT A DOCTOR. PAY 50.',
        rus: 'ВИЗИТ К ВРАЧУ. ЗАПЛАТИТЕ 50.'
    },
    {
        id: 'i113',
        type: 'chest',
        eng: 'GO TO JAIL. GO STRAIGHT TO JAIL, DO NOT PASS "GO" AND DO NOT RECEIVE 200.',
        rus: 'ОТПРАВЛЯЙТЕСЬ В ТЮРЬМУ. ОТПРАВЛЯЙТЕСЬ ПРЯМО В ТЮРЬМУ, НЕ ПРОХОДИТЕ ПОЛЕ "ВПЕРЕД" И НЕ ПОЛУЧАЙТЕ 200.'
    },
    {
        id: 'i114',
        type: 'chest',
        eng: 'PROPERTY RENOVATIONS. PAY 40 FOR EACH HOUSE 115 FOR EACH HOTEL.',
        rus: 'РЕМОНТНЫЕ УЛИЧНЫЕ РАБОТЫ. 40 ЗА КАЖДЫЙ ДОМ, 115 ЗА КАЖДЫЙ ОТЕЛЬ.'
    },
    {
        id: 'i115',
        type: 'chest',
        eng: 'BANK MISTAKE IN YOUR FAVOUR. RECEIVE 200.',
        rus: 'БАНКОВСКАЯ ОШИБКА В ВАШУ ПОЛЬЗУ. ПОЛУЧИТЕ 200.'
    },
    {
        id: 'i116',
        type: 'chest',
        eng: 'PASS "GO". (RECEIVE 200)',
        rus: 'ИДИТЕ НА ПОЛЕ "ВПЕРЕД". (ПОЛУЧИТЕ 200)'
    },
];

export default DUMMY_DATA;