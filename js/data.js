export const tripData = [
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
            { type: 'drive', label: 'Tioga Pass Scenic Route', from: 'South Lake Tahoe', to: 'Lee Vining', dist: 275, time: '3h 45m', icon: '🚗' },
            { type: 'stay', label: 'Yosemite Gateway', detail: 'Lee Vining or Yosemite Area.', icon: '🏨' }
        ]
    },
    { 
        day: 5, date: "Sun, Aug 23", title: "Yosemite Valley Hikes", 
        summary: "Conquer Yosemite Valley's iconic, strenuous trails like the Mist Trail or Upper Yosemite Fall, then head to your gateway lodging.",
        sequence: [
            { 
                type: 'options', 
                label: 'Yosemite: Major Challenges', 
                detail: 'Your core hiking day. Select your valley trail.',
                hikes: [
                    { 
                        name: 'Mist Trail (Vernal/Nevada)', 
                        dist: '11.0 km', 
                        time: '4h 30m', 
                        diff: 'Hard', 
                        color: 'bg-red-500', 
                        link: 'https://www.komoot.com/highlight/202685',
                        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'Yosemite\'s signature hike climbs steep stone steps alongside roaring giant waterfalls that spray hikers with cooling mist. Reaching the top of Nevada Fall offers breathtaking views of the surrounding wilderness.'
                    },
                    { 
                        name: 'Sentinel Dome & Taft Pt', 
                        dist: '8.2 km', 
                        time: '3h 15m', 
                        diff: 'Moderate', 
                        color: 'bg-orange-500', 
                        link: 'https://www.komoot.com/highlight/227447',
                        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'Combine two contrasting highlights: walk out to a cliffside fissure at Taft Point with vertical drop-offs, then scale the dome for a 360-degree panorama of the entire national park.'
                    },
                    { 
                        name: 'Upper Yosemite Fall', 
                        dist: '12.0 km', 
                        time: '6h 00m', 
                        diff: 'Extreme', 
                        color: 'bg-stone-800', 
                        link: 'https://www.komoot.com/highlight/114950',
                        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A grueling, strenuous climb up historic switchbacks to the top of the tallest waterfall in North America. Reaching the summit rewards you with dramatic views looking straight down into the valley below.'
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
                        name: 'Tenaya Lake Loop', 
                        dist: '4.0 km', 
                        time: '1h 15m', 
                        diff: 'Easy', 
                        color: 'bg-emerald-500', 
                        link: 'https://www.komoot.com/highlight/202684',
                        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A beautiful, easy trail surrounding the alpine waters of Tenaya Lake, framed by dramatic granite domes. Perfect for a relaxing stroll and a quick dip in the cool waters at high elevation.'
                    },
                    { 
                        name: 'Lower Yosemite Fall', 
                        dist: '1.9 km', 
                        time: '35m', 
                        diff: 'Easy', 
                        color: 'bg-teal-500', 
                        link: 'https://www.komoot.com/highlight/114947',
                        image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'An easy, paved walk leading straight to the base of the spectacular lower section of North America\'s tallest waterfall. Enjoy the misty spray and towering pine forests framing the roaring cascade.'
                    },
                    { 
                        name: 'Glacier Point Loop', 
                        dist: '1.5 km', 
                        time: '25m', 
                        diff: 'Easy', 
                        color: 'bg-blue-500', 
                        link: 'https://www.komoot.com/highlight/114952',
                        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A short, accessible path offering iconic, sweeping views of Half Dome, Yosemite Valley, and the high country. An essential stop to appreciate the massive scale of Yosemite\'s glacial geology.'
                    }
                ]
            },
            { type: 'drive', label: 'South to Sequoia Area', from: 'Yosemite Valley', to: 'Three Rivers', dist: 300, time: '4h 15m', icon: '🚗' },
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
                        name: 'Sherman Tree, Congress, Trail of the Sequoias, and Tharp\'s Log Loop', 
                        dist: '11.5 km', 
                        time: '3h 20m', 
                        diff: 'Moderate', 
                        color: 'bg-green-600', 
                        link: 'https://www.komoot.com/smarttour/e2813460015/sherman-tree-congress-trail-of-the-sequoias-and-tharp-s-log-loop?ref=wsd&t_s=referral&t_cid=route_share&t_ref_username=5512427181359',
                        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A scenic loop combining the famous General Sherman Tree and Congress Trail with the quieter Trail of the Sequoias and Tharp\'s Log. Walk among ancient, massive giant redwood groves.'
                    },
                    { 
                        name: 'Moro Rock Stairway', 
                        dist: '1.2 km', 
                        time: '45m', 
                        diff: 'Moderate', 
                        color: 'bg-amber-600', 
                        link: 'https://www.komoot.com/highlight/154796',
                        image: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'Climb a narrow, handrail-assisted concrete staircase carved directly into the top of a massive granite dome. At the summit, enjoy an unobstructed, panoramic view of the Great Western Divide and park canyons.'
                    },
                    { 
                        name: 'Tokopah Falls', 
                        dist: '6.5 km', 
                        time: '2h 30m', 
                        diff: 'Moderate', 
                        color: 'bg-indigo-600', 
                        link: 'https://www.komoot.com/highlight/183889',
                        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A gentle trail winding alongside the Marble Fork of the Kaweah River through pine forests to the base of a 1,200-foot cascading waterfall. Keep an eye out for yellow-bellied marmots sunning themselves.'
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
            { type: 'drive', label: 'Drive to Los Angeles', from: 'Three Rivers', to: 'Los Angeles', dist: 320, time: '3h 50m', icon: '🚗' },
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
                to: 'Solvang', 
                dist: 70, 
                time: '50m', 
                detail: 'Head inland to the historic Danish village of Solvang. <b>Route choice:</b> Take CA-154 (San Marcos Pass) for stunning high-altitude mountain and lake views, or take the coastal US-101 past Gaviota State Park. ⚠️ <b>Avoid:</b> CA-154 can be winding and slow behind trucks; take US-101 if you prefer a flatter, easier drive.',
                icon: '🚗' 
            },
            { 
                type: 'drive', 
                label: 'Segment 3: Solvang to Morro Bay', 
                from: 'Solvang', 
                to: 'Morro Bay', 
                dist: 110, 
                time: '1h 10m', 
                detail: 'Drive through rolling wine country back to US-101 North. Pass through Pismo Beach and make a stop in San Luis Obispo (SLO) for lunch and a stroll along the historic mission before heading up CA-1 North to Morro Bay.',
                icon: '🚗' 
            },
            { type: 'activity', label: 'Lunch in SLO', detail: 'Historic Mission district and creek walk.', icon: '🥗' },
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
                        name: 'Lands End Trail', 
                        dist: '5.5 km', 
                        time: '1h 45m', 
                        diff: 'Easy', 
                        color: 'bg-cyan-600', 
                        link: 'https://www.komoot.com/highlight/160351',
                        image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'Follow the windswept coastal cliffs of San Francisco for spectacular views of the Golden Gate Bridge and the Pacific Ocean. Discover ruins of the historic Sutro Baths and walk through groves of cypress trees.'
                    },
                    { 
                        name: 'Presidio Scenic Loop', 
                        dist: '9.0 km', 
                        time: '3h 00m', 
                        diff: 'Moderate', 
                        color: 'bg-indigo-700', 
                        link: 'https://www.komoot.com/highlight/284307',
                        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A loop trail winding through historic military architecture, sandy beaches, and lush eucalyptus groves in the heart of San Francisco. Features outstanding vantage points of the bay and the Golden Gate strait.'
                    },
                    { 
                        name: 'Battery to Bluffs', 
                        dist: '3.2 km', 
                        time: '1h 10m', 
                        diff: 'Moderate', 
                        color: 'bg-blue-800', 
                        link: 'https://www.komoot.com/highlight/263592',
                        image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=400&h=250&q=80',
                        summary: 'A short, dramatic trail featuring rugged wooden steps clinging to coastal bluffs, taking you down close to the shoreline. Enjoy wildflower displays and historic concrete gun batteries overlooking the Pacific.'
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
];

export const todos = [
    { id: 1, text: "Yosemite Entry Reservation (Aug 23)", done: false },
    { id: 2, text: "Yosemite/Mariposa Lodging (Aug 22-23)", done: false },
    { id: 3, text: "Sequoia Area Lodging (Aug 24)", done: false },
    { id: 4, text: "Reno-Tahoe (RNO) Car Rental Confirmation", done: false }
];
