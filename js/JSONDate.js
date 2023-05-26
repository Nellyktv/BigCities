const datejson = `[-540, -330, -480, 180, 360, -180, 360, -330, -480, -540]`; // gettimezoneoffset для городов с котроыми работаем, разницы в минутах между UTC и часовым поясом этих городов



const gamejson = `[
    "Метро Шанхая является первым в мире по протяжённости линий. Его длина состовляет более 500 км",
    "Токио, несмотря на свою славу, является одним из самых опасных городов мира",
    "В Мехико почти каждый день происходят землятресения",
    "Весь Сан-Паулу завешан бесконечными рекламными баннерами и щитами, которые запрещено снимать. Так правительство защищается от нападения птиц",
    "В Мумбаи существует курротный отдых. Тут прекрасная природа, а пляжи есть прямо в городской черте",
    "Самая низкая температура в Каире была зафиксирована в 2015г, она составила -1 °C",
    "Дакка является одним из самых загрязнённых городов на планете",
    "Правительсвто Пекина искусственно вызывает осадки, чтобы не было пыли",
    "В Шанхае уже около 100 лет стоит памятник Александру Пушкину",
    "Дели включает в себя столицу страны – Нью-Дели, которая является всего-лишь его самым фешенебельным районом"
]`;

const answerjson = `["true", "false", "true", "false", "false", "false", "true", "true", "true", "true"]`;


const explanations = `[
    "Ежедневный пассажиропоток шанхайского метрополитена составляет около 7 млн человек.",
    "Столица Японии стабильно держится в тройке лидеров по безопасности. В 2022 году первое место у Токио забрал Копенгаген",
    "Мехико окружают горы вулканического происхождения, территория города сейсмически опасна.",
    "В Сан-Паулу законодательно запрещены банеры и вся наружная реклама на автобусах, плакатах и тд, чтобы не портить вид города.",
    "Городу, действительно, повезло с географическим расположением, одна беда — всё вокруг покрыто толстым слоем мусора, поэтому купаться тут не стоит.",
    "Самая низкая температура, когда-либо зафиксированная в Каире, составила +2,4 °C. Отрицательных температур здесь не фиксировалось ни разу за всю историю наблюдений.",
    "В 2017 году в городе в течение 188 дней из 365 фиксировалось наличие токсичного аммиака в городском воздухе.",
    "Пекин часто накрывают пыльные бури, по причине чего иногда правительство искусственно вызывает осадки. В 2002 г. подобная буря принесла в столицу около 50 000 тонн пыли.",
    "Памятник Пушкину был установлен в 1937 году по инициативе проживавших в Шанхае русских эмигрантов. Поводом стало 100-летие со дня смерти поэта. ",
    "Нью-Дели -столица Индии населением — 3 431 336 человек – один из столичных районов, в котором расположены правительственные здания."
]`;
