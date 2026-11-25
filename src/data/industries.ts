export interface Industry {
  slug: string;
  name: string;
  icon: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  challenges: { title: string; text: string }[];
  capabilities: { title: string; text: string; solution: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: 'truck',
    short: 'Long-haul, regional and 3PL fleets.',
    metaTitle: 'GPS Tracking for Transportation & Logistics Fleets',
    metaDescription:
      'Telematics for trucking and logistics: live truck tracking, fuel monitoring, driver safety, trip management and ETA sharing. Run on-time, lower-cost freight.',
    h1: 'Telematics for transportation and logistics',
    lead: 'Margins in freight are won or lost on fuel, turnaround time and reliability. Veyro gives transporters and 3PLs live control of all three.',
    challenges: [
      { title: 'Fuel and pilferage', text: 'Fuel is the biggest operating cost and the hardest to verify on long routes.' },
      { title: 'Detention and turnaround', text: 'Hours lost at loading points, tolls and borders erode vehicle productivity.' },
      { title: 'Customer visibility', text: 'Shippers expect live status and reliable ETAs for every consignment.' },
    ],
    capabilities: [
      { title: 'Live truck tracking and trip management', text: 'Plan trips, monitor route adherence and share ETAs automatically.', solution: 'gps-fleet-tracking' },
      { title: 'Fuel monitoring', text: 'Detect drains, validate refills and benchmark mileage by route.', solution: 'fuel-management' },
      { title: 'AI dash cams', text: 'Reduce highway incidents and resolve claims with video.', solution: 'ai-dash-cams' },
      { title: 'Trailer tracking', text: 'Know where every trailer and container is waiting.', solution: 'asset-tracking' },
    ],
    useCases: ['Full-truckload and part-load trip tracking', 'Consignment visibility portals for shippers', 'Route-deviation and unscheduled-stop alerts', 'Loading and unloading detention analysis', 'Driver settlement based on actual trips'],
    faqs: [
      { q: 'How does GPS tracking help trucking companies?', a: 'It shows the live location and status of every truck, automates trip records, exposes fuel theft and idling, improves driver safety and lets shippers see accurate ETAs. Together these raise vehicle utilisation and lower cost per kilometre.' },
      { q: 'Can shippers track their consignments directly?', a: 'Yes. Veyro can share a secure live-tracking link or a branded portal limited to a customer’s own consignments.' },
      { q: 'Does Veyro integrate with a TMS or ERP?', a: 'Yes. Open APIs and webhooks let you exchange trips, locations, events and documents with transport-management and ERP systems.' },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: 'crane',
    short: 'Heavy equipment, tippers and site vehicles.',
    metaTitle: 'Construction Fleet & Equipment Tracking',
    metaDescription:
      'Track construction equipment, tippers and site vehicles with Veyro. Monitor engine hours, utilisation, fuel and theft across every project site.',
    h1: 'Equipment and fleet tracking for construction',
    lead: 'Know which machines are working, which are idle and which have left the site. Veyro connects yellow iron, tippers and light vehicles in one view.',
    challenges: [
      { title: 'Idle and under-used equipment', text: 'Expensive machines sit unused on one site while another site rents the same model.' },
      { title: 'Fuel and material theft', text: 'Remote sites and night shifts make losses hard to detect.' },
      { title: 'Billing by hours', text: 'Manual hour-meter logs cause disputes with clients and subcontractors.' },
    ],
    capabilities: [
      { title: 'Equipment and asset tracking', text: 'Location, engine hours and utilisation for every machine.', solution: 'asset-tracking' },
      { title: 'Fuel monitoring', text: 'Tank-level sensing with drain alerts for machines and bowsers.', solution: 'fuel-management' },
      { title: 'Maintenance by engine hours', text: 'Service reminders based on real usage.', solution: 'predictive-maintenance' },
      { title: 'Tipper trip counting', text: 'Automatic trip counts between loading and dumping zones.', solution: 'gps-fleet-tracking' },
    ],
    useCases: ['Project-wise equipment utilisation', 'Automatic trip counts for tippers and transit mixers', 'Geofenced site security after hours', 'Rental equipment billing by engine hours', 'Fuel accountability by machine and operator'],
    faqs: [
      { q: 'How do you track construction equipment?', a: 'A rugged tracker is wired to the machine to report location, ignition and engine hours. Unpowered assets use battery or solar trackers. All appear on one map with utilisation reports by site and project.' },
      { q: 'Can I count tipper trips automatically?', a: 'Yes. Geofences around loading and unloading points let Veyro count completed trips per vehicle and shift without manual logs.' },
      { q: 'Does it work on remote sites with poor coverage?', a: 'Devices store data when out of coverage and upload it when the network returns, so hours and trips are never lost.' },
    ],
  },
  {
    slug: 'mining',
    name: 'Mining',
    icon: 'pickaxe',
    short: 'Haul trucks, excavators and mine-site safety.',
    metaTitle: 'Mining Fleet Management & Haul Truck Tracking',
    metaDescription:
      'Veyro for mining: haul-cycle tracking, fuel monitoring, operator fatigue detection and geofenced safety zones for open-cast and quarry operations.',
    h1: 'Fleet intelligence for mining and quarrying',
    lead: 'Measure every haul cycle, protect operators from fatigue and account for every litre of diesel across pits, dumps and haul roads.',
    challenges: [
      { title: 'Cycle-time visibility', text: 'Queuing at shovels and crushers hides lost production.' },
      { title: 'Operator fatigue', text: 'Long shifts and repetitive routes raise the risk of serious incidents.' },
      { title: 'Diesel accountability', text: 'High volumes make even small percentage losses expensive.' },
    ],
    capabilities: [
      { title: 'Haul-cycle analytics', text: 'Load, haul, dump and return times by truck and shift.', solution: 'gps-fleet-tracking' },
      { title: 'Fatigue and distraction detection', text: 'AI cameras alert operators and control rooms in real time.', solution: 'ai-dash-cams' },
      { title: 'Fuel monitoring', text: 'Tank-level sensing for trucks, excavators and bowsers.', solution: 'fuel-management' },
      { title: 'Condition monitoring', text: 'Engine data and fault alerts to prevent downtime.', solution: 'predictive-maintenance' },
    ],
    useCases: ['Trip and tonnage reconciliation', 'Speed control on haul roads', 'No-go zones around blasting areas', 'Contractor fleet performance comparison', 'Bowser dispensing reconciliation'],
    faqs: [
      { q: 'How is telematics used in mining?', a: 'Mining operations use telematics to track haul cycles, monitor fuel, detect operator fatigue, enforce speed limits and safety zones, and predict equipment failures. The result is more tonnes moved per shift with fewer incidents.' },
      { q: 'Can Veyro work where there is no mobile network?', a: 'Devices buffer data for upload when connectivity is available. For sites without mobile coverage, speak to our team about private-network and satellite options.' },
      { q: 'Does it support contractor-owned fleets?', a: 'Yes. Contractor vehicles can be grouped separately with their own access, while the mine operator sees consolidated performance.' },
    ],
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    icon: 'drop',
    short: 'Tankers, field crews and hazardous cargo.',
    metaTitle: 'Oil & Gas Fleet Tracking & Tanker Monitoring',
    metaDescription:
      'Secure oil and gas transport with Veyro: tanker tracking, route adherence, journey management, driver safety scoring and lone-worker protection.',
    h1: 'Safe, secure fleets for oil and gas',
    lead: 'When the cargo is hazardous, there is no room for guesswork. Veyro enforces safe journeys from terminal to forecourt and keeps field crews connected.',
    challenges: [
      { title: 'Journey risk', text: 'Speeding, fatigue and night driving with hazardous loads carry severe consequences.' },
      { title: 'Product integrity', text: 'Unscheduled stops and valve tampering lead to loss and adulteration.' },
      { title: 'Remote workers', text: 'Field teams operate far from help and communication.' },
    ],
    capabilities: [
      { title: 'Journey management', text: 'Approved routes, rest stops and speed limits with real-time exception alerts.', solution: 'compliance' },
      { title: 'Driver safety scoring', text: 'Fair scoring and coaching aligned to strict HSE standards.', solution: 'driver-safety' },
      { title: 'Tanker security', text: 'Route-deviation, stoppage and sensor-based tamper alerts.', solution: 'gps-fleet-tracking' },
      { title: 'Asset tracking', text: 'Locate rigs, generators and skids in remote fields.', solution: 'asset-tracking' },
    ],
    useCases: ['Terminal-to-outlet trip monitoring', 'Night-driving and rest-break enforcement', 'Lone-worker SOS and check-in', 'Contractor HSE scorecards', 'In-vehicle monitoring system (IVMS) reporting'],
    faqs: [
      { q: 'What is IVMS in oil and gas?', a: 'IVMS stands for in-vehicle monitoring system. It is a telematics device that records how a vehicle is driven, including speed, harsh events, seat-belt use and driving hours, so operators can enforce health, safety and environment standards.' },
      { q: 'How does telematics prevent fuel tanker theft?', a: 'By fixing approved routes and stops, monitoring valves and hatches with sensors, and alerting the control room to any deviation, unscheduled stop or tamper event in real time.' },
      { q: 'Can Veyro support contractor compliance?', a: 'Yes. Operators can set safety standards and receive scorecards across multiple transport contractors on one platform.' },
    ],
  },
  {
    slug: 'agriculture',
    name: 'Agriculture',
    icon: 'leaf',
    short: 'Tractors, harvesters and farm-to-market logistics.',
    metaTitle: 'Agriculture Fleet Tracking & Farm Equipment GPS',
    metaDescription:
      'Veyro for agriculture: tractor and harvester tracking, area-covered reports, fuel monitoring and farm-to-market logistics with cold chain visibility.',
    h1: 'Telematics for agriculture and agribusiness',
    lead: 'Track machinery across fields, measure work done and move produce to market fresh. Veyro brings data to every part of the farm operation.',
    challenges: [
      { title: 'Seasonal pressure', text: 'Short harvest windows mean any breakdown or delay is costly.' },
      { title: 'Work verification', text: 'It is hard to confirm area covered and hours worked by hired machines.' },
      { title: 'Post-harvest loss', text: 'Produce quality suffers without controlled, timely transport.' },
    ],
    capabilities: [
      { title: 'Machinery tracking', text: 'Location, engine hours and field activity for tractors and harvesters.', solution: 'asset-tracking' },
      { title: 'Fuel monitoring', text: 'Consumption per hour and per acre, with drain alerts.', solution: 'fuel-management' },
      { title: 'Cold chain', text: 'Temperature monitoring for milk, fruit, vegetables and fish.', solution: 'cold-chain-monitoring' },
      { title: 'Maintenance planning', text: 'Service equipment before the season, not during it.', solution: 'predictive-maintenance' },
    ],
    useCases: ['Area-covered and work-hour reports', 'Custom-hiring centre billing', 'Milk collection route tracking', 'Harvest logistics coordination', 'Geofenced equipment security'],
    faqs: [
      { q: 'How is GPS used in agriculture fleet management?', a: 'GPS trackers on tractors, harvesters and transport vehicles record where and how long machines work, the area covered, fuel used and trips made. This supports accurate billing, better scheduling and lower operating cost.' },
      { q: 'Can I bill customers by area or hours?', a: 'Yes. Veyro reports engine hours and the field area covered by each machine, which can be used to bill custom-hire work.' },
      { q: 'Does it support milk and produce collection routes?', a: 'Yes. Collection routes can be planned and tracked, with temperature monitoring for chilled tankers and vehicles.' },
    ],
  },
  {
    slug: 'public-transport',
    name: 'Public Transport',
    icon: 'bus',
    short: 'City buses, intercity coaches and transit agencies.',
    metaTitle: 'Bus Tracking & Public Transport Fleet Management',
    metaDescription:
      'Veyro for public transport: live bus tracking, passenger information, schedule adherence, AIS-140 device support, panic buttons and driver safety.',
    h1: 'Smarter, safer public transport',
    lead: 'Give passengers accurate arrival times and give operators real control of schedules, safety and vehicle health across the network.',
    challenges: [
      { title: 'Schedule adherence', text: 'Bunching and missed trips reduce ridership and revenue.' },
      { title: 'Passenger safety', text: 'Operators must respond quickly to emergencies on board.' },
      { title: 'Regulatory mandates', text: 'Tracking devices and emergency buttons are mandatory in many jurisdictions.' },
    ],
    capabilities: [
      { title: 'Live bus tracking and ETAs', text: 'Real-time positions feed passenger apps and display boards.', solution: 'gps-fleet-tracking' },
      { title: 'Regulatory device support', text: 'Supports AIS-140 tracking and emergency-button requirements in India.', solution: 'compliance' },
      { title: 'On-board video', text: 'Multi-camera recording and AI driver monitoring.', solution: 'ai-dash-cams' },
      { title: 'Fleet health', text: 'Remote diagnostics to keep buses on the road.', solution: 'predictive-maintenance' },
    ],
    useCases: ['Schedule and headway adherence', 'Passenger information systems', 'Emergency alert response', 'Depot and trip productivity', 'Open data feeds for journey planners'],
    faqs: [
      { q: 'How does live bus tracking work?', a: 'A GPS device on each bus sends its position to the cloud every few seconds. Software compares that position with the route and schedule to calculate arrival times, which are shown to passengers in apps and at stops, and to operators in a control-centre view.' },
      { q: 'Does Veyro support emergency buttons?', a: 'Yes. Emergency button presses are sent to the control centre instantly with the vehicle’s live location and, where fitted, video.' },
      { q: 'Can Veyro feed passenger apps?', a: 'Yes. Real-time vehicle positions and predictions can be published through standard open data feeds and APIs.' },
    ],
  },
  {
    slug: 'school-buses',
    name: 'School Buses',
    icon: 'school',
    short: 'Student safety and parent visibility.',
    metaTitle: 'School Bus Tracking System with Parent App',
    metaDescription:
      'Veyro school bus tracking: live bus location for parents, student boarding alerts, speed and route monitoring, on-board cameras and panic buttons.',
    h1: 'School bus tracking parents can trust',
    lead: 'Parents know when the bus will arrive. Schools know every child boarded and alighted safely. Drivers are supported to drive carefully, every trip.',
    challenges: [
      { title: 'Parent anxiety', text: 'Delays without information generate calls and concern.' },
      { title: 'Student accountability', text: 'Schools must know who is on which bus at all times.' },
      { title: 'Safe driving', text: 'Speeding or route changes with children on board are unacceptable.' },
    ],
    capabilities: [
      { title: 'Live tracking with parent app', text: 'Bus location, ETA and arrival notifications for each stop.', solution: 'gps-fleet-tracking' },
      { title: 'Driver safety monitoring', text: 'Speed, harsh driving and distraction alerts.', solution: 'driver-safety' },
      { title: 'On-board cameras', text: 'Interior and exterior video for safety and incident review.', solution: 'ai-dash-cams' },
      { title: 'Regulatory compliance', text: 'Support for mandated tracking devices, speed governance and panic buttons.', solution: 'compliance' },
    ],
    useCases: ['Pick-up and drop notifications to parents', 'RFID or app-based student attendance', 'Route and stop optimisation each term', 'Speed-limit enforcement', 'Attendant and driver accountability'],
    faqs: [
      { q: 'How does a school bus tracking system work?', a: 'A GPS tracker on the bus reports its position continuously. Parents see the bus on a mobile app with an estimated arrival time for their stop and receive notifications when their child boards or leaves the bus. The school sees all buses on one dashboard.' },
      { q: 'Can parents see only their own child’s bus?', a: 'Yes. Each parent account is restricted to the bus and stop assigned to their child.' },
      { q: 'Is student data kept private?', a: 'Yes. Student information is encrypted, access is role-based and only the minimum data needed for the service is collected.' },
    ],
  },
  {
    slug: 'field-services',
    name: 'Field Services',
    icon: 'tool',
    short: 'Technicians, installers and service vans.',
    metaTitle: 'Field Service Fleet Tracking & Job Dispatch',
    metaDescription:
      'Veyro for field services: dispatch the nearest technician, optimise daily routes, verify site visits and track vans, tools and service time.',
    h1: 'Get the right technician there, faster',
    lead: 'For service businesses, time on site is revenue and time on the road is cost. Veyro helps you fit in more jobs and arrive when you promised.',
    challenges: [
      { title: 'Late arrivals', text: 'Missed appointment windows damage customer satisfaction.' },
      { title: 'Low jobs per day', text: 'Poor sequencing wastes hours in traffic.' },
      { title: 'Visit verification', text: 'Customers dispute whether and when a technician attended.' },
    ],
    capabilities: [
      { title: 'Nearest-technician dispatch', text: 'Assign urgent jobs based on live location and skills.', solution: 'route-optimization' },
      { title: 'Live tracking', text: 'See vans and two-wheelers with customer ETA sharing.', solution: 'gps-fleet-tracking' },
      { title: 'Tool and equipment tracking', text: 'Bluetooth tags prevent lost tools and wasted return trips.', solution: 'asset-tracking' },
      { title: 'Safe driving', text: 'Scorecards for employees driving company or personal vehicles.', solution: 'driver-safety' },
    ],
    useCases: ['Emergency call-out dispatch', 'Time-on-site and SLA reporting', 'Mileage reimbursement automation', 'Digital job sheets with signatures', 'After-hours vehicle-use control'],
    faqs: [
      { q: 'How does fleet tracking improve field service?', a: 'It shows dispatchers where every technician is so the closest qualified person can take each job, optimises daily routes, shares accurate arrival times with customers and records time on site automatically.' },
      { q: 'Can technicians use their phones instead of a tracker?', a: 'Yes. The Veyro mobile app can provide location during working hours for teams without company vehicles, alongside hardware trackers for owned fleets.' },
      { q: 'Does it integrate with field service software?', a: 'Yes. Jobs, statuses and locations can be exchanged with CRM and field-service management tools through the API.' },
    ],
  },
  {
    slug: 'last-mile-delivery',
    name: 'Last-Mile Delivery',
    icon: 'parcel',
    short: 'E-commerce, courier and quick-commerce fleets.',
    metaTitle: 'Last-Mile Delivery Tracking & Route Optimization',
    metaDescription:
      'Veyro for last-mile delivery: AI route optimization, live rider tracking, customer ETAs, proof of delivery and EV fleet monitoring.',
    h1: 'Win the last mile',
    lead: 'The last mile is the most expensive and most visible part of delivery. Veyro helps you plan tighter routes, keep customers informed and deliver first time.',
    challenges: [
      { title: 'Cost per drop', text: 'Dense, changing orders make efficient routing hard.' },
      { title: 'Failed deliveries', text: 'Customers who are not informed are often not home.' },
      { title: 'Mixed and electric fleets', text: 'Two-, three- and four-wheelers and EVs need different planning.' },
    ],
    capabilities: [
      { title: 'AI route optimisation', text: 'Sequence hundreds of drops with time windows and capacity.', solution: 'route-optimization' },
      { title: 'Live tracking and ETAs', text: 'Real-time rider location with customer tracking links.', solution: 'gps-fleet-tracking' },
      { title: 'Temperature-controlled delivery', text: 'Monitor chilled and frozen orders to the doorstep.', solution: 'cold-chain-monitoring' },
      { title: 'EV monitoring', text: 'State of charge, range and charging insights.', solution: 'fuel-management' },
    ],
    useCases: ['Hub-to-doorstep route planning', 'Digital proof of delivery', 'Cash-on-delivery reconciliation', 'Rider productivity and payouts', 'Reverse-logistics pick-ups'],
    faqs: [
      { q: 'What is last-mile delivery tracking?', a: 'Last-mile delivery tracking follows a parcel from the local hub to the customer’s door. It combines the rider’s live GPS location, the planned stop sequence and delivery status to give dispatchers control and customers an accurate arrival time.' },
      { q: 'Can Veyro handle two-wheelers and EVs?', a: 'Yes. Routes are planned for the vehicle type, including capacity and range, and compact trackers or the rider app provide live location.' },
      { q: 'How do customers receive updates?', a: 'Automatically, by SMS, WhatsApp or email, with a link to follow the delivery live and a notification when it is completed.' },
    ],
  },
  {
    slug: 'car-rental-leasing',
    name: 'Car Rental & Leasing',
    icon: 'key',
    short: 'Rental, subscription and leasing fleets.',
    metaTitle: 'GPS Tracking for Car Rental & Leasing Companies',
    metaDescription:
      'Veyro for rental and leasing: vehicle location, mileage and fuel at return, geofence and overspeed alerts, remote immobilisation and theft recovery.',
    h1: 'Protect and optimise your rental fleet',
    lead: 'Every rental vehicle is an asset in someone else’s hands. Veyro protects it, automates check-in data and shows you which vehicles earn the most.',
    challenges: [
      { title: 'Theft and misuse', text: 'Vehicles taken out of permitted areas or not returned.' },
      { title: 'Manual check-in', text: 'Disputes over mileage, fuel and damage at return.' },
      { title: 'Utilisation', text: 'Vehicles idle at one branch while another turns customers away.' },
    ],
    capabilities: [
      { title: 'Live tracking and geofencing', text: 'Alerts when vehicles cross city, state or country boundaries.', solution: 'gps-fleet-tracking' },
      { title: 'Automatic mileage and fuel', text: 'Accurate odometer and fuel data at hand-over and return.', solution: 'fuel-management' },
      { title: 'Vehicle health', text: 'Fault-code alerts and service reminders between rentals.', solution: 'predictive-maintenance' },
      { title: 'Driving behaviour', text: 'Identify abusive driving and support damage claims.', solution: 'driver-safety' },
    ],
    useCases: ['Self-drive rental monitoring', 'Remote immobilisation for recovery', 'Subscription mileage billing', 'Branch-wise utilisation', 'Lease-end condition evidence'],
    faqs: [
      { q: 'Why do rental companies use GPS trackers?', a: 'To locate and recover vehicles, enforce rental boundaries, capture mileage and fuel automatically, detect abusive driving and plan fleet distribution across branches.' },
      { q: 'Can a vehicle be immobilised remotely?', a: 'Where legally permitted and fitted with a compatible relay, authorised staff can prevent a parked vehicle from restarting to support recovery. Safety checks prevent immobilisation while a vehicle is moving.' },
      { q: 'Is customer privacy respected?', a: 'Yes. Tracking should be disclosed in the rental agreement, and Veyro provides role-based access and retention controls to support privacy obligations.' },
    ],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    icon: 'building',
    short: 'Municipal, emergency and departmental fleets.',
    metaTitle: 'Government Fleet Management & Municipal Vehicle Tracking',
    metaDescription:
      'Veyro for government fleets: municipal vehicle tracking, solid-waste collection monitoring, emergency response dispatch and transparent public reporting.',
    h1: 'Accountable, efficient public fleets',
    lead: 'From waste collection to emergency response, Veyro helps public agencies deliver services reliably and account for every vehicle and rupee.',
    challenges: [
      { title: 'Service verification', text: 'Citizens and auditors expect proof that routes were completed.' },
      { title: 'Budget pressure', text: 'Fuel and maintenance budgets are tight and closely scrutinised.' },
      { title: 'Response time', text: 'Emergency services need the nearest unit dispatched instantly.' },
    ],
    capabilities: [
      { title: 'Route completion monitoring', text: 'Verify coverage of collection and patrol routes.', solution: 'gps-fleet-tracking' },
      { title: 'Compliance and audit reporting', text: 'Transparent, scheduled reports for oversight bodies.', solution: 'compliance' },
      { title: 'Fuel accountability', text: 'Reconcile fuel issued against fuel used.', solution: 'fuel-management' },
      { title: 'Dispatch', text: 'Send the nearest available vehicle to incidents.', solution: 'route-optimization' },
    ],
    useCases: ['Solid-waste collection monitoring', 'Ambulance and emergency dispatch', 'Water-tanker delivery tracking', 'Road-maintenance vehicle monitoring', 'Departmental pool-vehicle control'],
    faqs: [
      { q: 'How do governments use vehicle tracking?', a: 'Public agencies use vehicle tracking to verify that services such as waste collection and patrols are completed, dispatch emergency vehicles faster, control fuel and maintenance budgets and report transparently to citizens and auditors.' },
      { q: 'Can data be hosted in a specific country?', a: 'Yes. Veyro supports regional data residency options to meet public-sector hosting requirements.' },
      { q: 'Can contractors’ vehicles be monitored too?', a: 'Yes. Contracted fleets can be added with separate access so agencies can verify service levels across all providers.' },
    ],
  },
  {
    slug: 'utilities',
    name: 'Utilities & Telecom',
    icon: 'bolt',
    short: 'Power, water, gas and network field fleets.',
    metaTitle: 'Utilities & Telecom Fleet Management Software',
    metaDescription:
      'Veyro for utilities and telecom: crew dispatch during outages, specialised vehicle and equipment tracking, lone-worker safety and maintenance planning.',
    h1: 'Keep the lights on and the crews safe',
    lead: 'Utilities run diverse fleets across large territories. Veyro helps you restore service faster, protect crews and keep specialised vehicles available.',
    challenges: [
      { title: 'Outage response', text: 'Finding and directing the right crew quickly is critical.' },
      { title: 'Specialised assets', text: 'Bucket trucks, cranes and generators are scarce and costly.' },
      { title: 'Lone working', text: 'Crews work alone in remote or hazardous locations.' },
    ],
    capabilities: [
      { title: 'Crew location and dispatch', text: 'See all crews and assign the nearest with the right equipment.', solution: 'route-optimization' },
      { title: 'Equipment tracking', text: 'Locate generators, cable drums and trailers.', solution: 'asset-tracking' },
      { title: 'Preventive maintenance', text: 'Keep specialised vehicles ready with usage-based service.', solution: 'predictive-maintenance' },
      { title: 'Driver and worker safety', text: 'Safe-driving scores and SOS alerts.', solution: 'driver-safety' },
    ],
    useCases: ['Storm and outage response', 'Power take-off (PTO) hour tracking', 'Tower and site visit verification', 'Meter-reading route planning', 'Contractor crew oversight'],
    faqs: [
      { q: 'How does telematics help utility fleets?', a: 'It shows where every crew and specialised vehicle is, speeds up outage response, records equipment usage such as PTO hours for maintenance, and protects lone workers with SOS and check-in features.' },
      { q: 'Can Veyro track PTO and auxiliary equipment use?', a: 'Yes. Digital inputs on the tracker record when equipment such as a boom, pump or compressor is operating.' },
      { q: 'Does it integrate with outage or work-management systems?', a: 'Yes. Vehicle locations and statuses can be shared with GIS, outage-management and work-order systems through the API.' },
    ],
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    icon: 'food',
    short: 'Distribution, dairy and temperature-controlled delivery.',
    metaTitle: 'Food & Beverage Distribution Fleet Tracking',
    metaDescription:
      'Veyro for food and beverage distribution: cold chain temperature monitoring, optimised multi-drop routes, on-time delivery and food-safety records.',
    h1: 'Fresh, on time, every time',
    lead: 'Food distribution has no tolerance for delay or temperature abuse. Veyro protects product quality and keeps multi-drop routes running on schedule.',
    challenges: [
      { title: 'Temperature excursions', text: 'One failure can spoil a whole load and a customer relationship.' },
      { title: 'Tight delivery windows', text: 'Retailers and restaurants expect precise arrival times.' },
      { title: 'Food-safety documentation', text: 'Auditors require a continuous record of conditions.' },
    ],
    capabilities: [
      { title: 'Cold chain monitoring', text: 'Real-time temperature, humidity and door events.', solution: 'cold-chain-monitoring' },
      { title: 'Multi-drop route optimisation', text: 'Plan routes around time windows and vehicle capacity.', solution: 'route-optimization' },
      { title: 'Live tracking and proof of delivery', text: 'ETAs, signatures and photos at each drop.', solution: 'gps-fleet-tracking' },
      { title: 'Compliance records', text: 'Automatic logs for food-safety programmes.', solution: 'compliance' },
    ],
    useCases: ['Dairy and frozen distribution', 'Restaurant and retail replenishment', 'Beverage route sales (van sales)', 'Returnable crate and keg tracking', 'Temperature report at delivery'],
    faqs: [
      { q: 'How do food distributors monitor temperature during delivery?', a: 'Wireless sensors in each compartment send readings to the vehicle’s telematics gateway, which reports them with GPS location to the cloud. Alerts are raised if temperatures leave the safe range, and a full record is available for every delivery.' },
      { q: 'Can I prove the temperature at the time of delivery?', a: 'Yes. Veyro records the temperature at each stop and can include it in the proof-of-delivery document shared with the customer.' },
      { q: 'Does it support multi-temperature vehicles?', a: 'Yes. Separate sensors and thresholds can be configured for frozen, chilled and ambient compartments.' },
    ],
  },
  {
    slug: 'security-cash-in-transit',
    name: 'Security & Cash-in-Transit',
    icon: 'lock',
    short: 'Cash vans, patrol vehicles and high-value cargo.',
    metaTitle: 'Cash-in-Transit & Security Vehicle Tracking',
    metaDescription:
      'Veyro for security and cash logistics: high-frequency tracking, route and stop enforcement, door and vault sensors, panic alerts and live video.',
    h1: 'High-security tracking for high-value movements',
    lead: 'When the cargo is cash or valuables, seconds matter. Veyro gives control rooms continuous visibility, tamper detection and instant escalation.',
    challenges: [
      { title: 'Robbery and insider risk', text: 'Predictable routes and unscheduled stops create exposure.' },
      { title: 'Signal jamming and tampering', text: 'Criminals attempt to disable tracking devices.' },
      { title: 'Regulatory and client audit', text: 'Banks and regulators require detailed trip evidence.' },
    ],
    capabilities: [
      { title: 'High-frequency live tracking', text: 'Continuous position with route and stop enforcement.', solution: 'gps-fleet-tracking' },
      { title: 'Live and recorded video', text: 'Cabin, vault and exterior cameras streamed on alert.', solution: 'ai-dash-cams' },
      { title: 'Compliance evidence', text: 'Complete trip, door and crew records for audits.', solution: 'compliance' },
      { title: 'Crew safety', text: 'Panic buttons and driver-behaviour monitoring.', solution: 'driver-safety' },
    ],
    useCases: ['ATM replenishment route control', 'Vault-door and lock monitoring', 'Jamming and tamper detection alerts', 'Patrol verification for guarding', 'Escort vehicle coordination'],
    faqs: [
      { q: 'How are cash-in-transit vehicles tracked?', a: 'Cash vans use high-frequency GPS trackers, often with a hidden backup device, combined with door sensors, panic buttons and cameras. A control room monitors route adherence and receives instant alerts for deviations, unscheduled stops or tampering.' },
      { q: 'What happens if someone jams the GPS signal?', a: 'Veyro devices with jamming detection raise an alert when interference is sensed, and backup devices with independent power and positioning help maintain visibility.' },
      { q: 'Can clients such as banks see trip status?', a: 'Yes. Restricted portals and scheduled reports can give clients visibility of the services performed for them.' },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug)!;
