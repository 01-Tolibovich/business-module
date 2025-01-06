const defaultCountries = [
  {
    code: "TJ",
    country: {
      ru: "Таджикистан",
      en: "Tajikistan",
      tj: "Тоҷикистон",
    },
  },
  {
    code: "RU",
    country: {
      ru: "Россия",
      en: "Russia",
      tj: "Русия",
    },
  },
  {
    code: "AF",
    country: {
      ru: "Афганистан",
      en: "Afghanistan",
      tj: "Афғонистон",
    },
  },
  {
    code: "AL",
    country: {
      ru: "Албания",
      en: "Albania",
      tj: "Албания",
    },
  },
  {
    code: "DZ",
    country: {
      ru: "Алжир",
      en: "Algeria",
      tj: "Алҷазоир",
    },
  },
  {
    code: "AD",
    country: {
      ru: "Андорра",
      en: "Andorra",
      tj: "Андорра",
    },
  },
  {
    code: "AO",
    country: {
      ru: "Ангола",
      en: "Angola",
      tj: "Ангола",
    },
  },
  {
    code: "AG",
    country: {
      ru: "Антигуа и Барбуда",
      en: "Antigua and Barbuda",
      tj: "Антигуа ва Барбуда",
    },
  },
  {
    code: "AR",
    country: {
      ru: "Аргентина",
      en: "Argentina",
      tj: "Аргентина",
    },
  },
  {
    code: "AM",
    country: {
      ru: "Армения",
      en: "Armenia",
      tj: "Арманистон",
    },
  },
  {
    code: "AU",
    country: {
      ru: "Австралия",
      en: "Australia",
      tj: "Австралия",
    },
  },
  {
    code: "AT",
    country: {
      ru: "Австрия",
      en: "Austria",
      tj: "Австрия",
    },
  },
  {
    code: "AZ",
    country: {
      ru: "Азербайджан",
      en: "Azerbaijan",
      tj: "Озарбойҷон",
    },
  },
  {
    code: "BS",
    country: {
      ru: "Багамские Острова",
      en: "Bahamas",
      tj: "Багам",
    },
  },
  {
    code: "BH",
    country: {
      ru: "Бахрейн",
      en: "Bahrain",
      tj: "Баҳрайн",
    },
  },
  {
    code: "BD",
    country: {
      ru: "Бангладеш",
      en: "Bangladesh",
      tj: "Бангладеш",
    },
  },
  {
    code: "BB",
    country: {
      ru: "Барбадос",
      en: "Barbados",
      tj: "Барбадос",
    },
  },
  {
    code: "BY",
    country: {
      ru: "Беларусь",
      en: "Belarus",
      tj: "Беларус",
    },
  },
  {
    code: "BE",
    country: {
      ru: "Бельгия",
      en: "Belgium",
      tj: "Белгия",
    },
  },
  {
    code: "BZ",
    country: {
      ru: "Белиз",
      en: "Belize",
      tj: "Белиз",
    },
  },
  {
    code: "BJ",
    country: {
      ru: "Бенин",
      en: "Benin",
      tj: "Бенин",
    },
  },
  {
    code: "BT",
    country: {
      ru: "Бутан",
      en: "Bhutan",
      tj: "Бутон",
    },
  },
  {
    code: "BO",
    country: {
      ru: "Боливия",
      en: "Bolivia",
      tj: "Боливия",
    },
  },
  {
    code: "BA",
    country: {
      ru: "Босния и Герцеговина",
      en: "Bosnia and Herzegovina",
      tj: "Босния ва Ҳерсеговина",
    },
  },
  {
    code: "BW",
    country: {
      ru: "Ботсвана",
      en: "Botswana",
      tj: "Ботсвана",
    },
  },
  {
    code: "BR",
    country: {
      ru: "Бразилия",
      en: "Brazil",
      tj: "Бразилия",
    },
  },
  {
    code: "BN",
    country: {
      ru: "Бруней",
      en: "Brunei",
      tj: "Бруней",
    },
  },
  {
    code: "BG",
    country: {
      ru: "Болгария",
      en: "Bulgaria",
      tj: "Булғория",
    },
  },
  {
    code: "BF",
    country: {
      ru: "Буркина-Фасо",
      en: "Burkina Faso",
      tj: "Буркина-Фасо",
    },
  },
  {
    code: "BI",
    country: {
      ru: "Бурунди",
      en: "Burundi",
      tj: "Бурунди",
    },
  },
  {
    code: "KH",
    country: {
      ru: "Камбоджа",
      en: "Cambodia",
      tj: "Камбоҷа",
    },
  },
  {
    code: "CM",
    country: {
      ru: "Камерун",
      en: "Cameroon",
      tj: "Камерун",
    },
  },
  {
    code: "CA",
    country: {
      ru: "Канада",
      en: "Canada",
      tj: "Канада",
    },
  },
  {
    code: "CV",
    country: {
      ru: "Кабо-Верде",
      en: "Cape Verde",
      tj: "Кабо-Верде",
    },
  },
  {
    code: "CF",
    country: {
      ru: "Центрально-Африканская Республика",
      en: "Central African Republic",
      tj: "Ҷумҳурии Африқоии Марказӣ",
    },
  },

  {
    code: "TD",
    country: {
      ru: "Чад",
      en: "Chad",
      tj: "Чад",
    },
  },
  {
    code: "CL",
    country: {
      ru: "Чили",
      en: "Chile",
      tj: "Чили",
    },
  },
  {
    code: "CN",
    country: {
      ru: "Китай",
      en: "China",
      tj: "Хитой",
    },
  },
  {
    code: "CO",
    country: {
      ru: "Колумбия",
      en: "Colombia",
      tj: "Колумбия",
    },
  },
  {
    code: "KM",
    country: {
      ru: "Коморские Острова",
      en: "Comoros",
      tj: "Комор",
    },
  },
  {
    code: "CG",
    country: {
      ru: "Конго",
      en: "Congo",
      tj: "Конго",
    },
  },
  {
    code: "CD",
    country: {
      ru: "Демократическая Республика Конго",
      en: "Democratic Republic of the Congo",
      tj: "Ҷумҳурии Демократии Конго",
    },
  },
  {
    code: "CR",
    country: {
      ru: "Коста-Рика",
      en: "Costa Rica",
      tj: "Коста-Рика",
    },
  },
  {
    code: "HR",
    country: {
      ru: "Хорватия",
      en: "Croatia",
      tj: "Хорватия",
    },
  },
  {
    code: "CU",
    country: {
      ru: "Куба",
      en: "Cuba",
      tj: "Куба",
    },
  },
  {
    code: "CY",
    country: {
      ru: "Кипр",
      en: "Cyprus",
      tj: "Кипр",
    },
  },
  {
    code: "CZ",
    country: {
      ru: "Чехия",
      en: "Czech Republic",
      tj: "Ҷумҳурии Чех",
    },
  },
  {
    code: "DK",
    country: {
      ru: "Дания",
      en: "Denmark",
      tj: "Дания",
    },
  },
  {
    code: "DJ",
    country: {
      ru: "Джибути",
      en: "Djibouti",
      tj: "Ҷибути",
    },
  },
  {
    code: "DM",
    country: {
      ru: "Доминика",
      en: "Dominica",
      tj: "Доминика",
    },
  },
  {
    code: "DO",
    country: {
      ru: "Доминиканская Республика",
      en: "Dominican Republic",
      tj: "Ҷумҳурии Доминикан",
    },
  },
  {
    code: "TL",
    country: {
      ru: "Восточный Тимор",
      en: "East Timor",
      tj: "Тимори Шарқӣ",
    },
  },
  {
    code: "EC",
    country: {
      ru: "Эквадор",
      en: "Ecuador",
      tj: "Эквадор",
    },
  },
  {
    code: "EG",
    country: {
      ru: "Египет",
      en: "Egypt",
      tj: "Миср",
    },
  },
  {
    code: "SV",
    country: {
      ru: "Сальвадор",
      en: "El Salvador",
      tj: "Салвадор",
    },
  },
  {
    code: "GQ",
    country: {
      ru: "Экваториальная Гвинея",
      en: "Equatorial Guinea",
      tj: "Гвинеяи Экваторӣ",
    },
  },
  {
    code: "ER",
    country: {
      ru: "Эритрея",
      en: "Eritrea",
      tj: "Эритрея",
    },
  },
  {
    code: "EE",
    country: {
      ru: "Эстония",
      en: "Estonia",
      tj: "Эстония",
    },
  },
  {
    code: "ET",
    country: {
      ru: "Эфиопия",
      en: "Ethiopia",
      tj: "Эфиопия",
    },
  },
  {
    code: "FJ",
    country: {
      ru: "Фиджи",
      en: "Fiji",
      tj: "Фиҷи",
    },
  },
  {
    code: "FI",
    country: {
      ru: "Финляндия",
      en: "Finland",
      tj: "Финляндия",
    },
  },
  {
    code: "FR",
    country: {
      ru: "Франция",
      en: "France",
      tj: "Фарранса",
    },
  },
  {
    code: "GA",
    country: {
      ru: "Габон",
      en: "Gabon",
      tj: "Габон",
    },
  },
  {
    code: "GM",
    country: {
      ru: "Гамбия",
      en: "Gambia",
      tj: "Гамбия",
    },
  },
  {
    code: "GE",
    country: {
      ru: "Грузия",
      en: "Georgia",
      tj: "Гурҷистон",
    },
  },
  {
    code: "DE",
    country: {
      ru: "Германия",
      en: "Germany",
      tj: "Германия",
    },
  },
  {
    code: "GH",
    country: {
      ru: "Гана",
      en: "Ghana",
      tj: "Гана",
    },
  },
  {
    code: "GR",
    country: {
      ru: "Греция",
      en: "Greece",
      tj: "Юнон",
    },
  },
  {
    code: "GD",
    country: {
      ru: "Гренада",
      en: "Grenada",
      tj: "Гренада",
    },
  },
  {
    code: "GT",
    country: {
      ru: "Гватемала",
      en: "Guatemala",
      tj: "Гватемала",
    },
  },
  {
    code: "GN",
    country: {
      ru: "Гвинея",
      en: "Guinea",
      tj: "Гвинея",
    },
  },
  {
    code: "GW",
    country: {
      ru: "Гвинея-Бисау",
      en: "Guinea-Bissau",
      tj: "Гвинея-Бисау",
    },
  },
  {
    code: "GY",
    country: {
      ru: "Гайана",
      en: "Guyana",
      tj: "Гайана",
    },
  },
  {
    code: "HT",
    country: {
      ru: "Гаити",
      en: "Haiti",
      tj: "Гаити",
    },
  },
  {
    code: "HN",
    country: {
      ru: "Гондурас",
      en: "Honduras",
      tj: "Гондурас",
    },
  },
  {
    code: "HU",
    country: {
      ru: "Венгрия",
      en: "Hungary",
      tj: "Маҷористон",
    },
  },
  {
    code: "IS",
    country: {
      ru: "Исландия",
      en: "Iceland",
      tj: "Исландия",
    },
  },
  {
    code: "IN",
    country: {
      ru: "Индия",
      en: "India",
      tj: "Ҳиндустон",
    },
  },
  {
    code: "ID",
    country: {
      ru: "Индонезия",
      en: "Indonesia",
      tj: "Индонезия",
    },
  },
  {
    code: "IR",
    country: {
      ru: "Иран",
      en: "Iran",
      tj: "Эрон",
    },
  },
  {
    code: "IQ",
    country: {
      ru: "Ирак",
      en: "Iraq",
      tj: "Ироқ",
    },
  },
  {
    code: "IE",
    country: {
      ru: "Ирландия",
      en: "Ireland",
      tj: "Ирландия",
    },
  },
  {
    code: "IL",
    country: {
      ru: "Израиль",
      en: "Israel",
      tj: "Исроил",
    },
  },
  {
    code: "IT",
    country: {
      ru: "Италия",
      en: "Italy",
      tj: "Италия",
    },
  },
  {
    code: "CI",
    country: {
      ru: "Кот-д'Ивуар",
      en: "Ivory Coast",
      tj: "Кот-д'Ивуар",
    },
  },
  {
    code: "JM",
    country: {
      ru: "Ямайка",
      en: "Jamaica",
      tj: "Ямайка",
    },
  },
  {
    code: "JP",
    country: {
      ru: "Япония",
      en: "Japan",
      tj: "Япония",
    },
  },
  {
    code: "JO",
    country: {
      ru: "Иордания",
      en: "Jordan",
      tj: "Урдун",
    },
  },
  {
    code: "KZ",
    country: {
      ru: "Казахстан",
      en: "Kazakhstan",
      tj: "Қазоқистон",
    },
  },
  {
    code: "KE",
    country: {
      ru: "Кения",
      en: "Kenya",
      tj: "Кения",
    },
  },
  {
    code: "KI",
    country: {
      ru: "Кирибати",
      en: "Kiribati",
      tj: "Кирибати",
    },
  },
  {
    code: "KW",
    country: {
      ru: "Кувейт",
      en: "Kuwait",
      tj: "Қувайт",
    },
  },
  {
    code: "KG",
    country: {
      ru: "Киргизия",
      en: "Kyrgyzstan",
      tj: "Қирғизистон",
    },
  },
  {
    code: "LA",
    country: {
      ru: "Лаос",
      en: "Laos",
      tj: "Лаос",
    },
  },
  {
    code: "LV",
    country: {
      ru: "Латвия",
      en: "Latvia",
      tj: "Латвия",
    },
  },
  {
    code: "LB",
    country: {
      ru: "Ливан",
      en: "Lebanon",
      tj: "Ливан",
    },
  },
  {
    code: "LS",
    country: {
      ru: "Лесото",
      en: "Lesotho",
      tj: "Лесото",
    },
  },
  {
    code: "LR",
    country: {
      ru: "Либерия",
      en: "Liberia",
      tj: "Либерия",
    },
  },
  {
    code: "LY",
    country: {
      ru: "Ливия",
      en: "Libya",
      tj: "Ливия",
    },
  },
  {
    code: "LI",
    country: {
      ru: "Лихтенштейн",
      en: "Liechtenstein",
      tj: "Лихтенштейн",
    },
  },
  {
    code: "LT",
    country: {
      ru: "Литва",
      en: "Lithuania",
      tj: "Литва",
    },
  },
  {
    code: "LU",
    country: {
      ru: "Люксембург",
      en: "Luxembourg",
      tj: "Люксембург",
    },
  },
  {
    code: "MK",
    country: {
      ru: "Северная Македония",
      en: "North Macedonia",
      tj: "Македонияи Шимолӣ",
    },
  },
  {
    code: "MG",
    country: {
      ru: "Мадагаскар",
      en: "Madagascar",
      tj: "Мадагаскар",
    },
  },
  {
    code: "MW",
    country: {
      ru: "Малави",
      en: "Malawi",
      tj: "Малави",
    },
  },
  {
    code: "MY",
    country: {
      ru: "Малайзия",
      en: "Malaysia",
      tj: "Малайзия",
    },
  },
  {
    code: "MV",
    country: {
      ru: "Мальдивы",
      en: "Maldives",
      tj: "Малдив",
    },
  },
  {
    code: "ML",
    country: {
      ru: "Мали",
      en: "Mali",
      tj: "Мали",
    },
  },
  {
    code: "MT",
    country: {
      ru: "Мальта",
      en: "Malta",
      tj: "Малта",
    },
  },
  {
    code: "MH",
    country: {
      ru: "Маршалловы Острова",
      en: "Marshall Islands",
      tj: "Маршаллова Островҳо",
    },
  },
  {
    code: "MR",
    country: {
      ru: "Мавритания",
      en: "Mauritania",
      tj: "Мавритания",
    },
  },
  {
    code: "MU",
    country: {
      ru: "Маврикий",
      en: "Mauritius",
      tj: "Маврикий",
    },
  },
  {
    code: "MX",
    country: {
      ru: "Мексика",
      en: "Mexico",
      tj: "Мексика",
    },
  },
  {
    code: "FM",
    country: {
      ru: "Микронезия",
      en: "Micronesia",
      tj: "Микронезия",
    },
  },
  {
    code: "MD",
    country: {
      ru: "Молдова",
      en: "Moldova",
      tj: "Молдова",
    },
  },
  {
    code: "MC",
    country: {
      ru: "Монако",
      en: "Monaco",
      tj: "Монако",
    },
  },
  {
    code: "MN",
    country: {
      ru: "Монголия",
      en: "Mongolia",
      tj: "Муғулистон",
    },
  },
  {
    code: "ME",
    country: {
      ru: "Черногория",
      en: "Montenegro",
      tj: "Черногория",
    },
  },
  {
    code: "MA",
    country: {
      ru: "Марокко",
      en: "Morocco",
      tj: "Марокаш",
    },
  },
  {
    code: "MZ",
    country: {
      ru: "Мозамбик",
      en: "Mozambique",
      tj: "Мозамбик",
    },
  },
  {
    code: "MM",
    country: {
      ru: "Мьянма",
      en: "Myanmar",
      tj: "Мьянма",
    },
  },
  {
    code: "NA",
    country: {
      ru: "Намибия",
      en: "Namibia",
      tj: "Намибия",
    },
  },
  {
    code: "NR",
    country: {
      ru: "Науру",
      en: "Nauru",
      tj: "Науру",
    },
  },
  {
    code: "NP",
    country: {
      ru: "Непал",
      en: "Nepal",
      tj: "Непал",
    },
  },
  {
    code: "NL",
    country: {
      ru: "Нидерланды",
      en: "Netherlands",
      tj: "Нидерландия",
    },
  },
  {
    code: "NZ",
    country: {
      ru: "Новая Зеландия",
      en: "New Zealand",
      tj: "Зеландияи Нав",
    },
  },
  {
    code: "NI",
    country: {
      ru: "Никарагуа",
      en: "Nicaragua",
      tj: "Никарагуа",
    },
  },
  {
    code: "NE",
    country: {
      ru: "Нигер",
      en: "Niger",
      tj: "Нигер",
    },
  },
  {
    code: "NG",
    country: {
      ru: "Нигерия",
      en: "Nigeria",
      tj: "Нигерия",
    },
  },
  {
    code: "KP",
    country: {
      ru: "КНДР",
      en: "North Korea",
      tj: "Кореяи Шимолӣ",
    },
  },
  {
    code: "NO",
    country: {
      ru: "Норвегия",
      en: "Norway",
      tj: "Норвегия",
    },
  },
  {
    code: "OM",
    country: {
      ru: "Оман",
      en: "Oman",
      tj: "Умон",
    },
  },
  {
    code: "PK",
    country: {
      ru: "Пакистан",
      en: "Pakistan",
      tj: "Покистон",
    },
  },
  {
    code: "PW",
    country: {
      ru: "Палау",
      en: "Palau",
      tj: "Палау",
    },
  },
  {
    code: "PS",
    country: {
      ru: "Государство Палестина",
      en: "Palestine",
      tj: "Фаластин",
    },
  },
  {
    code: "PA",
    country: {
      ru: "Панама",
      en: "Panama",
      tj: "Панама",
    },
  },
  {
    code: "PG",
    country: {
      ru: "Папуа — Новая Гвинея",
      en: "Papua New Guinea",
      tj: "Папуа — Гвинеяи Нав",
    },
  },
  {
    code: "PY",
    country: {
      ru: "Парагвай",
      en: "Paraguay",
      tj: "Парагвай",
    },
  },
  {
    code: "PE",
    country: {
      ru: "Перу",
      en: "Peru",
      tj: "Перу",
    },
  },
  {
    code: "PH",
    country: {
      ru: "Филиппины",
      en: "Philippines",
      tj: "Филиппин",
    },
  },
  {
    code: "PL",
    country: {
      ru: "Польша",
      en: "Poland",
      tj: "Лаҳистон",
    },
  },
  {
    code: "PT",
    country: {
      ru: "Португалия",
      en: "Portugal",
      tj: "Португалия",
    },
  },
  {
    code: "QA",
    country: {
      ru: "Катар",
      en: "Qatar",
      tj: "Қатар",
    },
  },
  {
    code: "RO",
    country: {
      ru: "Румыния",
      en: "Romania",
      tj: "Руминия",
    },
  },
  {
    code: "RW",
    country: {
      ru: "Руанда",
      en: "Rwanda",
      tj: "Руанда",
    },
  },
  {
    code: "KN",
    country: {
      ru: "Сент-Китс и Невис",
      en: "Saint Kitts and Nevis",
      tj: "Сент-Китс ва Невис",
    },
  },
  {
    code: "LC",
    country: {
      ru: "Сент-Люсия",
      en: "Saint Lucia",
      tj: "Сент-Люсия",
    },
  },
  {
    code: "VC",
    country: {
      ru: "Сент-Винсент и Гренадины",
      en: "Saint Vincent and the Grenadines",
      tj: "Сент-Винсент ва Гренадин",
    },
  },
  {
    code: "WS",
    country: {
      ru: "Самоа",
      en: "Samoa",
      tj: "Самоа",
    },
  },
  {
    code: "SM",
    country: {
      ru: "Сан-Марино",
      en: "San Marino",
      tj: "Сан-Марино",
    },
  },
  {
    code: "ST",
    country: {
      ru: "Сан-Томе и Принсипи",
      en: "Sao Tome and Principe",
      tj: "Сан-Томе ва Принсипи",
    },
  },
  {
    code: "SA",
    country: {
      ru: "Саудовская Аравия",
      en: "Saudi Arabia",
      tj: "Арабистони Саудӣ",
    },
  },
  {
    code: "SN",
    country: {
      ru: "Сенегал",
      en: "Senegal",
      tj: "Сенегал",
    },
  },
  {
    code: "RS",
    country: {
      ru: "Сербия",
      en: "Serbia",
      tj: "Сербия",
    },
  },
  {
    code: "SC",
    country: {
      ru: "Сейшельские Острова",
      en: "Seychelles",
      tj: "Сейшел",
    },
  },
  {
    code: "SL",
    country: {
      ru: "Сьерра-Леоне",
      en: "Sierra Leone",
      tj: "Сьерра-Леоне",
    },
  },
  {
    code: "SG",
    country: {
      ru: "Сингапур",
      en: "Singapore",
      tj: "Сингапур",
    },
  },
  {
    code: "SK",
    country: {
      ru: "Словакия",
      en: "Slovakia",
      tj: "Словакия",
    },
  },
  {
    code: "SI",
    country: {
      ru: "Словения",
      en: "Slovenia",
      tj: "Словения",
    },
  },
  {
    code: "SB",
    country: {
      ru: "Соломоновы Острова",
      en: "Solomon Islands",
      tj: "Ҷазираҳои Соломон",
    },
  },
  {
    code: "SO",
    country: {
      ru: "Сомали",
      en: "Somalia",
      tj: "Сомалӣ",
    },
  },
  {
    code: "ZA",
    country: {
      ru: "Южно-Африканская Республика",
      en: "South Africa",
      tj: "Африкаи Ҷанубӣ",
    },
  },
  {
    code: "KR",
    country: {
      ru: "Республика Корея",
      en: "South Korea",
      tj: "Кореяи Ҷанубӣ",
    },
  },
  {
    code: "SS",
    country: {
      ru: "Южный Судан",
      en: "South Sudan",
      tj: "Судони Ҷанубӣ",
    },
  },
  {
    code: "ES",
    country: {
      ru: "Испания",
      en: "Spain",
      tj: "Испания",
    },
  },
  {
    code: "LK",
    country: {
      ru: "Шри-Ланка",
      en: "Sri Lanka",
      tj: "Шри-Ланка",
    },
  },
  {
    code: "SD",
    country: {
      ru: "Судан",
      en: "Sudan",
      tj: "Судон",
    },
  },
  {
    code: "SR",
    country: {
      ru: "Суринам",
      en: "Suriname",
      tj: "Суринам",
    },
  },
  {
    code: "SZ",
    country: {
      ru: "Свазиленд",
      en: "Swaziland",
      tj: "Свазиленд",
    },
  },
  {
    code: "SE",
    country: {
      ru: "Швеция",
      en: "Sweden",
      tj: "Шветсия",
    },
  },
  {
    code: "CH",
    country: {
      ru: "Швейцария",
      en: "Switzerland",
      tj: "Швейцария",
    },
  },
  {
    code: "SY",
    country: {
      ru: "Сирия",
      en: "Syria",
      tj: "Сурия",
    },
  },
  {
    code: "TW",
    country: {
      ru: "Тайвань",
      en: "Taiwan",
      tj: "Тайван",
    },
  },
  {
    code: "TZ",
    country: {
      ru: "Танзания",
      en: "Tanzania",
      tj: "Танзания",
    },
  },
  {
    code: "TH",
    country: {
      ru: "Таиланд",
      en: "Thailand",
      tj: "Таиланд",
    },
  },
  {
    code: "TG",
    country: {
      ru: "Того",
      en: "Togo",
      tj: "Того",
    },
  },
  {
    code: "TO",
    country: {
      ru: "Тонга",
      en: "Tonga",
      tj: "Тонга",
    },
  },
  {
    code: "TT",
    country: {
      ru: "Тринидад и Тобаго",
      en: "Trinidad and Tobago",
      tj: "Тринидад ва Тобаго",
    },
  },
  {
    code: "TN",
    country: {
      ru: "Тунис",
      en: "Tunisia",
      tj: "Тунис",
    },
  },
  {
    code: "TR",
    country: {
      ru: "Турция",
      en: "Turkey",
      tj: "Туркия",
    },
  },
  {
    code: "TM",
    country: {
      ru: "Туркменистан",
      en: "Turkmenistan",
      tj: "Туркманистон",
    },
  },
  {
    code: "TV",
    country: {
      ru: "Тувалу",
      en: "Tuvalu",
      tj: "Тувалу",
    },
  },
  {
    code: "UG",
    country: {
      ru: "Уганда",
      en: "Uganda",
      tj: "Уганда",
    },
  },
  {
    code: "UA",
    country: {
      ru: "Украина",
      en: "Ukraine",
      tj: "Украина",
    },
  },
  {
    code: "AE",
    country: {
      ru: "ОАЭ",
      en: "United Arab Emirates",
      tj: "Аморатҳои Муттаҳидаи Араб",
    },
  },
  {
    code: "GB",
    country: {
      ru: "Великобритания",
      en: "United Kingdom",
      tj: "Шоҳигарии Муттаҳида",
    },
  },
  {
    code: "US",
    country: {
      ru: "Соединенные Штаты Америки",
      en: "United States",
      tj: "Иёлоти Муттаҳида",
    },
  },
  {
    code: "UY",
    country: {
      ru: "Уругвай",
      en: "Uruguay",
      tj: "Уругвай",
    },
  },
  {
    code: "UZ",
    country: {
      ru: "Узбекистан",
      en: "Uzbekistan",
      tj: "Ӯзбекистон",
    },
  },
  {
    code: "VU",
    country: {
      ru: "Вануату",
      en: "Vanuatu",
      tj: "Вануату",
    },
  },
  {
    code: "VA",
    country: {
      ru: "Ватикан",
      en: "Vatican City",
      tj: "Шаҳри Вотикон",
    },
  },
  {
    code: "VE",
    country: {
      ru: "Венесуэла",
      en: "Venezuela",
      tj: "Венесуэла",
    },
  },
  {
    code: "VN",
    country: {
      ru: "Вьетнам",
      en: "Vietnam",
      tj: "Ветнам",
    },
  },
  {
    code: "YE",
    country: {
      ru: "Йемен",
      en: "Yemen",
      tj: "Йемен",
    },

  },
  {
    code: "ZM",
    country: {
      ru: "Замбия",
      en: "Zambia",
      tj: "Замбия",
    },
  },
  {
    code: "ZW",
    country: {
      ru: "Зимбабве",
      en: "Zimbabwe",
      tj: "Зимбабве",
    },
  },
];

export default defaultCountries;
