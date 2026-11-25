export interface PlatformPage {
  slug: string; name: string; icon: string; metaTitle: string; metaDescription: string; h1: string; lead: string;
  definition: { q: string; a: string };
  sections: { title: string; intro: string; items: { title: string; text: string }[] }[];
  faqs: { q: string; a: string }[];
}

export const platformPages: PlatformPage[] = [
  {
    slug: 'ai-agent', name: 'AI Agents: WhatsApp, Calls & ChatGPT', icon: 'mic',
    metaTitle: 'AI Fleet Agent on WhatsApp, Phone Call & ChatGPT',
    metaDescription: 'Ask about your fleet on WhatsApp, by phone call, in ChatGPT or in the app. Veyro AI agents answer 24/7 in regional languages and call you on alerts.',
    h1: 'Ask your fleet anything. On WhatsApp, by call or chat.',
    lead: 'The Veyro AI agents know your fleet. Message on WhatsApp, call the AI call centre or ask in the app, in your own language, and get the answer in seconds. They also call you when something needs attention.',
    definition: { q: 'What is an AI fleet agent?', a: 'An AI fleet agent is a conversational assistant connected to a fleet’s live telematics data. Fleet managers, dispatchers and owners ask it questions on WhatsApp, by phone call, or by voice or chat in the app, such as where a vehicle is, which trucks are running late or how much fuel was used last week, and it replies immediately with an answer drawn from real-time and historical fleet data. It can also place automated alert calls when thresholds are crossed and carry out routine tasks on request.' },
    sections: [
      { title: 'Four ways to reach the agent', intro: 'Use whichever suits the moment, or ask from inside ChatGPT. Every channel reaches the same live fleet data.', items: [
        { title: 'WhatsApp text and voice messages', text: 'Type “Where is my vehicle AP09CC2318?” or send a voice message, in English or your own language. The agent replies in the same language, by text or voice message, and shows the vehicle on a live map in the chat. No app to install and no login to remember.' },
        { title: 'Phone call', text: 'Dial the Veyro AI call centre and simply ask. The agent answers by voice with the location, speed, ETA or status of any vehicle you are authorised to see.' },
        { title: 'Voice in the app', text: 'Tap the microphone in the Veyro app and speak. The agent replies aloud and on screen, so you can check on your fleet hands-free.' },
        { title: 'Chat in the app', text: 'Type a question on the web dashboard or mobile app and get a clear written answer with charts, maps and links to the detail.' },
      ] },
      { title: 'ChatGPT integration', intro: 'Already use ChatGPT? Bring your fleet into it. Install once, then ask fleet questions in the same place you ask everything else.', items: [
        { title: 'Install in a minute', text: 'Add the Veyro integration from inside ChatGPT, sign in to your Veyro account and approve what it may read. That is the whole setup.' },
        { title: 'Ask in ChatGPT', text: '“Get me the most fuel consumed vehicle this month.” ChatGPT calls Veyro and replies with your top vehicles, their fuel used, distance, mileage and last refill.' },
        { title: 'Maps, tables and numbers', text: 'Answers come back as a map of the vehicle, a table of trips or a short summary, whichever fits the question.' },
        { title: 'Combine with everything else', text: 'Ask ChatGPT to turn the week’s fleet data into an email to a customer, a summary for your manager or a plan for tomorrow.' },
        { title: 'Your permissions apply', text: 'ChatGPT sees only what your Veyro login is allowed to see, and you can disconnect it at any time.' },
        { title: 'Read-only by default', text: 'The integration reads fleet information. Any action that changes something asks for your confirmation first.' },
      ] },
      { title: 'The agent calls you when it matters', intro: 'Set a threshold once. The AI agent watches around the clock and phones the right person the moment it is crossed.', items: [
        { title: 'Threshold alerts', text: 'Choose what matters: overspeeding, harsh driving, fuel drain, route deviation, temperature out of range, long stoppage, geofence exit or an SOS button.' },
        { title: 'Automated voice calls', text: 'When a threshold is crossed, the agent places a phone call, explains what happened in plain language and answers follow-up questions on the spot.' },
        { title: 'Escalation until answered', text: 'If the first person does not pick up or acknowledge, the agent calls the next contact in your escalation chain: driver, supervisor, fleet manager, owner.' },
        { title: 'WhatsApp and SMS follow-up', text: 'Every alert call is followed by a message with the details and a live map link, so nothing depends on memory.' },
        { title: 'Quiet hours and priorities', text: 'Decide which alerts may call at night and which wait for morning. Critical alerts always get through.' },
        { title: 'Full audit trail', text: 'See who was called, when, who acknowledged and how long it took, for every alert.' },
      ] },
      { title: '24/7, in your language', intro: 'Fleets do not stop at 6 pm, and not everyone prefers English.', items: [
        { title: 'Always available', text: 'The AI agents answer WhatsApp messages and phone calls instantly, day and night, including weekends and holidays.' },
        { title: 'Regional languages', text: 'Speak or type in English or in Indian regional languages such as Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi and Bengali. The agent understands, and replies in the same language, in text and in voice.' },
        { title: 'For owners, managers and drivers', text: 'Owners check on their vehicles, managers get the numbers, and drivers receive calls they can understand.' },
        { title: 'A person when you need one', text: 'Ask for a human at any time and the agent hands the conversation to the Veyro support team with the full context.' },
      ] },
      { title: 'What you can ask', intro: 'If the data is in Veyro, the agent can find it.', items: [
        { title: 'Where is it?', text: '“Where is my vehicle AP09CC2318?” “Which vehicle is closest to the Whitefield warehouse?”' },
        { title: 'Is it on time?', text: '“Which deliveries are running late today?” “What is the ETA for the Chennai consignment?”' },
        { title: 'What did it cost?', text: '“How much fuel did the fleet use last week?” “Which vehicles idled the most this month?”' },
        { title: 'Is it safe?', text: '“Who had the most harsh-braking events yesterday?” “Show me this week’s safety score by depot.”' },
        { title: 'Does it need attention?', text: '“Which vehicles are due for service?” “Are there any open fault codes or expiring documents?”' },
        { title: 'Do it for me', text: '“Send the customer a tracking link.” “Create a service reminder for bus 77.” “Call me if any vehicle leaves the depot after 10 pm.”' },
      ] },
      { title: 'Answers you can rely on', intro: 'Built for decisions, not small talk.', items: [
        { title: 'Grounded in your data', text: 'Answers come from your fleet’s own live and historical records, and each one links to the underlying trips, events or reports.' },
        { title: 'Verified callers only', text: 'The agent recognises registered phone numbers and only shares each user the vehicles and information their role allows.' },
        { title: 'Confirms before acting', text: 'Any action that changes something, such as sending a message or creating a rule, is confirmed with you first.' },
        { title: 'Remembers the conversation', text: 'Ask “and yesterday?” or “show only the Pune depot” without starting again.' },
      ] },
    ],
    faqs: [
      { q: 'Can I check my vehicle on WhatsApp?', a: 'Yes. Send a text or a voice message such as “Where is my vehicle AP09CC2318?” to the Veyro WhatsApp number from your registered phone, in English or a regional language. The AI agent replies in the same language, by text or voice message, with the vehicle’s status, location and a live map.' },
      { q: 'Can I send a voice message instead of typing?', a: 'Yes. Record a voice message on WhatsApp in your own language. The AI agent understands it, replies with a voice message you can listen to, and adds the map or the numbers on screen so you can see the answer as well as hear it.' },
      { q: 'Can I call and talk to the AI agent?', a: 'Yes. Call the Veyro AI call-centre number from your registered phone and ask in your own words. The agent tells you the location, speed, ETA or status of your vehicles, 24 hours a day.' },
      { q: 'Will the AI agent call me when there is an alert?', a: 'Yes. You set thresholds, for example overspeeding, fuel drain or a temperature limit. When one is crossed, the agent places an automated voice call to the responsible person and, if nobody answers or acknowledges, escalates to the next contact in the chain you define.' },
      { q: 'Does Veyro work with ChatGPT?', a: 'Yes. Install the Veyro integration inside ChatGPT, sign in to your Veyro account and ask fleet questions in plain language, for example which vehicles are late, where a vehicle is or how much fuel was used. ChatGPT retrieves the answer from your live Veyro data and shows it in the conversation, including maps and tables.' },
      { q: 'Which languages does the AI agent support?', a: 'The agent works in English and in Indian regional languages such as Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi and Bengali, and replies in the language you use. Ask our team for the current list.' },
      { q: 'What kinds of questions can the AI agent answer?', a: 'Questions about anything recorded in Veyro: live vehicle location and status, trips and ETAs, fuel use and idling, driver safety events and scores, maintenance and fault codes, alerts, geofences and documents.' },
      { q: 'Is it secure? Can anyone ask about my vehicles?', a: 'No. The agent only responds to registered phone numbers and applies the same roles and vehicle permissions as the rest of the platform, so people only hear and see what they are allowed to.' },
    ],
  },
  {
    slug: 'ai-fleet-intelligence', name: 'AI Fleet Intelligence', icon: 'brain',
    metaTitle: 'AI Fleet Intelligence — AI for Fleet Management',
    metaDescription: 'Veyro AI turns fleet data into action: vision AI for driver safety, predictive maintenance, anomaly detection, route optimisation and a natural-language fleet assistant.',
    h1: 'AI that runs alongside your fleet team',
    lead: 'Veyro AI watches every signal from every vehicle, learns what normal looks like and tells your team what needs attention, in plain language.',
    definition: { q: 'What is AI fleet management?', a: 'AI fleet management applies machine learning to the data produced by vehicles, drivers and assets. Computer-vision models detect risky driving from dash cam video, predictive models forecast breakdowns from engine data, optimisation algorithms plan efficient routes and anomaly detection highlights fuel theft or misuse. The goal is to move from reviewing reports to acting on prioritised recommendations.' },
    sections: [
      { title: 'Four kinds of intelligence, one platform', intro: 'Each model is trained for a specific job and shares context with the others.', items: [
        { title: 'Vision AI', text: 'On-device neural networks recognise distraction, drowsiness, phone use, tailgating and lane departure in real time, even offline.' },
        { title: 'Predictive AI', text: 'Time-series models learn each vehicle’s baseline and forecast battery, cooling and engine issues before they cause a breakdown.' },
        { title: 'Optimisation AI', text: 'Solvers plan routes and assignments across thousands of constraints in seconds, and re-plan as conditions change.' },
        { title: 'Anomaly detection', text: 'Unusual fuel drops, off-hours use, route deviations and sensor tampering are flagged automatically.' },
      ] },
      { title: 'Designed to be trusted', intro: 'AI is only useful when people can rely on it.', items: [
        { title: 'Explainable alerts', text: 'Every alert shows the evidence behind it: the clip, the trend line or the rule that fired.' },
        { title: 'Human in the loop', text: 'Managers confirm or dismiss events, and that feedback continuously improves accuracy.' },
        { title: 'Privacy first', text: 'Processing happens on the device wherever possible, and only relevant events leave the vehicle.' },
        { title: 'Fair by design', text: 'Scores are normalised for distance, vehicle type and road conditions so drivers are compared fairly.' },
      ] },
      { title: 'Ask your fleet anything', intro: 'The Veyro assistant answers questions and automates routine work.', items: [
        { title: 'Voice and chat agent', text: 'Speak or type “Which trucks idled most last week?” and the AI agent answers in seconds, with a chart, not a report builder.' },
        { title: 'Daily briefings', text: 'A short morning summary of what changed, what is at risk and what to do first.' },
        { title: 'Automated workflows', text: 'Turn any insight into an action: create a work order, assign coaching or notify a customer.' },
        { title: 'Always improving', text: 'Models are updated over the air, so the system you deploy today gets smarter every year.' },
      ] },
    ],
    faqs: [
      { q: 'Does the AI replace fleet managers?', a: 'No. Veyro AI handles the monitoring and analysis that people do not have time for, and presents prioritised recommendations. Managers stay in control of decisions.' },
      { q: 'Does AI detection work without internet?', a: 'Yes. Safety-critical detection runs on the dash cam itself, so drivers receive alerts in real time even with no network coverage. Events sync to the cloud when connectivity returns.' },
      { q: 'Is our data used to train models for other companies?', a: 'Customer data is handled according to your agreement with Veyro. Identifiable customer data is not shared with other customers. See our privacy and security pages for details.' },
    ],
  },
  {
    slug: 'hardware', name: 'Hardware & Devices', icon: 'chip',
    metaTitle: 'GPS Trackers, AI Dash Cams & Fleet Sensors — Hardware',
    metaDescription: 'Veyro hardware: plug-in and wired GPS trackers, AI dash cams, battery asset trackers, fuel and temperature sensors and driver ID. Rugged, certified, OTA-updatable.',
    h1: 'Hardware engineered for the real world',
    lead: 'Dust, heat, vibration, monsoon and long hours. Veyro devices are built to keep reporting through all of it, and to keep improving with over-the-air updates.',
    definition: { q: 'What hardware does a telematics system need?', a: 'A telematics system needs a GPS tracking device in each vehicle with a mobile data connection. Depending on the goals, it may add AI dash cams for video safety, fuel-level and temperature sensors, driver identification readers, emergency buttons and battery-powered trackers for unpowered assets.' },
    sections: [
      { title: 'Device families', intro: 'A device for every vehicle and asset type.', items: [
        { title: 'Plug-in vehicle trackers', text: 'OBD-II devices that install in seconds and read engine data from cars, vans and light trucks.' },
        { title: 'Wired vehicle gateways', text: 'Tamper-resistant units with CAN bus, digital and analogue inputs, Bluetooth and backup battery for trucks and buses.' },
        { title: 'AI dash cams', text: 'Road-facing and dual-facing cameras with on-device AI, infrared night vision and automatic cloud upload.' },
        { title: 'Asset trackers', text: 'Sealed battery and solar devices for trailers, containers and equipment, with multi-year life.' },
        { title: 'Sensors', text: 'Fuel-level, temperature, humidity, door, load and tyre-pressure sensors, wired or wireless.' },
        { title: 'Accessories', text: 'Driver ID tags, emergency buttons, immobiliser relays, buzzers and in-cab displays.' },
      ] },
      { title: 'Built to last', intro: 'What every Veyro device has in common.', items: [
        { title: 'Multi-constellation positioning', text: 'GPS, GLONASS, Galileo, BeiDou and NavIC support for dependable accuracy.' },
        { title: 'Store and forward', text: 'On-board memory keeps data safe when the network is unavailable.' },
        { title: 'Over-the-air updates', text: 'Firmware and AI models update remotely, with no workshop visit.' },
        { title: 'Secure by default', text: 'Encrypted communication, signed firmware and tamper detection.' },
      ] },
    ],
    faqs: [
      { q: 'Can I use my existing GPS devices with Veyro?', a: 'In many cases, yes. Veyro supports a range of third-party device protocols. Share your device models with our team to confirm compatibility.' },
      { q: 'Who installs the devices?', a: 'Plug-in devices can be self-installed. For wired devices, cameras and sensors, Veyro works with trained installers who can fit vehicles at your depot.' },
      { q: 'Do devices support India’s AIS-140 requirements?', a: 'Veyro works with vehicle location tracking devices built to the AIS-140 standard for vehicles that require them. Ask our team for the current list of supported, certified models.' },
    ],
  },
  {
    slug: 'integrations', name: 'Integrations & API', icon: 'plug',
    metaTitle: 'Fleet Telematics API & Integrations',
    metaDescription: 'Connect Veyro to your ERP, TMS, maintenance, payroll and BI tools with an open REST API, webhooks, data exports and single sign-on.',
    h1: 'Your fleet data, wherever you need it',
    lead: 'Veyro is open by design. Use the REST API, real-time webhooks and ready-made connectors to bring fleet data into the systems that run your business.',
    definition: { q: 'What is a telematics API?', a: 'A telematics API is a programming interface that lets other software read and write fleet data, such as vehicle locations, trips, driver events, fuel readings and diagnostics. It allows telematics to be integrated with ERP, transport-management, maintenance, payroll and analytics systems without manual exports.' },
    sections: [
      { title: 'Ways to connect', intro: 'Choose the method that suits each use case.', items: [
        { title: 'REST API', text: 'Clean, versioned endpoints for vehicles, drivers, trips, events, fuel, diagnostics, video and more.' },
        { title: 'Webhooks', text: 'Receive events such as geofence entry, harsh braking or fault codes the moment they happen.' },
        { title: 'Data streaming and exports', text: 'Scheduled exports and streaming to your data warehouse for BI and data science.' },
        { title: 'Single sign-on', text: 'SAML and OpenID Connect for central identity and access control.' },
                { title: 'ChatGPT integration', text: 'Install Veyro inside ChatGPT and ask fleet questions in plain language, answered from your live data.' },
        { title: 'Developer tools', text: 'Sandbox environment, API keys with scopes, and clear documentation with examples.' },
      ] },
      { title: 'Common integrations', intro: 'The systems fleets most often connect.', items: [
        { title: 'ERP and finance', text: 'Trip costs, fuel and asset data for billing and accounting.' },
        { title: 'Transport and order management', text: 'Orders in, status and proof of delivery out.' },
        { title: 'Maintenance systems', text: 'Odometer, engine hours and fault codes to trigger work orders.' },
        { title: 'HR and payroll', text: 'Driver hours, attendance and incentive data.' },
      ] },
    ],
    faqs: [
      { q: 'Is the API included in my plan?', a: 'API access is available on Veyro plans, with rate limits appropriate to fleet size. Contact our team for details on your plan.' },
      { q: 'Is the API stable over time?', a: 'Yes. The API is versioned, and changes that could break existing integrations are introduced in new versions with advance notice.' },
      { q: 'Can I get my data out if I leave?', a: 'Yes. You own your data and can export it at any time in standard formats.' },
    ],
  },
  {
    slug: 'security', name: 'Security & Privacy', icon: 'lock',
    metaTitle: 'Security & Data Privacy — Enterprise-Grade Fleet Platform',
    metaDescription: 'How Veyro protects fleet data: encryption in transit and at rest, role-based access, SSO, audit logs, secure devices, data residency and privacy controls.',
    h1: 'Security and privacy, built in from the start',
    lead: 'Fleet data describes where your people and assets are. We treat it with the seriousness that deserves, at every layer from device to cloud.',
    definition: { q: 'How is fleet telematics data kept secure?', a: 'Telematics data is protected by encrypting it between the device and the cloud and while stored, restricting access by user role, authenticating users with strong methods such as single sign-on and multi-factor authentication, logging all access and securing devices with signed firmware and tamper detection.' },
    sections: [
      { title: 'Platform security', intro: 'Defence in depth across the stack.', items: [
        { title: 'Encryption everywhere', text: 'TLS for data in transit and strong encryption for data at rest.' },
        { title: 'Access control', text: 'Granular roles, vehicle-group permissions, SSO and multi-factor authentication.' },
        { title: 'Audit trails', text: 'Every login, view, export and configuration change is recorded.' },
        { title: 'Resilient infrastructure', text: 'Redundant cloud hosting, continuous backups and tested disaster recovery.' },
        { title: 'Secure development', text: 'Code review, dependency scanning and regular independent penetration testing.' },
        { title: 'Device security', text: 'Signed firmware, encrypted communication and tamper alerts on every device.' },
      ] },
      { title: 'Privacy by design', intro: 'Tools to meet your obligations to drivers, customers and regulators.', items: [
        { title: 'You own your data', text: 'Veyro processes fleet data on your behalf and only on your instructions.' },
        { title: 'Data minimisation', text: 'Collect only what you need, with configurable retention periods.' },
        { title: 'Driver privacy modes', text: 'Private-trip mode, camera privacy controls and face blurring.' },
        { title: 'Regional data residency', text: 'Options to store data in specific regions to meet local requirements, including India’s data protection law and the EU GDPR.' },
      ] },
    ],
    faqs: [
      { q: 'Who can see our fleet data?', a: 'Only users you authorise. Access is governed by roles and vehicle groups you define, and Veyro staff access is restricted, logged and limited to support purposes.' },
      { q: 'Where is data stored?', a: 'Data is stored in secure cloud data centres. Regional hosting options are available to meet data-residency requirements. Ask our team about the options for your country.' },
      { q: 'How do I report a security concern?', a: 'Email our security team using the address on the contact page. We investigate every report and respond promptly.' },
    ],
  },
];
