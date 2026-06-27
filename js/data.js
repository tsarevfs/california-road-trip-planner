export const tripData = [
    { 
        day: 1, date: "Wed, Aug 19", title: "Tahoe Arrival", 
        sequence: [
            { type: 'travel', label: 'Flight MUC ➔ RNO', detail: 'Arrival at Reno-Tahoe. Car rental pick-up.', time: '12h+', icon: '✈️' },
            { type: 'drive', label: 'Drive to South Lake Tahoe', from: 'Reno-Tahoe Airport', to: 'South Lake Tahoe', dist: 95, time: '1h 15m', icon: '🚗' },
            { type: 'stay', label: 'Check-in: South Lake Tahoe', detail: 'Extra night accommodation needed.', icon: '🏨' }
        ]
    },
    { 
        day: 2, date: "Thu, Aug 20", title: "Wedding Kickoff", 
        sequence: [
            { type: 'activity', label: 'Leisure Morning', detail: 'Explore the lake shoreline or relax.', icon: '☕' },
            { type: 'activity', label: 'Paradise Cruise', detail: '5:30 PM. Official wedding kickoff on the water.', icon: '⛵' },
            { type: 'stay', label: 'The Landing Resort', detail: 'Wedding basecamp in Tahoe.', icon: '🏨' }
        ]
    },
    { 
        day: 3, date: "Fri, Aug 21", title: "The Wedding Day", 
        sequence: [
            { type: 'activity', label: 'Wedding Ceremony', detail: '3:30 PM at The Landing Tahoe. Cocktail and Dinner follows.', icon: '💍' },
            { type: 'stay', label: 'The Landing Resort', detail: 'South Lake Tahoe.', icon: '🏨' }
        ]
    },
    { 
        day: 4, date: "Sat, Aug 22", title: "Farewell Tahoe", 
        sequence: [
            { type: 'activity', label: 'Brunch at Toulouse', detail: '11:00 AM. Final group celebration.', icon: '🥞' },
            { type: 'stay', label: 'The Landing Resort', detail: 'Final night in South Lake Tahoe.', icon: '🏨' }
        ]
    },
    { 
        day: 5, date: "Sun, Aug 23", title: "Yosemite Entry", 
        sequence: [
            { type: 'drive', label: 'Tioga Pass Scenic Route', from: 'South Lake Tahoe', to: 'Lee Vining', dist: 275, time: '3h 45m', icon: '🚗' },
            { 
                type: 'options', 
                label: 'Yosemite: Arrival Trails', 
                detail: 'Choose an easy hike for your first day in the park.',
                hikes: [
                    { name: 'Tenaya Lake Loop', dist: '4.0 km', time: '1h 15m', diff: 'Easy', color: 'bg-emerald-500', link: 'https://www.komoot.com/smarttour/e1193350215' },
                    { name: 'Lower Yosemite Fall', dist: '1.9 km', time: '35m', diff: 'Easy', color: 'bg-teal-500', link: 'https://www.komoot.com/smarttour/e1193350209' },
                    { name: 'Glacier Point Loop', dist: '1.5 km', time: '25m', diff: 'Easy', color: 'bg-blue-500', link: 'https://www.komoot.com/smarttour/e1193350216' }
                ]
            },
            { type: 'stay', label: 'Yosemite Gateway', detail: 'El Portal or Mariposa Area.', icon: '🏨' }
        ]
    },
    { 
        day: 6, date: "Mon, Aug 24", title: "The Valley Hikes", 
        sequence: [
            { 
                type: 'options', 
                label: 'Yosemite: Major Challenges', 
                detail: 'Your core hiking day. Select your valley trail.',
                hikes: [
                    { name: 'Mist Trail (Vernal/Nevada)', dist: '11.0 km', time: '4h 30m', diff: 'Hard', color: 'bg-red-500', link: 'https://www.komoot.com/smarttour/e1193350212' },
                    { name: 'Sentinel Dome & Taft Pt', dist: '8.2 km', time: '3h 15m', diff: 'Moderate', color: 'bg-orange-500', link: 'https://www.komoot.com/smarttour/e1193350213' },
                    { name: 'Upper Yosemite Fall', dist: '12.0 km', time: '6h 00m', diff: 'Extreme', color: 'bg-stone-800', link: 'https://www.komoot.com/smarttour/e1193350214' }
                ]
            },
            { type: 'drive', label: 'South to Sequoia Area', from: 'Yosemite Valley', to: 'Three Rivers', dist: 300, time: '4h 15m', icon: '🚗' },
            { type: 'stay', label: 'Three Rivers', detail: 'Sequoia Park foothills.', icon: '🏨' }
        ]
    },
    { 
        day: 7, date: "Tue, Aug 25", title: "Giant Sequoia Day", 
        sequence: [
            { 
                type: 'options', 
                label: 'Sequoia National Park', 
                detail: 'Hikes through the worlds largest trees.',
                hikes: [
                    { name: 'General Sherman Tree', dist: '3.5 km', time: '1h 10m', diff: 'Easy', color: 'bg-green-600', link: 'https://www.komoot.com/smarttour/e1193350218' },
                    { name: 'Moro Rock Stairway', dist: '1.2 km', time: '45m', diff: 'Moderate', color: 'bg-amber-600', link: 'https://www.komoot.com/smarttour/e1193350220' },
                    { name: 'Tokopah Falls', dist: '6.5 km', time: '2h 30m', diff: 'Moderate', color: 'bg-indigo-600', link: 'https://www.komoot.com/smarttour/e1193350219' }
                ]
            },
            { type: 'drive', label: 'Descent to LA', from: 'Sequoia NP', to: 'Los Angeles', dist: 320, time: '3h 50m', icon: '🚗' },
            { type: 'stay', label: 'Los Angeles', detail: 'Hollywood or Santa Monica.', icon: '🏨' }
        ]
    },
    { 
        day: 10, date: "Fri, Aug 28", title: "PCH Northbound", 
        sequence: [
            { type: 'drive', label: 'Highway 1 Coast Drive', from: 'Los Angeles', to: 'San Luis Obispo', dist: 330, time: '3h 45m', icon: '🚗' },
            { type: 'activity', label: 'Lunch in SLO', detail: 'Historic Mission district and creek walk.', icon: '🥗' },
            { type: 'stay', label: 'Morro Bay', detail: 'Coastal night by Morro Rock.', icon: '🏨' }
        ]
    },
    { 
        day: 11, date: "Sat, Aug 29", title: "Big Sur Coastal", 
        sequence: [
            { type: 'drive', label: 'The Iconic Coastline', from: 'Morro Bay', to: 'San Francisco', dist: 380, time: '5h 45m', icon: '🚗' },
            { type: 'activity', label: 'Bixby Creek Bridge', detail: 'Iconic photography stop.', icon: '📸' },
            { type: 'stay', label: 'San Francisco', detail: 'Union Square area.', icon: '🏨' }
        ]
    },
    { 
        day: 12, date: "Sun, Aug 30", title: "SF Coastal Hike", 
        sequence: [
            { 
                type: 'options', 
                label: 'San Francisco Coastline', 
                detail: 'Choose a trail with Golden Gate views.',
                hikes: [
                    { name: 'Lands End Trail', dist: '5.5 km', time: '1h 45m', diff: 'Easy', color: 'bg-cyan-600', link: 'https://www.komoot.com/smarttour/e1193350225' },
                    { name: 'Presidio Scenic Loop', dist: '9.0 km', time: '3h 00m', diff: 'Moderate', color: 'bg-indigo-700', link: 'https://www.komoot.com/smarttour/e1193350226' },
                    { name: 'Battery to Bluffs', dist: '3.2 km', time: '1h 10m', diff: 'Moderate', color: 'bg-blue-800', link: 'https://www.komoot.com/smarttour/e1193350227' }
                ]
            },
            { type: 'stay', label: 'San Francisco', detail: 'Final trip night.', icon: '🏨' }
        ]
    },
    { 
        day: 13, date: "Mon, Aug 31", title: "Departure", 
        sequence: [
            { type: 'drive', label: 'SFO Dropoff', from: 'San Francisco', to: 'SFO Airport', dist: 30, time: '45m', icon: '🚗' },
            { type: 'travel', label: 'Flight SFO ➔ MUC', detail: 'Return flight to Munich.', time: '11h 30m', icon: '✈️' }
        ]
    }
];

export const todos = [
    { id: 1, text: "Book South Tahoe night (Aug 19)", done: false },
    { id: 2, text: "Yosemite Entry Reservation (Aug 23)", done: false },
    { id: 3, text: "Yosemite/Mariposa Lodging (Aug 23)", done: false },
    { id: 4, text: "Sequoia Area Lodging (Aug 24)", done: false },
    { id: 5, text: "RNO Car Rental Confirmation", done: false }
];
