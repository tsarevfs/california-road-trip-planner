export const tripData = {
    en: [
        { 
            day: 1, date: "Wed, Aug 19", title: "Lake Tahoe Arrival", 
            summary: "Arrive at Reno-Tahoe Airport, collect the rental car, and make the scenic drive up to beautiful South Lake Tahoe to begin the trip.",
            sequence: [
                { type: 'travel', label: 'Flight Munich (MUC) to Reno-Tahoe (RNO)', detail: 'Arrival at Reno-Tahoe. Car rental pick-up.', time: '12h+', icon: '✈️' },
                { type: 'drive', label: 'Drive to South Lake Tahoe', from: 'Reno-Tahoe Airport', to: 'South Lake Tahoe', dist: 95, time: '1h 15m', icon: '🚗' },
                { type: 'stay', label: 'The Landing Resort', detail: 'Extra night in South Lake Tahoe.', icon: '🏨' }
            ]
        },
        { 
            day: 2, date: "Thu, Aug 20", title: "Wedding Kickoff", 
            summary: "Enjoy a relaxed morning at the lake before joining the group for a sunset cruise on Lake Tahoe to kick off the wedding celebrations.",
            sequence: [
                { type: 'activity', label: 'Leisure Morning', detail: 'Explore the lake shoreline or relax.', icon: '☕' },
                { type: 'activity', label: 'Paradise Cruise', detail: '5:30 PM. Official wedding kickoff on the water.', icon: '⛵' },
                { type: 'stay', label: 'The Landing Resort', detail: 'Wedding basecamp in Tahoe.', icon: '🏨' }
            ]
        },
        { 
            day: 3, date: "Fri, Aug 21", title: "The Wedding Day", 
            summary: "The big day: celebrate Olga & Pavel's wedding ceremony, cocktails, and lakeside dinner at The Landing Resort.",
            sequence: [
                { type: 'activity', label: 'Wedding Ceremony', detail: '3:30 PM at The Landing Tahoe. Cocktail and Dinner follows.', icon: '💍' },
                { type: 'stay', label: 'The Landing Resort', detail: 'South Lake Tahoe.', icon: '🏨' }
            ]
        },
        { 
            day: 4, date: "Sat, Aug 22", title: "Leaving Lake Tahoe to Yosemite", 
            summary: "Join the farewell brunch in South Lake Tahoe to share final group moments before preparing for the mountain crossing.",
            sequence: [
                { type: 'activity', label: 'Brunch at Toulouse', detail: '11:00 AM. Final group celebration.', icon: '🥞' },
                { 
                    type: 'drive', 
                    label: 'Segment 1: South Lake Tahoe to Bridgeport', 
                    from: 'South Lake Tahoe', 
                    to: 'Bridgeport, CA', 
                    dist: 180, 
                    time: '2h 15m', 
                    detail: 'Drive south from Lake Tahoe along US-395, crossing scenic mountain passes and descending into the historic ranching town of Bridgeport.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 2: Bridgeport to Lee Vining', 
                    from: 'Bridgeport, CA', 
                    to: 'Lee Vining, CA', 
                    dist: 95, 
                    time: '1h 30m', 
                    detail: 'Continue south on US-395, passing the spectacular overlooks of Mono Lake before arriving at your Yosemite Gateway basecamp.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Yosemite Gateway', detail: 'Lee Vining or Yosemite Area.', icon: '🏨' }
            ]
        },
        { 
            day: 5, date: "Sun, Aug 23", title: "Yosemite Valley Hikes", 
            summary: "Conquer Yosemite Valley's iconic, strenuous trails like the Mist Trail or Upper Yosemite Fall, then head to your gateway lodging.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Yosemite: Valley Hikes', 
                    detail: 'Conquer Yosemite Valley\'s iconic, strenuous trails.',
                    hikes: [
                        { 
                            name: 'Mist Trail to Vernal Fall', 
                            dist: '7.5 km', 
                            time: '2h 30m', 
                            diff: 'Moderate', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e1193360370',
                            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A classic Yosemite hike climbing steep stone stairs alongside the roaring Merced River to the top of Vernal Fall, rewarding you with spectacular waterfall views and cooling mist.'
                        },
                        { 
                            name: 'Vernal & Nevada Falls via Mist Trail', 
                            dist: '13.4 km', 
                            time: '5h 00m', 
                            diff: 'Difficult', 
                            color: 'bg-red-600', 
                            link: 'https://www.komoot.com/smarttour/e1193350212',
                            image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'The ultimate Yosemite valley hike. Climb past Vernal Fall and continue up the steep granite cliffs to the top of Nevada Fall, returning via the John Muir Trail for sweeping valley vistas.'
                        },
                        { 
                            name: 'Clark Point & Vernal Falls Loop', 
                            dist: '10.3 km', 
                            time: '3h 45m', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e1193363314',
                            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A wonderful loop that takes you up the Mist Trail to Vernal Fall, then ascends to Clark Point for a panoramic overlook before winding back down the John Muir Trail.'
                        }
                    ]
                },
                { type: 'stay', label: 'Yosemite Gateway', detail: 'El Portal or Mariposa Area.', icon: '🏨' }
            ]
        },
        { 
            day: 6, date: "Mon, Aug 24", title: "Yosemite Alpine Lakes & Viewpoints", 
            summary: "Enjoy Yosemite's spectacular scenic trails including Tenaya Lake and Glacier Point, then drive south to the foothills of Sequoia.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Yosemite: Arrival Trails', 
                    detail: 'Choose an easy hike for your second day in the park.',
                    hikes: [
                        { 
                            name: 'Cathedral Lakes Trail', 
                            dist: '15.8 km', 
                            time: '4h 45m', 
                            diff: 'Moderate', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e2813460839/cathedral-lakes-trail?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A spectacular hike in Tuolumne Meadows climbing through pine forests to the stunning alpine shores of Lower and Upper Cathedral Lakes under the shadow of Cathedral Peak.'
                        },
                        { 
                            name: 'Lower Yosemite Fall Trail', 
                            dist: '4.6 km', 
                            time: '1h 10m', 
                            diff: 'Easy', 
                            color: 'bg-teal-500', 
                            link: 'https://www.komoot.com/smarttour/e2813485123/lower-yosemite-fall-trail?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                            image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'An easy, paved walk leading straight to the base of the spectacular lower section of North America\'s tallest waterfall. Enjoy the misty spray and towering pine forests framing the roaring cascade.'
                        }
                    ]
                },
                { 
                    type: 'drive', 
                    label: 'Segment 1: Yosemite Valley to Fresno', 
                    from: 'Yosemite Valley', 
                    to: 'Fresno, CA', 
                    dist: 150, 
                    time: '2h 15m', 
                    detail: 'Descend from the Sierra Nevada mountains along the winding roads of CA-41 South, arriving in Fresno in the Central Valley. ⚠️ <b>Caution:</b> Use low gears during the steep descent to prevent brake overheating.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 2: Fresno to Three Rivers', 
                    from: 'Fresno, CA', 
                    to: 'Three Rivers, CA', 
                    dist: 150, 
                    time: '2h 00m', 
                    detail: 'Drive across the agricultural Central Valley before climbing back up into the Sierra Nevada foothills to arrive in Three Rivers, the gateway to Sequoia National Park.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Three Rivers', detail: 'Sequoia Park foothills.', icon: '🏨' }
            ]
        },
        { 
            day: 7, date: "Tue, Aug 25", title: "Giant Sequoia National Park", 
            summary: "Walk among the ancient giant sequoias including General Sherman, scale Moro Rock, and spend the night in Three Rivers.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Sequoia National Park', 
                    detail: 'Hikes through the worlds largest trees.',
                    hikes: [
                        { 
                            name: 'General Sherman Tree Loop', 
                            dist: '9.8 km', 
                            time: '3h 00m', 
                            diff: 'Moderate', 
                            color: 'bg-green-600', 
                            link: 'https://www.komoot.com/smarttour/e809103831',
                            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A scenic, moderate walk through the heart of the Giant Forest to visit General Sherman, the largest tree on Earth by volume, walking among ancient redwoods.'
                        },
                        { 
                            name: 'Congress Trail Loop', 
                            dist: '6.3 km', 
                            time: '2h 00m', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e1324884824',
                            image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A paved loop starting from the General Sherman Tree that leads deep into the Giant Forest, passing the impressive President, Senate, and House tree groups.'
                        },
                        { 
                            name: 'Moro Rock Trail', 
                            dist: '6.8 km', 
                            time: '2h 15m', 
                            diff: 'Moderate', 
                            color: 'bg-indigo-600', 
                            link: 'https://www.komoot.com/smarttour/e2813461461',
                            image: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Hike from the Giant Forest Museum through pine forests to the base of Moro Rock, then climb the concrete stairway carved into the granite dome for panoramic views.'
                        }
                    ]
                },
                { type: 'stay', label: 'Three Rivers', detail: 'Sequoia Park foothills.', icon: '🏨' }
            ]
        },
        { 
            day: 8, date: "Wed, Aug 26", title: "Los Angeles: Hollywood & Observatory", 
            summary: "Make the drive to Los Angeles, then explore Hollywood landmarks and take in panoramic city views from Griffith Observatory.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Segment 1: Three Rivers to Bakersfield', 
                    from: 'Three Rivers, CA', 
                    to: 'Bakersfield, CA', 
                    dist: 140, 
                    time: '1h 45m', 
                    detail: 'Drive south from the Sierra foothills through the heart of the Central Valley farmland to Bakersfield.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 2: Bakersfield to Los Angeles (via Tejon Pass)', 
                    from: 'Bakersfield, CA', 
                    to: 'Los Angeles', 
                    dist: 180, 
                    time: '2h 05m', 
                    detail: 'Climb the steep Tejon Pass (known locally as the Grapevine) up to 1,270m, before descending into the northern edge of the Los Angeles basin. ⚠️ <b>Caution:</b> Watch for heavy truck traffic and sudden strong crosswinds on the pass.',
                    icon: '🚗' 
                },
                { 
                    type: 'options', 
                    label: 'Los Angeles: Hollywood Trails', 
                    detail: 'Choose a hiking trail in Griffith Park for scenic city viewpoints and Hollywood Sign vistas.',
                    hikes: [
                        { 
                            name: 'Hollywood Sign via Innsdale Trail', 
                            dist: '4.1 km', 
                            time: '1h 15m', 
                            diff: 'Easy', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e2813322722',
                            image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A pleasant, easy walk along the Innsdale Trail with direct views of the iconic Hollywood Sign. Great for a relaxed walk and photography.'
                        },
                        { 
                            name: 'Mount Hollywood & 3 Mile Trail', 
                            dist: '6.4 km', 
                            time: '2h 00m', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e2813380432',
                            image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A scenic trail winding up Mount Hollywood from Griffith Observatory, offering 360-degree views of the LA Basin, downtown skyline, and the Hollywood Sign.'
                        },
                        { 
                            name: 'Griffith Park Hollywood Sign Trail', 
                            dist: '16.2 km', 
                            time: '5h 00m', 
                            diff: 'Difficult', 
                            color: 'bg-red-600', 
                            link: 'https://www.komoot.com/smarttour/e2813338925',
                            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'A comprehensive, challenging hike exploring the rugged ridges of Griffith Park, climbing high to the peak directly behind the Hollywood Sign letters.'
                        }
                    ]
                },
                { type: 'activity', label: 'Griffith Observatory', detail: 'Explore scientific exhibits, planetarium shows, and panoramic views of the Los Angeles basin and Hollywood Sign.', icon: '🔭' },
                { type: 'activity', label: 'Hollywood Walk of Fame', detail: 'Stroll along Hollywood Boulevard and visit the historic Chinese Theatre and Sunset Strip.', icon: '⭐' },
                { type: 'stay', label: 'Los Angeles', detail: 'Hollywood or Santa Monica basecamp.', icon: '🏨' }
            ]
        },
        { 
            day: 9, date: "Thu, Aug 27", title: "Los Angeles: Beaches & Getty Art Museum", 
            summary: "Immerse yourself in world-class art at the Getty Center and spend a relaxing afternoon on the beaches of Santa Monica and Venice.",
            sequence: [
                { type: 'activity', label: 'The Getty Center', detail: 'Visit the world-renowned museum hosting European paintings, sculptures, and beautiful modern architecture overlooking Los Angeles.', icon: '🎨' },
                { type: 'activity', label: 'Santa Monica & Venice Beach', detail: 'Walk along the historic Santa Monica Pier, visit the beach, and enjoy the eccentric Venice Beach boardwalk.', icon: '🎡' },
                { type: 'stay', label: 'Los Angeles', detail: 'Hollywood or Santa Monica basecamp.', icon: '🏨' }
            ]
        },
        { 
            day: 10, date: "Fri, Aug 28", title: "Pacific Coast Highway: Los Angeles to Morro Bay", 
            summary: "Begin your journey along the iconic Pacific Coast Highway, driving north from Los Angeles past Malibu and Santa Barbara, exploring the Danish town of Solvang, and ending at Morro Bay.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Segment 1: Los Angeles to Santa Barbara', 
                    from: 'Los Angeles', 
                    to: 'Santa Barbara', 
                    dist: 150, 
                    time: '1h 45m', 
                    detail: 'Start in Santa Monica and drive along the scenic coastal CA-1 through Malibu, past Zuma Beach and Point Mugu. ⚠️ <b>Traffic Tip:</b> Leave early in the morning (before 8:00 AM) to avoid heavy morning gridlock exiting the Los Angeles metro area.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 2: Santa Barbara to Solvang', 
                    from: 'Santa Barbara', 
                    to: 'Solvang, CA', 
                    dist: 70, 
                    time: '50m', 
                    detail: 'Head inland to the historic Danish village of Solvang. <b>Route choice:</b> Take CA-154 (San Marcos Pass) for stunning high-altitude mountain and lake views, or take the coastal US-101 past Gaviota State Park. ⚠️ <b>Avoid:</b> CA-154 can be winding and slow behind trucks; take US-101 if you prefer a flatter, easier drive.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 3: Solvang to San Luis Obispo', 
                    from: 'Solvang, CA', 
                    to: 'San Luis Obispo, CA', 
                    dist: 90, 
                    time: '1h 00m', 
                    detail: 'Drive through rolling wine country back to US-101 North, passing Pismo Beach and heading to San Luis Obispo for your lunch stop.',
                    icon: '🚗' 
                },
                { type: 'activity', label: 'Lunch in SLO', detail: 'Historic Mission district and creek walk.', icon: '🥗' },
                { 
                    type: 'drive', 
                    label: 'Segment 4: San Luis Obispo to Morro Bay', 
                    from: 'San Luis Obispo, CA', 
                    to: 'Morro Bay, CA', 
                    dist: 20, 
                    time: '15m', 
                    detail: 'After lunch and a stroll along the creek, take a short drive up CA-1 North directly to Morro Bay.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Morro Bay', detail: 'Coastal night by Morro Rock.', icon: '🏨' }
            ]
        },
        { 
            day: 11, date: "Sat, Aug 29", title: "Big Sur Scenic Coast Drive", 
            summary: "Drive the most famous and breathtaking section of Highway 1 through Big Sur, stop at the Elephant Seal Rookery, visit McWay Falls, photograph Bixby Bridge, and arrive in San Francisco.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Segment 1: Morro Bay to McWay Falls', 
                    from: 'Morro Bay', 
                    to: 'McWay Falls', 
                    dist: 130, 
                    time: '2h 00m', 
                    detail: 'Drive past Cambria and San Simeon. Stop at the Elephant Seal Rookery at San Simeon to view the massive elephant seals, then cross Ragged Point (the "Portal to Big Sur"). Drive up the wild coastal cliffs to Julia Pfeiffer Burns State Park. ⚠️ <b>Safety Tip:</b> Take it slow—this section has tight curves and dramatic cliffs.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Segment 2: McWay Falls to Carmel-by-the-Sea', 
                    from: 'McWay Falls', 
                    to: 'Carmel-by-the-Sea', 
                    dist: 60, 
                    time: '1h 00m', 
                    detail: 'Continue north on the most dramatic portion of Highway 1, winding past redwood groves and crossing the world-famous Bixby Creek Bridge. ⚠️ <b>Road Status:</b> Highway 1 through Big Sur is fully open. Expect localized 24/7 one-way controlled traffic delays for maintenance (e.g. 5-6 miles north of Big Sur Valley). Always monitor Caltrans QuickMap.',
                    icon: '🚗' 
                },
                { type: 'activity', label: 'Bixby Creek Bridge', detail: 'Iconic photography stop.', icon: '📸' },
                { 
                    type: 'drive', 
                    label: 'Segment 3: Carmel-by-the-Sea to San Francisco', 
                    from: 'Carmel-by-the-Sea', 
                    to: 'San Francisco', 
                    dist: 190, 
                    time: '2h 45m', 
                    detail: 'Depart Carmel, driving north past Monterey, through the surf town of Santa Cruz, and along the scenic cliffs of Half Moon Bay before entering San Francisco. ⚠️ <b>Avoid:</b> Driving this section after dark, as coastal fog can roll in rapidly and severely limit visibility.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'San Francisco', detail: 'Union Square area.', icon: '🏨' }
            ]
        },
        { 
            day: 12, date: "Sun, Aug 30", title: "San Francisco: Lands End Coastal Hike", 
            summary: "Explore San Francisco's rugged coastline along Lands End, hike through the Presidio, and capture gorgeous Golden Gate views.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'San Francisco Coastline', 
                    detail: 'Choose a trail with Golden Gate views.',
                    hikes: [
                        { 
                            name: 'Lands End Trail Loop', 
                            dist: '3.5 km', 
                            time: '1h 10m', 
                            diff: 'Moderate', 
                            color: 'bg-cyan-600', 
                            link: 'https://www.komoot.com/smarttour/e1220837025',
                            image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Follow the windswept coastal cliffs of San Francisco for spectacular views of the Golden Gate Bridge and the Pacific Ocean. Discover ruins of the historic Sutro Baths.'
                        },
                        { 
                            name: 'Ecology Trail and Lovers\' Lane Loop', 
                            dist: '4.5 km', 
                            time: '1h 20m', 
                            diff: 'Easy', 
                            color: 'bg-indigo-600', 
                            link: 'https://www.komoot.com/smarttour/e2813371162',
                            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Walk through the historic Presidio, following the peaceful Ecology Trail and crossing the famous Lovers\' Lane brick footpath beneath eucalyptus and pine groves.'
                        },
                        { 
                            name: 'San Francisco Bay Trail (Pier 45)', 
                            dist: '5.7 km', 
                            time: '1h 30m', 
                            diff: 'Easy', 
                            color: 'bg-blue-600', 
                            link: 'https://www.komoot.com/smarttour/e1282005883',
                            image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Stroll along the historic waterfront of San Francisco Bay, passing Pier 45, Fisherman\'s Wharf, and enjoying panoramic views of Alcatraz and the Golden Gate.'
                        }
                    ]
                },
                { type: 'stay', label: 'San Francisco', detail: 'Final trip night.', icon: '🏨' }
            ]
        },
        { 
            day: 13, date: "Mon, Aug 31", title: "Departure from San Francisco", 
            summary: "Conclude the California adventure with rental car drop-off at SFO and board your return flight back to Munich.",
            sequence: [
                { type: 'drive', label: 'San Francisco (SFO) Airport Car Drop-off', from: 'San Francisco', to: 'San Francisco (SFO) Airport', dist: 30, time: '45m', icon: '🚗' },
                { type: 'travel', label: 'Flight San Francisco (SFO) to Munich (MUC)', detail: 'Return flight to Munich.', time: '11h 30m', icon: '✈️' }
            ]
        }
    ],
    ru: [
        { 
            day: 1, date: "Ср, 19 авг", title: "Прибытие на озеро Тахо", 
            summary: "Прибытие в аэропорт Рено-Тахо, получение арендованного автомобиля и живописная поездка в прекрасный Саут-Лейк-Тахо для начала путешествия.",
            sequence: [
                { type: 'travel', label: 'Перелет Мюнхен (MUC) — Рено-Тахо (RNO)', detail: 'Прибытие в Рено-Тахо. Получение машины в прокате.', time: '12ч+', icon: '✈️' },
                { type: 'drive', label: 'Поездка в Саут-Лейк-Тахо', from: 'Reno-Tahoe Airport', to: 'South Lake Tahoe', dist: 95, time: '1ч 15м', icon: '🚗' },
                { type: 'stay', label: 'Курортный отель The Landing', detail: 'Дополнительная ночь в Саут-Лейк-Тахо.', icon: '🏨' }
            ]
        },
        { 
            day: 2, date: "Чт, 20 авг", title: "Начало свадебных торжеств", 
            summary: "Проведите расслабленное утро у озера, а затем присоединяйтесь к группе в круизе на закате по озеру Тахо в честь начала свадебных торжеств.",
            sequence: [
                { type: 'activity', label: 'Свободное утро', detail: 'Прогуляйтесь по берегу озера или отдохните.', icon: '☕' },
                { type: 'activity', label: 'Круиз «Парадайс»', detail: '17:30. Официальный старт свадьбы на воде.', icon: '⛵' },
                { type: 'stay', label: 'Курортный отель The Landing', detail: 'Свадебный лагерь в Тахо.', icon: '🏨' }
            ]
        },
        { 
            day: 3, date: "Пт, 21 авг", title: "День свадьбы", 
            summary: "Главный день: празднование свадьбы Ольги и Павла, церемония, коктейли и праздничный ужин у озера в отеле The Landing Resort.",
            sequence: [
                { type: 'activity', label: 'Свадебная церемония', detail: '15:30 в The Landing Tahoe. Затем последуют коктейли и ужин.', icon: '💍' },
                { type: 'stay', label: 'Курортный отель The Landing', detail: 'Саут-Лейк-Тахо.', icon: '🏨' }
            ]
        },
        { 
            day: 4, date: "Сб, 22 авг", title: "Переезд из озера Тахо в Йосемити", 
            summary: "Присоединяйтесь к прощальному бранчу в Саут-Лейк-Тахо, чтобы провести последние минуты с группой перед подготовкой к переезду через горы.",
            sequence: [
                { type: 'activity', label: 'Бранч в Toulouse', detail: '11:00. Финальная встреча группы.', icon: '🥞' },
                { 
                    type: 'drive', 
                    label: 'Участок 1: Саут-Лейк-Тахо — Бриджпорт', 
                    from: 'South Lake Tahoe', 
                    to: 'Bridgeport, CA', 
                    dist: 180, 
                    time: '2ч 15м', 
                    detail: 'Поездка на юг от озера Тахо по шоссе US-395 через живописные горные перевалы со спуском в исторический скотоводческий городок Бриджпорт.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 2: Бриджпорт — Ли-Вининг', 
                    from: 'Bridgeport, CA', 
                    to: 'Lee Vining, CA', 
                    dist: 95, 
                    time: '1ч 30м', 
                    detail: 'Продолжайте движение на юг по шоссе US-395 мимо захватывающих смотровых площадок озера Моно до базового лагеря у ворот в Йосемити.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Ворота в Йосемити', detail: 'Ли-Вининг или район Йосемити.', icon: '🏨' }
            ]
        },
        { 
            day: 5, date: "Вс, 23 авг", title: "Походы по долине Йосемити", 
            summary: "Покорите знаменитые сложные тропы долины Йосемити, такие как Mist Trail или Upper Yosemite Fall, а затем отправляйтесь в жилье у ворот парка.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Йосемити: Походы по долине', 
                    detail: 'Покорите знаменитые сложные тропы долины Йосемити.',
                    hikes: [
                        { 
                            name: 'Тропа Mist Trail к водопаду Вернал', 
                            dist: '7.5 км', 
                            time: '2ч 30м', 
                            diff: 'Moderate', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e1193360370',
                            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Классический поход в Йосемити: подъем по крутым каменным ступеням вдоль бурной реки Мерсед к вершине водопада Вернал, вознаграждающий захватывающими видами и освежающими брызгами.'
                        },
                        { 
                            name: 'Водопады Вернал и Невада через Mist Trail', 
                            dist: '13.4 км', 
                            time: '5ч 00м', 
                            diff: 'Difficult', 
                            color: 'bg-red-600', 
                            link: 'https://www.komoot.com/smarttour/e1193350212',
                            image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Лучший поход по долине Йосемити. Поднимитесь мимо водопада Вернал и продолжите путь по крутым гранитным скалам к вершине водопада Невада, возвращаясь по тропе Джона Мьюра с панорамными видами.'
                        },
                        { 
                            name: 'Петля Clark Point и водопад Вернал', 
                            dist: '10.3 км', 
                            time: '3ч 45м', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e1193363314',
                            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Прекрасный кольцевой маршрут: подъем по Mist Trail к водопаду Вернал, подъем к смотровой площадке Clark Point и спуск обратно по тропе Джона Мьюра.'
                        }
                    ]
                },
                { type: 'stay', label: 'Ворота в Йосемити', detail: 'Эль-Портал или район Марипоса.', icon: '🏨' }
            ]
        },
        { 
            day: 6, date: "Пн, 24 авг", title: "Альпийские озера и смотровые Йосемити", 
            summary: "Насладитесь великолепными панорамными тропами Йосемити, включая озеро Тенайя и Глейшер-Пойнт, а затем отправляйтесь на юг к предгорьям Секвойи.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Йосемити: Начальные тропы', 
                    detail: 'Выберите легкий поход для второго дня в парке.',
                    hikes: [
                        { 
                            name: 'Тропа к озерам Катидрал', 
                            dist: '15.8 км', 
                            time: '4ч 45м', 
                            diff: 'Moderate', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e2813460839/cathedral-lakes-trail?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Захватывающий поход в Туоломни-Медоуз с подъемом через сосновые леса к потрясающим альпийским берегам Верхнего и Нижнего озер Катидрал у подножия пика Катидрал.'
                        },
                        { 
                            name: 'Тропа к Нижнему водопаду Йосемити', 
                            dist: '4.6 км', 
                            time: '1ч 10м', 
                            diff: 'Easy', 
                            color: 'bg-teal-500', 
                            link: 'https://www.komoot.com/smarttour/e2813485123/lower-yosemite-fall-trail?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                            image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Простая асфальтированная тропа, ведущая прямо к подножию живописного нижнего каскада самого высокого водопада в Северной Америке. Насладитесь брызгами и величественными соснами.'
                        }
                    ]
                },
                { 
                    type: 'drive', 
                    label: 'Участок 1: Долина Йосемити — Фресно', 
                    from: 'Yosemite Valley', 
                    to: 'Fresno, CA', 
                    dist: 150, 
                    time: '2ч 15м', 
                    detail: 'Спуск с гор Сьерра-Невада по извилистым дорогам трассы CA-41 на юг с прибытием во Фресно в Центральной долине. ⚠️ <b>Внимание:</b> используйте пониженные передачи на крутом спуске, чтобы избежать перегрева тормозов.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 2: Фресно — Три-Риверс', 
                    from: 'Fresno, CA', 
                    to: 'Three Rivers, CA', 
                    dist: 150, 
                    time: '2ч 00м', 
                    detail: 'Поездка через сельскохозяйственную Центральную долину перед новым подъемом в предгорья Сьерра-Невады в городок Три-Риверс — ворота в национальный парк Секвойя.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Три-Риверс', detail: 'Предгорья парка Секвойя.', icon: '🏨' }
            ]
        },
        { 
            day: 7, date: "Вт, 25 авг", title: "Национальный парк Гигантских Секвой", 
            summary: "Прогуляйтесь среди древних гигантских секвой, включая дерево Генерала Шермана, поднимитесь на скалу Моро и проведите ночь в Три-Риверс.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Национальный парк Секвойя', 
                    detail: 'Прогулки среди самых больших деревьев в мире.',
                    hikes: [
                        { 
                            name: 'Петля дерева Генерала Шермана', 
                            dist: '9.8 км', 
                            time: '3ч 00м', 
                            diff: 'Moderate', 
                            color: 'bg-green-600', 
                            link: 'https://www.komoot.com/smarttour/e809103831',
                            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Живописная несложная прогулка по центру Гигантского леса к Генералу Шерману — самому большому дереву на Земле по объему древесины.'
                        },
                        { 
                            name: 'Петля Конгресс-Трейл', 
                            dist: '6.3 км', 
                            time: '2ч 00м', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e1324884824',
                            image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Асфальтированная петля, начинающаяся от дерева Генерала Шермана и ведущая вглубь Гигантского леса мимо величественных групп деревьев Президент, Сенат и Палата представителей.'
                        },
                        { 
                            name: 'Тропа на скалу Моро', 
                            dist: '6.8 км', 
                            time: '2ч 15м', 
                            diff: 'Moderate', 
                            color: 'bg-indigo-600', 
                            link: 'https://www.komoot.com/smarttour/e2813461461',
                            image: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Маршрут от Музея Гигантского леса через сосновые рощи к подножию скалы Моро с последующим подъемом по вырубленной в гранитном куполе лестнице ради панорамных видов.'
                        }
                    ]
                },
                { type: 'stay', label: 'Три-Риверс', detail: 'Предгорья парка Секвойя.', icon: '🏨' }
            ]
        },
        { 
            day: 8, date: "Ср, 26 авг", title: "Лос-Анджелес: Голливуд и обсерватория", 
            summary: "Переезд в Лос-Анджелес, затем знакомство с достопримечательностями Голливуда и панорамные виды на город из обсерватории Гриффита.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Участок 1: Три-Риверс — Бейкерсфилд', 
                    from: 'Three Rivers, CA', 
                    to: 'Bakersfield, CA', 
                    dist: 140, 
                    time: '1ч 45м', 
                    detail: 'Поездка на юг от предгорий Сьерры через сельскохозяйственные угодья в центре Центральной долины до Бейкерсфилда.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 2: Бейкерсфилд — Лос-Анджелес (через перевал Техон)', 
                    from: 'Bakersfield, CA', 
                    to: 'Los Angeles', 
                    dist: 180, 
                    time: '2ч 05м', 
                    detail: 'Подъем на крутой перевал Техон (известный как Грейпвайн) на высоту до 1270 м с последующим спуском в северную часть бассейна Лос-Анджелеса. ⚠️ <b>Внимание:</b> следите за плотным движением грузовиков и внезапными сильными боковыми ветрами на перевале.',
                    icon: '🚗' 
                },
                { 
                    type: 'options', 
                    label: 'Лос-Анджелес: Тропы Голливуда', 
                    detail: 'Выберите пешеходную тропу в Гриффит-парке для панорамного обзора города и видов на знак Голливуда.',
                    hikes: [
                        { 
                            name: 'Знак Голливуда через Innsdale Trail', 
                            dist: '4.1 км', 
                            time: '1ч 15м', 
                            diff: 'Easy', 
                            color: 'bg-emerald-600', 
                            link: 'https://www.komoot.com/smarttour/e2813322722',
                            image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Приятная и простая прогулка по тропе Innsdale Trail с прямым видом на знаменитый знак Голливуда. Отлично подходит для отдыха и фотографий.'
                        },
                        { 
                            name: 'Гора Голливуд и 3-мильная тропа', 
                            dist: '6.4 км', 
                            time: '2ч 00м', 
                            diff: 'Moderate', 
                            color: 'bg-amber-600', 
                            link: 'https://www.komoot.com/smarttour/e2813380432',
                            image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Живописная тропа, поднимающаяся на гору Голливуд от обсерватории Гриффита и предлагающая 360-градусный обзор бассейна Лос-Анджелеса, даунтауна и знака Голливуда.'
                        },
                        { 
                            name: 'Тропа к знаку Голливуда в Гриффит-парке', 
                            dist: '16.2 км', 
                            time: '5ч 00м', 
                            diff: 'Difficult', 
                            color: 'bg-red-600', 
                            link: 'https://www.komoot.com/smarttour/e2813338925',
                            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Длинный и сложный поход по хребтам Гриффит-парка с подъемом на вершину прямо за буквами знака Голливуда.'
                        }
                    ]
                },
                { type: 'activity', label: 'Обсерватория Гриффита', detail: 'Осмотрите научные экспонаты, посетите шоу в планетарии и насладитесь панорамным видом на бассейн Лос-Анджелеса и знак Голливуда.', icon: '🔭' },
                { type: 'activity', label: 'Голливудская аллея славы', detail: 'Прогуляйтесь по Голливудскому бульвару, посетите исторический Китайский театр и Сансет-Стрип.', icon: '⭐' },
                { type: 'stay', label: 'Лос-Анджелес', detail: 'Базовый лагерь в Голливуде или Санта-Монике.', icon: '🏨' }
            ]
        },
        { 
            day: 9, date: "Чт, 27 авг", title: "Лос-Анджелес: пляжи и художественный музей Гетти", 
            summary: "Погрузитесь в мир искусства в Центре Гетти и проведите расслабленный день на пляжах Санта-Моники и Венис.",
            sequence: [
                { type: 'activity', label: 'Центр Гетти', detail: 'Посетите всемирно известный музейный комплекс с коллекцией европейской живописи, скульптур и красивой современной архитектурой с видом на Лос-Анджелес.', icon: '🎨' },
                { type: 'activity', label: 'Санта-Моника и Венис-Бич', detail: 'Прогуляйтесь по историческому пирсу Санта-Моники, посетите пляж и насладитесь эксцентричной набережной Венис-Бич.', icon: '🎡' },
                { type: 'stay', label: 'Лос-Анджелес', detail: 'Базовый лагерь в Голливуде или Санта-Монике.', icon: '🏨' }
            ]
        },
        { 
            day: 10, date: "Пт, 28 авг", title: "Шоссе PCH: Лос-Анджелес — Морро-Бэй", 
            summary: "Начните путешествие по культовому Тихоокеанскому шоссе, двигаясь на север от Лос-Анджелеса мимо Малибу и Санта-Барбары, посетите датский городок Солванг и финишируйте в Морро-Бэй.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Участок 1: Лос-Анджелес — Санта-Барбара', 
                    from: 'Los Angeles', 
                    to: 'Santa Barbara', 
                    dist: 150, 
                    time: '1ч 45м', 
                    detail: 'Стартуйте из Санта-Моники и двигайтесь по живописному прибрежному шоссе CA-1 через Малибу, мимо пляжа Зума и мыса Пойнт-Мугу. ⚠️ <b>Совет по трафику:</b> выезжайте пораньше утром (до 8:00), чтобы избежать утренних заторов на выезде из Лос-Анджелеса.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 2: Санта-Барбара — Солванг', 
                    from: 'Santa Barbara', 
                    to: 'Solvang, CA', 
                    dist: 70, 
                    time: '50м', 
                    detail: 'Направляйтесь вглубь материка к исторической датской деревне Солванг. <b>Выбор маршрута:</b> поезжайте по CA-154 (перевал Сан-Маркос) ради потрясающих видов на горы и озера, либо по прибрежной трассе US-101 мимо парка Гавиота. ⚠️ <b>Рекомендация:</b> шоссе CA-154 очень извилистое, движение на нем может быть медленным из-за грузовиков; выбирайте US-101, если предпочитаете более пологий и простой путь.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 3: Солванг — Сан-Луис-Обиспо', 
                    from: 'Solvang, CA', 
                    to: 'San Luis Obispo, CA', 
                    dist: 90, 
                    time: '1ч 00м', 
                    detail: 'Поездка через холмистые винодельческие районы обратно на шоссе US-101 North мимо Писмо-Бич в Сан-Луис-Обиспо на обед.',
                    icon: '🚗' 
                },
                { type: 'activity', label: 'Обед в Сан-Луис-Обиспо', detail: 'Исторический район Миссии и прогулка у ручья.', icon: '🥗' },
                { 
                    type: 'drive', 
                    label: 'Участок 4: Сан-Луис-Обиспо — Морро-Бэй', 
                    from: 'San Luis Obispo, CA', 
                    to: 'Morro Bay, CA', 
                    dist: 20, 
                    time: '15м', 
                    detail: 'После обеда и прогулки у ручья совершите короткую поездку на север по трассе CA-1 North прямо до Морро-Бэй.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Морро-Бэй', detail: 'Ночь на побережье у скалы Морро-Рок.', icon: '🏨' }
            ]
        },
        { 
            day: 11, date: "Сб, 29 авг", title: "Живописная прибрежная дорога Биг-Сюр", 
            summary: "Поездка по самому известному и красивому участку шоссе Highway 1 через Биг-Сюр, остановка у лежбища морских слонов, визит к водопаду МакУэй, фотосессия у моста Биксби и прибытие в Сан-Франциско.",
            sequence: [
                { 
                    type: 'drive', 
                    label: 'Участок 1: Морро-Бэй — Водопад МакУэй', 
                    from: 'Morro Bay', 
                    to: 'McWay Falls', 
                    dist: 130, 
                    time: '2ч 00м', 
                    detail: 'Проезжайте мимо Камбрии и Сан-Симеона. Остановитесь у лежбища морских слонов в Сан-Симеоне, чтобы понаблюдать за ними, затем пересеките мыс Рэггед-Пойнт («Ворота в Биг-Сюр»). Поднимитесь по диким скалам к парку Джулии Пфайффер Бернс. ⚠️ <b>Совет по безопасности:</b> не торопитесь — на этом участке крутые повороты и обрывы.',
                    icon: '🚗' 
                },
                { 
                    type: 'drive', 
                    label: 'Участок 2: Водопад МакУэй — Кармел-бай-те-Си', 
                    from: 'McWay Falls', 
                    to: 'Carmel-by-the-Sea', 
                    dist: 60, 
                    time: '1ч 00м', 
                    detail: 'Продолжайте движение на север по самой зрелищной части шоссе Highway 1 мимо секвойных рощ через знаменитый мост Биксби. ⚠️ <b>Статус дороги:</b> шоссе Highway 1 в районе Биг-Сюр полностью открыто. Возможны локальные задержки из-за реверсивного движения для дорожных работ (например, в 8-10 км к северу от долины Биг-Сюр). Пожалуйста, сверяйтесь с картой Caltrans QuickMap.',
                    icon: '🚗' 
                },
                { type: 'activity', label: 'Мост Биксби-Крик', detail: 'Знаменитая остановка для фотографий.', icon: '📸' },
                { 
                    type: 'drive', 
                    label: 'Участок 3: Кармел-бай-те-Си — Сан-Франциско', 
                    from: 'Carmel-by-the-Sea', 
                    to: 'San Francisco', 
                    dist: 190, 
                    time: '2ч 45м', 
                    detail: 'Отправление из Кармела, дорога на север мимо Монтерея через серф-город Санта-Круз и по скалам Хаф-Мун-Бэй на въезд в Сан-Франциско. ⚠️ <b>Рекомендация:</b> избегайте вождения на этом участке в темноте, так как прибрежный туман может сгуститься очень быстро и сильно ухудшить видимость.',
                    icon: '🚗' 
                },
                { type: 'stay', label: 'Сан-Франциско', detail: 'Район Юнион-сквер.', icon: '🏨' }
            ]
        },
        { 
            day: 12, date: "Вс, 30 авг", title: "Сан-Франциско: тропа Lands End", 
            summary: "Исследуйте скалистую береговую линию Сан-Франциско вдоль тропы Lands End, прогуляйтесь по парку Президио и сделайте отличные снимки моста Золотые Ворота.",
            sequence: [
                { 
                    type: 'options', 
                    label: 'Побережье Сан-Франциско', 
                    detail: 'Выберите тропу с видом на Золотые Ворота.',
                    hikes: [
                        { 
                            name: 'Петля тропы Lands End', 
                            dist: '3.5 км', 
                            time: '1ч 10м', 
                            diff: 'Moderate', 
                            color: 'bg-cyan-600', 
                            link: 'https://www.komoot.com/smarttour/e1220837025',
                            image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Пройдите по обдуваемым ветрами прибрежным скалам Сан-Франциско ради захватывающих видов на мост Золотые Ворота и Тихий океан. Осмотрите руины исторических купален Сутро.'
                        },
                        { 
                            name: 'Экологическая тропа и петля Аллеи влюбленных', 
                            dist: '4.5 км', 
                            time: '1ч 20м', 
                            diff: 'Easy', 
                            color: 'bg-indigo-600', 
                            link: 'https://www.komoot.com/smarttour/e2813371162',
                            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Прогулка по историческому парку Президио по спокойной Экологической тропе с переходом на знаменитую кирпичную дорожку Аллеи влюбленных под сенью эвкалиптовых и сосновых рощ.'
                        },
                        { 
                            name: 'Тропа залива Сан-Франциско (Пирс 45)', 
                            dist: '5.7 км', 
                            time: '1ч 30м', 
                            diff: 'Easy', 
                            color: 'bg-blue-600', 
                            link: 'https://www.komoot.com/smarttour/e1282005883',
                            image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=400&h=250&q=80',
                            summary: 'Прогулка по исторической набережной залива Сан-Франциско мимо Пирса 45, Рыбацкой пристани с панорамными видами на Алькатрас и Золовые Ворота.'
                        }
                    ]
                },
                { type: 'stay', label: 'Сан-Франциско', detail: 'Последняя ночь поездки.', icon: '🏨' }
            ]
        },
        { 
            day: 13, date: "Пн, 31 авг", title: "Вылет из Сан-Франциско", 
            summary: "Завершение калифорнийского приключения: сдача арендованной машины в аэропорту SFO и посадка на обратный рейс в Мюнхен.",
            sequence: [
                { type: 'drive', label: 'Сдача машины в аэропорту Сан-Франциско (SFO)', from: 'San Francisco', to: 'San Francisco (SFO) Airport', dist: 30, time: '45м', icon: '🚗' },
                { type: 'travel', label: 'Перелет Сан-Франциско (SFO) — Мюнхен (MUC)', detail: 'Обратный рейс в Мюнхен.', time: '11ч 30м', icon: '✈️' }
            ]
        }
    ]
};

export const todos = [
    { 
        id: 1, 
        text: {
            en: "Yosemite Entry Reservation (Aug 23)",
            ru: "Резервация въезда в Йосемити (23 авг)"
        }, 
        done: false 
    },
    { 
        id: 2, 
        text: {
            en: "Yosemite/Mariposa Lodging (Aug 22-23)",
            ru: "Жилье в Йосемити/Марипосе (22-23 авг)"
        }, 
        done: false 
    },
    { 
        id: 3, 
        text: {
            en: "Sequoia Area Lodging (Aug 24)",
            ru: "Жилье в районе Секвойи (24 авг)"
        }, 
        done: false 
    },
    { 
        id: 4, 
        text: {
            en: "Reno-Tahoe (RNO) Car Rental Confirmation",
            ru: "Подтверждение аренды машины в Рено-Тахо (RNO)"
        }, 
        done: false 
    }
];
