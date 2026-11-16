export interface PlatformPage {
  slug: string; name: string; icon: string; metaTitle: string; metaDescription: string; h1: string; lead: string;
  definition: { q: string; a: string };
  sections: { title: string; intro: string; items: { title: string; text: string }[] }[];
  faqs: { q: string; a: string }[];
}

export const platformPages: PlatformPage[] = [
  {
    slug: 'ai-fleet-intelligence', name: 'AI Fleet Intelligence', icon: 'brain',
    metaTitle: 'AI Fleet Intelligence — AI for Fleet Management',
    metaDescription: 'A3Track AI turns fleet data into action: vision AI for driver safety, predictive maintenance, anomaly detection, route optimisation and a natural-language fleet assistant.',
    h1: 'AI that runs alongside your fleet team',
    lead: 'A3Track AI watches every signal from every vehicle, learns what normal looks like and tells your team what needs attention, in plain language.',
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
      { title: 'Ask your fleet anything', intro: 'The A3Track assistant answers questions and automates routine work.', items: [
        { title: 'Natural-language questions', text: '“Which trucks idled most last week?” Get an answer with a chart, not a report builder.' },
        { title: 'Daily briefings', text: 'A short morning summary of what changed, what is at risk and what to do first.' },
        { title: 'Automated workflows', text: 'Turn any insight into an action: create a work order, assign coaching or notify a customer.' },
        { title: 'Always improving', text: 'Models are updated over the air, so the system you deploy today gets smarter every year.' },
      ] },
    ],
    faqs: [
      { q: 'Does the AI replace fleet managers?', a: 'No. A3Track AI handles the monitoring and analysis that people do not have time for, and presents prioritised recommendations. Managers stay in control of decisions.' },
      { q: 'Does AI detection work without internet?', a: 'Yes. Safety-critical detection runs on the dash cam itself, so drivers receive alerts in real time even with no network coverage. Events sync to the cloud when connectivity returns.' },
      { q: 'Is our data used to train models for other companies?', a: 'Customer data is handled according to your agreement with A3Track. Identifiable customer data is not shared with other customers. See our privacy and security pages for details.' },
    ],
  },
  {
    slug: 'hardware', name: 'Hardware & Devices', icon: 'chip',
    metaTitle: 'GPS Trackers, AI Dash Cams & Fleet Sensors — Hardware',
    metaDescription: 'A3Track hardware: plug-in and wired GPS trackers, AI dash cams, battery asset trackers, fuel and temperature sensors and driver ID. Rugged, certified, OTA-updatable.',
    h1: 'Hardware engineered for the real world',
    lead: 'Dust, heat, vibration, monsoon and long hours. A3Track devices are built to keep reporting through all of it, and to keep improving with over-the-air updates.',
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
      { title: 'Built to last', intro: 'What every A3Track device has in common.', items: [
        { title: 'Multi-constellation positioning', text: 'GPS, GLONASS, Galileo, BeiDou and NavIC support for dependable accuracy.' },
        { title: 'Store and forward', text: 'On-board memory keeps data safe when the network is unavailable.' },
        { title: 'Over-the-air updates', text: 'Firmware and AI models update remotely, with no workshop visit.' },
        { title: 'Secure by default', text: 'Encrypted communication, signed firmware and tamper detection.' },
      ] },
    ],
    faqs: [
      { q: 'Can I use my existing GPS devices with A3Track?', a: 'In many cases, yes. A3Track supports a range of third-party device protocols. Share your device models with our team to confirm compatibility.' },
      { q: 'Who installs the devices?', a: 'Plug-in devices can be self-installed. For wired devices, cameras and sensors, A3Track works with trained installers who can fit vehicles at your depot.' },
      { q: 'Do devices support India’s AIS-140 requirements?', a: 'A3Track works with vehicle location tracking devices built to the AIS-140 standard for vehicles that require them. Ask our team for the current list of supported, certified models.' },
    ],
  },
  {
    slug: 'integrations', name: 'Integrations & API', icon: 'plug',
    metaTitle: 'Fleet Telematics API & Integrations',
    metaDescription: 'Connect A3Track to your ERP, TMS, maintenance, payroll and BI tools with an open REST API, webhooks, data exports and single sign-on.',
    h1: 'Your fleet data, wherever you need it',
    lead: 'A3Track is open by design. Use the REST API, real-time webhooks and ready-made connectors to bring fleet data into the systems that run your business.',
    definition: { q: 'What is a telematics API?', a: 'A telematics API is a programming interface that lets other software read and write fleet data, such as vehicle locations, trips, driver events, fuel readings and diagnostics. It allows telematics to be integrated with ERP, transport-management, maintenance, payroll and analytics systems without manual exports.' },
    sections: [
      { title: 'Ways to connect', intro: 'Choose the method that suits each use case.', items: [
        { title: 'REST API', text: 'Clean, versioned endpoints for vehicles, drivers, trips, events, fuel, diagnostics, video and more.' },
        { title: 'Webhooks', text: 'Receive events such as geofence entry, harsh braking or fault codes the moment they happen.' },
        { title: 'Data streaming and exports', text: 'Scheduled exports and streaming to your data warehouse for BI and data science.' },
        { title: 'Single sign-on', text: 'SAML and OpenID Connect for central identity and access control.' },
        { title: 'Embeddable maps and links', text: 'Add live tracking to your customer portal or share secure tracking links.' },
        { title: 'Developer tools', text: 'Sandbox environment, API keys with scopes, and clear documentation with examples.' },
      ] },
      { title: 'Common integrations', intro: 'What customers connect most often.', items: [
        { title: 'ERP and finance', text: 'Trip costs, fuel and asset data for billing and accounting.' },
        { title: 'Transport and order management', text: 'Orders in, status and proof of delivery out.' },
        { title: 'Maintenance systems', text: 'Odometer, engine hours and fault codes to trigger work orders.' },
        { title: 'HR and payroll', text: 'Driver hours, attendance and incentive data.' },
      ] },
    ],
    faqs: [
      { q: 'Is the API included in my plan?', a: 'API access is available on A3Track plans, with rate limits appropriate to fleet size. Contact our team for details on your plan.' },
      { q: 'Is the API stable over time?', a: 'Yes. The API is versioned, and changes that could break existing integrations are introduced in new versions with advance notice.' },
      { q: 'Can I get my data out if I leave?', a: 'Yes. You own your data and can export it at any time in standard formats.' },
    ],
  },
  {
    slug: 'security', name: 'Security & Privacy', icon: 'lock',
    metaTitle: 'Security & Data Privacy — Enterprise-Grade Fleet Platform',
    metaDescription: 'How A3Track protects fleet data: encryption in transit and at rest, role-based access, SSO, audit logs, secure devices, data residency and privacy controls.',
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
        { title: 'You own your data', text: 'A3Track processes fleet data on your behalf and only on your instructions.' },
        { title: 'Data minimisation', text: 'Collect only what you need, with configurable retention periods.' },
        { title: 'Driver privacy modes', text: 'Private-trip mode, camera privacy controls and face blurring.' },
        { title: 'Regional data residency', text: 'Options to store data in specific regions to meet local requirements, including India’s data protection law and the EU GDPR.' },
      ] },
    ],
    faqs: [
      { q: 'Who can see our fleet data?', a: 'Only users you authorise. Access is governed by roles and vehicle groups you define, and A3Track staff access is restricted, logged and limited to support purposes.' },
      { q: 'Where is data stored?', a: 'Data is stored in secure cloud data centres. Regional hosting options are available to meet data-residency requirements. Ask our team about the options for your country.' },
      { q: 'How do I report a security concern?', a: 'Email our security team using the address on the contact page. We investigate every report and respond promptly.' },
    ],
  },
];
