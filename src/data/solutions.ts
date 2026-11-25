export interface Solution {
  slug: string;
  name: string;
  icon: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** Direct, quotable answer to "What is …?" — used for AEO/GEO. */
  definition: { q: string; a: string };
  features: { title: string; text: string }[];
  outcomes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  industries: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'gps-data-hub',
    name: 'GPS Data Hub for Shippers',
    icon: 'hub',
    short: 'One connection to see the trucks carrying your goods, whatever GPS they use.',
    metaTitle: 'GPS Data Hub — One Connection to Every Transporter\u2019s Trucks',
    metaDescription:
      'Veyro collects GPS data from every transporter\u2019s tracking provider and shows each shipper only the trucks carrying its goods, only during the trip, with consent.',
    h1: 'See every truck carrying your goods, through one connection',
    lead: 'Your transporters use hundreds of different GPS providers. Veyro brings them all into one place, so a shipper connects once and sees exactly the trucks working for it, and only while they are working for it.',
    definition: {
      q: 'What is a GPS data hub?',
      a: 'A GPS data hub collects vehicle location data from many different GPS providers and makes it available through one connection. Transporters keep the trackers they already have, and shippers connect to the hub once instead of to each transporter\u2019s GPS provider. Veyro identifies every truck by its registration number and shares its location with a shipper only while that truck is assigned to the shipper\u2019s trip, with the transporter\u2019s consent.',
    },
    features: [
      { title: 'One connection instead of hundreds', text: 'Shippers connect to Veyro once and see trucks from every transporter, whichever GPS provider each one uses.' },
      { title: 'One identity per truck', text: 'Every truck is identified by its registration number, so it keeps the same identity when it changes GPS provider or starts working for a different shipper.' },
      { title: 'No new hardware for transporters', text: 'Most GPS trackers can send a second copy of their data to another server. Transporters point that copy to Veyro and keep their current provider.' },
      { title: 'Three ways to connect', text: 'The tracker sends a copy directly, the GPS provider forwards the data under an agreement with Veyro, or Veyro reads it from the provider\u2019s system with access the transporter grants.' },
      { title: 'Access only during the trip', text: 'A shipper sees a truck only while it is assigned to that shipper, for the agreed time window and with the transporter\u2019s consent. When the trip ends, access ends automatically.' },
      { title: 'Privacy built in', text: 'Every view is recorded, and the driver\u2019s personal details, such as name and phone number, are hidden from shippers.' },
    ],
    outcomes: [
      { title: 'For shippers', text: 'Live location and arrival times for every consignment in one screen or one API, without chasing transporters for updates.' },
      { title: 'For transporters', text: 'Share location with customers in minutes, keep your current GPS provider, and stay in control of who sees which truck and for how long.' },
      { title: 'For GPS providers', text: 'Reach large shippers through one standard connection, on terms agreed with Veyro.' },
    ],
    steps: [
      { title: 'Connect', text: 'The transporter links its trucks to Veyro, usually by sending a copy of the tracker data. No new device.' },
      { title: 'Assign', text: 'When a truck is booked for a shipper\u2019s trip, the transporter approves sharing it for that trip.' },
      { title: 'Share', text: 'The shipper sees the truck live until the trip ends. Then access stops, and the next trip starts fresh.' },
    ],
    faqs: [
      { q: 'Do transporters need to buy new GPS devices?', a: 'No. Most trackers can send a second copy of their data to another server at the same time. If that is not possible, Veyro can receive the data from the GPS provider, or read it from the provider\u2019s system with the transporter\u2019s permission.' },
      { q: 'Can a shipper see all of a transporter\u2019s trucks?', a: 'No. A shipper sees only the trucks assigned to its own trips, and only for the time window of each trip.' },
      { q: 'What happens when a truck starts working for another shipper?', a: 'Access follows the assignment. When the truck\u2019s trip for one shipper ends, that shipper loses access. When it starts a trip for another shipper, only the new shipper can see it.' },
      { q: 'Is the driver\u2019s personal information shared?', a: 'No. Shippers see the truck, its location and its arrival time. The driver\u2019s name and phone number are hidden, and every view of a vehicle is recorded.' },
      { q: 'How does Veyro handle data protection?', a: 'Location is shared only with the transporter\u2019s consent, for a defined purpose and time, and the hub is designed around India\u2019s Digital Personal Data Protection Act. Veyro connects to a GPS provider only where its terms allow it or under an agreement with that provider.' },
    ],
    industries: ['transportation-logistics', 'last-mile-delivery', 'food-beverage', 'construction'],
  },
  {
    slug: 'gps-fleet-tracking',
    name: 'GPS Fleet Tracking',
    icon: 'pin',
    short: 'Live location, trips and status for every vehicle on one map.',
    metaTitle: 'GPS Fleet Tracking Software — Real-Time Vehicle Tracking',
    metaDescription:
      'Real-time GPS fleet tracking from Veyro: live vehicle location, trip history, geofences and instant alerts on one map. Built for fleets of 5 to 50,000.',
    h1: 'Real-time GPS fleet tracking that tells you what to do next',
    lead: 'See every vehicle, driver and job on a single live map. Veyro turns raw GPS data into clear answers: who is closest, who is late, who is idling and why.',
    definition: {
      q: 'What is GPS fleet tracking?',
      a: 'GPS fleet tracking is the use of satellite-positioning devices installed in vehicles, combined with cloud software, to show where each vehicle is, where it has been and how it is being driven. Fleet managers use it to dispatch faster, reduce fuel and idle time, prevent unauthorised use and prove service delivery.',
    },
    features: [
      { title: 'Live map with second-by-second updates', text: 'Follow vehicles in motion with smooth, high-frequency position updates, traffic layers and satellite view.' },
      { title: 'Trip history and route playback', text: 'Replay any journey with speed, stops, idling and events on a timeline. Export it as proof of service.' },
      { title: 'Geofences and smart alerts', text: 'Draw zones around depots, customer sites or restricted areas and get notified on entry, exit or dwell time.' },
      { title: 'Idle, stop and utilisation analytics', text: 'Find under-used vehicles and wasteful idling with ready-made reports you can schedule to your inbox.' },
      { title: 'Share live ETA with customers', text: 'Send a secure tracking link so customers see their delivery approaching without calling your dispatcher.' },
      { title: 'Works across satellite constellations', text: 'Devices use multi-constellation positioning, including GPS, GLONASS, Galileo and NavIC, for dependable accuracy in cities and remote areas.' },
    ],
    outcomes: [
      { title: 'Faster dispatch', text: 'Assign the nearest available vehicle in seconds instead of phoning drivers.' },
      { title: 'Lower running costs', text: 'Cut idling, detours and unauthorised trips that quietly inflate fuel spend.' },
      { title: 'Proof of every visit', text: 'Settle billing and delivery disputes with timestamped location evidence.' },
    ],
    steps: [
      { title: 'Install', text: 'Plug-in or wired trackers go into each vehicle, usually in minutes.' },
      { title: 'Connect', text: 'Devices send position, ignition and sensor data over the mobile network to the Veyro cloud.' },
      { title: 'Act', text: 'Dashboards, alerts and AI recommendations turn that data into decisions on web and mobile.' },
    ],
    faqs: [
      { q: 'How accurate is GPS vehicle tracking?', a: 'Modern multi-constellation trackers are typically accurate to within a few metres under open sky. Accuracy can drop in tunnels, underground parking and dense urban canyons, where Veyro devices use motion sensors and last-known position to fill gaps.' },
      { q: 'Does GPS tracking work without mobile network coverage?', a: 'Yes. The tracker keeps recording positions to its internal memory when there is no network and uploads them automatically once coverage returns, so trip history stays complete.' },
      { q: 'How often does the vehicle location update?', a: 'Update frequency is configurable. Moving vehicles typically report every few seconds, with additional updates on turns, harsh events and ignition changes so routes are drawn precisely.' },
      { q: 'Can I track cars, trucks, bikes and equipment together?', a: 'Yes. Veyro supports mixed fleets, including two-wheelers, cars, vans, trucks, buses, trailers and powered or unpowered equipment, on the same map and reports.' },
    ],
    industries: ['transportation-logistics', 'last-mile-delivery', 'field-services', 'car-rental-leasing'],
  },
  {
    slug: 'ai-dash-cams',
    name: 'AI Dash Cams & Video Telematics',
    icon: 'camera',
    short: 'Road and driver-facing AI cameras that detect risk and capture evidence.',
    metaTitle: 'AI Dash Cams & Video Telematics for Fleets',
    metaDescription:
      'Veyro AI dash cams detect distraction, drowsiness, tailgating and collisions in real time, coach drivers in-cab and upload video evidence automatically.',
    h1: 'AI dash cams that prevent incidents, not just record them',
    lead: 'On-device AI watches the road and the cab, warns the driver in the moment and sends you only the clips that matter, matched to GPS and vehicle data.',
    definition: {
      q: 'What is video telematics?',
      a: 'Video telematics combines dash camera footage with GPS and vehicle data. AI models running on the camera recognise risky situations such as phone use, drowsiness, tailgating or lane departure, alert the driver immediately and upload short video clips so managers can review, coach and defend against false claims.',
    },
    features: [
      { title: 'Driver monitoring (DMS)', text: 'Detects phone use, drowsiness, yawning, smoking, seat-belt non-use and eyes-off-road, with instant in-cab voice alerts.' },
      { title: 'Advanced driver assistance (ADAS)', text: 'Forward-collision, tailgating, lane-departure and pedestrian warnings from the road-facing camera.' },
      { title: 'Automatic incident upload', text: 'Harsh events and collisions trigger HD clips that reach the cloud within minutes. No memory cards to collect.' },
      { title: 'Live view and video on demand', text: 'Look in on any vehicle live or request footage from a specific time and place in the last several days.' },
      { title: 'Privacy controls', text: 'Blur faces, disable in-cab recording for off-duty time and restrict who can view footage, with a full audit trail.' },
      { title: 'Multi-camera support', text: 'Add side, rear, cargo and door cameras for buses, trucks and high-value loads.' },
    ],
    outcomes: [
      { title: 'Fewer collisions', text: 'Real-time alerts interrupt risky behaviour before it becomes an incident.' },
      { title: 'Faster claims resolution', text: 'Video evidence shows what really happened and protects drivers who were not at fault.' },
      { title: 'Coaching that sticks', text: 'Drivers review their own clips and improve with specific, fair feedback.' },
    ],
    steps: [
      { title: 'Detect', text: 'AI on the camera analyses every frame locally, even without network coverage.' },
      { title: 'Alert', text: 'The driver hears a voice prompt; serious events are flagged to the safety team.' },
      { title: 'Coach', text: 'Clips are queued into coaching workflows with scorecards and acknowledgements.' },
    ],
    faqs: [
      { q: 'Do AI dash cams record all the time?', a: 'They record continuously to local storage while the vehicle is on, but only upload short clips around detected events or when a manager requests footage. This keeps data costs low and protects privacy.' },
      { q: 'Do AI dash cams work at night?', a: 'Yes. Driver-facing cameras use infrared illumination to see the cab in darkness, and road-facing cameras use wide-dynamic-range sensors for low-light and headlight glare.' },
      { q: 'Will drivers accept in-cab cameras?', a: 'Acceptance is highest when the programme is explained as protection for drivers, privacy settings are clear and footage is used for fair coaching and exoneration rather than punishment. Veyro includes configurable privacy modes to support that approach.' },
    ],
    industries: ['transportation-logistics', 'public-transport', 'school-buses', 'security-cash-in-transit'],
  },
  {
    slug: 'driver-safety',
    name: 'Driver Safety & Coaching',
    icon: 'shield',
    short: 'Driver scorecards, in-cab alerts and coaching workflows that reduce risk.',
    metaTitle: 'Driver Safety & Behaviour Monitoring Software',
    metaDescription:
      'Reduce accidents with Veyro driver safety: behaviour scoring for speeding, harsh braking and distraction, real-time in-cab alerts and guided coaching.',
    h1: 'Build a safety culture drivers actually buy into',
    lead: 'Measure driving behaviour fairly, coach in the moment and recognise your best drivers. Veyro turns safety from a quarterly report into a daily habit.',
    definition: {
      q: 'What is driver behaviour monitoring?',
      a: 'Driver behaviour monitoring uses telematics sensors and AI cameras to measure how a vehicle is driven: speeding, harsh braking, harsh acceleration, sharp cornering, idling, seat-belt use and distraction. The data is combined into a driver safety score used for coaching, recognition and risk management.',
    },
    features: [
      { title: 'Fair, transparent safety scores', text: 'Scores are normalised by distance and road type, so long-haul and city drivers are compared fairly.' },
      { title: 'Speeding against posted limits', text: 'Detect speeding relative to the actual road limit as well as your own company thresholds.' },
      { title: 'Harsh event detection', text: 'Accelerometer-based detection of harsh braking, acceleration and cornering, tuned by vehicle class.' },
      { title: 'In-cab coaching', text: 'Audible alerts give drivers the chance to self-correct before an event is ever logged.' },
      { title: 'Coaching workflows', text: 'Assign sessions, attach clips, record outcomes and track improvement over time.' },
      { title: 'Leaderboards and rewards', text: 'Gamified rankings and recognition programmes to celebrate safe driving.' },
    ],
    outcomes: [
      { title: 'Lower accident rates', text: 'Targeted coaching focuses on the few behaviours that cause most incidents.' },
      { title: 'Reduced insurance exposure', text: 'Documented safety programmes and evidence support better conversations with insurers.' },
      { title: 'Less wear and fuel', text: 'Smoother driving reduces fuel burn, brake wear and tyre replacement.' },
    ],
    steps: [
      { title: 'Measure', text: 'Devices and cameras capture driving events with location and context.' },
      { title: 'Score', text: 'AI weighs severity and exposure to produce a clear score per driver and trip.' },
      { title: 'Improve', text: 'Automated nudges and manager-led coaching close the loop.' },
    ],
    faqs: [
      { q: 'How is a driver safety score calculated?', a: 'Veyro counts risky events such as speeding, harsh braking and distraction, weights them by severity and divides by distance driven. The result is a 0–100 score that can be compared across drivers, vehicles and depots.' },
      { q: 'Can drivers see their own scores?', a: 'Yes. The Veyro driver app shows each driver their score, recent events and tips, which encourages self-correction without a manager needing to intervene.' },
      { q: 'Does driver monitoring really reduce accidents?', a: 'Fleets that combine real-time in-cab alerts with regular, constructive coaching consistently report fewer risky events and collisions. Results depend on programme design and management follow-through.' },
    ],
    industries: ['transportation-logistics', 'school-buses', 'oil-gas', 'mining'],
  },
  {
    slug: 'fuel-management',
    name: 'Fuel Management',
    icon: 'fuel',
    short: 'Monitor fuel level, consumption, theft and idling across the fleet.',
    metaTitle: 'Fuel Management System & Fuel Monitoring for Fleets',
    metaDescription:
      'Veyro fuel management tracks fuel level, refills, drains, mileage and idling in real time. Detect fuel theft and cut fuel costs with AI-driven insights.',
    h1: 'Stop guessing where your fuel goes',
    lead: 'Fuel is usually the largest controllable cost in a fleet. Veyro measures every litre, from tank to trip, and flags theft, leaks and waste as they happen.',
    definition: {
      q: 'What is a fleet fuel management system?',
      a: 'A fleet fuel management system uses fuel-level sensors, engine data and GPS to measure how much fuel each vehicle receives and consumes. It detects refills and sudden drops, calculates true mileage, highlights idling and inefficient driving, and reconciles fuel purchases against what actually reached the tank.',
    },
    features: [
      { title: 'Real-time fuel level', text: 'High-precision tank sensors or CAN-bus readings show fuel level on a live graph for each vehicle.' },
      { title: 'Theft and drain alerts', text: 'Instant notification of sudden fuel drops with time, place and volume.' },
      { title: 'Refill reconciliation', text: 'Match fuel bills and fuel-card transactions to detected refills to expose short-filling.' },
      { title: 'Mileage and efficiency analytics', text: 'True km-per-litre by vehicle, driver, route and load, with outliers highlighted.' },
      { title: 'Idling control', text: 'See engine-on, vehicle-stationary time and its fuel cost; alert drivers who exceed limits.' },
      { title: 'EV energy tracking', text: 'Monitor state of charge, charging sessions and energy use for electric vehicles alongside diesel.' },
    ],
    outcomes: [
      { title: 'Lower fuel spend', text: 'Remove theft, idling and inefficient routes from the fuel bill.' },
      { title: 'Accurate cost per trip', text: 'Price contracts confidently with real consumption data.' },
      { title: 'Lower emissions', text: 'Every litre saved reduces CO₂ and supports sustainability reporting.' },
    ],
    steps: [
      { title: 'Sense', text: 'Fuel sensors or vehicle data provide continuous level and consumption readings.' },
      { title: 'Analyse', text: 'AI filters out slosh and slopes to detect true refills and drains.' },
      { title: 'Control', text: 'Alerts, reports and driver coaching turn insights into savings.' },
    ],
    faqs: [
      { q: 'How does a fuel monitoring system detect fuel theft?', a: 'A sensor in the tank reports the fuel level continuously. When the level falls faster than the engine could burn it, especially while the vehicle is stationary, the system flags a drain event with the volume, time and GPS location.' },
      { q: 'How accurate are fuel level sensors?', a: 'Well-calibrated capacitive or ultrasonic sensors are typically accurate to within about one to two percent of tank volume. Accuracy depends on correct installation and tank calibration.' },
      { q: 'Can I monitor fuel without installing a sensor?', a: 'Often, yes. Many modern vehicles expose fuel level and consumption through the CAN bus or OBD-II port, which Veyro can read directly. Dedicated sensors are recommended where the highest precision is needed.' },
    ],
    industries: ['transportation-logistics', 'construction', 'mining', 'agriculture'],
  },
  {
    slug: 'asset-tracking',
    name: 'Asset & Trailer Tracking',
    icon: 'box',
    short: 'Long-life trackers for trailers, containers, equipment and tools.',
    metaTitle: 'Asset Tracking & Trailer Tracking with GPS',
    metaDescription:
      'Track trailers, containers, generators and equipment with Veyro asset tracking. Multi-year battery trackers, utilisation reports and theft recovery alerts.',
    h1: 'Know where every asset is, and whether it is earning',
    lead: 'From trailers and containers to generators and tools, Veyro tracks powered and unpowered assets with rugged devices that last for years on a single battery.',
    definition: {
      q: 'What is GPS asset tracking?',
      a: 'GPS asset tracking uses compact, often battery-powered devices to report the location and status of non-vehicle assets such as trailers, containers, machinery and tools. It helps businesses prevent loss and theft, increase utilisation and find equipment quickly.',
    },
    features: [
      { title: 'Multi-year battery trackers', text: 'Sealed, weatherproof devices that report daily or on movement, with no wiring required.' },
      { title: 'Solar and wired options', text: 'Choose solar-assisted trackers for trailers or wired units for powered equipment.' },
      { title: 'Movement and tamper alerts', text: 'Get notified when an asset moves outside working hours or a device is removed.' },
      { title: 'Utilisation and dwell reports', text: 'See which assets sit idle, where and for how long, to right-size your pool.' },
      { title: 'Engine-hour tracking', text: 'Record running hours for generators and machinery to bill accurately and schedule service.' },
      { title: 'Bluetooth tags for small items', text: 'Low-cost tags on tools and pallets are detected by nearby vehicles and gateways.' },
    ],
    outcomes: [
      { title: 'Less loss and theft', text: 'Recover missing assets quickly with last-known and live location.' },
      { title: 'Higher utilisation', text: 'Move idle assets to where they are needed instead of buying or renting more.' },
      { title: 'Faster yard operations', text: 'Stop walking the yard: find the right trailer or container instantly.' },
    ],
    steps: [
      { title: 'Attach', text: 'Mount a tracker or tag in minutes with bolts, magnets or adhesive.' },
      { title: 'Locate', text: 'Assets appear on the same map as your vehicles.' },
      { title: 'Optimise', text: 'Use dwell and utilisation insights to redeploy or retire equipment.' },
    ],
    faqs: [
      { q: 'How long does an asset tracker battery last?', a: 'Battery life depends on how often the device reports. With one or two location updates per day, purpose-built asset trackers can last several years; more frequent reporting shortens that life.' },
      { q: 'Can asset trackers work inside containers or warehouses?', a: 'GPS signals are weak indoors, so trackers fall back to mobile-network or Wi-Fi positioning and report again as soon as they regain a satellite fix. Bluetooth tags and gateways give room-level visibility indoors.' },
      { q: 'What is the difference between vehicle tracking and asset tracking?', a: 'Vehicle trackers are wired to vehicle power and report every few seconds to support live operations. Asset trackers are optimised for long battery life and report less often, focusing on location, movement and utilisation.' },
    ],
    industries: ['construction', 'transportation-logistics', 'oil-gas', 'utilities'],
  },
  {
    slug: 'predictive-maintenance',
    name: 'Predictive Maintenance',
    icon: 'wrench',
    short: 'Engine diagnostics and AI that catch breakdowns before they happen.',
    metaTitle: 'Predictive Fleet Maintenance Software & Vehicle Diagnostics',
    metaDescription:
      'Prevent breakdowns with Veyro predictive maintenance: remote engine diagnostics, fault-code alerts, service schedules and AI failure prediction.',
    h1: 'Fix it before it fails',
    lead: 'Veyro reads engine health directly from the vehicle, schedules service by real usage and uses AI to warn you about failures days before a breakdown.',
    definition: {
      q: 'What is predictive fleet maintenance?',
      a: 'Predictive fleet maintenance uses live vehicle data, such as fault codes, battery voltage, coolant temperature and engine hours, together with machine-learning models to forecast when a component is likely to fail. Maintenance is then carried out just before failure, rather than on a fixed calendar or after a breakdown.',
    },
    features: [
      { title: 'Remote engine diagnostics', text: 'Read fault codes (DTCs) through OBD-II and J1939 CAN bus with plain-language explanations and severity.' },
      { title: 'Usage-based service schedules', text: 'Trigger service by odometer, engine hours or days, whichever comes first.' },
      { title: 'AI failure prediction', text: 'Models learn each vehicle’s normal pattern and flag anomalies in battery, cooling and other systems.' },
      { title: 'Digital inspections', text: 'Drivers complete pre-trip checklists in the app with photos; defects create work orders automatically.' },
      { title: 'Work orders and service history', text: 'Track jobs, parts, costs and downtime for every vehicle in one record.' },
      { title: 'Document and renewal reminders', text: 'Never miss insurance, permit, fitness or pollution-certificate renewals.' },
    ],
    outcomes: [
      { title: 'Less unplanned downtime', text: 'Catch issues in the yard, not on the highway.' },
      { title: 'Lower repair costs', text: 'Small early repairs prevent expensive secondary damage.' },
      { title: 'Longer asset life', text: 'Consistent, on-time service keeps vehicles productive for longer.' },
    ],
    steps: [
      { title: 'Monitor', text: 'Telematics devices stream engine and sensor data continuously.' },
      { title: 'Predict', text: 'AI compares each vehicle against its own baseline and the wider fleet.' },
      { title: 'Schedule', text: 'Recommended actions flow into work orders at the most convenient time.' },
    ],
    faqs: [
      { q: 'What is the difference between preventive and predictive maintenance?', a: 'Preventive maintenance follows a fixed schedule based on time or distance. Predictive maintenance uses real-time vehicle data and analytics to service a component only when signs of wear or failure appear, reducing both breakdowns and unnecessary servicing.' },
      { q: 'Which vehicle data is used for diagnostics?', a: 'Veyro reads diagnostic trouble codes, odometer, engine hours, RPM, coolant temperature, battery voltage, fuel data and more, depending on what the vehicle exposes over OBD-II or CAN bus.' },
      { q: 'Does it work with mixed makes and models?', a: 'Yes. Veyro supports standard light-vehicle and heavy-vehicle protocols, so cars, vans, trucks, buses and many machines can be managed together.' },
    ],
    industries: ['transportation-logistics', 'public-transport', 'construction', 'mining'],
  },
  {
    slug: 'route-optimization',
    name: 'Route Optimization & Dispatch',
    icon: 'route',
    short: 'AI route planning, live dispatch and accurate ETAs.',
    metaTitle: 'Route Optimization Software & Dispatch Management',
    metaDescription:
      'Plan efficient multi-stop routes in seconds with Veyro route optimization. AI dispatch, live ETAs, proof of delivery and automatic re-routing.',
    h1: 'More stops, fewer kilometres',
    lead: 'Veyro plans the best route for every vehicle, taking into account time windows, capacity and traffic, then keeps the plan on track as the day changes.',
    definition: {
      q: 'What is route optimization?',
      a: 'Route optimization is the process of calculating the most efficient sequence of stops for one or many vehicles while respecting constraints such as delivery time windows, vehicle capacity, driver hours and traffic. It reduces distance and fuel, increases stops per day and improves on-time performance.',
    },
    features: [
      { title: 'Multi-stop, multi-vehicle planning', text: 'Optimise hundreds of stops across your fleet in seconds.' },
      { title: 'Real-world constraints', text: 'Time windows, load capacity, vehicle type, skills, driver shifts and road restrictions.' },
      { title: 'Live dispatch board', text: 'Drag-and-drop jobs, see progress against plan and react to delays immediately.' },
      { title: 'Dynamic re-routing', text: 'Insert urgent jobs and re-optimise remaining stops without starting over.' },
      { title: 'Driver app with navigation', text: 'Turn-by-turn directions, job details, photos, signatures and digital proof of delivery.' },
      { title: 'Customer notifications', text: 'Automatic SMS, WhatsApp or email updates with live ETA and tracking link.' },
    ],
    outcomes: [
      { title: 'Lower cost per delivery', text: 'Shorter routes and fuller vehicles reduce fuel and overtime.' },
      { title: 'Better on-time performance', text: 'Realistic plans and proactive alerts keep promises to customers.' },
      { title: 'Less planning time', text: 'Replace hours of manual planning with a few clicks.' },
    ],
    steps: [
      { title: 'Import', text: 'Bring in orders from a spreadsheet, API or your ERP/TMS.' },
      { title: 'Optimise', text: 'Veyro assigns and sequences stops across vehicles automatically.' },
      { title: 'Execute', text: 'Drivers follow the plan in the app while you watch progress live.' },
    ],
    faqs: [
      { q: 'How is route optimization different from navigation apps?', a: 'A navigation app finds the best path from A to B. Route optimization decides which vehicle should visit which stops and in what order across many stops and constraints, and then hands each driver a navigable route.' },
      { q: 'Can routes be changed during the day?', a: 'Yes. Dispatchers can add, remove or reassign jobs, and Veyro re-optimises the remaining stops and updates driver apps and customer ETAs automatically.' },
      { q: 'Does it include proof of delivery?', a: 'Yes. Drivers capture signatures, photos, notes and barcodes in the app. Each record is time- and location-stamped and available instantly in the dashboard.' },
    ],
    industries: ['last-mile-delivery', 'field-services', 'food-beverage', 'transportation-logistics'],
  },
  {
    slug: 'compliance',
    name: 'Compliance & Reporting',
    icon: 'clipboard',
    short: 'Automated records, regulatory device support and audit-ready reports.',
    metaTitle: 'Fleet Compliance Software — AIS-140, Driver Hours & Reports',
    metaDescription:
      'Simplify fleet compliance with Veyro: support for AIS-140 tracking requirements in India, driver hours, inspections, document renewals and audit-ready reports.',
    h1: 'Compliance that runs itself',
    lead: 'Regulations differ by country and vehicle type, but the need is the same: accurate records, on time. Veyro captures them automatically and keeps you audit-ready.',
    definition: {
      q: 'What is fleet compliance management?',
      a: 'Fleet compliance management is the practice of making sure vehicles, drivers and operations meet legal and contractual requirements. This includes mandated tracking devices, driver working hours, vehicle inspections, permits and insurance, speed governance and data-retention rules. Telematics automates the record-keeping.',
    },
    features: [
      { title: 'AIS-140 support for India', text: 'Works with vehicle location tracking devices and emergency buttons specified under India’s AIS-140 standard for public and commercial vehicles.' },
      { title: 'Driver hours and fatigue', text: 'Track driving, rest and duty time; alert before limits are breached. Supports regional hours-of-service schemes.' },
      { title: 'Digital vehicle inspections', text: 'Paperless checklists with photos, defect tracking and sign-off history.' },
      { title: 'Document vault and reminders', text: 'Store registration, insurance, permits and licences with renewal alerts.' },
      { title: 'Speed and route governance', text: 'Enforce speed limits, approved routes and no-go zones with evidence.' },
      { title: 'Audit-ready reporting', text: 'Schedule compliance reports for regulators, customers and internal audit in a few clicks.' },
    ],
    outcomes: [
      { title: 'Fewer fines and delays', text: 'Stay ahead of expiries and violations.' },
      { title: 'Less paperwork', text: 'Automatic records replace logbooks and spreadsheets.' },
      { title: 'Stronger contracts', text: 'Demonstrate compliance to enterprise and government customers.' },
    ],
    steps: [
      { title: 'Capture', text: 'Devices and the driver app record activity automatically.' },
      { title: 'Check', text: 'Rules engines compare activity with the regulations and policies you select.' },
      { title: 'Report', text: 'Exceptions are flagged in real time; reports are generated on schedule.' },
    ],
    faqs: [
      { q: 'What is AIS-140?', a: 'AIS-140 is an Automotive Industry Standard published in India that specifies requirements for vehicle location tracking devices and emergency (panic) buttons in public service and certain commercial vehicles. It covers device features, communication with government back-end systems and testing requirements.' },
      { q: 'Which regulations does Veyro support?', a: 'Veyro is designed around configurable rule sets, so it can support different regional requirements, for example vehicle tracking mandates in India and driver-hours rules in other markets. Speak to our team about the specific regulations that apply to your fleet.' },
      { q: 'How long is compliance data stored?', a: 'Retention periods are configurable to meet the requirements of your regulators and contracts. Data can be exported at any time in standard formats.' },
    ],
    industries: ['public-transport', 'school-buses', 'government', 'oil-gas'],
  },
  {
    slug: 'cold-chain-monitoring',
    name: 'Cold Chain Monitoring',
    icon: 'snow',
    short: 'Temperature, humidity and door monitoring for sensitive cargo.',
    metaTitle: 'Cold Chain Monitoring & Reefer Temperature Tracking',
    metaDescription:
      'Protect temperature-sensitive cargo with Veyro cold chain monitoring: real-time temperature, humidity and door sensors, alerts and compliance reports.',
    h1: 'Protect every degree of the journey',
    lead: 'Monitor temperature, humidity and door activity in real time for food, pharmaceuticals and other sensitive goods, with a complete record for every consignment.',
    definition: {
      q: 'What is cold chain monitoring?',
      a: 'Cold chain monitoring is the continuous measurement and recording of temperature, and often humidity, for perishable goods during storage and transport. Wireless sensors report readings with GPS location to cloud software, which raises alerts when conditions leave the safe range and produces a temperature record for each shipment.',
    },
    features: [
      { title: 'Wireless temperature sensors', text: 'Multi-zone probes report continuously over Bluetooth to the vehicle gateway.' },
      { title: 'Instant excursion alerts', text: 'SMS, app and email alerts the moment readings leave the allowed range.' },
      { title: 'Door open/close events', text: 'Know when and where doors were opened, and for how long.' },
      { title: 'Reefer unit integration', text: 'Read set-point, mode and alarms from supported refrigeration units.' },
      { title: 'Per-shipment temperature reports', text: 'Share a tamper-evident temperature log with customers at delivery.' },
      { title: 'Warehouse and cold-room sensors', text: 'Extend the same monitoring to static storage for end-to-end visibility.' },
    ],
    outcomes: [
      { title: 'Less spoilage', text: 'Act on problems while there is still time to save the load.' },
      { title: 'Fewer rejected deliveries', text: 'Prove conditions were maintained from dock to door.' },
      { title: 'Simpler audits', text: 'Automatic records support food-safety and good-distribution-practice requirements.' },
    ],
    steps: [
      { title: 'Sense', text: 'Sensors in each compartment measure conditions every few minutes.' },
      { title: 'Alert', text: 'Excursions trigger notifications to drivers and control-room staff.' },
      { title: 'Prove', text: 'A full temperature history is attached to each trip and delivery.' },
    ],
    faqs: [
      { q: 'How do you monitor temperature in a refrigerated truck?', a: 'Wireless sensors are placed in each compartment and send readings to the telematics gateway in the cab, which forwards them with GPS location to the cloud. Dispatchers see live temperatures and receive alerts if a reading goes out of range.' },
      { q: 'What happens if the vehicle loses network coverage?', a: 'Sensors and the gateway store readings locally and upload them when coverage returns, so the temperature record has no gaps.' },
      { q: 'Can I share temperature reports with my customers?', a: 'Yes. Reports can be shared as a link or PDF for each trip or delivery, showing the full temperature graph, door events and any excursions.' },
    ],
    industries: ['food-beverage', 'transportation-logistics', 'last-mile-delivery', 'agriculture'],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug)!;
