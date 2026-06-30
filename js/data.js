export const tripData = [
    {
        day: 1,
        date: { en: 'Wed, Aug 19', ru: 'Ср, 19 авг' },
        title: { en: 'Lake Tahoe Arrival', ru: 'Прибытие на озеро Тахо' },
        summary: { en: 'Arrive at Reno-Tahoe Airport, collect the rental car, and make the scenic drive up to beautiful South Lake Tahoe to begin the trip.', ru: 'Прибытие в аэропорт Рено-Тахо, получение арендованного автомобиля и живописная поездка в прекрасный Саут-Лейк-Тахо для начала путешествия.' },
        sequence: [
            { type: 'travel', label: { en: 'Flight Munich (MUC) to Reno-Tahoe (RNO)', ru: 'Перелет Мюнхен (MUC) — Рено-Тахо (RNO)' }, detail: { en: 'Arrival at Reno-Tahoe. Car rental pick-up.', ru: 'Прибытие в Рено-Тахо. Получение машины в прокате.' }, time: { en: '12h+', ru: '12ч+' }, icon: '✈️' },
            { type: 'drive', label: { en: 'Drive to South Lake Tahoe', ru: 'Поездка в Саут-Лейк-Тахо' }, from: 'Reno-Tahoe Airport', to: 'South Lake Tahoe', dist: 95, time: { en: '1h 15m', ru: '1ч 15м' }, icon: '🚗' },
            { type: 'stay', label: { en: 'The Landing Resort', ru: 'Курортный отель The Landing' }, detail: { en: 'Extra night in South Lake Tahoe.', ru: 'Дополнительная ночь в Саут-Лейк-Тахо.' }, icon: '🏨' }
        ]
    },
    {
        day: 2,
        date: { en: 'Thu, Aug 20', ru: 'Чт, 20 авг' },
        title: { en: 'Wedding Kickoff', ru: 'Начало свадебных торжеств' },
        summary: { en: 'Enjoy a relaxed morning at the lake before joining the group for a sunset cruise on Lake Tahoe to kick off the wedding celebrations.', ru: 'Проведите расслабленное утро у озера, а затем присоединяйтесь к группе в круизе на закате по озеру Тахо в честь начала свадебных торжеств.' },
        sequence: [
            { type: 'activity', label: { en: 'Leisure Morning', ru: 'Свободное утро' }, detail: { en: 'Explore the lake shoreline or relax.', ru: 'Прогуляйтесь по берегу озера или отдохните.' }, icon: '☕' },
            { type: 'activity', label: { en: 'Paradise Cruise', ru: 'Круиз «Парадайс»' }, detail: { en: '5:30 PM. Official wedding kickoff on the water.', ru: '17:30. Официальный старт свадьбы на воде.' }, icon: '⛵' },
            { type: 'stay', label: { en: 'The Landing Resort', ru: 'Курортный отель The Landing' }, detail: { en: 'Wedding basecamp in Tahoe.', ru: 'Свадебный лагерь в Тахо.' }, icon: '🏨' }
        ]
    },
    {
        day: 3,
        date: { en: 'Fri, Aug 21', ru: 'Пт, 21 авг' },
        title: { en: 'The Wedding Day', ru: 'День свадьбы' },
        summary: { en: 'The big day: celebrate Olga & Pavel\'s wedding ceremony, cocktails, and lakeside dinner at The Landing Resort.', ru: 'Главный день: празднование свадьбы Ольги и Павла, церемония, коктейли и праздничный ужин у озера в отеле The Landing Resort.' },
        sequence: [
            { type: 'activity', label: { en: 'Wedding Ceremony', ru: 'Свадебная церемония' }, detail: { en: '3:30 PM at The Landing Tahoe. Cocktail and Dinner follows.', ru: '15:30 в The Landing Tahoe. Затем последуют коктейли и ужин.' }, icon: '💍' },
            { type: 'stay', label: { en: 'The Landing Resort', ru: 'Курортный отель The Landing' }, detail: { en: 'South Lake Tahoe.', ru: 'Саут-Лейк-Тахо.' }, icon: '🏨' }
        ]
    },
    {
        day: 4,
        date: { en: 'Sat, Aug 22', ru: 'Сб, 22 авг' },
        title: { en: 'Leaving Lake Tahoe to Yosemite', ru: 'Переезд из озера Тахо в Йосемити' },
        summary: { en: 'Join the farewell brunch in South Lake Tahoe to share final group moments before preparing for the mountain crossing.', ru: 'Присоединяйтесь к прощальному бранчу в Саут-Лейк-Тахо, чтобы провести последние минуты с группой перед подготовкой к переезду через горы.' },
        sequence: [
            { type: 'activity', label: { en: 'Brunch at Toulouse', ru: 'Бранч в Toulouse' }, detail: { en: '11:00 AM. Final group celebration.', ru: '11:00. Финальная встреча группы.' }, icon: '🥞' },
            {
                type: 'drive',
                label: { en: 'Segment 1: South Lake Tahoe to Bridgeport', ru: 'Участок 1: Саут-Лейк-Тахо — Бриджпорт' },
                from: 'South Lake Tahoe',
                to: 'Bridgeport, CA',
                dist: 180,
                time: { en: '2h 15m', ru: '2ч 15м' },
                detail: { en: 'Drive south from Lake Tahoe along US-395, crossing scenic mountain passes and descending into the historic ranching town of Bridgeport.', ru: 'Поездка на юг от озера Тахо по шоссе US-395 через живописные горные перевалы со спуском в исторический скотоводческий городок Бриджпорт.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 2: Bridgeport to Lee Vining', ru: 'Участок 2: Бриджпорт — Ли-Вининг' },
                from: 'Bridgeport, CA',
                to: 'Lee Vining, CA',
                dist: 95,
                time: { en: '1h 30m', ru: '1ч 30м' },
                detail: { en: 'Continue south on US-395, passing the spectacular overlooks of Mono Lake before arriving at your Yosemite Gateway basecamp.', ru: 'Продолжайте движение на юг по шоссе US-395 мимо захватывающих смотровых площадок озера Моно до базового лагеря у ворот в Йосемити.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'Lake View Lodge', ru: 'Лодж Lake View' }, detail: { en: 'Lee Vining, CA. Basecamp before entering Yosemite via Tioga Pass.', ru: 'Ли-Вининг, Калифорния. Базовый лагерь перед въездом в Йосемити через перевал Тайога.' }, icon: '🏨' }
        ]
    },
    {
        day: 5,
        date: { en: 'Sun, Aug 23', ru: 'Вс, 23 авг' },
        title: { en: 'Yosemite Valley & Tioga Pass Hikes', ru: 'Походы по долине Йосемити и перевалу Тайога' },
        summary: { en: 'Drive over the scenic Tioga Pass, choose from alpine lake trails or valley waterfall hikes, and head south to Oakhurst.', ru: 'Поездка через живописный перевал Тайога, выбор между альпийскими озерами или водопадами долины, и переезд на юг в Оакхерст.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Morning Commute: Lee Vining to Yosemite Valley (via Tioga Pass)', ru: 'Утренний переезд: Ли-Вининг — Долина Йосемити (через перевал Тайога)' },
                from: 'Lee Vining, CA',
                to: 'Yosemite Valley',
                dist: 120,
                time: { en: '2h 00m', ru: '2ч 00м' },
                detail: { en: 'Drive up the scenic CA-120 (Tioga Pass Road) crossing the Sierra Nevada. Stop by Tuolumne Meadows and Tenaya Lake on the way. ⚠️ <b>Caution:</b> Mountain driving with high elevations up to 3,000m.', ru: 'Поездка по живописному шоссе CA-120 (Tioga Pass Road) через Сьерра-Неваду. По пути остановитесь в Туоломни-Медоуз и у озера Тенайя. ⚠️ <b>Внимание:</b> вождение в высокогорье на высоте до 3000 м.' },
                icon: '🚗'
            },
            {
                type: 'options',
                label: { en: 'Yosemite: Valley & Tioga Road Hikes', ru: 'Йосемити: Походы в долине и на Тайога Роуд' },
                detail: { en: 'Choose an alpine trail along Tioga Road or descend into the Valley for iconic waterfall hikes.', ru: 'Выберите альпийскую тропу вдоль Тайога Роуд или спуститесь в долину к знаменитым водопадам.' },
                hikes: [
                    {
                        name: { en: 'Mist Trail to Vernal Fall', ru: 'Тропа Mist Trail к водопаду Вернал' },
                        dist: { en: '7.5 km', ru: '7.5 км' },
                        time: { en: '2h 30m', ru: '2ч 30м' },
                        diff: 'Moderate',
                        color: 'bg-emerald-600',
                        link: 'https://www.komoot.com/smarttour/e1193360370',
                        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A classic Yosemite hike climbing steep stone stairs alongside the roaring Merced River to the top of Vernal Fall, rewarding you with spectacular waterfall views and cooling mist.', ru: 'Классический поход в Йосемити: подъем по крутым каменным ступеням вдоль бурной реки Мерсед к вершине водопада Вернал, вознаграждающий захватывающими видами и освежающими брызгами.' }
                    },
                    {
                        name: { en: 'Vernal & Nevada Falls via Mist Trail', ru: 'Водопады Вернал и Невада через Mist Trail' },
                        dist: { en: '13.4 km', ru: '13.4 км' },
                        time: { en: '5h 00m', ru: '5ч 00м' },
                        diff: 'Difficult',
                        color: 'bg-red-600',
                        link: 'https://www.komoot.com/smarttour/e1193350212',
                        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'The ultimate Yosemite valley hike. Climb past Vernal Fall and continue up the steep granite cliffs to the top of Nevada Fall, returning via the John Muir Trail for sweeping valley vistas.', ru: 'Лучший поход по долине Йосемити. Поднимитесь мимо водопада Вернал и продолжите путь по крутым гранитным скалам к вершине водопада Невада, возвращаясь по тропе Джона Мьюра с панорамными видами.' }
                    },
                    {
                        name: { en: 'Clark Point & Vernal Falls Loop', ru: 'Петля Clark Point и водопад Вернал' },
                        dist: { en: '10.3 km', ru: '10.3 км' },
                        time: { en: '3h 45m', ru: '3ч 45м' },
                        diff: 'Moderate',
                        color: 'bg-amber-600',
                        link: 'https://www.komoot.com/smarttour/e1193363314',
                        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A wonderful loop that takes you up the Mist Trail to Vernal Fall, then ascends to Clark Point for a panoramic overlook before winding back down the John Muir Trail.', ru: 'Прекрасный кольцевой маршрут: подъем по Mist Trail к водопаду Вернал, подъем к смотровой площадке Clark Point и спуск обратно по тропе Джона Мьюра.' }
                    },
                    {
                        name: { en: 'Cathedral Lakes Trail', ru: 'Тропа к озерам Катидрал' },
                        dist: { en: '15.8 km', ru: '15.8 км' },
                        time: { en: '4h 45m', ru: '4ч 45м' },
                        diff: 'Moderate',
                        color: 'bg-emerald-600',
                        link: 'https://www.komoot.com/smarttour/e2813460839/cathedral-lakes-trail?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A spectacular hike in Tuolumne Meadows climbing through pine forests to the stunning alpine shores of Lower and Upper Cathedral Lakes under the shadow of Cathedral Peak.', ru: 'Захватывающий поход в Туоломни-Медоуз с подъемом через сосновые леса к потрясающим альпийским берегам Верхнего и Нижнего озер Катидрал у подножия пика Катидрал.' }
                    }
                ]
            },
            {
                type: 'drive',
                label: { en: 'Evening Commute: Yosemite Valley to Oakhurst', ru: 'Вечерний переезд: Долина Йосемити — Оакхерст' },
                from: 'Yosemite Valley',
                to: 'Oakhurst, CA',
                dist: 77,
                time: { en: '1h 15m', ru: '1ч 15м' },
                detail: { en: 'Drive south from Yosemite Valley along CA-41 (Wawona Road) to your overnight stay in Oakhurst.', ru: 'Поездка на юг из долины Йосемити по шоссе CA-41 (Wawona Road) к месту вашей ночевки в Оакхерсте.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'Oakhurst', ru: 'Оакхерст' }, detail: { en: 'Gateway to Yosemite South Entrance.', ru: 'Ворота у южного въезда в Йосемити.' }, icon: '🏨' }
        ]
    },
    {
        day: 6,
        date: { en: 'Mon, Aug 24', ru: 'Пн, 24 авг' },
        title: { en: 'Mariposa Grove Giant Sequoias & Southward Transit', ru: 'Гигантские секвойи Марипоса и транзит на юг' },
        summary: { en: 'Walk among the ancient giants of Mariposa Grove, then make the drive south through Fresno to Three Rivers at the foothills of Sequoia NP.', ru: 'Прогуляйтесь среди древних гигантов в роще Марипоса, затем отправляйтесь на юг через Фресно в Три-Риверс у предгорий парка Секвойя.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Morning Commute: Oakhurst to Mariposa Grove', ru: 'Утренний переезд: Оакхерст — Роща Марипоса' },
                from: 'Oakhurst, CA',
                to: 'Mariposa Grove',
                dist: 26,
                time: { en: '25m', ru: '25м' },
                detail: { en: 'Short drive north on CA-41 to the Yosemite South Entrance and the Mariposa Grove Welcome Plaza.', ru: 'Короткая поездка на север по шоссе CA-41 к южному въезду в Йосемити и приветственной площадке рощи Марипоса.' },
                icon: '🚗'
            },
            {
                type: 'options',
                label: { en: 'Yosemite: Mariposa Grove Hikes', ru: 'Йосемити: Походы по роще Марипоса' },
                detail: { en: 'Choose a loop trail to explore these ancient giants.', ru: 'Выберите кольцевой маршрут для знакомства с этими древними гигантами.' },
                hikes: [
                    {
                        name: { en: 'Grizzly Giant Loop', ru: 'Петля Гризли Джайант' },
                        dist: { en: '3.2 km', ru: '3.2 км' },
                        time: { en: '1h 30m', ru: '1ч 30м' },
                        diff: 'Easy',
                        color: 'bg-emerald-600',
                        link: 'TBD',
                        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'An easy, popular loop to see the most famous giant sequoias in Mariposa Grove, including the Grizzly Giant (nearly 3,000 years old) and the California Tunnel Tree. [Komoot Link TBD]', ru: 'Легкий и популярный кольцевой маршрут, позволяющий увидеть самые известные гигантские секвойи в роще Марипоса, включая Гризли Джайант (возрастом около 3000 лет) и Калифорнийское туннельное дерево. [Ссылка на Komoot TBD]' }
                    },
                    {
                        name: { en: 'Guardians Loop', ru: 'Петля Гвардианс' },
                        dist: { en: '10.3 km', ru: '10.3 км' },
                        time: { en: '4h 00m', ru: '4ч 00м' },
                        diff: 'Moderate',
                        color: 'bg-amber-600',
                        link: 'TBD',
                        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A moderate hike that climbs to the upper portion of Mariposa Grove, passing the historic Guardians cabin and many giant trees. Offers a quieter forest experience. [Komoot Link TBD]', ru: 'Средний по сложности поход, который поднимается в верхнюю часть рощи Марипоса, проходя мимо исторической хижины Смотрителей и множества гигантских деревьев. Более уединенный маршрут. [Ссылка на Komoot TBD]' }
                    }
                ]
            },
            {
                type: 'drive',
                label: { en: 'Segment 1: Mariposa Grove to Fresno', ru: 'Участок 1: Роща Марипоса — Фресно' },
                from: 'Mariposa Grove',
                to: 'Fresno, CA',
                dist: 90,
                time: { en: '1h 15m', ru: '1ч 15м' },
                detail: { en: 'Drive south from the Yosemite South Entrance along CA-41 down through the foothills into the flat Central Valley agricultural hub of Fresno.', ru: 'Поездка на юг от южного въезда в Йосемити по шоссе CA-41 через предгорья на равнину Центральной долины в сельскохозяйственный центр Фресно.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 2: Fresno to Three Rivers', ru: 'Участок 2: Фресно — Три-Риверс' },
                from: 'Fresno, CA',
                to: 'Three Rivers, CA',
                dist: 124,
                time: { en: '1h 45m', ru: '1ч 45м' },
                detail: { en: 'Drive across the agricultural Central Valley before climbing back up into the Sierra Nevada foothills to arrive in Three Rivers, the gateway to Sequoia National Park.', ru: 'Поездка через сельскохозяйственную Центральную долину перед новым подъемом в предгорья Сьерра-Невады в городок Три-Риверс — ворота в национальный парк Секвойя.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'Three Rivers', ru: 'Три-Риверс' }, detail: { en: 'Sequoia Park foothills.', ru: 'Предгорья парка Секвойя.' }, icon: '🏨' }
        ]
    },
    {
        day: 7,
        date: { en: 'Tue, Aug 25', ru: 'Вт, 25 авг' },
        title: { en: 'Giant Sequoia National Park', ru: 'Национальный парк Гигантских Секвой' },
        summary: { en: 'Walk among the ancient giant sequoias including General Sherman, scale Moro Rock, and spend the night in Three Rivers.', ru: 'Прогуляйтесь среди древних гигантских секвой, включая дерево Генерала Шермана, поднимитесь на скалу Моро и проведите ночь в Три-Риверс.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Morning Commute: Three Rivers to Giant Forest', ru: 'Утренний переезд: Три-Риверс — Гигантский лес' },
                from: 'Three Rivers, CA',
                to: 'Giant Forest Museum',
                dist: 50,
                time: { en: '1h 00m', ru: '1ч 00м' },
                detail: { en: 'Climb the steep, winding Generals Highway (CA-198) from the foothills to the high Sierra redwood forest. ⚠️ <b>Caution:</b> Sharp curves and narrow sections; vehicles over 22 feet not advised.', ru: 'Подъем по крутому и извилистому шоссе Дженералд-Хайвей (CA-198) от предгорий к высокогорному лесу секвой в Сьерре. ⚠️ <b>Внимание:</b> крутые повороты и узкие участки; не рекомендуется для длинного транспорта.' },
                icon: '🚗'
            },
            {
                type: 'options',
                label: { en: 'Sequoia National Park', ru: 'Национальный парк Секвойя' },
                detail: { en: 'Hikes through the worlds largest trees.', ru: 'Прогулки среди самых больших деревьев в мире.' },
                hikes: [
                    {
                        name: { en: 'General Sherman Tree Loop', ru: 'Петля дерева Генерала Шермана' },
                        dist: { en: '9.8 km', ru: '9.8 км' },
                        time: { en: '3h 00m', ru: '3ч 00м' },
                        diff: 'Moderate',
                        color: 'bg-green-600',
                        link: 'https://www.komoot.com/smarttour/e809103831',
                        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A scenic, moderate walk through the heart of the Giant Forest to visit General Sherman, the largest tree on Earth by volume, walking among ancient redwoods.', ru: 'Живописная несложная прогулка по центру Гигантского леса к Генералу Шерману — самому большому дереву на Земле по объему древесины.' }
                    },
                    {
                        name: { en: 'Congress Trail Loop', ru: 'Петля Конгресс-Трейл' },
                        dist: { en: '6.3 km', ru: '6.3 км' },
                        time: { en: '2h 00m', ru: '2ч 00м' },
                        diff: 'Moderate',
                        color: 'bg-amber-600',
                        link: 'https://www.komoot.com/smarttour/e1324884824',
                        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A paved loop starting from the General Sherman Tree that leads deep into the Giant Forest, passing the impressive President, Senate, and House tree groups.', ru: 'Асфальтированная петля, начинающаяся от дерева Генерала Шермана и ведущая вглубь Гигантского леса мимо величественных групп деревьев Президент, Сенат и Палата представителей.' }
                    },
                    {
                        name: { en: 'Moro Rock Trail', ru: 'Тропа на скалу Моро' },
                        dist: { en: '6.8 km', ru: '6.8 км' },
                        time: { en: '2h 15m', ru: '2ч 15м' },
                        diff: 'Moderate',
                        color: 'bg-indigo-600',
                        link: 'https://www.komoot.com/smarttour/e2813461461',
                        image: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'Hike from the Giant Forest Museum through pine forests to the base of Moro Rock, then climb the concrete stairway carved into the granite dome for panoramic views.', ru: 'Маршрут от Музея Гигантского леса через сосновые рощи к подножию скалы Моро с последующим подъемом по вырубленной в гранитном куполе лестнице ради панорамных видов.' }
                    }
                ]
            },
            {
                type: 'drive',
                label: { en: 'Evening Return: Giant Forest to Three Rivers', ru: 'Вечернее возвращение: Гигантский лес — Три-Риверс' },
                from: 'Giant Forest Museum',
                to: 'Three Rivers, CA',
                dist: 50,
                time: { en: '1h 00m', ru: '1ч 00м' },
                detail: { en: 'Descend the Generals Highway back to your basecamp in Three Rivers. Use low gears to save brakes.', ru: 'Спуск по шоссе Дженералд-Хайвей обратно в базовый лагерь в Три-Риверс. Используйте пониженную передачу для сбережения тормозов.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'Three Rivers', ru: 'Три-Риверс' }, detail: { en: 'Sequoia Park foothills.', ru: 'Предгорья парка Секвойя.' }, icon: '🏨' }
        ]
    },
    {
        day: 8,
        date: { en: 'Wed, Aug 26', ru: 'Ср, 26 авг' },
        title: { en: 'Los Angeles: Hollywood & Observatory', ru: 'Лос-Анджелес: Голливуд и обсерватория' },
        summary: { en: 'Make the drive to Los Angeles, then explore Hollywood landmarks and take in panoramic city views from Griffith Observatory.', ru: 'Переезд в Лос-Анджелес, затем знакомство с достопримечательностями Голливуда и панорамные виды на город из обсерватории Гриффита.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Segment 1: Three Rivers to Bakersfield', ru: 'Участок 1: Три-Риверс — Бейкерсфилд' },
                from: 'Three Rivers, CA',
                to: 'Bakersfield, CA',
                dist: 140,
                time: { en: '1h 45m', ru: '1ч 45м' },
                detail: { en: 'Drive south from the Sierra foothills through the heart of the Central Valley farmland to Bakersfield.', ru: 'Поездка на юг от предгорий Сьерры через сельскохозяйственные угодья в центре Центральной долины до Бейкерсфилда.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 2: Bakersfield to Los Angeles (via Tejon Pass)', ru: 'Участок 2: Бейкерсфилд — Лос-Анджелес (через перевал Техон)' },
                from: 'Bakersfield, CA',
                to: 'Los Angeles',
                dist: 180,
                time: { en: '2h 05m', ru: '2ч 05м' },
                detail: { en: 'Climb the steep Tejon Pass (known locally as the Grapevine) up to 1,270m, before descending into the northern edge of the Los Angeles basin. ⚠️ <b>Caution:</b> Watch for heavy truck traffic and sudden strong crosswinds on the pass.', ru: 'Подъем на крутой перевал Техон (известный как Грейпвайн) на высоту до 1270 м с последующим спуском в северную часть бассейна Лос-Анджелеса. ⚠️ <b>Внимание:</b> следите за плотным движением грузовиков и внезапными сильными боковыми ветрами на перевале.' },
                icon: '🚗'
            },
            {
                type: 'options',
                label: { en: 'Los Angeles: Hollywood Trails', ru: 'Лос-Анджелес: Тропы Голливуда' },
                detail: { en: 'Choose a hiking trail in Griffith Park for scenic city viewpoints and Hollywood Sign vistas.', ru: 'Выберите пешеходную тропу в Гриффит-парке для панорамного обзора города и видов на знак Голливуда.' },
                hikes: [
                    {
                        name: { en: 'Hollywood Sign via Innsdale Trail', ru: 'Знак Голливуда через Innsdale Trail' },
                        dist: { en: '4.1 km', ru: '4.1 км' },
                        time: { en: '1h 15m', ru: '1ч 15м' },
                        diff: 'Easy',
                        color: 'bg-emerald-600',
                        link: 'https://www.komoot.com/smarttour/e2813322722',
                        image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A pleasant, easy walk along the Innsdale Trail with direct views of the iconic Hollywood Sign. Great for a relaxed walk and photography.', ru: 'Приятная и простая прогулка по тропе Innsdale Trail с прямым видом на знаменитый знак Голливуда. Отлично подходит для отдыха и фотографий.' }
                    },
                    {
                        name: { en: 'Mount Hollywood & 3 Mile Trail', ru: 'Гора Голливуд и 3-мильная тропа' },
                        dist: { en: '6.4 km', ru: '6.4 км' },
                        time: { en: '2h 00m', ru: '2ч 00м' },
                        diff: 'Moderate',
                        color: 'bg-amber-600',
                        link: 'https://www.komoot.com/smarttour/e2813380432',
                        image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A scenic trail winding up Mount Hollywood from Griffith Observatory, offering 360-degree views of the LA Basin, downtown skyline, and the Hollywood Sign.', ru: 'Живописная тропа, поднимающаяся на гору Голливуд от обсерватории Гриффита и предлагающая 360-градусный обзор бассейна Лос-Анджелеса, даунтауна и знака Голливуда.' }
                    },
                    {
                        name: { en: 'Griffith Park Hollywood Sign Trail', ru: 'Тропа к знаку Голливуда в Гриффит-парке' },
                        dist: { en: '16.2 km', ru: '16.2 км' },
                        time: { en: '5h 00m', ru: '5ч 00м' },
                        diff: 'Difficult',
                        color: 'bg-red-600',
                        link: 'https://www.komoot.com/smarttour/e2813338925',
                        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'A comprehensive, challenging hike exploring the rugged ridges of Griffith Park, climbing high to the peak directly behind the Hollywood Sign letters.', ru: 'Длинный и сложный поход по хребтам Гриффит-парка с подъемом на вершину прямо за буквами знака Голливуда.' }
                    }
                ]
            },
            { type: 'activity', label: { en: 'Griffith Observatory', ru: 'Обсерватория Гриффита' }, detail: { en: 'Explore scientific exhibits, planetarium shows, and panoramic views of the Los Angeles basin and Hollywood Sign.', ru: 'Осмотрите научные экспонаты, посетите шоу в планетарии и насладитесь панорамным видом на бассейн Лос-Анджелеса и знак Голливуда.' }, icon: '🔭' },
            { type: 'activity', label: { en: 'Hollywood Walk of Fame', ru: 'Голливудская аллея славы' }, detail: { en: 'Stroll along Hollywood Boulevard and visit the historic Chinese Theatre and Sunset Strip.', ru: 'Прогуляйтесь по Голливудскому бульвару, посетите исторический Китайский театр и Сансет-Стрип.' }, icon: '⭐' },
            { type: 'stay', label: { en: 'Los Angeles', ru: 'Лос-Анджелес' }, detail: { en: 'Hollywood or Santa Monica basecamp.', ru: 'Базовый лагерь в Голливуде или Санта-Монике.' }, icon: '🏨' }
        ]
    },
    {
        day: 9,
        date: { en: 'Thu, Aug 27', ru: 'Чт, 27 авг' },
        title: { en: 'Los Angeles: Beaches & Getty Art Museum', ru: 'Лос-Анджелес: пляжи и художественный музей Гетти' },
        summary: { en: 'Immerse yourself in world-class art at the Getty Center and spend a relaxing afternoon on the beaches of Santa Monica and Venice.', ru: 'Погрузитесь в мир искусства в Центре Гетти и проведите расслабленный день на пляжах Санта-Моники и Венис.' },
        sequence: [
            { type: 'activity', label: { en: 'The Getty Center', ru: 'Центр Гетти' }, detail: { en: 'Visit the world-renowned museum hosting European paintings, sculptures, and beautiful modern architecture overlooking Los Angeles.', ru: 'Посетите всемирно известный музейный комплекс с коллекцией европейской живописи, скульптур и красивой современной архитектурой с видом на Лос-Анджелес.' }, icon: '🎨' },
            { type: 'activity', label: { en: 'Santa Monica & Venice Beach', ru: 'Санта-Моника и Венис-Бич' }, detail: { en: 'Walk along the historic Santa Monica Pier, visit the beach, and enjoy the eccentric Venice Beach boardwalk.', ru: 'Прогуляйтесь по историческому пирсу Санта-Моники, посетите пляж и насладитесь эксцентричной набережной Венис-Бич.' }, icon: '🎡' },
            { type: 'stay', label: { en: 'Los Angeles', ru: 'Лос-Анджелес' }, detail: { en: 'Hollywood or Santa Monica basecamp.', ru: 'Базовый лагерь в Голливуде или Санта-Монике.' }, icon: '🏨' }
        ]
    },
    {
        day: 10,
        date: { en: 'Fri, Aug 28', ru: 'Пт, 28 авг' },
        title: { en: 'Pacific Coast Highway: Los Angeles to Morro Bay', ru: 'Шоссе PCH: Лос-Анджелес — Морро-Бэй' },
        summary: { en: 'Begin your journey along the iconic Pacific Coast Highway, driving north from Los Angeles past Malibu and Santa Barbara, exploring the Danish town of Solvang, and ending at Morro Bay.', ru: 'Начните путешествие по культовому Тихоокеанскому шоссе, двигаясь на север от Лос-Анджелеса мимо Малибу и Санта-Барбары, посетите датский городок Солванг и финишируйте в Морро-Бэй.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Segment 1: Los Angeles to Santa Barbara', ru: 'Участок 1: Лос-Анджелес — Санта-Барбара' },
                from: 'Los Angeles',
                to: 'Santa Barbara',
                dist: 150,
                time: { en: '1h 45m', ru: '1ч 45м' },
                detail: { en: 'Start in Santa Monica and drive along the scenic coastal CA-1 through Malibu, past Zuma Beach and Point Mugu. ⚠️ <b>Traffic Tip:</b> Leave early in the morning (before 8:00 AM) to avoid heavy morning gridlock exiting the Los Angeles metro area.', ru: 'Стартуйте из Санта-Моники и двигайтесь по живописному прибрежному шоссе CA-1 через Малибу, мимо пляжа Зума и мыса Пойнт-Мугу. ⚠️ <b>Совет по трафику:</b> выезжайте пораньше утром (до 8:00), чтобы избежать утренних заторов на выезде из Лос-Анджелеса.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 2: Santa Barbara to Solvang', ru: 'Участок 2: Санта-Барбара — Солванг' },
                from: 'Santa Barbara',
                to: 'Solvang, CA',
                dist: 70,
                time: { en: '50m', ru: '50м' },
                detail: { en: 'Head inland to the historic Danish village of Solvang. <b>Route choice:</b> Take CA-154 (San Marcos Pass) for stunning high-altitude mountain and lake views, or take the coastal US-101 past Gaviota State Park. ⚠️ <b>Avoid:</b> CA-154 can be winding and slow behind trucks; take US-101 if you prefer a flatter, easier drive.', ru: 'Направляйтесь вглубь материка к исторической датской деревне Солванг. <b>Выбор маршрута:</b> поезжайте по CA-154 (перевал Сан-Маркос) ради потрясающих видов на горы и озера, либо по прибрежной трассе US-101 мимо парка Гавиота. ⚠️ <b>Рекомендация:</b> шоссе CA-154 очень извилистое, движение на нем может быть медленным из-за грузовиков; выбирайте US-101, если предпочитаете более пологий и простой путь.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 3: Solvang to San Luis Obispo', ru: 'Участок 3: Солванг — Сан-Луис-Обиспо' },
                from: 'Solvang, CA',
                to: 'San Luis Obispo, CA',
                dist: 90,
                time: { en: '1h 00m', ru: '1ч 00м' },
                detail: { en: 'Drive through rolling wine country back to US-101 North, passing Pismo Beach and heading to San Luis Obispo for your lunch stop.', ru: 'Поездка через холмистые винодельческие районы обратно на шоссе US-101 North мимо Писмо-Бич в Сан-Луис-Обиспо на обед.' },
                icon: '🚗'
            },
            { type: 'activity', label: { en: 'Lunch in SLO', ru: 'Обед в Сан-Луис-Обиспо' }, detail: { en: 'Historic Mission district and creek walk.', ru: 'Исторический район Миссии и прогулка у ручья.' }, icon: '🥗' },
            {
                type: 'drive',
                label: { en: 'Segment 4: San Luis Obispo to Morro Bay', ru: 'Участок 4: Сан-Луис-Обиспо — Морро-Бэй' },
                from: 'San Luis Obispo, CA',
                to: 'Morro Bay, CA',
                dist: 20,
                time: { en: '15m', ru: '15м' },
                detail: { en: 'After lunch and a stroll along the creek, take a short drive up CA-1 North directly to Morro Bay.', ru: 'После обеда и прогулки у ручья совершите короткую поездку на север по трассе CA-1 North прямо до Морро-Бэй.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'Morro Bay', ru: 'Морро-Бэй' }, detail: { en: 'Coastal night by Morro Rock.', ru: 'Ночь на побережье у скалы Морро-Рок.' }, icon: '🏨' }
        ]
    },
    {
        day: 11,
        date: { en: 'Sat, Aug 29', ru: 'Сб, 29 авг' },
        title: { en: 'Big Sur Scenic Coast Drive', ru: 'Живописная прибрежная дорога Биг-Сюр' },
        summary: { en: 'Drive the most famous and breathtaking section of Highway 1 through Big Sur, stop at the Elephant Seal Rookery, visit McWay Falls, photograph Bixby Bridge, and arrive in San Francisco.', ru: 'Поездка по самому известному и красивому участку шоссе Highway 1 через Биг-Сюр, остановка у лежбища морских слонов, визит к водопаду МакУэй, фотосессия у моста Биксби и прибытие в Сан-Франциско.' },
        sequence: [
            {
                type: 'drive',
                label: { en: 'Segment 1: Morro Bay to McWay Falls', ru: 'Участок 1: Морро-Бэй — Водопад МакУэй' },
                from: 'Morro Bay',
                to: 'McWay Falls',
                dist: 130,
                time: { en: '2h 00m', ru: '2ч 00м' },
                detail: { en: 'Drive past Cambria and San Simeon. Stop at the Elephant Seal Rookery at San Simeon to view the massive elephant seals, then cross Ragged Point (the "Portal to Big Sur"). Drive up the wild coastal cliffs to Julia Pfeiffer Burns State Park. ⚠️ <b>Safety Tip:</b> Take it slow—this section has tight curves and dramatic cliffs.', ru: 'Проезжайте мимо Камбрии и Сан-Симеона. Остановитесь у лежбища морских слонов в Сан-Симеоне, чтобы понаблюдать за ними, затем пересеките мыс Рэггед-Пойнт («Ворота в Биг-Сюр»). Поднимитесь по диким скалам к парку Джулии Пфайффер Бернс. ⚠️ <b>Совет по безопасности:</b> не торопитесь — на этом участке крутые повороты и обрывы.' },
                icon: '🚗'
            },
            {
                type: 'drive',
                label: { en: 'Segment 2: McWay Falls to Carmel-by-the-Sea', ru: 'Участок 2: Водопад МакУэй — Кармел-бай-те-Си' },
                from: 'McWay Falls',
                to: 'Carmel-by-the-Sea',
                dist: 60,
                time: { en: '1h 00m', ru: '1ч 00м' },
                detail: { en: 'Continue north on the most dramatic portion of Highway 1, winding past redwood groves and crossing the world-famous Bixby Creek Bridge. ⚠️ <b>Road Status:</b> Highway 1 through Big Sur is fully open. Expect localized 24/7 one-way controlled traffic delays for maintenance (e.g. 5-6 miles north of Big Sur Valley). Always monitor Caltrans QuickMap.', ru: 'Продолжайте движение на север по самой зрелищной части шоссе Highway 1 мимо секвойных рощ через знаменитый мост Биксби. ⚠️ <b>Статус дороги:</b> шоссе Highway 1 в районе Биг-Сюр полностью открыто. Возможны локальные задержки из-за реверсивного движения для дорожных работ (например, в 8-10 км к северу от долины Биг-Сюр). Пожалуйста, сверяйтесь с картой Caltrans QuickMap.' },
                icon: '🚗'
            },
            { type: 'activity', label: { en: 'Bixby Creek Bridge', ru: 'Мост Биксби-Крик' }, detail: { en: 'Iconic photography stop.', ru: 'Знаменитая остановка для фотографий.' }, icon: '📸' },
            {
                type: 'drive',
                label: { en: 'Segment 3: Carmel-by-the-Sea to San Francisco', ru: 'Участок 3: Кармел-бай-те-Си — Сан-Франциско' },
                from: 'Carmel-by-the-Sea',
                to: 'San Francisco',
                dist: 190,
                time: { en: '2h 45m', ru: '2ч 45м' },
                detail: { en: 'Depart Carmel, driving north past Monterey, through the surf town of Santa Cruz, and along the scenic cliffs of Half Moon Bay before entering San Francisco. ⚠️ <b>Avoid:</b> Driving this section after dark, as coastal fog can roll in rapidly and severely limit visibility.', ru: 'Отправление из Кармела, дорога на север мимо Монтерея через серф-город Санта-Круз и по скалам Хаф-Мун-Бэй на въезд в Сан-Франциско. ⚠️ <b>Рекомендация:</b> избегайте вождения на этом участке в темноте, так как прибрежный туман может сгуститься очень быстро и сильно ухудшить видимость.' },
                icon: '🚗'
            },
            { type: 'stay', label: { en: 'San Francisco', ru: 'Сан-Франциско' }, detail: { en: 'Union Square area.', ru: 'Район Юнион-сквер.' }, icon: '🏨' }
        ]
    },
    {
        day: 12,
        date: { en: 'Sun, Aug 30', ru: 'Вс, 30 авг' },
        title: { en: 'San Francisco: Lands End Coastal Hike', ru: 'Сан-Франциско: тропа Lands End' },
        summary: { en: 'Explore San Francisco\'s rugged coastline along Lands End, hike through the Presidio, and capture gorgeous Golden Gate views.', ru: 'Исследуйте скалистую береговую линию Сан-Франциско вдоль тропы Lands End, прогуляйтесь по парку Президио и сделайте отличные снимки моста Золотые Ворота.' },
        sequence: [
            {
                type: 'options',
                label: { en: 'San Francisco Coastline', ru: 'Побережье Сан-Франциско' },
                detail: { en: 'Choose a trail with Golden Gate views.', ru: 'Выберите тропу с видом на Золотые Ворота.' },
                hikes: [
                    {
                        name: { en: 'Lands End Trail Loop', ru: 'Петля тропы Lands End' },
                        dist: { en: '3.5 km', ru: '3.5 км' },
                        time: { en: '1h 10m', ru: '1ч 10м' },
                        diff: 'Moderate',
                        color: 'bg-cyan-600',
                        link: 'https://www.komoot.com/smarttour/e1220837025',
                        image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'Follow the windswept coastal cliffs of San Francisco for spectacular views of the Golden Gate Bridge and the Pacific Ocean. Discover ruins of the historic Sutro Baths.', ru: 'Пройдите по обдуваемым ветрами прибрежным скалам Сан-Франциско ради захватывающих видов на мост Золотые Ворота и Тихий океан. Осмотрите руины исторических купален Сутро.' }
                    },
                    {
                        name: { en: 'Ecology Trail and Lovers\' Lane Loop', ru: 'Экологическая тропа и петля Аллеи влюбленных' },
                        dist: { en: '4.5 km', ru: '4.5 км' },
                        time: { en: '1h 20m', ru: '1ч 20м' },
                        diff: 'Easy',
                        color: 'bg-indigo-600',
                        link: 'https://www.komoot.com/smarttour/e2813371162',
                        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'Walk through the historic Presidio, following the peaceful Ecology Trail and crossing the famous Lovers\' Lane brick footpath beneath eucalyptus and pine groves.', ru: 'Прогулка по историческому парку Президио по спокойной Экологической тропе с переходом на знаменитую кирпичную дорожку Аллеи влюбленных под сенью эвкалиптовых и сосновых рощ.' }
                    },
                    {
                        name: { en: 'San Francisco Bay Trail (Pier 45)', ru: 'Тропа залива Сан-Франциско (Пирс 45)' },
                        dist: { en: '5.7 km', ru: '5.7 км' },
                        time: { en: '1h 30m', ru: '1ч 30м' },
                        diff: 'Easy',
                        color: 'bg-blue-600',
                        link: 'https://www.komoot.com/smarttour/e1282005883',
                        image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: { en: 'Stroll along the historic waterfront of San Francisco Bay, passing Pier 45, Fisherman\'s Wharf, and enjoying panoramic views of Alcatraz and the Golden Gate.', ru: 'Прогулка по исторической набережной залива Сан-Франциско мимо Пирса 45, Рыбацкой пристани с панорамными видами на Алькатрас и Золовые Ворота.' }
                    }
                ]
            },
            { type: 'stay', label: { en: 'San Francisco', ru: 'Сан-Франциско' }, detail: { en: 'Final trip night.', ru: 'Последняя ночь поездки.' }, icon: '🏨' }
        ]
    },
    {
        day: 13,
        date: { en: 'Mon, Aug 31', ru: 'Пн, 31 авг' },
        title: { en: 'Departure from San Francisco', ru: 'Вылет из Сан-Франциско' },
        summary: { en: 'Conclude the California adventure with rental car drop-off at SFO and board your return flight back to Munich.', ru: 'Завершение калифорнийского приключения: сдача арендованной машины в аэропорту SFO и посадка на обратный рейс в Мюнхен.' },
        sequence: [
            { type: 'drive', label: { en: 'San Francisco (SFO) Airport Car Drop-off', ru: 'Сдача машины в аэропорту Сан-Франциско (SFO)' }, from: 'San Francisco', to: 'San Francisco (SFO) Airport', dist: 30, time: { en: '45m', ru: '45м' }, icon: '🚗' },
            { type: 'travel', label: { en: 'Flight San Francisco (SFO) to Munich (MUC)', ru: 'Перелет Сан-Франциско (SFO) — Мюнхен (MUC)' }, detail: { en: 'Return flight to Munich.', ru: 'Обратный рейс в Мюнхен.' }, time: { en: '11h 30m', ru: '11ч 30м' }, icon: '✈️' }
        ]
    }
];

export const todos = [
    {
        id: 1,
        text: {
            en: 'Yosemite Entry Reservation (Aug 23)',
            ru: 'Резервация въезда в Йосемити (23 авг)'
        },
        done: false
    },
    {
        id: 2,
        text: {
            en: 'Yosemite/Mariposa Lodging (Aug 22-23)',
            ru: 'Жилье в Йосемити/Марипосе (22-23 авг)'
        },
        done: false
    },
    {
        id: 3,
        text: {
            en: 'Sequoia Area Lodging (Aug 24)',
            ru: 'Жилье в районе Секвойи (24 авг)'
        },
        done: false
    },
    {
        id: 4,
        text: {
            en: 'Reno-Tahoe (RNO) Car Rental Confirmation',
            ru: 'Подтверждение аренды машины в Рено-Тахо (RNO)'
        },
        done: false
    }
];
