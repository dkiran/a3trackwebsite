export interface FaqGroup {
  title: string;
  items: { q: string; a: string }[];
}

export const homeFaqs = [
  { q: 'What is Veyro?', a: 'Veyro is an AI-powered GPS telematics and fleet intelligence platform. It combines vehicle trackers, AI dash cams and sensors with cloud software so businesses can see their vehicles and assets in real time, improve driver safety, reduce fuel and maintenance costs and automate compliance.' },
  { q: 'What does a GPS telematics system do?', a: 'A GPS telematics system collects location, movement and engine data from vehicles using an on-board device, sends it over the mobile network to the cloud and presents it as live maps, alerts and reports. Fleet managers use it to dispatch efficiently, cut costs, improve safety and prove service.' },
  { q: 'Which industries use Veyro?', a: 'Veyro serves transportation and logistics, construction, mining, oil and gas, agriculture, public transport, school buses, field services, last-mile delivery, car rental, government, utilities, food and beverage and security fleets.' },
  { q: 'How is AI used in fleet management?', a: 'AI analyses video and sensor data to detect risky driving in real time, predicts mechanical failures from engine data, optimises routes and highlights anomalies such as fuel theft, so managers act on a short list of priorities instead of searching through reports.' },
  { q: 'Can I ask about my fleet on WhatsApp or by phone call?', a: 'Yes. Veyro AI agents are available 24/7 on WhatsApp, on a phone call to our AI call centre, inside ChatGPT through the Veyro integration, and by voice or chat in the app, in English and regional languages. Ask “Where is my vehicle AP09CC2318?” and the agent replies in seconds with the status and a live map. The agents also place automated calls when an alert threshold is crossed and escalate until someone responds.' },
  { q: 'How long does it take to deploy?', a: 'Plug-in trackers can be installed in minutes and are typically visible on the platform the same day. Larger wired or camera deployments are scheduled in phases with certified installers.' },
  { q: 'Does Veyro integrate with other software?', a: 'Yes. Veyro provides an open REST API and webhooks to connect with ERP, transport-management, maintenance, payroll and business-intelligence systems.' },
  { q: 'Can a shipper track trucks from many different GPS providers in one place?', a: 'Yes. Veyro works as a neutral GPS data hub. Each transporter\u2019s GPS provider sends data to Veyro, and a shipper connects once to see the trucks carrying its goods, whichever provider they use. A shipper sees a truck only while it is assigned to its trip, with the transporter\u2019s consent.' },
];

export const faqGroups: FaqGroup[] = [
  { title: 'About Veyro', items: homeFaqs.slice(0, 3) },
  {
    title: 'Product and technology',
    items: [
      homeFaqs[3],
      homeFaqs[4],
      homeFaqs[7],
      { q: 'What hardware do I need?', a: 'At minimum, a GPS tracker in each vehicle. Depending on your goals you can add AI dash cams, fuel-level sensors, temperature sensors, driver ID readers and battery-powered asset trackers. Our team recommends a configuration for each vehicle type.' },
      { q: 'Does Veyro work with electric vehicles?', a: 'Yes. Veyro tracks electric vehicles alongside conventional ones and reports state of charge, range, charging sessions and energy consumption where the vehicle provides the data.' },
      { q: 'Is there a mobile app?', a: 'Yes. Managers get a fleet app for live tracking, alerts and reports. Drivers get a separate app for jobs, navigation, inspections, proof of delivery and their own safety score.' },
      { q: 'What happens to data when a vehicle has no network?', a: 'Devices store data on board and upload it automatically when connectivity returns, so trips, events and sensor readings are not lost.' },
    ],
  },
  {
    title: 'Deployment and support',
    items: [
      homeFaqs[5],
      { q: 'Can I bring my existing GPS devices?', a: 'In many cases, yes. Veyro supports a range of third-party tracker protocols. Share your device models with our team to confirm compatibility.' },
      { q: 'What support is included?', a: 'Every plan includes onboarding, training and access to our support team. Enterprise plans add a dedicated success manager and service-level agreements.' },
      homeFaqs[6],
    ],
  },
  {
    title: 'Pricing, security and privacy',
    items: [
      { q: 'How is Veyro priced?', a: 'Pricing is a per-vehicle or per-asset subscription that depends on the hardware and features you choose and the size of your fleet. Request a quote for pricing tailored to your operation.' },
      { q: 'Who owns the fleet data?', a: 'You do. Your organisation owns its data. Veyro processes it on your behalf, and you can export it at any time.' },
      { q: 'How is data secured?', a: 'Data is encrypted in transit and at rest, access is controlled by roles and single sign-on, and all access is logged. See our security page for details.' },
      { q: 'Is driver privacy protected?', a: 'Yes. Administrators can configure privacy modes, restrict who sees personal data and footage, and set retention periods in line with local law and company policy.' },
    ],
  },
];
