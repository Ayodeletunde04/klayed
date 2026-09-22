/**
 * Klayed WhatsApp Merchant Broadcast Portal - Core JavaScript Application
 * Matched 1:1 with Cardon Layout
 */

// Initial Seed Data for Campaigns
const INITIAL_CAMPAIGNS = [
  {
    id: 'camp-1',
    date: '07 Jun 2026 | 3:58 PM',
    title: 'New Year Promo 2026',
    name: 'New Year Promo 2026',
    recipients: 6135,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.92',
    grossCost: '₦30,184.20',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-2',
    date: '08 Jun 2026 | 8:58 AM',
    title: 'Black Friday Deals',
    name: 'Black Friday Deals',
    recipients: 7237,
    status: 'Scheduled',
    source: 'CSV',
    unitCost: '₦4.66',
    grossCost: '₦33,724.42',
    createdBy: 'Chinaza Okonkwo',
    category: 'Flash Sale'
  },
  {
    id: 'camp-3',
    date: '09 Jun 2026 | 3:50 PM',
    title: 'Customer Appreciation Week',
    name: 'Customer Appreciation Week',
    recipients: 1148,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦5.26',
    grossCost: '₦6,038.48',
    createdBy: 'Fatima Ibrahim',
    category: 'Loyalty'
  },
  {
    id: 'camp-4',
    date: '10 Jun 2026 | 5:34 PM',
    title: 'Flash Sale Alert - Electronics',
    name: 'Flash Sale Alert - Electronics',
    recipients: 8230,
    status: 'Failed',
    source: 'Manual',
    unitCost: '₦4.47',
    grossCost: '₦36,788.10',
    createdBy: 'Emeka Nwosu',
    category: 'Urgent Alert'
  },
  {
    id: 'camp-5',
    date: '11 Jun 2026 | 8:47 AM',
    title: 'Monthly Newsletter - January',
    name: 'Monthly Newsletter - January',
    recipients: 4885,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.82',
    grossCost: '₦23,545.70',
    createdBy: 'Temitope Adeyemi',
    category: 'Newsletter'
  },
  {
    id: 'camp-6',
    date: '12 Jun 2026 | 7:16 AM',
    title: 'Valentine Special Offers',
    name: 'Valentine Special Offers',
    recipients: 5114,
    status: 'Partial',
    source: 'CSV',
    unitCost: '₦3.92',
    grossCost: '₦20,046.88',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Seasonal'
  },
  {
    id: 'camp-7',
    date: '13 Jun 2026 | 2:04 PM',
    title: 'End of Year Clearance',
    name: 'End of Year Clearance',
    recipients: 5432,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.01',
    grossCost: '₦21,782.32',
    createdBy: 'Chinaza Okonkwo',
    category: 'Promotions'
  },
  {
    id: 'camp-8',
    date: '14 Jun 2026 | 5:58 PM',
    title: 'Christmas Greetings Campaign',
    name: 'Christmas Greetings Campaign',
    recipients: 2073,
    status: 'Sent',
    source: 'Mixed',
    unitCost: '₦4.00',
    grossCost: '₦8,292.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Greetings'
  },
  {
    id: 'camp-9',
    date: '15 Jun 2026 | 6:07 AM',
    title: 'Product Launch - Series X',
    name: 'Product Launch - Series X',
    recipients: 6653,
    status: 'Scheduled',
    source: 'Manual',
    unitCost: '₦4.80',
    grossCost: '₦31,934.40',
    createdBy: 'Emeka Nwosu',
    category: 'Promotions'
  },
  {
    id: 'camp-10',
    date: '16 Jun 2026 | 11:20 AM',
    title: 'Mid-Season Super Sale',
    name: 'Mid-Season Super Sale',
    recipients: 5420,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.50',
    grossCost: '₦24,390.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-11',
    date: '17 Jun 2026 | 4:15 PM',
    title: 'WhatsApp VIP Circle Exclusive',
    name: 'WhatsApp VIP Circle Exclusive',
    recipients: 3100,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.95',
    grossCost: '₦15,345.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Loyalty'
  },
  {
    id: 'camp-12',
    date: '18 Jun 2026 | 9:30 AM',
    title: 'Weekend Flash Deals - Fashion',
    name: 'Weekend Flash Deals - Fashion',
    recipients: 7850,
    status: 'Partial',
    source: 'Manual',
    unitCost: '₦4.40',
    grossCost: '₦34,540.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Flash Sale'
  },
  {
    id: 'camp-13',
    date: '19 Jun 2026 | 2:45 PM',
    title: 'Independence Day Mega Blast',
    name: 'Independence Day Mega Blast',
    recipients: 9200,
    status: 'Scheduled',
    source: 'Group',
    unitCost: '₦4.15',
    grossCost: '₦38,180.00',
    createdBy: 'Emeka Nwosu',
    category: 'Seasonal'
  },
  {
    id: 'camp-14',
    date: '20 Jun 2026 | 8:10 AM',
    title: 'Workers Day Customer Bonus',
    name: 'Workers Day Customer Bonus',
    recipients: 4300,
    status: 'Sent',
    source: 'Mixed',
    unitCost: '₦4.75',
    grossCost: '₦20,425.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Promotions'
  },
  {
    id: 'camp-15',
    date: '21 Jun 2026 | 1:25 PM',
    title: 'Back to School Stationery Bundle',
    name: 'Back to School Stationery Bundle',
    recipients: 6410,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.60',
    grossCost: '₦29,486.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Seasonal'
  },
  {
    id: 'camp-16',
    date: '22 Jun 2026 | 10:40 AM',
    title: 'Cyber Week Gadget Frenzy',
    name: 'Cyber Week Gadget Frenzy',
    recipients: 8900,
    status: 'Scheduled',
    source: 'CSV',
    unitCost: '₦4.35',
    grossCost: '₦38,715.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Flash Sale'
  },
  {
    id: 'camp-17',
    date: '23 Jun 2026 | 3:55 PM',
    title: 'Tech Tuesday Early Bird Alert',
    name: 'Tech Tuesday Early Bird Alert',
    recipients: 2450,
    status: 'Failed',
    source: 'Manual',
    unitCost: '₦5.10',
    grossCost: '₦12,495.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Urgent Alert'
  },
  {
    id: 'camp-18',
    date: '24 Jun 2026 | 9:05 AM',
    title: 'Weekend Shopping Spree Discount',
    name: 'Weekend Shopping Spree Discount',
    recipients: 5800,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.25',
    grossCost: '₦24,650.00',
    createdBy: 'Emeka Nwosu',
    category: 'Promotions'
  },
  {
    id: 'camp-19',
    date: '25 Jun 2026 | 4:30 PM',
    title: 'VIP Private Sale - Gold Tier',
    name: 'VIP Private Sale - Gold Tier',
    recipients: 1890,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦5.30',
    grossCost: '₦10,017.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Loyalty'
  },
  {
    id: 'camp-20',
    date: '26 Jun 2026 | 8:50 AM',
    title: 'Mid-Month Payday Discount Wave',
    name: 'Mid-Month Payday Discount Wave',
    recipients: 6720,
    status: 'Partial',
    source: 'Mixed',
    unitCost: '₦4.45',
    grossCost: '₦29,904.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-21',
    date: '27 Jun 2026 | 2:15 PM',
    title: 'Loyalty Points Expiry Reminder',
    name: 'Loyalty Points Expiry Reminder',
    recipients: 4120,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.80',
    grossCost: '₦19,776.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Loyalty'
  },
  {
    id: 'camp-22',
    date: '28 Jun 2026 | 11:00 AM',
    title: 'Spring Collection Lookbook Drop',
    name: 'Spring Collection Lookbook Drop',
    recipients: 5310,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.55',
    grossCost: '₦24,160.50',
    createdBy: 'Fatima Ibrahim',
    category: 'Newsletter'
  },
  {
    id: 'camp-23',
    date: '29 Jun 2026 | 3:20 PM',
    title: 'Autumn Flash Clearance Sale',
    name: 'Autumn Flash Clearance Sale',
    recipients: 7150,
    status: 'Scheduled',
    source: 'Manual',
    unitCost: '₦4.30',
    grossCost: '₦30,745.00',
    createdBy: 'Emeka Nwosu',
    category: 'Flash Sale'
  },
  {
    id: 'camp-24',
    date: '30 Jun 2026 | 7:45 AM',
    title: 'Anniversary Special Mega Giveaway',
    name: 'Anniversary Special Mega Giveaway',
    recipients: 10450,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦3.95',
    grossCost: '₦41,277.50',
    createdBy: 'Temitope Adeyemi',
    category: 'Promotions'
  },
  {
    id: 'camp-25',
    date: '01 Jul 2026 | 12:30 PM',
    title: 'App Exclusive Flash Voucher #4',
    name: 'App Exclusive Flash Voucher #4',
    recipients: 3200,
    status: 'Sent',
    source: 'Mixed',
    unitCost: '₦4.90',
    grossCost: '₦15,680.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-26',
    date: '02 Jul 2026 | 9:15 AM',
    title: 'New Arrival Sneakerheads Alert',
    name: 'New Arrival Sneakerheads Alert',
    recipients: 4890,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.70',
    grossCost: '₦22,983.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Promotions'
  },
  {
    id: 'camp-27',
    date: '03 Jul 2026 | 4:05 PM',
    title: 'Summer Solstice Savings Bash',
    name: 'Summer Solstice Savings Bash',
    recipients: 6540,
    status: 'Scheduled',
    source: 'CSV',
    unitCost: '₦4.45',
    grossCost: '₦29,103.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Seasonal'
  },
  {
    id: 'camp-28',
    date: '04 Jul 2026 | 10:50 AM',
    title: 'Mid-Year Inventory Reset Drive',
    name: 'Mid-Year Inventory Reset Drive',
    recipients: 8100,
    status: 'Failed',
    source: 'Manual',
    unitCost: '₦4.20',
    grossCost: '₦34,020.00',
    createdBy: 'Emeka Nwosu',
    category: 'Flash Sale'
  },
  {
    id: 'camp-29',
    date: '05 Jul 2026 | 2:40 PM',
    title: 'Smart Home Appliances Promo',
    name: 'Smart Home Appliances Promo',
    recipients: 3750,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦5.05',
    grossCost: '₦18,937.50',
    createdBy: 'Temitope Adeyemi',
    category: 'Promotions'
  },
  {
    id: 'camp-30',
    date: '06 Jul 2026 | 8:25 AM',
    title: 'Beauty & Skincare Weekend Offer',
    name: 'Beauty & Skincare Weekend Offer',
    recipients: 6280,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.50',
    grossCost: '₦28,260.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-31',
    date: '07 Jul 2026 | 1:10 PM',
    title: 'Books & Best-Sellers Summer List',
    name: 'Books & Best-Sellers Summer List',
    recipients: 2950,
    status: 'Partial',
    source: 'Group',
    unitCost: '₦4.85',
    grossCost: '₦14,307.50',
    createdBy: 'Chinaza Okonkwo',
    category: 'Newsletter'
  },
  {
    id: 'camp-32',
    date: '08 Jul 2026 | 5:35 PM',
    title: 'Fitness Wear & Supplements Deal',
    name: 'Fitness Wear & Supplements Deal',
    recipients: 5120,
    status: 'Sent',
    source: 'Manual',
    unitCost: '₦4.65',
    grossCost: '₦23,808.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Promotions'
  },
  {
    id: 'camp-33',
    date: '09 Jul 2026 | 9:45 AM',
    title: 'Automotive Accessories Flash Drop',
    name: 'Automotive Accessories Flash Drop',
    recipients: 4400,
    status: 'Scheduled',
    source: 'Mixed',
    unitCost: '₦4.75',
    grossCost: '₦20,900.00',
    createdBy: 'Emeka Nwosu',
    category: 'Flash Sale'
  },
  {
    id: 'camp-34',
    date: '10 Jul 2026 | 3:15 PM',
    title: 'Mobile Chargers & Audio Bonanza',
    name: 'Mobile Chargers & Audio Bonanza',
    recipients: 8350,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.10',
    grossCost: '₦34,235.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Promotions'
  },
  {
    id: 'camp-35',
    date: '11 Jul 2026 | 11:55 AM',
    title: 'Smart Watches & Bands Pre-Order',
    name: 'Smart Watches & Bands Pre-Order',
    recipients: 6940,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.35',
    grossCost: '₦30,189.00',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-36',
    date: '12 Jul 2026 | 4:20 PM',
    title: 'Next-Gen Gaming Weekend Sale',
    name: 'Next-Gen Gaming Weekend Sale',
    recipients: 7600,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.25',
    grossCost: '₦32,300.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Flash Sale'
  },
  {
    id: 'camp-37',
    date: '13 Jul 2026 | 8:30 AM',
    title: 'Corporate Bulk Stationery Order',
    name: 'Corporate Bulk Stationery Order',
    recipients: 3880,
    status: 'Scheduled',
    source: 'CSV',
    unitCost: '₦4.95',
    grossCost: '₦19,206.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Corporate'
  },
  {
    id: 'camp-38',
    date: '14 Jul 2026 | 2:05 PM',
    title: 'Kitchen & Chef Essentials Promo',
    name: 'Kitchen & Chef Essentials Promo',
    recipients: 5240,
    status: 'Sent',
    source: 'Manual',
    unitCost: '₦4.60',
    grossCost: '₦24,104.00',
    createdBy: 'Emeka Nwosu',
    category: 'Promotions'
  },
  {
    id: 'camp-39',
    date: '15 Jul 2026 | 10:15 AM',
    title: 'Infant & Kids Apparel Clearance',
    name: 'Infant & Kids Apparel Clearance',
    recipients: 4680,
    status: 'Partial',
    source: 'Group',
    unitCost: '₦4.70',
    grossCost: '₦21,996.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Seasonal'
  },
  {
    id: 'camp-40',
    date: '16 Jul 2026 | 3:45 PM',
    title: 'Luggage & Travel Backpack Deal',
    name: 'Luggage & Travel Backpack Deal',
    recipients: 3410,
    status: 'Sent',
    source: 'Mixed',
    unitCost: '₦5.15',
    grossCost: '₦17,561.50',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Promotions'
  },
  {
    id: 'camp-41',
    date: '17 Jul 2026 | 9:00 AM',
    title: 'Jewelry & Watches Gala Discount',
    name: 'Jewelry & Watches Gala Discount',
    recipients: 2150,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦5.40',
    grossCost: '₦11,610.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Loyalty'
  },
  {
    id: 'camp-42',
    date: '18 Jul 2026 | 1:50 PM',
    title: 'Sportswear & Training Shoes Drop',
    name: 'Sportswear & Training Shoes Drop',
    recipients: 7920,
    status: 'Scheduled',
    source: 'Group',
    unitCost: '₦4.30',
    grossCost: '₦34,056.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Promotions'
  },
  {
    id: 'camp-43',
    date: '19 Jul 2026 | 5:10 PM',
    title: 'Headphones & Speakers Festival',
    name: 'Headphones & Speakers Festival',
    recipients: 6180,
    status: 'Sent',
    source: 'Manual',
    unitCost: '₦4.55',
    grossCost: '₦28,119.00',
    createdBy: 'Emeka Nwosu',
    category: 'Promotions'
  },
  {
    id: 'camp-44',
    date: '20 Jul 2026 | 11:25 AM',
    title: 'Outdoor Camping & Gear Promo',
    name: 'Outdoor Camping & Gear Promo',
    recipients: 2840,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦5.00',
    grossCost: '₦14,200.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Seasonal'
  },
  {
    id: 'camp-45',
    date: '21 Jul 2026 | 4:35 PM',
    title: 'Health & Wellness Awareness Wave',
    name: 'Health & Wellness Awareness Wave',
    recipients: 8470,
    status: 'Failed',
    source: 'CSV',
    unitCost: '₦4.15',
    grossCost: '₦35,150.50',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Urgent Alert'
  },
  {
    id: 'camp-46',
    date: '22 Jul 2026 | 8:40 AM',
    title: 'Organic Pantry Essentials Sale',
    name: 'Organic Pantry Essentials Sale',
    recipients: 4920,
    status: 'Sent',
    source: 'Mixed',
    unitCost: '₦4.65',
    grossCost: '₦22,878.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Promotions'
  },
  {
    id: 'camp-47',
    date: '23 Jul 2026 | 2:20 PM',
    title: 'Pet Care & Supplies Flash Offer',
    name: 'Pet Care & Supplies Flash Offer',
    recipients: 3670,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.85',
    grossCost: '₦17,799.50',
    createdBy: 'Fatima Ibrahim',
    category: 'Flash Sale'
  },
  {
    id: 'camp-48',
    date: '24 Jul 2026 | 10:05 AM',
    title: 'Gourmet Hamper Weekend Promo',
    name: 'Gourmet Hamper Weekend Promo',
    recipients: 2290,
    status: 'Scheduled',
    source: 'Manual',
    unitCost: '₦5.20',
    grossCost: '₦11,908.00',
    createdBy: 'Emeka Nwosu',
    category: 'Seasonal'
  },
  {
    id: 'camp-49',
    date: '25 Jul 2026 | 3:30 PM',
    title: 'Holiday Flight & Hotel Packages',
    name: 'Holiday Flight & Hotel Packages',
    recipients: 5740,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.40',
    grossCost: '₦25,256.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Promotions'
  },
  {
    id: 'camp-50',
    date: '26 Jul 2026 | 7:55 AM',
    title: 'Cyber Monday Countdown Deals',
    name: 'Cyber Monday Countdown Deals',
    recipients: 9110,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.05',
    grossCost: '₦36,895.50',
    createdBy: 'Adebayo Ogunlesi',
    category: 'Flash Sale'
  },
  {
    id: 'camp-51',
    date: '27 Jul 2026 | 1:40 PM',
    title: 'Midnight Flash Express Delivery',
    name: 'Midnight Flash Express Delivery',
    recipients: 4380,
    status: 'Partial',
    source: 'Mixed',
    unitCost: '₦4.80',
    grossCost: '₦21,024.00',
    createdBy: 'Chinaza Okonkwo',
    category: 'Urgent Alert'
  },
  {
    id: 'camp-52',
    date: '28 Jul 2026 | 6:15 PM',
    title: 'Golden Hour Sunset Discount',
    name: 'Golden Hour Sunset Discount',
    recipients: 3560,
    status: 'Sent',
    source: 'CSV',
    unitCost: '₦4.90',
    grossCost: '₦17,444.00',
    createdBy: 'Fatima Ibrahim',
    category: 'Promotions'
  },
  {
    id: 'camp-53',
    date: '29 Jul 2026 | 9:20 AM',
    title: 'VIP Black Card Private Wave',
    name: 'VIP Black Card Private Wave',
    recipients: 1980,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦5.50',
    grossCost: '₦10,890.00',
    createdBy: 'Emeka Nwosu',
    category: 'Loyalty'
  },
  {
    id: 'camp-54',
    date: '30 Jul 2026 | 4:10 PM',
    title: 'Final Clearance Warehouse Sale',
    name: 'Final Clearance Warehouse Sale',
    recipients: 8650,
    status: 'Scheduled',
    source: 'Manual',
    unitCost: '₦4.20',
    grossCost: '₦36,330.00',
    createdBy: 'Temitope Adeyemi',
    category: 'Flash Sale'
  },
  {
    id: 'camp-55',
    date: '31 Jul 2026 | 11:00 AM',
    title: 'New Season Kickoff Announcement',
    name: 'New Season Kickoff Announcement',
    recipients: 6890,
    status: 'Sent',
    source: 'Group',
    unitCost: '₦4.45',
    grossCost: '₦30,660.50',
    category: 'Newsletter'
  }
];

// Expand INITIAL_CAMPAIGNS to exactly 200 campaigns (10 pages x 20 campaigns per page)
const CAMPAIGN_EXTRA_THEMES = [
  'Mega Flash Sale', 'Weekend Special Discount', 'VIP Member Bonus Wave', 'Payday Treat Promo',
  'Super Saver Clearance', 'Loyalty Rewards Boost', 'Festive Offer Announcement', 'Seasonal Stock Drop',
  'Exclusive WhatsApp Voucher', 'Limited Quantity Rush', 'Pre-Order Notification', 'Customer Week Appreciation',
  'Back to School Bonanza', 'Independence Day Special', 'New Arrival Showcase', 'Mid-Month Deals Blitz'
];
const CAMPAIGN_CREATORS = ['Adebayo Ogunlesi', 'Chinaza Okonkwo', 'Fatima Ibrahim', 'Emeka Nwosu', 'Temitope Adeyemi', 'Kelechi Amadi'];
const CAMPAIGN_STATUSES = ['Sent', 'Sent', 'Sent', 'Scheduled', 'Failed', 'Partial'];
const CAMPAIGN_SOURCES = ['Group', 'CSV', 'Manual', 'Mixed'];

for (let i = INITIAL_CAMPAIGNS.length + 1; i <= 200; i++) {
  const theme = CAMPAIGN_EXTRA_THEMES[(i - 1) % CAMPAIGN_EXTRA_THEMES.length];
  const creator = CAMPAIGN_CREATORS[(i - 1) % CAMPAIGN_CREATORS.length];
  const status = CAMPAIGN_STATUSES[(i - 1) % CAMPAIGN_STATUSES.length];
  const source = CAMPAIGN_SOURCES[(i - 1) % CAMPAIGN_SOURCES.length];
  const recipients = 1000 + ((i * 387) % 8500);
  const unitCostNum = 3.90 + ((i * 13) % 150) / 100;
  const grossCostNum = recipients * unitCostNum;
  
  const day = ((i * 3) % 28) + 1;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[(Math.floor(i / 18)) % 12];
  const hour = ((i * 7) % 12) + 1;
  const minute = (i * 11) % 60;
  const ampm = (i % 2 === 0) ? 'AM' : 'PM';
  const dateStr = `${day < 10 ? '0' + day : day} ${month} 2026 | ${hour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;

  INITIAL_CAMPAIGNS.push({
    id: `camp-${i}`,
    date: dateStr,
    title: `${theme} #${i}`,
    name: `${theme} #${i}`,
    recipients: recipients,
    status: status,
    source: source,
    unitCost: `₦${unitCostNum.toFixed(2)}`,
    grossCost: `₦${grossCostNum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    createdBy: creator,
    category: 'Promotions'
  });
}

// App State
const state = {
  walletBalance: 148500.00,
  campaignsSent: 48,
  recipientsReached: 12450,
  deliverySuccessRate: 98.4,
  campaigns: [...INITIAL_CAMPAIGNS],
  currentView: 'dashboard',
  searchQuery: '',
  deliverySplit: {
    delivered: 11740,
    pending: 411,
    failed: 199,
    total: 12350
  },
  activeFilter: 'all',
  selectedCampaign: null
};

// Campaign Performance Chart Data (Aug 12 - Sep 8)
const CHART_DATES = ['Aug 12', 'Aug 15', 'Aug 18', 'Aug 21', 'Aug 24', 'Aug 27', 'Aug 30', 'Sep 2', 'Sep 5', 'Sep 8'];
const CHART_WEEKS = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5'];
const SENT_DATA = [1800, 2600, 2400, 3800, 4600];
const DELIVERED_DATA = [1600, 1900, 2100, 3100, 4400];

let redrawChart = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const safeInit = (fn, name) => {
    try { if (typeof fn === 'function') fn(); } catch (err) { console.error(`Error in ${name}:`, err); }
  };
  safeInit(initTheme, 'initTheme');
  safeInit(initUserPopover, 'initUserPopover');
  safeInit(renderCampaignsTable, 'renderCampaignsTable');
  safeInit(initLineChart, 'initLineChart');
  safeInit(initChartLegendDock, 'initChartLegendDock');
  safeInit(initDonutChart, 'initDonutChart');
  safeInit(initNavigation, 'initNavigation');
  safeInit(initModals, 'initModals');
  safeInit(initCreateCampaignModal, 'initCreateCampaignModal');
  safeInit(initDateFilterModal, 'initDateFilterModal');
  safeInit(initCustomerGroups, 'initCustomerGroups');
  safeInit(initCreateGroupModal, 'initCreateGroupModal');
  safeInit(initBroadcastMessaging, 'initBroadcastMessaging');
  safeInit(initCampaignDetailsPage, 'initCampaignDetailsPage');
  safeInit(initWalletsPage, 'initWalletsPage');
  safeInit(initSidebarToggle, 'initSidebarToggle');
  safeInit(initSearch, 'initSearch');
  safeInit(initReportsPage, 'initReportsPage');
  safeInit(initTeamMembers, 'initTeamMembers');
  safeInit(initSettingsPage, 'initSettingsPage');
});

// ==========================================================================
// Theme Management (Instant, Zero-Flicker Synchronized Engine)
// ==========================================================================
function applyTheme(isDark) {
  // 1. Temporarily disable CSS transitions across DOM to prevent staggered color flashes
  const lockStyle = document.createElement('style');
  lockStyle.id = 'theme-transition-lock';
  lockStyle.appendChild(
    document.createTextNode(
      `*, *::before, *::after {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }
      .ios-slider, .ios-slider::before {
        -webkit-transition: transform 0.2s ease, background-color 0.2s ease !important;
        transition: transform 0.2s ease, background-color 0.2s ease !important;
      }`
    )
  );
  document.head.appendChild(lockStyle);

  // 2. Synchronously apply theme classes atomically
  if (isDark) {
    document.documentElement.classList.add('dark-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('klayed_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('klayed_theme', 'light');
  }

  // 3. Update top nav toggle switch
  const topToggle = document.getElementById('dark-mode-toggle');
  if (topToggle) topToggle.checked = isDark;

  // 4. Update segmented popover buttons
  const popoverLightBtn = document.getElementById('btn-popover-theme-light');
  const popoverDarkBtn = document.getElementById('btn-popover-theme-dark');
  if (popoverLightBtn && popoverDarkBtn) {
    if (isDark) {
      popoverDarkBtn.classList.add('active');
      popoverLightBtn.classList.remove('active');
    } else {
      popoverLightBtn.classList.add('active');
      popoverDarkBtn.classList.remove('active');
    }
  }

  // 5. Redraw charts synchronously to match new theme
  if (typeof redrawChart === 'function') redrawChart();
  if (typeof initDonutChart === 'function') initDonutChart();
  if (typeof redrawDeliveryWaveChart === 'function') redrawDeliveryWaveChart();
  if (typeof updateReportsCharts === 'function') updateReportsCharts();

  // 6. Force reflow to commit layout/colors synchronously
  void document.body.offsetHeight;

  // 7. Restore transitions on next frame cleanly
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const lock = document.getElementById('theme-transition-lock');
      if (lock) lock.remove();
    });
  });
}

function initTheme() {
  const toggle = document.getElementById('dark-mode-toggle');
  const urlParams = new URLSearchParams(window.location.search);
  const savedTheme = urlParams.get('theme') || localStorage.getItem('klayed_theme');
  const isDark = savedTheme === 'dark';

  if (isDark) {
    document.documentElement.classList.add('dark-theme');
    document.body.classList.add('dark-theme');
    if (toggle) toggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.body.classList.remove('dark-theme');
    if (toggle) toggle.checked = false;
  }

  // Sync popover buttons on load
  const popoverLightBtn = document.getElementById('btn-popover-theme-light');
  const popoverDarkBtn = document.getElementById('btn-popover-theme-dark');
  if (popoverLightBtn && popoverDarkBtn) {
    if (isDark) {
      popoverDarkBtn.classList.add('active');
      popoverLightBtn.classList.remove('active');
    } else {
      popoverLightBtn.classList.add('active');
      popoverDarkBtn.classList.remove('active');
    }
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      applyTheme(toggle.checked);
    });
  }
}

// ==========================================================================
// Sidebar User Popover Menu (Settings & Logout matching reference)
// ==========================================================================
function initUserPopover() {
  const userCardBtn = document.getElementById('btn-sidebar-user');
  const popover = document.getElementById('user-popover');
  const closeBtn = document.getElementById('btn-close-user-popover');
  const profileItem = document.getElementById('popover-item-profile');
  const logoutItem = document.getElementById('popover-item-logout');
  const lightBtn = document.getElementById('btn-popover-theme-light');
  const darkBtn = document.getElementById('btn-popover-theme-dark');
  const headerAvatarBtn = document.getElementById('btn-quick-settings');

  if (!userCardBtn || !popover) return;

  const togglePopover = (e) => {
    e?.stopPropagation();
    popover.classList.toggle('open');
  };

  const closePopover = () => {
    popover.classList.remove('open');
  };

  userCardBtn.addEventListener('click', togglePopover);
  if (headerAvatarBtn) {
    headerAvatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePopover();
      const settingsLink = document.querySelector('.nav-link[data-view="settings"]');
      if (settingsLink) {
        settingsLink.click();
      }
      showToast('Navigating to Settings');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePopover();
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !userCardBtn.contains(e.target) && (!headerAvatarBtn || !headerAvatarBtn.contains(e.target))) {
      closePopover();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopover();
  });

  // Profile click
  if (profileItem) {
    profileItem.addEventListener('click', () => {
      closePopover();
      const settingsLink = document.querySelector('.nav-link[data-view="settings"]');
      if (settingsLink) settingsLink.click();
      showToast('Navigating to Profile & Settings');
    });
  }

  // Segmented Theme buttons
  if (lightBtn) {
    lightBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTheme(false);
    });
  }

  if (darkBtn) {
    darkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTheme(true);
    });
  }

  // Logout click - transitions directly to Klayed Login Screen
  if (logoutItem) {
    logoutItem.addEventListener('click', () => {
      closePopover();
      showToast('Logged out of merchant portal. Goodbye!');
      setTimeout(() => {
        if (typeof window.openAuthScreen === 'function') {
          window.openAuthScreen('login');
        }
      }, 150);
    });
  }

  // Deep-link testing for user popover
  const params = new URLSearchParams(window.location.search);
  if (params.get('popover') === 'user') {
    popover.classList.add('open');
  }
}

// ==========================================================================
// Global Search Filter
// ==========================================================================
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCampaignsTable();
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  const dashSearch = document.getElementById('dashboard-campaign-search');
  if (dashSearch) {
    dashSearch.addEventListener('input', () => {
      renderCampaignsTable();
    });
  }

  const dashStatus = document.getElementById('dashboard-campaign-status');
  if (dashStatus) {
    dashStatus.addEventListener('change', () => {
      renderCampaignsTable();
    });
  }

  const dashDate = document.getElementById('dashboard-campaign-date');
  if (dashDate) {
    dashDate.addEventListener('change', () => {
      renderCampaignsTable();
    });
  }
}

// ==========================================================================
// Campaigns Table Pagination System (Pixel-Perfect Match with Reference Image)
// ==========================================================================
const broadcastPaginationState = {
  currentPage: 1,
  totalPages: 10,
  pageSize: 20
};

function renderPaginationControls(groupContainerId, infoContainerId, paginationState, onPageChange) {
  const group = document.getElementById(groupContainerId);
  const info = document.getElementById(infoContainerId);
  if (!group) return;

  const { currentPage, totalPages } = paginationState;

  if (info) {
    info.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  let pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages = [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  }

  let html = `
    <button type="button" class="pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}" 
            data-action="prev" aria-label="Previous page" ${currentPage === 1 ? 'disabled' : ''}>
      <svg class="pagination-chevron" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Previous</span>
    </button>
  `;

  pages.forEach(p => {
    if (p === '...') {
      html += `<span class="pagination-btn pagination-ellipsis" aria-hidden="true">...</span>`;
    } else {
      const isActive = p === currentPage;
      html += `
        <button type="button" class="pagination-btn pagination-num ${isActive ? 'active' : ''}" 
                data-page="${p}" aria-label="Page ${p}" ${isActive ? 'aria-current="page"' : ''}>
          ${p}
        </button>
      `;
    }
  });

  html += `
    <button type="button" class="pagination-btn pagination-next ${currentPage === totalPages ? 'disabled' : ''}" 
            data-action="next" aria-label="Next page" ${currentPage === totalPages ? 'disabled' : ''}>
      <span>Next</span>
      <svg class="pagination-chevron" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;

  group.innerHTML = html;

  group.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.classList.contains('disabled') || btn.classList.contains('pagination-ellipsis')) return;

      const action = btn.dataset.action;
      const page = btn.dataset.page;

      if (action === 'prev' && currentPage > 1) {
        onPageChange(currentPage - 1);
      } else if (action === 'next' && currentPage < totalPages) {
        onPageChange(currentPage + 1);
      } else if (page) {
        const pageNum = parseInt(page, 10);
        if (!isNaN(pageNum) && pageNum !== currentPage) {
          onPageChange(pageNum);
        }
      }
    });
  });
}

// ==========================================================================
// Campaigns Table Rendering (Dashboard View - Clean unpaginated list)
// ==========================================================================
function renderCampaignsTable() {
  const tbody = document.getElementById('campaigns-table-body');
  if (!tbody) return;

  const searchInput = document.getElementById('dashboard-campaign-search');
  const statusFilter = document.getElementById('dashboard-campaign-status');
  const dateFilter = document.getElementById('dashboard-campaign-date');

  const query = (searchInput ? searchInput.value : (state.searchQuery || '')).toLowerCase().trim();
  const statusVal = statusFilter ? statusFilter.value : 'all';
  const dateVal = dateFilter ? dateFilter.value : 'all';

  const filtered = state.campaigns.filter(c => {
    const campTitle = c.title || c.name || '';
    const campStatus = c.status || '';
    const campDate = c.date || '';
    const campCreator = c.createdBy || '';
    const campSource = c.source || '';

    const matchesQuery = !query ||
      campTitle.toLowerCase().includes(query) ||
      campStatus.toLowerCase().includes(query) ||
      campDate.toLowerCase().includes(query) ||
      campCreator.toLowerCase().includes(query) ||
      campSource.toLowerCase().includes(query);

    const matchesStatus = statusVal === 'all' || campStatus.toLowerCase() === statusVal.toLowerCase();

    let matchesDate = true;
    if (dateVal === 'today') {
      matchesDate = campDate.includes('11 Sept 2026') || campDate.includes('Today');
    } else if (dateVal === '7days') {
      matchesDate = campDate.includes('Sept 2026') || campDate.includes('Jun 2026');
    } else if (dateVal === 'month') {
      matchesDate = campDate.includes('Sept 2026');
    }

    return matchesQuery && matchesStatus && matchesDate;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <i class="hgi-stroke hgi-search-01" style="font-size: 24px; opacity: 0.5; display: block; margin-bottom: 8px;"></i>
          <span style="font-size: 14px; font-weight: 500;">No campaigns found matching your criteria.</span>
        </td>
      </tr>
    `;
    return;
  }

  // Display 14 recent campaigns matching reference image
  const itemsToDisplay = (query || statusVal !== 'all' || dateVal !== 'all') ? filtered : filtered.slice(0, 14);

  tbody.innerHTML = itemsToDisplay.map((camp) => {
    const statusClass = (camp.status || 'sent').toLowerCase();
    const sourceClass = (camp.source || 'csv').toLowerCase();

    let statusIconHtml = '';
    if (statusClass === 'sent') {
      statusIconHtml = `
        <span class="status-icon-box sent">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'scheduled') {
      statusIconHtml = `
        <svg class="status-icon-triangle" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7.134 2.5a1 1 0 011.732 0l5.196 9a1 1 0 01-.866 1.5H2.804a1 1 0 01-.866-1.5l5.196-9z" fill="#d97706"/>
          <path d="M8 6.2v2.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="8" cy="10.8" r="0.75" fill="#ffffff"/>
        </svg>
      `;
    } else if (statusClass === 'failed') {
      statusIconHtml = `
        <span class="status-icon-box failed">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M2 2L8 8M8 2L2 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'partial') {
      statusIconHtml = `
        <span class="status-icon-box" style="background-color: #ea580c;">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M2 5.5L4 7.5L8 2.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;
    }

    const recVal = typeof camp.recipients === 'number' ? camp.recipients.toLocaleString() : camp.recipients;
    const campTitle = camp.title || camp.name || 'Untitled Campaign';
    const unitCost = camp.unitCost || '₦4.92';
    const grossCost = camp.grossCost || '₦0.00';
    const createdBy = camp.createdBy || 'Adebayo Ogunlesi';

    return `
      <tr>
        <td class="b-date-cell" style="text-align: left;">${camp.date}</td>
        <td class="b-campaign-name" style="text-align: left; cursor: pointer;" onclick="showCampaignDetailsView('${escapeHtml(campTitle).replace(/'/g, "\\'")}')">${escapeHtml(campTitle)}</td>
        <td style="text-align: left;">
          <span class="b-status-pill ${statusClass}">
            ${statusIconHtml}
            <span>${camp.status}</span>
          </span>
        </td>
        <td style="text-align: left;">
          <span class="b-source-pill ${sourceClass}">${camp.source || 'CSV'}</span>
        </td>
        <td style="text-align: left;">${recVal}</td>
        <td style="text-align: left;">${unitCost}</td>
        <td style="text-align: left;" class="b-cost-gross">${grossCost}</td>
        <td class="b-creator-name" style="text-align: left;">${escapeHtml(createdBy)}</td>
        <td style="text-align: left;">
          <button class="b-action-btn" title="View Details" onclick="showCampaignDetailsView('${escapeHtml(campTitle).replace(/'/g, "\\'")}')">
            <svg class="b-action-eye-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>View Details</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Action Menu Popup
window.openActionMenu = function(event, campId) {
  event.stopPropagation();
  const camp = state.campaigns.find(c => c.id === campId);
  if (!camp) return;

  const existing = document.getElementById('camp-action-dropdown');
  if (existing) existing.remove();

  const rect = event.target.getBoundingClientRect();
  const dropdown = document.createElement('div');
  dropdown.id = 'camp-action-dropdown';
  dropdown.style.position = 'fixed';
  dropdown.style.top = `${rect.bottom + 4}px`;
  dropdown.style.left = `${rect.left - 130}px`;
  dropdown.style.background = 'var(--bg-surface)';
  dropdown.style.border = '1px solid var(--border-color)';
  dropdown.style.borderRadius = '12px';
  dropdown.style.boxShadow = 'var(--shadow-floating)';
  dropdown.style.zIndex = '999';
  dropdown.style.width = '160px';
  dropdown.style.overflow = 'hidden';
  dropdown.style.fontSize = '12.5px';
  dropdown.style.fontWeight = '500';

  const campTitle = camp.title || camp.name;

  dropdown.innerHTML = `
    <div style="padding: 10px 14px; cursor: pointer; color: var(--text-main); display: flex; align-items: center; gap: 8px;" onclick="showCampaignDetailsView('${escapeHtml(campTitle).replace(/'/g, "\\'")}'); document.getElementById('camp-action-dropdown')?.remove();">
      <i class="hgi-stroke hgi-view" style="font-size: 15px;"></i>
      <span>View Details</span>
    </div>
    <div style="padding: 10px 14px; cursor: pointer; border-top: 1px solid var(--border-light); color: var(--text-main);" onclick="duplicateCampaign('${camp.id}')">Duplicate Campaign</div>
    <div style="padding: 10px 14px; cursor: pointer; border-top: 1px solid var(--border-light); color: var(--accent-coral);" onclick="deleteCampaign('${camp.id}')">Delete</div>
  `;

  document.body.appendChild(dropdown);

  const closeDropdown = (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.remove();
      document.removeEventListener('click', closeDropdown);
    }
  };
  setTimeout(() => document.addEventListener('click', closeDropdown), 50);
};

window.viewCampaignDetails = function(id) {
  const camp = state.campaigns.find(c => c.id === id);
  if (camp) {
    showCampaignDetailsView(camp.title || camp.name);
  }
};

window.duplicateCampaign = function(id) {
  const camp = state.campaigns.find(c => c.id === id);
  if (camp) {
    const dup = {
      id: 'camp-' + Date.now(),
      date: 'Just now',
      title: `${camp.title} (Copy)`,
      recipients: camp.recipients,
      status: 'Scheduled',
      category: camp.category
    };
    state.campaigns.unshift(dup);
    renderCampaignsTable();
    showToast(`Duplicated "${camp.title}".`);
  }
};

window.deleteCampaign = function(id) {
  state.campaigns = state.campaigns.filter(c => c.id !== id);
  renderCampaignsTable();
  showToast(`Campaign removed.`);
};

// ==========================================================================
// ==========================================================================
// Campaign Performance Console Chart with Dockable Legend
// ==========================================================================
function initLineChart() {
  const canvas = document.getElementById('campaignPerformanceChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    drawChart();
  }

  window.addEventListener('resize', resizeCanvas);

  function drawChart(hoverIndex = -1) {
    const isDark = document.body.classList.contains('dark-theme');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const padding = {
      top: 14 * dpr,
      right: 12 * dpr,
      bottom: 24 * dpr,
      left: 32 * dpr
    };

    const plotW = w - padding.left - padding.right;
    const plotH = h - padding.top - padding.bottom;
    const maxVal = 80000;

    // Draw horizontal dashed grid lines & Y-axis labels
    const ySteps = [0, 20000, 40000, 60000, 80000];
    ctx.lineWidth = 1 * dpr;
    ctx.font = `${10 * dpr}px 'Work Sans', -apple-system, sans-serif`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    ctx.setLineDash([3 * dpr, 3 * dpr]);
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : '#e5e7eb';
    ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';

    ySteps.forEach(step => {
      const y = padding.top + plotH - (step / maxVal) * plotH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      const label = step === 0 ? '0' : (step / 1000) + 'K';
      ctx.fillText(label, padding.left - 5 * dpr, y);
    });

    // Vertical dashed lines for each date
    const xStep = plotW / (CHART_DATES.length - 1);
    const dateFontSize = (plotW < 340 ? 8.5 : 10) * dpr;

    CHART_DATES.forEach((dt, i) => {
      const x = padding.left + i * xStep;
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + plotH);
      ctx.stroke();

      // Date labels below grid
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.font = `${dateFontSize}px 'Work Sans', -apple-system, sans-serif`;
      ctx.fillText(dt, x, h - padding.bottom + 6 * dpr);
    });

    ctx.setLineDash([]);

    // Draw The Column Bar on Sep 8
    const lastIndex = CHART_DATES.length - 1;
    const barX = padding.left + lastIndex * xStep;
    const barWidth = 13 * dpr;
    const totalVal = 64250;
    const barH = (totalVal / maxVal) * plotH;
    const barTop = padding.top + plotH - barH;
    const barLeft = barX - barWidth / 2;
    const radius = 3 * dpr;

    // Helper: Rounded top rect
    ctx.fillStyle = '#8ea1b6';
    ctx.beginPath();
    ctx.moveTo(barLeft, barTop + barH);
    ctx.lineTo(barLeft, barTop + radius);
    ctx.quadraticCurveTo(barLeft, barTop, barLeft + radius, barTop);
    ctx.lineTo(barLeft + barWidth - radius, barTop);
    ctx.quadraticCurveTo(barLeft + barWidth, barTop, barLeft + barWidth, barTop + radius);
    ctx.lineTo(barLeft + barWidth, barTop + barH);
    ctx.closePath();
    ctx.fill();

    // Subtle highlight on hover
    if (hoverIndex === lastIndex) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fill();
    }

    // Hover Guide Line
    if (hoverIndex >= 0 && hoverIndex < CHART_DATES.length) {
      const hx = padding.left + hoverIndex * xStep;
      ctx.beginPath();
      ctx.setLineDash([2 * dpr, 2 * dpr]);
      ctx.strokeStyle = isDark ? '#9ca3af' : '#64748b';
      ctx.lineWidth = 1.2 * dpr;
      ctx.moveTo(hx, padding.top);
      ctx.lineTo(hx, padding.top + plotH);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  redrawChart = drawChart;

  const tooltip = document.getElementById('chart-tooltip');

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * dpr;
    const paddingLeft = 42 * dpr;
    const paddingRight = 20 * dpr;
    const plotW = canvas.width - paddingLeft - paddingRight;
    const xStep = plotW / (CHART_DATES.length - 1);

    const rawIndex = Math.round((mouseX - paddingLeft) / xStep);
    if (rawIndex >= 0 && rawIndex < CHART_DATES.length) {
      drawChart(rawIndex);

      if (tooltip) {
        const dt = CHART_DATES[rawIndex];
        const isHero = rawIndex === CHART_DATES.length - 1;
        const sent = isHero ? '64,250' : '0';
        const deliv = isHero ? '61,480' : '0';
        const rate = isHero ? '95.7%' : '0%';

        tooltip.innerHTML = `
          <div style="font-weight:700;margin-bottom:6px;font-size:12.5px;">${dt}, 2026</div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:4px;">
            <span style="display:flex;align-items:center;gap:6px;">
              <span style="width:8px;height:8px;border-radius:50%;background:#8ea1b6;"></span>
              <span>Sent</span>
            </span>
            <strong>${sent}</strong>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:4px;">
            <span style="display:flex;align-items:center;gap:6px;">
              <span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></span>
              <span>Delivered</span>
            </span>
            <strong>${deliv}</strong>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:4px;border-top:1px solid rgba(255,255,255,0.1);font-size:11.5px;color:#9ca3af;">
            <span>Delivery Rate</span>
            <span style="color:#10b981;font-weight:600;">${rate}</span>
          </div>
        `;
        tooltip.style.display = 'block';

        if (rawIndex >= CHART_DATES.length - 3) {
          tooltip.style.left = 'auto';
          tooltip.style.right = '20px';
        } else {
          const tooltipX = (paddingLeft + rawIndex * xStep) / dpr;
          tooltip.style.left = `${tooltipX}px`;
          tooltip.style.right = 'auto';
        }
        tooltip.style.top = `${rect.height * 0.16}px`;
      }
    }
  });

  canvas.addEventListener('mouseleave', () => {
    drawChart(-1);
    if (tooltip) tooltip.style.display = 'none';
  });

  setTimeout(resizeCanvas, 40);
}

function initChartLegendDock() {
  const chartBox = document.getElementById('campaign-chart-box');
  const btnDockSide = document.getElementById('btn-dock-side');
  const btnDockBottom = document.getElementById('btn-dock-bottom');
  if (!chartBox) return;

  const urlParams = new URLSearchParams(window.location.search);
  const savedDock = urlParams.get('dock') || localStorage.getItem('klayed_chart_legend_dock');
  if (savedDock === 'side') {
    chartBox.classList.add('side-docked');
  }

  function setDock(mode) {
    if (mode === 'side') {
      chartBox.classList.add('side-docked');
      localStorage.setItem('klayed_chart_legend_dock', 'side');
    } else {
      chartBox.classList.remove('side-docked');
      localStorage.setItem('klayed_chart_legend_dock', 'bottom');
    }
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 40);
  }

  if (btnDockSide) {
    btnDockSide.addEventListener('click', (e) => {
      e.stopPropagation();
      setDock('side');
    });
  }
  if (btnDockBottom) {
    btnDockBottom.addEventListener('click', (e) => {
      e.stopPropagation();
      setDock('bottom');
    });
  }
}

// ==========================================================================
// ==========================================================================
// Delivery Overview Segmented Donut Chart
// ==========================================================================
function initDonutChart() {
  const container = document.getElementById('donut-chart-svg');
  if (!container) return;

  const size = 210;
  const center = 105;
  const radius = 76;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;
  const gap = 4.5;

  // Exact segmented style matching Image 1:
  // 1. Deep Navy Blue (#10359c): ~60.12% (Delivered)
  // 2. Slate Blue (#4361ee): ~14.50% (Pending)
  // 3. Brick Red (#9e4747): ~9.10% (Failed)
  // 4. Moss Green (#387a5c): ~16.28% (Read)
  const segments = [
    { pct: 0.6012, color: '#10359c' },
    { pct: 0.1450, color: '#4361ee' },
    { pct: 0.0910, color: '#9e4747' },
    { pct: 0.1628, color: '#387a5c' }
  ];

  let currentRot = -90;
  let circlesSvg = '';

  segments.forEach(seg => {
    const length = Math.max(0, (seg.pct * circumference) - gap);
    circlesSvg += `
      <circle
        cx="${center}" cy="${center}" r="${radius}"
        fill="transparent"
        stroke="${seg.color}"
        stroke-width="${strokeWidth}"
        stroke-dasharray="${length} ${circumference}"
        transform="rotate(${currentRot} ${center} ${center})"
        stroke-linecap="butt"
      />
    `;
    currentRot += seg.pct * 360;
  });

  container.innerHTML = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display: block; overflow: visible;">
      ${circlesSvg}
    </svg>
  `;
}

// ==========================================================================
// Sidebar Navigation
// ==========================================================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  const mainDashboard = document.getElementById('dashboard-view');
  const secondarySections = document.querySelectorAll('.secondary-view-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-view');
      if (!targetView) return;

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      state.currentView = targetView;

      if (targetView === 'dashboard') {
        mainDashboard.style.display = 'flex';
        secondarySections.forEach(s => s.classList.remove('active-view'));
      } else {
        mainDashboard.style.display = 'none';
        secondarySections.forEach(s => s.classList.remove('active-view'));
        const targetSection = document.getElementById(`view-${targetView}`);
        if (targetSection) {
          targetSection.classList.add('active-view');
        }
        if (targetView === 'reports') {
          setTimeout(() => {
            if (typeof updateReportsCharts === 'function') updateReportsCharts();
          }, 50);
        }
        if (targetView === 'settings') {
          if (typeof renderWhatsAppNumbersList === 'function') renderWhatsAppNumbersList();
        }
      }
    });
  });

  // Deep-link view query parameter support (e.g. ?view=messaging or ?view=customer-group-details)
  const urlParams = new URLSearchParams(window.location.search);
  const themeParam = urlParams.get('theme');
  if (themeParam === 'dark') {
    if (typeof applyTheme === 'function') applyTheme(true);
  } else if (themeParam === 'light') {
    if (typeof applyTheme === 'function') applyTheme(false);
  }

  const requestedView = urlParams.get('view');
  if (requestedView === 'customer-group-details') {
    const groupId = urlParams.get('group') || 'grp-1';
    showCustomerGroupDetails(groupId);
  } else if (requestedView) {
    const targetLink = document.querySelector(`.nav-link[data-view="${requestedView}"]`);
    if (targetLink) {
      navLinks.forEach(l => l.classList.remove('active'));
      targetLink.classList.add('active');
    }
    state.currentView = requestedView;
    if (requestedView === 'dashboard') {
      mainDashboard.style.display = 'flex';
      secondarySections.forEach(s => s.classList.remove('active-view'));
    } else {
      mainDashboard.style.display = 'none';
      secondarySections.forEach(s => s.classList.remove('active-view'));
      const targetSection = document.getElementById(`view-${requestedView}`);
      if (targetSection) {
        targetSection.classList.add('active-view');
      }
      if (requestedView === 'reports') {
        setTimeout(() => {
          if (typeof updateReportsCharts === 'function') updateReportsCharts();
        }, 50);
      }
    }
  }

  if (urlParams.get('openCgMenu') === 'true') {
    setTimeout(() => {
      const menuBtn = document.querySelector('.cg-action-dots-btn');
      if (menuBtn) menuBtn.click();
    }, 200);
  }

  if (urlParams.get('openFundModal') === 'true') {
    setTimeout(() => {
      openModal('modal-fund-wallet');
    }, 200);
  }

  if (urlParams.get('openFundSuccess') === 'true') {
    setTimeout(() => {
      if (window.openFundSuccessModal) window.openFundSuccessModal(50000);
      else openModal('modal-fund-success');
    }, 200);
  }

  if (urlParams.get('openFundFailed') === 'true') {
    setTimeout(() => {
      if (window.openFundFailedModal) window.openFundFailedModal();
      else openModal('modal-fund-failed');
    }, 200);
  }
}

// Sidebar collapse & mobile drawer toggle
function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const appContainer = document.querySelector('.app-container');
  const backdrop = document.getElementById('sidebar-backdrop');
  const navLinks = document.querySelectorAll('.sidebar .nav-link');

  function isMobile() {
    return window.innerWidth <= 992;
  }

  window.toggleMobileSidebar = function(force) {
    if (!appContainer) return;
    const shouldOpen = typeof force === 'boolean' ? force : !appContainer.classList.contains('mobile-sidebar-open');
    if (shouldOpen) {
      appContainer.classList.add('mobile-sidebar-open');
    } else {
      appContainer.classList.remove('mobile-sidebar-open');
    }
  };

  if (toggleBtn && appContainer) {
    if (new URLSearchParams(window.location.search).has('collapsed') && !isMobile()) {
      appContainer.classList.add('sidebar-collapsed');
    }

    toggleBtn.addEventListener('click', () => {
      if (isMobile()) {
        window.toggleMobileSidebar();
      } else {
        appContainer.classList.toggle('sidebar-collapsed');
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 230);
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      window.toggleMobileSidebar(false);
    });
  }

  // Close sidebar on mobile when any navigation item is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMobile()) {
        window.toggleMobileSidebar(false);
      }
    });
  });

  // Reset mobile drawer on desktop resize
  window.addEventListener('resize', () => {
    if (!isMobile() && appContainer && appContainer.classList.contains('mobile-sidebar-open')) {
      appContainer.classList.remove('mobile-sidebar-open');
    }
  });
}

// ==========================================================================
// Modals & User Actions
// ==========================================================================
function initModals() {
  // 1. Create Campaign handled by initCreateCampaignModal()

  // 2. Create Group handled by initCreateGroupModal()

  // 3. Fund Wallet (Handled comprehensively in initWalletsPage)
  // Global backdrop click to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        if (overlay.id === 'modal-create-group') {
          overlay.classList.remove('is-success-modal');
          const p1 = document.getElementById('group-step-1');
          const p2 = document.getElementById('group-step-2');
          const p3 = document.getElementById('group-step-3');
          const f1 = document.getElementById('footer-step-1');
          const f2 = document.getElementById('footer-step-2');
          if (p1) p1.style.display = 'block';
          if (p2) p2.style.display = 'none';
          if (p3) p3.style.display = 'none';
          if (f1) f1.style.display = 'flex';
          if (f2) f2.style.display = 'none';
        }
      }
    });
  });

  // Global Escape key to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => {
        m.classList.remove('open');
        if (m.id === 'modal-create-group') {
          m.classList.remove('is-success-modal');
        }
      });
    }
  });

  // Notification item click feedback
  document.querySelectorAll('.notif-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('.notif-item-title')?.textContent || 'Notification';
      showToast(`Viewed: ${title}`);
    });
  });
}

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    if (modalId === 'modal-notifications') {
      const dot = document.querySelector('.notif-badge-dot');
      if (dot) dot.style.display = 'none';
    }
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--brand-green); font-weight: bold; font-size: 14px;">✓</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}

// Utility: HTML escape
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==========================================================================
// Date Filter Dropdown Modal (7day, 30days, 1 month, custom)
// ==========================================================================
function initDateFilterModal() {
  const wrapper = document.getElementById('date-filter-wrapper');
  const triggerBtn = document.getElementById('btn-date-filter');
  const dropdown = document.getElementById('date-dropdown-modal');
  const activeLabel = document.getElementById('date-filter-active-label');
  const items = document.querySelectorAll('.date-dropdown-item:not(.date-item-custom)');
  const customTrigger = document.getElementById('date-item-custom-trigger');
  const customPanel = document.getElementById('date-custom-panel');
  const applyCustomBtn = document.getElementById('btn-apply-custom-date');
  const fromInput = document.getElementById('date-range-from');
  const toInput = document.getElementById('date-range-to');

  if (!triggerBtn || !dropdown) return;

  // Set default dates for custom inputs
  const today = new Date();
  const prior = new Date();
  prior.setDate(today.getDate() - 7);
  if (toInput && !toInput.value) toInput.value = today.toISOString().split('T')[0];
  if (fromInput && !fromInput.value) fromInput.value = prior.toISOString().split('T')[0];

  function openDropdown() {
    dropdown.classList.add('open');
    if (wrapper) wrapper.classList.add('open');
    triggerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    if (wrapper) wrapper.classList.remove('open');
    triggerBtn.setAttribute('aria-expanded', 'false');
    if (customPanel) customPanel.classList.remove('open');
  }

  function toggleDropdown(e) {
    e.stopPropagation();
    if (dropdown.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  triggerBtn.addEventListener('click', toggleDropdown);

  // Preset options: 7 Days, 30 Days, 1 Month
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const label = item.getAttribute('data-label') || item.innerText.trim();

      // Update active class
      document.querySelectorAll('.date-dropdown-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      // Update button label
      if (activeLabel) activeLabel.textContent = label;

      closeDropdown();
      showToast(`Filtering for ${label}`);
    });
  });

  // Custom date trigger: reveals date inputs
  if (customTrigger) {
    customTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (customPanel) {
        customPanel.classList.toggle('open');
      }
    });
  }

  // Apply custom date range
  if (applyCustomBtn) {
    applyCustomBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const fromVal = fromInput ? fromInput.value : '';
      const toVal = toInput ? toInput.value : '';

      document.querySelectorAll('.date-dropdown-item').forEach(el => el.classList.remove('active'));
      if (customTrigger) customTrigger.classList.add('active');

      let displayLabel = 'Custom';
      if (fromVal && toVal) {
        const fDate = new Date(fromVal);
        const tDate = new Date(toVal);
        const fStr = fDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const tStr = tDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        displayLabel = `${fStr} - ${tStr}`;
      }

      if (activeLabel) activeLabel.textContent = displayLabel;
      closeDropdown();
      showToast(`Filtering for Custom (${displayLabel})`);
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (dropdown.classList.contains('open') && !dropdown.contains(e.target) && !triggerBtn.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('open')) {
      closeDropdown();
    }
  });
}

// ==========================================================================
// Customer Groups Management & State
// ==========================================================================
let customerGroups = [
  {
    id: 'grp-1',
    name: 'VIP Customers',
    desc: 'High-value customers with 3+ purchases in the last 6 months.',
    shortDesc: 'High-value customers with 3+ purchases in the last 6 months.',
    membersCount: 1250,
    created: '12 Jun 2026 | 2:00 PM',
    lastUpdated: '07 Sept 2026 | 2:00 PM'
  },
  {
    id: 'grp-2',
    name: 'Active Subscribers',
    desc: 'Customers subscribed to the weekly newsletter and promo updates.',
    shortDesc: 'Customers subscribed to the weekly newsle...',
    membersCount: 3410,
    created: '30 May 2026 | 9:12 AM',
    lastUpdated: '12 Aug 2026 | 9:12 AM'
  },
  {
    id: 'grp-3',
    name: 'Lapsed Users (30d)',
    desc: 'Users who have not engaged with any campaign in the last 30 days.',
    shortDesc: 'Users who have not engaged with any camp...',
    membersCount: 870,
    created: '14 Jun 2026 | 9:12 AM',
    lastUpdated: '06 Aug 2026 | 9:12 AM'
  },
  {
    id: 'grp-4',
    name: 'Black Friday Leads',
    desc: 'Prospects captured during the Black Friday early access campaign.',
    shortDesc: 'Prospects captured during the Black Friday ...',
    membersCount: 5210,
    created: '22 Jun 2026 | 9:12 AM',
    lastUpdated: '30 Jul 2026 | 9:12 AM'
  },
  {
    id: 'grp-5',
    name: 'Loyalty Program Members',
    desc: 'Enrolled in the Herlabytes Loyalty Rewards tier program.',
    shortDesc: 'Enrolled in the Herlabytes Loyalty Rewards ...',
    membersCount: 930,
    created: '29 Jun 2026 | 9:12 AM',
    lastUpdated: '11 Aug 2026 | 9:12 AM'
  },
  {
    id: 'grp-6',
    name: 'New Onboarding – Q3',
    desc: 'Customers onboarded during Q3 2026.',
    shortDesc: 'Customers onboarded during Q3 2026.',
    membersCount: 640,
    created: '14 Jul 2026 | 9:12 AM',
    lastUpdated: '08 Aug 2026 | 9:12 AM'
  },
  {
    id: 'grp-7',
    name: 'Product Beta Testers',
    desc: '',
    shortDesc: '',
    membersCount: 120,
    created: '22 Jul 2026 | 9:12 AM',
    lastUpdated: '12 Aug 2026 | 9:12 AM'
  },
  {
    id: 'grp-8',
    name: 'Referral Campaign Leads',
    desc: 'Leads acquired through the referral promo incentive campaign.',
    shortDesc: 'Leads acquired through the referral promo i...',
    membersCount: 2100,
    created: '29 Jul 2026 | 9:12 AM',
    lastUpdated: '13 Aug 2026 | 9:12 AM'
  }
];

function renderCustomerGroups(filterQuery = '') {
  const tbody = document.getElementById('customer-groups-tbody');
  if (!tbody) return;

  const query = (filterQuery || '').toLowerCase().trim();
  const filtered = customerGroups.filter(g => 
    (g.name && g.name.toLowerCase().includes(query)) || 
    (g.desc && g.desc.toLowerCase().includes(query)) ||
    (g.shortDesc && g.shortDesc.toLowerCase().includes(query))
  );

  // Update Summary Metrics & Toolbar Counts (Preserving 4 Cards from Image 3)
  const statGroups = document.getElementById('stat-total-groups');
  const statContacts = document.getElementById('stat-total-contacts');
  const statActive = document.getElementById('stat-active-segments');
  const countDisplay = document.getElementById('groups-count-display');

  if (statGroups) statGroups.textContent = '4';
  if (statContacts) statContacts.textContent = '18,420';
  if (statActive) statActive.textContent = '4';
  if (countDisplay) countDisplay.textContent = `${filtered.length} groups`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <p style="font-size: 14.5px; font-weight: 600; color: var(--text-main); margin-bottom: 4px;">No customer groups found</p>
          <p style="font-size: 13px;">Try adjusting your search query or click "+ Create Group".</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(g => {
    const members = g.membersCount || g.contactsCount || 0;
    const descText = g.shortDesc || g.desc || '';
    return `
      <tr class="cg-row" data-id="${g.id}">
        <td class="cg-name-cell" onclick="showCustomerGroupDetails('${g.id}')" style="cursor: pointer;">
          <div class="cg-name-wrap">
            <div class="cg-avatar-box">
              <i class="hgi-stroke hgi-user-multiple"></i>
            </div>
            <div class="cg-name-meta">
              <div class="cg-group-title">${escapeHtml(g.name)}</div>
              ${descText ? `<div class="cg-group-desc" title="${escapeHtml(g.desc || '')}">${escapeHtml(descText)}</div>` : ''}
            </div>
          </div>
        </td>
        <td class="cg-members-cell" onclick="showCustomerGroupDetails('${g.id}')" style="cursor: pointer;">
          <span class="cg-members-pill">${members.toLocaleString()} contacts</span>
        </td>
        <td class="cg-date-cell">${escapeHtml(g.created || '')}</td>
        <td class="cg-date-cell">${escapeHtml(g.lastUpdated || '')}</td>
        <td class="cg-actions-cell">
          <div class="cg-action-dropdown-wrap">
            <button type="button" class="cg-action-dots-btn" title="Actions" onclick="toggleCgMenu(event, '${g.id}')">
              •••
            </button>
            <div class="cg-menu-popover" id="cg-menu-${g.id}">
              <button type="button" class="cg-menu-item" onclick="showCustomerGroupDetails('${g.id}')">
                <i class="hgi-stroke hgi-view" style="font-size: 15px;"></i>
                <span>View Details</span>
              </button>
              <div class="cg-menu-divider"></div>
              <button type="button" class="cg-menu-item danger" onclick="deleteCustomerGroup('${g.id}')">
                <i class="hgi-stroke hgi-delete-02" style="font-size: 15px;"></i>
                <span>Delete Group</span>
              </button>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  renderPaginationControls('cg-pagination-group', null, { currentPage: 1, totalPages: 1 }, () => {});
}

window.toggleCgMenu = function(e, groupId) {
  e.stopPropagation();
  const allMenus = document.querySelectorAll('.cg-menu-popover');
  allMenus.forEach(m => {
    if (m.id !== `cg-menu-${groupId}`) m.classList.remove('show');
  });
  const menu = document.getElementById(`cg-menu-${groupId}`);
  if (menu) {
    menu.classList.toggle('show');
  }
};

document.addEventListener('click', () => {
  document.querySelectorAll('.cg-menu-popover.show').forEach(m => m.classList.remove('show'));
});

window.openBroadcastForGroup = function(groupName) {
  openModal('modal-create-campaign');
  const titleInput = document.getElementById('camp-input-title');
  if (titleInput) titleInput.value = `Broadcast to ${groupName}`;
  showToast(`Starting campaign for "${groupName}"`);
};

// ==========================================================================
// Customer Group Details & Members Management (Matching Image 2)
// ==========================================================================
let currentViewingGroupId = 'grp-1';

const cgdPaginationState = {
  currentPage: 1,
  pageSize: 20
};

// Initial realistic members data matching User Reference Image 2 for VIP Customers
const groupMembersData = {
  'grp-1': [
    { phone: '+2349017695450', addedOn: '08 Jun 2026 | 2:00 PM' },
    { phone: '+2348055515078', addedOn: '08 Jun 2026 | 2:00 PM' },
    { phone: '+2349034931443', addedOn: '08 Jun 2026 | 2:00 PM' },
    { phone: '+2348137737286', addedOn: '04 Jun 2026 | 2:00 PM' },
    { phone: '+2348084167728', addedOn: '05 Jun 2026 | 2:00 PM' },
    { phone: '+2348083465319', addedOn: '03 Jun 2026 | 2:00 PM' },
    { phone: '+2348185049925', addedOn: '03 Jun 2026 | 2:00 PM' },
    { phone: '+2348169642618', addedOn: '11 Jun 2026 | 2:00 PM' },
    { phone: '+2348135741724', addedOn: '09 Jun 2026 | 2:00 PM' },
    { phone: '+23480331373071', addedOn: '06 Jun 2026 | 2:00 PM' },
    { phone: '+2349031003314', addedOn: '11 Jun 2026 | 2:00 PM' },
    { phone: '+2349015831464', addedOn: '08 Jun 2026 | 2:00 PM' },
    { phone: '+2348081489919', addedOn: '08 Jun 2026 | 2:00 PM' },
    { phone: '+2349061989195', addedOn: '07 Jun 2026 | 2:00 PM' },
    { phone: '+2349061865609', addedOn: '11 Jun 2026 | 2:00 PM' },
    { phone: '+2348088856713', addedOn: '09 Jun 2026 | 2:00 PM' },
    { phone: '+2348057026422', addedOn: '05 Jun 2026 | 2:00 PM' },
    { phone: '+2348085703146', addedOn: '11 Jun 2026 | 2:00 PM' },
    { phone: '+23490964860913', addedOn: '06 Jun 2026 | 2:00 PM' },
    { phone: '+2348021948201', addedOn: '12 Jun 2026 | 2:00 PM' },
    { phone: '+2348159204812', addedOn: '12 Jun 2026 | 2:00 PM' },
    { phone: '+2349071029481', addedOn: '13 Jun 2026 | 2:00 PM' },
    { phone: '+2348039182740', addedOn: '13 Jun 2026 | 2:00 PM' },
    { phone: '+2348102938475', addedOn: '14 Jun 2026 | 2:00 PM' },
    { phone: '+2349058192039', addedOn: '14 Jun 2026 | 2:00 PM' },
    { phone: '+2348149201928', addedOn: '15 Jun 2026 | 2:00 PM' },
    { phone: '+2348061928374', addedOn: '15 Jun 2026 | 2:00 PM' },
    { phone: '+2349028374651', addedOn: '16 Jun 2026 | 2:00 PM' },
    { phone: '+2348182736450', addedOn: '16 Jun 2026 | 2:00 PM' },
    { phone: '+2348091827364', addedOn: '17 Jun 2026 | 2:00 PM' },
    { phone: '+2348129384756', addedOn: '17 Jun 2026 | 2:00 PM' },
    { phone: '+2349038475610', addedOn: '18 Jun 2026 | 2:00 PM' },
    { phone: '+2348057391024', addedOn: '18 Jun 2026 | 2:00 PM' },
    { phone: '+2348162849103', addedOn: '19 Jun 2026 | 2:00 PM' },
    { phone: '+2349081726354', addedOn: '19 Jun 2026 | 2:00 PM' },
    { phone: '+2348073829104', addedOn: '20 Jun 2026 | 2:00 PM' },
    { phone: '+2348139281745', addedOn: '20 Jun 2026 | 2:00 PM' },
    { phone: '+2349048291038', addedOn: '21 Jun 2026 | 2:00 PM' },
    { phone: '+2348083920194', addedOn: '21 Jun 2026 | 2:00 PM' },
    { phone: '+2348172938471', addedOn: '22 Jun 2026 | 2:00 PM' },
    { phone: '+2349018273645', addedOn: '22 Jun 2026 | 2:00 PM' },
    { phone: '+2348028374651', addedOn: '23 Jun 2026 | 2:00 PM' },
    { phone: '+2348159382019', addedOn: '23 Jun 2026 | 2:00 PM' },
    { phone: '+2349068291047', addedOn: '24 Jun 2026 | 2:00 PM' },
    { phone: '+2348038192048', addedOn: '24 Jun 2026 | 2:00 PM' },
    { phone: '+2348109283741', addedOn: '25 Jun 2026 | 2:00 PM' },
    { phone: '+2349071829304', addedOn: '25 Jun 2026 | 2:00 PM' },
    { phone: '+2348148291038', addedOn: '26 Jun 2026 | 2:00 PM' },
    { phone: '+2348067182930', addedOn: '26 Jun 2026 | 2:00 PM' },
    { phone: '+2349029384756', addedOn: '27 Jun 2026 | 2:00 PM' },
    { phone: '+2348183920194', addedOn: '27 Jun 2026 | 2:00 PM' },
    { phone: '+2348092837465', addedOn: '28 Jun 2026 | 2:00 PM' },
    { phone: '+2348128374651', addedOn: '28 Jun 2026 | 2:00 PM' },
    { phone: '+2349039281745', addedOn: '29 Jun 2026 | 2:00 PM' },
    { phone: '+2348058192038', addedOn: '29 Jun 2026 | 2:00 PM' }
  ]
};

function getGroupMembers(groupId) {
  if (!groupMembersData[groupId]) {
    const prefixes = ['+23480', '+23481', '+23490', '+23470'];
    const sampleDates = ['08 Jun 2026', '11 Jun 2026', '04 Jun 2026', '05 Jun 2026', '09 Jun 2026', '07 Jun 2026'];
    groupMembersData[groupId] = Array.from({ length: 45 }, (_, i) => {
      const p = prefixes[i % prefixes.length];
      const rest = String(Math.floor(10000000 + Math.random() * 90000000));
      const d = sampleDates[i % sampleDates.length];
      return { phone: `${p}${rest}`, addedOn: `${d} | 2:00 PM` };
    });
  }
  return groupMembersData[groupId];
}

window.showCustomerGroupDetails = function(groupId) {
  // Dismiss any open menus
  document.querySelectorAll('.cg-menu-popover.show').forEach(m => m.classList.remove('show'));

  const group = customerGroups.find(g => g.id === groupId) || customerGroups[0];
  if (!group) return;

  currentViewingGroupId = group.id;
  cgdPaginationState.currentPage = 1;

  // 1. Hide main dashboard & all other secondary sections
  const mainDashboard = document.getElementById('dashboard-view');
  if (mainDashboard) mainDashboard.style.display = 'none';

  const secondarySections = document.querySelectorAll('.secondary-view-section');
  secondarySections.forEach(s => s.classList.remove('active-view'));

  // 2. Keep customer groups link active in sidebar
  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  navLinks.forEach(l => l.classList.remove('active'));
  const cgLink = document.querySelector('.nav-link[data-view="customer-groups"]');
  if (cgLink) cgLink.classList.add('active');

  // 3. Show details view
  const detailsView = document.getElementById('view-customer-group-details');
  if (detailsView) {
    detailsView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. Populate header banner details
  const titleEl = document.getElementById('cgd-group-title');
  const countEl = document.getElementById('cgd-group-count');
  const descEl = document.getElementById('cgd-group-desc');
  const createdEl = document.getElementById('cgd-group-created');
  const updatedEl = document.getElementById('cgd-group-updated');
  const subtitleModal = document.getElementById('modal-add-group-subtitle');

  const members = group.membersCount || group.contactsCount || 0;
  if (titleEl) titleEl.textContent = group.name;
  if (countEl) countEl.textContent = `${members.toLocaleString()} contacts`;
  if (descEl) descEl.textContent = group.desc || 'High-value customers with 3+ purchases in the last 6 months.';
  if (createdEl) createdEl.textContent = `Created ${group.created || '12 Jun 2026 | 2:00 PM'}`;
  if (updatedEl) updatedEl.textContent = `Updated ${group.lastUpdated || '07 Sept 2026 | 2:00 PM'}`;
  if (subtitleModal) subtitleModal.textContent = `Add contact phone numbers to ${group.name}`;

  // 5. Reset search, page size, and render members table
  const searchInput = document.getElementById('cgd-search-phone');
  if (searchInput) searchInput.value = '';
  const pageSizeSelect = document.getElementById('cgd-page-size-select');
  if (pageSizeSelect) pageSizeSelect.value = String(cgdPaginationState.pageSize);

  renderCustomerGroupMembers();
};

window.closeCustomerGroupDetails = function() {
  const detailsView = document.getElementById('view-customer-group-details');
  if (detailsView) detailsView.classList.remove('active-view');

  const groupsView = document.getElementById('view-customer-groups');
  if (groupsView) {
    groupsView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCustomerGroups();
};

window.renderCustomerGroupMembers = function(filterQuery = '') {
  const tbody = document.getElementById('cgd-members-tbody');
  if (!tbody) return;

  const members = getGroupMembers(currentViewingGroupId);
  const query = (filterQuery || '').toLowerCase().trim();
  const filtered = members.filter(m => m.phone.toLowerCase().includes(query));

  const totalPages = Math.max(1, Math.ceil(filtered.length / cgdPaginationState.pageSize));
  if (cgdPaginationState.currentPage > totalPages) {
    cgdPaginationState.currentPage = 1;
  }

  const startIndex = (cgdPaginationState.currentPage - 1) * cgdPaginationState.pageSize;
  const pageMembers = filtered.slice(startIndex, startIndex + cgdPaginationState.pageSize);

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <i class="hgi-stroke hgi-search-01" style="font-size: 24px; opacity: 0.5; display: block; margin-bottom: 8px;"></i>
          <span style="font-size: 13.5px; font-weight: 500;">No members found matching "${escapeHtml(query)}"</span>
        </td>
      </tr>
    `;
    renderPaginationControls('cgd-pagination-group', null, { currentPage: 1, totalPages: 1 }, () => {});
    return;
  }

  tbody.innerHTML = pageMembers.map((m, index) => {
    return `
      <tr>
        <td class="cgd-cell-num">${startIndex + index + 1}</td>
        <td class="cgd-cell-phone">${escapeHtml(m.phone)}</td>
        <td class="cgd-cell-date">${escapeHtml(m.addedOn)}</td>
        <td style="text-align: right; padding-right: 28px;">
          <button type="button" class="cgd-remove-btn" onclick="removeCustomerGroupMember('${escapeHtml(m.phone)}')">
            <i class="hgi-stroke hgi-delete-02" style="font-size: 13px;"></i>
            <span>Remove</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  renderPaginationControls(
    'cgd-pagination-group',
    null,
    { currentPage: cgdPaginationState.currentPage, totalPages: totalPages },
    (newPage) => {
      cgdPaginationState.currentPage = newPage;
      const searchInput = document.getElementById('cgd-search-phone');
      renderCustomerGroupMembers(searchInput ? searchInput.value : '');
    }
  );
};

window.removeCustomerGroupMember = function(phone) {
  const members = getGroupMembers(currentViewingGroupId);
  const index = members.findIndex(m => m.phone === phone);
  if (index !== -1) {
    members.splice(index, 1);
    
    // Update group count
    const group = customerGroups.find(g => g.id === currentViewingGroupId);
    if (group && group.membersCount > 0) {
      group.membersCount = Math.max(0, group.membersCount - 1);
      const countEl = document.getElementById('cgd-group-count');
      if (countEl) countEl.textContent = `${group.membersCount.toLocaleString()} contacts`;
    }

    const searchInput = document.getElementById('cgd-search-phone');
    renderCustomerGroupMembers(searchInput ? searchInput.value : '');
    showToast(`Removed ${phone} from group`);
  }
};

window.deleteCustomerGroup = function(groupId) {
  const index = customerGroups.findIndex(g => g.id === groupId);
  if (index !== -1) {
    const deletedName = customerGroups[index].name;
    customerGroups.splice(index, 1);
    delete groupMembersData[groupId];
    renderCustomerGroups();
    showToast(`Deleted group "${deletedName}"`);
  }
};

window.deleteCurrentCustomerGroup = function() {
  const group = customerGroups.find(g => g.id === currentViewingGroupId);
  const groupName = group ? group.name : 'group';
  if (confirm(`Are you sure you want to delete the "${groupName}" customer group?`)) {
    deleteCustomerGroup(currentViewingGroupId);
    closeCustomerGroupDetails();
  }
};

window.handleAddCustomersToGroup = function() {
  const textarea = document.getElementById('add-cust-phones-input');
  if (!textarea) return;

  const rawVal = textarea.value.trim();
  if (!rawVal) {
    showToast('Please enter at least one phone number', 'error');
    return;
  }

  const rawNumbers = rawVal.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
  if (rawNumbers.length === 0) {
    showToast('No valid phone numbers found', 'error');
    return;
  }

  const members = getGroupMembers(currentViewingGroupId);
  const nowStr = 'Today | ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  let addedCount = 0;
  rawNumbers.forEach(num => {
    let cleanNum = num.replace(/\s+/g, '');
    if (!cleanNum.startsWith('+')) {
      if (cleanNum.startsWith('0')) cleanNum = '+234' + cleanNum.slice(1);
      else cleanNum = '+' + cleanNum;
    }
    if (!members.some(m => m.phone === cleanNum)) {
      members.unshift({ phone: cleanNum, addedOn: nowStr });
      addedCount++;
    }
  });

  const group = customerGroups.find(g => g.id === currentViewingGroupId);
  if (group) {
    group.membersCount = (group.membersCount || 0) + addedCount;
    const countEl = document.getElementById('cgd-group-count');
    if (countEl) countEl.textContent = `${group.membersCount.toLocaleString()} contacts`;
  }

  textarea.value = '';
  closeModal('modal-add-group-customers');
  renderCustomerGroupMembers();
  showToast(`Added ${addedCount} contact${addedCount === 1 ? '' : 's'} to ${group ? group.name : 'group'}! 🎉`);
};

function initCustomerGroups() {
  renderCustomerGroups();

  const searchInput = document.getElementById('search-customer-groups');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderCustomerGroups(e.target.value);
    });
  }

  const memberSearchInput = document.getElementById('cgd-search-phone');
  if (memberSearchInput) {
    memberSearchInput.addEventListener('input', (e) => {
      cgdPaginationState.currentPage = 1;
      renderCustomerGroupMembers(e.target.value);
    });
  }

  const cgdPageSizeSelect = document.getElementById('cgd-page-size-select');
  if (cgdPageSizeSelect) {
    cgdPageSizeSelect.addEventListener('change', (e) => {
      cgdPaginationState.pageSize = parseInt(e.target.value, 10) || 20;
      cgdPaginationState.currentPage = 1;
      const val = memberSearchInput ? memberSearchInput.value : '';
      renderCustomerGroupMembers(val);
    });
  }
}

// ==========================================================================
// Create Customer Group Modal Logic (Matching Reference Image)
// ==========================================================================
function initCreateGroupModal() {
  const createGroupBtn = document.getElementById('btn-create-group');
  const nameInput = document.getElementById('group-input-name');
  const descInput = document.getElementById('group-input-desc');
  const descCounter = document.getElementById('group-desc-counter');
  const submitBtn = document.getElementById('btn-submit-create-group');
  const sourceTabs = document.querySelectorAll('.source-tab-btn, .source-card');
  const sourcePanels = document.querySelectorAll('.source-panel-content');
  
  // CSV dropzone elements
  const dropzone = document.getElementById('csv-dropzone');
  const fileInput = document.getElementById('group-csv-file-input');
  const primaryText = document.getElementById('dropzone-primary-text');
  const secondaryText = document.getElementById('dropzone-secondary-text');
  const fileInfo = document.getElementById('dropzone-file-info');

  // Manual elements
  const manualInput = document.getElementById('manual-phone-numbers');
  const manualHelper = document.getElementById('manual-count-helper');

  // Uncategorized elements
  const checkAll = document.getElementById('check-all-uncategorized');
  const itemChecks = document.querySelectorAll('.uncategorized-chk');

  let selectedSource = 'csv';
  let uploadedFile = null;
  let currentStep = 1;
  let pendingGroup = null;

  // Step elements
  const stepPanel1 = document.getElementById('group-step-1');
  const stepPanel2 = document.getElementById('group-step-2');
  const stepPanel3 = document.getElementById('group-step-3');
  const footerStep1 = document.getElementById('footer-step-1');
  const footerStep2 = document.getElementById('footer-step-2');
  const btnBackStep2 = document.getElementById('btn-back-step-2');
  const btnFinishCreateGroup = document.getElementById('btn-finish-create-group');
  const btnSuccessViewGroups = document.getElementById('btn-success-view-groups');
  const btnSuccessCreateAnother = document.getElementById('btn-success-create-another');
  const modalCancelBtn = document.querySelector('#modal-create-group .group-header-cancel-btn, #modal-create-group .group-back-btn');
  const bodyScroll = document.getElementById('create-group-body-scroll');

  function goToStep(step) {
    currentStep = step;
    const modal = document.getElementById('modal-create-group');

    if (step === 1) {
      if (modal) modal.classList.remove('is-success-modal');
      if (stepPanel1) {
        stepPanel1.style.display = 'block';
        stepPanel1.classList.add('active');
      }
      if (stepPanel2) {
        stepPanel2.style.display = 'none';
        stepPanel2.classList.remove('active');
      }
      if (stepPanel3) {
        stepPanel3.style.display = 'none';
        stepPanel3.classList.remove('active');
      }
      if (footerStep1) footerStep1.style.display = 'flex';
      if (footerStep2) footerStep2.style.display = 'none';
    } else if (step === 2) {
      if (modal) modal.classList.remove('is-success-modal');
      if (stepPanel1) {
        stepPanel1.style.display = 'none';
        stepPanel1.classList.remove('active');
      }
      if (stepPanel2) {
        stepPanel2.style.display = 'block';
        stepPanel2.classList.add('active');
      }
      if (stepPanel3) {
        stepPanel3.style.display = 'none';
        stepPanel3.classList.remove('active');
      }
      if (footerStep1) footerStep1.style.display = 'none';
      if (footerStep2) footerStep2.style.display = 'flex';
    } else if (step === 3) {
      // Centered modal mode for Step 3 Success screen
      if (modal) modal.classList.add('is-success-modal');
      if (stepPanel1) {
        stepPanel1.style.display = 'none';
        stepPanel1.classList.remove('active');
      }
      if (stepPanel2) {
        stepPanel2.style.display = 'none';
        stepPanel2.classList.remove('active');
      }
      if (stepPanel3) {
        stepPanel3.style.display = 'block';
        stepPanel3.classList.add('active');
      }
      if (footerStep1) footerStep1.style.display = 'none';
      if (footerStep2) footerStep2.style.display = 'none';

      // Re-trigger spring entrance & checkmark draw animation
      const sealSvg = document.querySelector('.success-seal-svg');
      const checkmarkPath = document.querySelector('.seal-checkmark-path');
      if (sealSvg) {
        sealSvg.style.animation = 'none';
        void sealSvg.offsetHeight;
        sealSvg.style.animation = '';
      }
      if (checkmarkPath) {
        checkmarkPath.style.animation = 'none';
        void checkmarkPath.offsetHeight;
        checkmarkPath.style.animation = '';
      }
    }
    if (bodyScroll) bodyScroll.scrollTop = 0;
  }

  function resetForm() {
    const modal = document.getElementById('modal-create-group');
    if (modal) modal.classList.remove('is-success-modal');
    if (nameInput) nameInput.value = '';
    if (descInput) descInput.value = '';
    if (descCounter) descCounter.textContent = '0/300';
    if (fileInput) fileInput.value = '';
    uploadedFile = null;
    if (primaryText) primaryText.innerHTML = '<span class="upload-link-text">Click to upload</span> or drag and drop';
    if (secondaryText) secondaryText.textContent = '.pdf, .txt, .doc, .csv';
    if (fileInfo) fileInfo.style.display = 'none';
    if (manualInput) manualInput.value = '';
    if (manualHelper) manualHelper.textContent = '0 numbers entered';
  }

  // Handle header cancel button
  if (modalCancelBtn) {
    modalCancelBtn.onclick = (e) => {
      e.preventDefault();
      closeModal('modal-create-group');
      resetForm();
      goToStep(1);
    };
  }

  // Handle Step 2 back button
  if (btnBackStep2) {
    btnBackStep2.addEventListener('click', () => {
      goToStep(1);
    });
  }

  if (createGroupBtn) {
    createGroupBtn.addEventListener('click', () => {
      goToStep(1);
      openModal('modal-create-group');
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    });
  }

  // 1. Description character counter (0/300)
  if (descInput && descCounter) {
    descInput.addEventListener('input', () => {
      descCounter.textContent = `${descInput.value.length}/300`;
    });
  }

  // 2. Select Contact Source tabs (Image 2 style maintaining 3 options)
  sourceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sourceTabs.forEach(t => {
        t.classList.remove('active');
        if (t.hasAttribute('aria-selected')) t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      if (tab.hasAttribute('aria-selected')) tab.setAttribute('aria-selected', 'true');

      selectedSource = tab.getAttribute('data-source');
      sourcePanels.forEach(p => p.classList.remove('active'));

      const targetPanel = document.getElementById(`panel-source-${selectedSource}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // 3. CSV File Upload Dropzone
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleCsvFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleCsvFile(e.target.files[0]);
      }
    });
  }

  function handleCsvFile(file) {
    uploadedFile = file;
    const count = Math.floor(Math.random() * 800) + 140;
    uploadedFile._simulatedCount = count;

    if (primaryText) primaryText.textContent = file.name;
    if (secondaryText) secondaryText.textContent = `${(file.size / 1024).toFixed(1)} KB · ${count} valid Nigerian numbers detected`;
    if (fileInfo) {
      fileInfo.style.display = 'inline-flex';
      fileInfo.className = 'dropzone-file-selected';
      fileInfo.innerHTML = `✓ Ready: ${count} contacts parsed`;
    }
  }

  // 4. Manual phone numbers parsing
  if (manualInput && manualHelper) {
    manualInput.addEventListener('input', () => {
      const text = manualInput.value.trim();
      if (!text) {
        manualHelper.textContent = '0 numbers entered';
        return;
      }
      const numbers = text.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
      manualHelper.textContent = `${numbers.length} numbers entered`;
    });
  }

  // 5. Uncategorized select-all
  if (checkAll && itemChecks) {
    checkAll.addEventListener('change', () => {
      itemChecks.forEach(chk => { chk.checked = checkAll.checked; });
    });
  }

  // 6. Submit / Continue handler (Transitions to Step 2 Review)
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        if (nameInput) {
          nameInput.focus();
          nameInput.style.borderColor = '#ef4444';
          setTimeout(() => { nameInput.style.borderColor = ''; }, 2000);
        }
        showToast('Please provide a group name.');
        return;
      }

      const desc = descInput ? descInput.value.trim() : '';

      let contactsCount = 200;
      let sourceLabel = 'CSV File Upload';
      let previewNumbers = '08140845679 , 08127362937 , 08034736423 , 09087463627';
      const badgeColors = ['#3b82f6', '#0ea5e9', '#2563eb', '#6366f1', '#0284c7'];
      const chosenColor = badgeColors[Math.floor(Math.random() * badgeColors.length)];

      if (selectedSource === 'csv') {
        sourceLabel = 'CSV File Upload';
        contactsCount = (uploadedFile && uploadedFile._simulatedCount) ? uploadedFile._simulatedCount : 200;
        previewNumbers = '08140845679 , 08127362937 , 08034736423 , 09087463627';
      } else if (selectedSource === 'manual') {
        sourceLabel = 'Manual Entry';
        const text = manualInput ? manualInput.value.trim() : '';
        const numbers = text.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
        contactsCount = numbers.length || 20;
        previewNumbers = numbers.length ? numbers.slice(0, 8).join(' , ') : '08140845679 , 08127362937 , 08034736423 , 09087463627';
      } else {
        sourceLabel = 'Uncategorised Pool';
        const checked = Array.from(itemChecks).filter(c => c.checked);
        contactsCount = checked.length || 1;
        const phones = checked.map(c => c.getAttribute('data-phone') || '080' + Math.floor(10000000 + Math.random() * 90000000));
        previewNumbers = phones.length ? phones.join(' , ') : '08140845679';
      }

      // Populate Step 2 Review Page
      const revName = document.getElementById('review-group-name');
      const revDesc = document.getElementById('review-group-desc');
      const revSource = document.getElementById('review-import-source');
      const revValid = document.getElementById('review-import-valid');
      const revStatTotal = document.getElementById('review-stat-total');
      const revStatValid = document.getElementById('review-stat-valid');
      const revStatRemoved = document.getElementById('review-stat-removed');
      const revPreviewTitle = document.getElementById('review-preview-count-title');
      const revPreviewsText = document.getElementById('review-previews-text');

      if (revName) revName.textContent = name;
      if (revDesc) revDesc.textContent = desc || 'this group is for people of like mind';
      if (revSource) revSource.textContent = sourceLabel;
      if (revValid) revValid.textContent = `${contactsCount} Contact${contactsCount > 1 ? 's' : ''}`;
      if (revStatTotal) revStatTotal.textContent = contactsCount.toLocaleString();
      if (revStatValid) revStatValid.textContent = contactsCount.toLocaleString();
      if (revStatRemoved) revStatRemoved.textContent = '0';
      if (revPreviewTitle) revPreviewTitle.textContent = contactsCount;
      if (revPreviewsText) revPreviewsText.textContent = previewNumbers;

      pendingGroup = {
        id: `grp-${Date.now()}`,
        name,
        desc: desc || 'Custom audience group created via broadcast portal.',
        contactsCount,
        source: sourceLabel,
        tag: 'Custom Segment',
        badgeColor: chosenColor,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
      };

      goToStep(2);
    });
  }

  // 7. Finish / Create Group on Step 2 -> Transitions to Step 3 Success Screen
  if (btnFinishCreateGroup) {
    btnFinishCreateGroup.addEventListener('click', () => {
      if (!pendingGroup) return;

      // Add to state
      customerGroups.unshift(pendingGroup);

      // Re-render Customer Groups view
      renderCustomerGroups();

      // Populate Step 3 Success Screen (Matching Image 2 Reference)
      const successGroupTitle = document.getElementById('success-group-name-title');
      const successGroupCount = document.getElementById('success-group-count-title');
      const successRowName = document.getElementById('success-row-name');
      const successRowSource = document.getElementById('success-row-source');
      const successRowContacts = document.getElementById('success-row-contacts');
      const successRowStatus = document.getElementById('success-row-status');
      const successStatNumbers = document.getElementById('success-stat-numbers');

      if (successGroupTitle) successGroupTitle.textContent = pendingGroup.name;
      if (successGroupCount) successGroupCount.textContent = pendingGroup.contactsCount.toLocaleString();
      if (successRowName) successRowName.textContent = pendingGroup.name;
      if (successRowSource) successRowSource.textContent = pendingGroup.source;
      if (successRowContacts) successRowContacts.textContent = `${pendingGroup.contactsCount.toLocaleString()} Numbers`;
      if (successRowStatus) successRowStatus.textContent = 'Ready for Campaign';
      if (successStatNumbers) successStatNumbers.textContent = pendingGroup.contactsCount.toLocaleString();

      showToast(`Group "${pendingGroup.name}" created successfully!`);

      // Switch to Step 3
      goToStep(3);
    });
  }

  // 8. Step 3: View Groups Action
  if (btnSuccessViewGroups) {
    btnSuccessViewGroups.addEventListener('click', () => {
      closeModal('modal-create-group');
      resetForm();
      goToStep(1);

      // Switch view to Customer Groups if not already there
      const navGroupLink = document.querySelector('.nav-link[data-view="customer-groups"]');
      if (navGroupLink) {
        navGroupLink.click();
      }
    });
  }

  // 9. Step 3: Create Another Group Action
  if (btnSuccessCreateAnother) {
    btnSuccessCreateAnother.addEventListener('click', () => {
      resetForm();
      goToStep(1);
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    });
  }

  // URL param support for deep-linking/testing (e.g. ?modal=create-group&step=2)
  const params = new URLSearchParams(window.location.search);
  if (params.get('modal') === 'create-group') {
    openModal('modal-create-group');
    if (params.get('step') === '2') {
      goToStep(2);
      const revStatTotal = document.getElementById('review-stat-total');
      const revStatValid = document.getElementById('review-stat-valid');
      const revStatRemoved = document.getElementById('review-stat-removed');
      if (revStatTotal) revStatTotal.textContent = params.get('total') || '2';
      if (revStatValid) revStatValid.textContent = params.get('valid') || '2';
      if (revStatRemoved) revStatRemoved.textContent = params.get('removed') || '0';
    }
  }
}

// ==========================================================================
// Create Campaign Modal Logic (Two-Column + Interactive Phone Preview)
// ==========================================================================
let currentCampaignStep = 1;

function updateCampaignReviewData() {
  const nameInput = document.getElementById('camp-input-name');
  const channelSelect = document.getElementById('camp-select-channel');
  const activeTab = document.querySelector('.camp-tab-btn.active');
  const manualNumbers = document.getElementById('camp-manual-numbers');
  const selectGroup = document.getElementById('camp-select-group');
  const fileInput = document.getElementById('camp-image-file-input');
  const previewImg = document.getElementById('phone-preview-img');
  const imgWrap = document.getElementById('phone-preview-img-wrap');
  const messageInput = document.getElementById('camp-message-input');
  const previewBody = document.getElementById('phone-preview-body');

  // Campaign Name (default 'tunde' matching screenshot)
  const rawName = nameInput ? nameInput.value.trim() : '';
  const campaignName = rawName || 'tunde';

  // WhatsApp Channel
  let channelText = '+234 812 987 6543';
  if (channelSelect && channelSelect.selectedOptions && channelSelect.selectedOptions[0]) {
    const rawVal = channelSelect.selectedOptions[0].text;
    const match = rawVal.match(/(\+\d[\d\s]+)/);
    if (match) channelText = match[1].trim();
  }

  // Audience Source & Recipient Count
  const sourceType = activeTab ? activeTab.getAttribute('data-source') : 'manual';
  let audienceSource = 'Manual Numbers';
  let recipientsCount = 1;

  if (sourceType === 'manual') {
    audienceSource = 'Manual Numbers';
    if (manualNumbers && manualNumbers.value.trim()) {
      const numbers = manualNumbers.value.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
      recipientsCount = Math.max(1, numbers.length);
    } else {
      recipientsCount = 1; // Default matching user reference screenshot
    }
  } else if (sourceType === 'csv') {
    const csvFileInput = document.getElementById('camp-csv-file-input');
    if (csvFileInput && csvFileInput.files && csvFileInput.files[0]) {
      audienceSource = `CSV (${csvFileInput.files[0].name})`;
      recipientsCount = 1250;
    } else {
      audienceSource = 'CSV (contacts.csv)';
      recipientsCount = 1250;
    }
  } else if (sourceType === 'group' || sourceType === 'uncategorized') {
    if (selectGroup && selectGroup.selectedOptions && selectGroup.selectedOptions[0]) {
      audienceSource = selectGroup.selectedOptions[0].text.split('(')[0].trim();
      const count = parseInt(selectGroup.selectedOptions[0].getAttribute('data-count'), 10);
      if (!isNaN(count)) recipientsCount = count;
    } else {
      audienceSource = 'VIP Customer';
      recipientsCount = 1234;
    }
  }

  // Attached Image
  const hasImage = (fileInput && fileInput.files && fileInput.files.length > 0) || 
                   (previewImg && previewImg.src && imgWrap && imgWrap.style.display !== 'none');
  const attachedImage = hasImage ? 'Yes' : 'No';

  // Cost calculations
  const unitCost = 10.00;
  const totalGrossCost = recipientsCount * unitCost;
  const unitCostFormatted = '₦10.00';
  const totalCostFormatted = `₦${totalGrossCost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // Populate Metric Cards
  const elMetricRecipients = document.getElementById('rev-stat-recipients');
  const elMetricUnit = document.getElementById('rev-stat-unit-cost');
  const elMetricTotal = document.getElementById('rev-stat-total-cost');
  if (elMetricRecipients) elMetricRecipients.textContent = recipientsCount.toLocaleString();
  if (elMetricUnit) elMetricUnit.textContent = unitCostFormatted;
  if (elMetricTotal) elMetricTotal.textContent = totalCostFormatted;

  // Populate Detail Rows
  const elDetailName = document.getElementById('rev-detail-name');
  const elDetailChannel = document.getElementById('rev-detail-channel');
  const elDetailSource = document.getElementById('rev-detail-source');
  const elDetailImage = document.getElementById('rev-detail-image');
  if (elDetailName) elDetailName.textContent = campaignName;
  if (elDetailChannel) elDetailChannel.textContent = channelText;
  if (elDetailSource) elDetailSource.textContent = audienceSource;
  if (elDetailImage) elDetailImage.textContent = attachedImage;

  // Populate Cost Summary
  const elCostRecipients = document.getElementById('rev-detail-recipients');
  const elCostUnit = document.getElementById('rev-detail-unit');
  const elCostWallet = document.getElementById('rev-detail-wallet');
  const elCostTotal = document.getElementById('rev-detail-total');
  if (elCostRecipients) elCostRecipients.textContent = recipientsCount.toLocaleString();
  if (elCostUnit) elCostUnit.textContent = unitCostFormatted;
  if (elCostWallet) elCostWallet.textContent = '₦1,250,000.50';
  if (elCostTotal) elCostTotal.textContent = totalCostFormatted;

  // Sync phone preview bubble
  if (previewBody) {
    const msg = messageInput ? messageInput.value.trim() : '';
    if (msg) {
      previewBody.textContent = msg;
      previewBody.classList.remove('is-placeholder');
    } else {
      previewBody.textContent = 'dsnfknajsjfs';
      previewBody.classList.remove('is-placeholder');
    }
  }
}

function goToCampaignStep(step) {
  currentCampaignStep = step;
  const panelStep1 = document.getElementById('camp-step-1');
  const panelStep2 = document.getElementById('camp-step-2');
  const footerStep1 = document.getElementById('camp-footer-step-1');
  const footerStep2 = document.getElementById('camp-footer-step-2');
  const stepperStep1 = document.getElementById('stepper-step-1');
  const stepperStep2 = document.getElementById('stepper-step-2');
  const panelsScroll = document.getElementById('camp-panels-scroll');

  if (step === 1) {
    if (panelStep1) panelStep1.style.display = 'block';
    if (panelStep2) panelStep2.style.display = 'none';
    if (footerStep1) footerStep1.style.display = 'flex';
    if (footerStep2) footerStep2.style.display = 'none';

    if (stepperStep1) {
      stepperStep1.className = 'camp-stepper-pill active';
      stepperStep1.innerHTML = '<span class="stepper-pill-num">1</span><span class="stepper-pill-text">Campaign Setup</span>';
    }
    if (stepperStep2) {
      stepperStep2.className = 'camp-stepper-pill inactive';
      stepperStep2.innerHTML = '<span class="stepper-pill-num">2</span><span class="stepper-pill-text">Review</span>';
    }
    if (panelsScroll) panelsScroll.scrollTop = 0;
  } else if (step === 2) {
    updateCampaignReviewData();
    if (panelStep1) panelStep1.style.display = 'none';
    if (panelStep2) panelStep2.style.display = 'block';
    if (footerStep1) footerStep1.style.display = 'none';
    if (footerStep2) footerStep2.style.display = 'flex';

    if (stepperStep1) {
      stepperStep1.className = 'camp-stepper-pill completed';
      stepperStep1.innerHTML = '<span class="stepper-pill-icon"><i class="hgi-stroke hgi-tick-02"></i></span><span class="stepper-pill-text">Campaign Setup</span>';
    }
    if (stepperStep2) {
      stepperStep2.className = 'camp-stepper-pill active';
      stepperStep2.innerHTML = '<span class="stepper-pill-num">2</span><span class="stepper-pill-text">Review</span>';
    }
    if (panelsScroll) panelsScroll.scrollTop = 0;
  }
}

function setPreviewDevice(device) {
  const mockup = document.getElementById('phone-mockup');
  const btnIos = document.getElementById('btn-device-ios');
  const btnAndroid = document.getElementById('btn-device-android');

  if (!mockup) return;
  if (device === 'android') {
    mockup.classList.remove('is-ios');
    mockup.classList.add('is-android');
    if (btnAndroid) btnAndroid.classList.add('active');
    if (btnIos) btnIos.classList.remove('active');
  } else {
    mockup.classList.remove('is-android');
    mockup.classList.add('is-ios');
    if (btnIos) btnIos.classList.add('active');
    if (btnAndroid) btnAndroid.classList.remove('active');
  }
}

function initCreateCampaignModal() {
  const modal = document.getElementById('modal-create-campaign');
  const createCampBtn = document.getElementById('btn-create-campaign');
  const nameInput = document.getElementById('camp-input-name');
  const messageInput = document.getElementById('camp-message-input');
  const charCount = document.getElementById('camp-char-count');
  const smsCount = document.getElementById('camp-sms-count');
  const previewTitle = document.getElementById('phone-preview-title');
  const previewBody = document.getElementById('phone-preview-body');
  const previewImg = document.getElementById('phone-preview-img');
  const dropzone = document.getElementById('camp-image-dropzone');
  const fileInput = document.getElementById('camp-image-file-input');
  const btnEmoji = document.getElementById('camp-btn-emoji');
  const btnGenerate = document.getElementById('camp-btn-generate');
  const btnSubmit = document.getElementById('btn-camp-submit');
  const timingCards = document.querySelectorAll('.camp-timing-card');
  const sourceCards = document.querySelectorAll('.camp-source-card');
  const selectGroup = document.getElementById('camp-select-group');
  const groupInfoText = document.getElementById('camp-group-info-text');
  const scheduleWrap = document.getElementById('camp-schedule-datetime-wrap');

  if (createCampBtn) {
    createCampBtn.addEventListener('click', () => {
      openModal('modal-create-campaign');
      goToCampaignStep(1);
    });
  }

  // Live Title Sync
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      const val = nameInput.value.trim();
      if (previewTitle) {
        previewTitle.textContent = val ? val + ' 🔥' : 'Limited-Time Offer on BMW X4 M — Save Up to $5,000! 🔥';
      }
    });
  }

  // Live Message Sync & Counter
  if (messageInput) {
    const updateMessage = () => {
      const val = messageInput.value;
      if (charCount) charCount.textContent = val.length;
      if (smsCount) smsCount.textContent = Math.max(1, Math.ceil(val.length / 160));
      if (previewBody) {
        if (val.trim()) {
          previewBody.textContent = val;
          previewBody.classList.remove('is-placeholder');
        } else {
          previewBody.textContent = 'Message preview will appear here...';
          previewBody.classList.add('is-placeholder');
        }
      }
      const limitNotice = document.querySelector('.camp-header-limit-tag strong');
      if (limitNotice) limitNotice.textContent = `${val.length} / 200`;
    };
    messageInput.addEventListener('input', updateMessage);
    updateMessage();
  }

  // Set current time for preview timestamp
  const previewTime = document.getElementById('phone-preview-time');
  if (previewTime) {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    previewTime.textContent = `${hrs}:${mins}`;
  }

  // Emoji button
  if (btnEmoji && messageInput) {
    btnEmoji.addEventListener('click', () => {
      const emojis = ['🔥', '✨', '🚀', '🎉', '⚡', '🎁'];
      const pick = emojis[Math.floor(Math.random() * emojis.length)];
      messageInput.value += ' ' + pick;
      messageInput.dispatchEvent(new Event('input'));
    });
  }

  // Emoji button
  if (btnEmoji && messageInput) {
    btnEmoji.addEventListener('click', () => {
      const emojis = ['🔥', '✨', '🎉', '🚀', '💡', '🌟', '👏', '💬', '😊'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const start = messageInput.selectionStart || messageInput.value.length;
      const end = messageInput.selectionEnd || messageInput.value.length;
      messageInput.value = messageInput.value.substring(0, start) + randomEmoji + messageInput.value.substring(end);
      messageInput.selectionStart = messageInput.selectionEnd = start + randomEmoji.length;
      messageInput.focus();
      messageInput.dispatchEvent(new Event('input'));
    });
  }

  // Generate AI message button
  if (btnGenerate && messageInput) {
    btnGenerate.addEventListener('click', () => {
      messageInput.value = '🚀 Exclusive VIP Special: Get up to $5,000 off your next luxury lease this week only! Enjoy premium styling, complimentary concierge service, and zero down payment options for qualified customers. Don\'t miss out!';
      messageInput.dispatchEvent(new Event('input'));
      showToast('AI template generated and applied!');
    });
  }

  // Dropzone & Image Upload
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageFile(e.dataTransfer.files[0]);
      }
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files[0]) {
        handleImageFile(fileInput.files[0]);
      }
    });
  }

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (PNG, JPG, JPEG).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgWrap = document.getElementById('phone-preview-img-wrap');
      if (imgWrap) imgWrap.style.display = 'block';
      if (previewImg) previewImg.src = event.target.result;
      showToast(`Attached "${file.name}" to campaign preview!`);
    };
    reader.readAsDataURL(file);
  }

  // Timing cards
  timingCards.forEach(card => {
    card.addEventListener('click', () => {
      timingCards.forEach(c => {
        c.classList.remove('active');
        const cb = c.querySelector('.timing-card-checkbox');
        if (cb) cb.classList.remove('checked');
      });
      card.classList.add('active');
      const activeCb = card.querySelector('.timing-card-checkbox');
      if (activeCb) activeCb.classList.add('checked');
      const timing = card.getAttribute('data-timing');
      if (scheduleWrap) {
        scheduleWrap.style.display = timing === 'scheduled' ? 'block' : 'none';
      }
    });
  });

  // Source cards & 3-option underline tabs (Matching Image 2)
  const campSourceTabs = document.querySelectorAll('.camp-tab-btn');
  const campSourcePanels = document.querySelectorAll('.camp-source-tab-panel');

  campSourceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      campSourceTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const source = tab.getAttribute('data-source');
      campSourcePanels.forEach(p => {
        p.style.display = 'none';
      });
      const targetPanel = document.getElementById(`panel-source-${source}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });

  sourceCards.forEach(card => {
    card.addEventListener('click', () => {
      sourceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Predefined group select
  if (selectGroup && groupInfoText) {
    selectGroup.addEventListener('change', () => {
      const selected = selectGroup.options[selectGroup.selectedIndex];
      const count = selected.getAttribute('data-count') || '1,250';
      groupInfoText.innerHTML = `Selected group has <strong>${Number(count).toLocaleString()} valid contacts</strong>. Message cost will be calculated accordingly.`;
    });
  }

  // Continue button (Step 1 -> Step 2 Review)
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      goToCampaignStep(2);
    });
  }

  // Back button (Step 2 -> Step 1)
  const btnBackStep2 = document.getElementById('btn-camp-back-step2');
  if (btnBackStep2) {
    btnBackStep2.addEventListener('click', () => goToCampaignStep(1));
  }

  // Confirm & Send buttons (Launch Campaign)
  const btnConfirm = document.getElementById('btn-camp-confirm');
  const btnSendNow = document.getElementById('camp-btn-send-now');

  function handleLaunchCampaign() {
    const rawName = nameInput ? nameInput.value.trim() : '';
    const name = rawName || 'tunde';
    const activeTiming = document.querySelector('.camp-timing-card.active');
    const isImmediate = activeTiming ? activeTiming.getAttribute('data-timing') === 'immediate' : true;
    
    // Get actual recipient count from selected source
    const activeTab = document.querySelector('.camp-tab-btn.active');
    const sourceType = activeTab ? activeTab.getAttribute('data-source') : 'manual';
    let recipientCount = 1;
    if (sourceType === 'manual') {
      const manualNumbers = document.getElementById('camp-manual-numbers');
      if (manualNumbers && manualNumbers.value.trim()) {
        const numbers = manualNumbers.value.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
        recipientCount = Math.max(1, numbers.length);
      } else {
        recipientCount = 1;
      }
    } else if (sourceType === 'csv') {
      recipientCount = 1250;
    } else {
      const selectedGrp = selectGroup ? selectGroup.options[selectGroup.selectedIndex] : null;
      recipientCount = selectedGrp ? (parseInt(selectedGrp.getAttribute('data-count'), 10) || 1250) : 1250;
    }

    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()} | ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // Generate campaign ID matching format in user screenshot (e.g. camp_6g68bmo)
    const randomSuffix = Math.random().toString(36).substring(2, 9);
    const campaignId = 'camp_' + randomSuffix;

    const newCamp = {
      id: campaignId,
      date: formattedDate,
      title: name,
      recipients: recipientCount,
      status: isImmediate ? 'Sent' : 'Scheduled',
      category: 'Promotions'
    };

    state.campaigns.unshift(newCamp);
    state.campaignsSent += 1;
    state.recipientsReached += recipientCount;

    const metricSent = document.getElementById('metric-campaigns-sent');
    const metricReached = document.getElementById('metric-recipients-reached');
    if (metricSent) metricSent.textContent = state.campaignsSent;
    if (metricReached) metricReached.textContent = state.recipientsReached.toLocaleString();

    renderCampaignsTable();
    closeModal('modal-create-campaign');

    // Populate Campaign Sent Success Receipt
    const succName = document.getElementById('camp-success-name');
    const succId = document.getElementById('camp-success-id');
    const succSource = document.getElementById('camp-success-source');
    const succChannel = document.getElementById('camp-success-channel');
    const succStatus = document.getElementById('camp-success-status');
    const succRecipients = document.getElementById('camp-success-recipients');
    const succUnitCost = document.getElementById('camp-success-unit-cost');
    const succTotal = document.getElementById('camp-success-total');

    if (succName) succName.textContent = name;
    if (succId) succId.textContent = campaignId;

    let displaySource = 'Manual';
    if (sourceType === 'csv') {
      displaySource = 'CSV Upload';
    } else if (sourceType === 'group' || sourceType === 'uncategorized') {
      const grp = selectGroup && selectGroup.selectedOptions ? selectGroup.selectedOptions[0] : null;
      displaySource = grp ? grp.text.split('(')[0].trim() : 'Customer Group';
    } else {
      displaySource = 'Manual';
    }
    if (succSource) succSource.textContent = displaySource;

    let channelText = '+234 812 987 6543';
    const channelSelect = document.getElementById('camp-select-channel');
    if (channelSelect && channelSelect.selectedOptions && channelSelect.selectedOptions[0]) {
      const rawVal = channelSelect.selectedOptions[0].text;
      const match = rawVal.match(/(\+\d[\d\s]+)/);
      if (match) channelText = match[1].trim();
    }
    if (succChannel) succChannel.textContent = channelText;

    if (succStatus) succStatus.textContent = isImmediate ? 'Dispatching now' : 'Scheduled';
    if (succRecipients) succRecipients.textContent = recipientCount.toLocaleString();
    if (succUnitCost) succUnitCost.textContent = '₦10.00';
    const totalCharge = recipientCount * 10.00;
    if (succTotal) succTotal.textContent = '₦' + totalCharge.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Open Success Modal in the middle of the screen
    openModal('modal-campaign-success');

    // Register in Broadcast Messaging table
    addBroadcastCampaign({
      date: formattedDate,
      name: name,
      status: isImmediate ? 'Sent' : 'Scheduled',
      source: displaySource === 'Manual' ? 'Manual' : (sourceType === 'csv' ? 'CSV' : 'Group'),
      recipients: recipientCount.toLocaleString('en-US'),
      unitCost: '₦10.00',
      grossCost: '₦' + totalCharge.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      createdBy: 'Adebayo Ogunlesi'
    });

    showToast(`Campaign "${name}" sent successfully! 🚀`);
  }

  if (btnConfirm) btnConfirm.addEventListener('click', handleLaunchCampaign);
  if (btnSendNow) btnSendNow.addEventListener('click', handleLaunchCampaign);

  // Success Modal Action Buttons
  const btnSuccessViewAll = document.getElementById('btn-camp-success-view-all');
  const btnSuccessCreateAnother = document.getElementById('btn-camp-success-create-another');

  if (btnSuccessViewAll) {
    btnSuccessViewAll.addEventListener('click', () => {
      closeModal('modal-campaign-success');
      goToCampaignStep(1);
      // Switch to Broadcast Messaging View
      const navMessagingLink = document.querySelector('.nav-link[data-view="messaging"]');
      if (navMessagingLink) {
        navMessagingLink.click();
      } else {
        const campSection = document.getElementById('recent-campaigns-section') || document.querySelector('.campaigns-table');
        if (campSection) {
          campSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      showToast('Viewing all broadcast campaigns');
    });
  }

  if (btnSuccessCreateAnother) {
    btnSuccessCreateAnother.addEventListener('click', () => {
      closeModal('modal-campaign-success');
      // Reset campaign form to clean initial state
      if (nameInput) nameInput.value = '';
      const msgInput = document.getElementById('camp-message-input');
      if (msgInput) msgInput.value = '';
      const manualNumbers = document.getElementById('camp-manual-numbers');
      if (manualNumbers) manualNumbers.value = '';
      goToCampaignStep(1);
      openModal('modal-create-campaign');
    });
  }

  // URL param deep link testing (?modal=create-campaign&step=1 or 2, or ?modal=campaign-success)
  const params = new URLSearchParams(window.location.search);
  if (params.get('modal') === 'create-campaign') {
    openModal('modal-create-campaign');
    if (params.get('step') === '2') {
      goToCampaignStep(2);
    } else {
      goToCampaignStep(1);
    }
    if (params.get('device') === 'android') {
      setPreviewDevice('android');
    }
    if (params.get('scroll') === 'source') {
      setTimeout(() => {
        const tabs = document.getElementById('camp-source-tabs');
        if (tabs) tabs.scrollIntoView({ behavior: 'instant', block: 'center' });
      }, 100);
    }
  } else if (params.get('modal') === 'campaign-success') {
    openModal('modal-campaign-success');
  } else if (params.get('modal') === 'create-group') {
    openModal('modal-create-group');
  }
}

// ==========================================================================
// Broadcast Messaging (Messaging Center View) Logic
// ==========================================================================
let broadcastMessagingCampaigns = [...INITIAL_CAMPAIGNS];

function addBroadcastCampaign(campaign) {
  broadcastMessagingCampaigns.unshift(campaign);
  if (state && Array.isArray(state.campaigns)) {
    state.campaigns.unshift({
      id: 'camp-' + Date.now(),
      date: campaign.date,
      title: campaign.name,
      name: campaign.name,
      recipients: campaign.recipients,
      status: campaign.status,
      source: campaign.source,
      unitCost: campaign.unitCost,
      grossCost: campaign.grossCost,
      createdBy: campaign.createdBy
    });
    renderCampaignsTable();
  }
  renderBroadcastMessagingTable();
}

function updateBroadcastMetrics() {
  const elDelivered = document.getElementById('b-stat-delivered');
  const elOpenRate = document.getElementById('b-stat-open-rate');
  const elFailed = document.getElementById('b-stat-failed');
  const elScheduled = document.getElementById('b-stat-scheduled');

  if (!elDelivered && !elOpenRate && !elFailed && !elScheduled) return;

  let totalDelivered = 0;
  let totalFailed = 0;
  let totalScheduled = 0;

  broadcastMessagingCampaigns.forEach(c => {
    const rawRec = typeof c.recipients === 'number' 
      ? c.recipients 
      : parseInt(String(c.recipients).replace(/,/g, ''), 10) || 0;
    
    const status = (c.status || '').toLowerCase();
    if (status === 'sent') {
      totalDelivered += rawRec;
    } else if (status === 'failed') {
      totalFailed += rawRec;
    } else if (status === 'scheduled') {
      totalScheduled += rawRec;
    } else if (status === 'partial') {
      totalDelivered += Math.round(rawRec * 0.82);
      totalFailed += Math.round(rawRec * 0.18);
    }
  });

  const openRate = totalDelivered > 0 ? (68.4).toFixed(1) + '%' : '0.0%';

  if (elDelivered) elDelivered.textContent = totalDelivered.toLocaleString();
  if (elOpenRate) elOpenRate.textContent = openRate;
  if (elFailed) elFailed.textContent = totalFailed.toLocaleString();
  if (elScheduled) elScheduled.textContent = totalScheduled.toLocaleString();
}

function renderBroadcastMessagingTable() {
  const tbody = document.getElementById('broadcast-table-body');
  const countBadge = document.getElementById('broadcast-campaigns-count');
  const searchInput = document.getElementById('broadcast-search-input');
  const statusFilter = document.getElementById('broadcast-status-filter');

  if (!tbody) return;

  // Always compute dynamic aggregate metrics from campaign dataset
  updateBroadcastMetrics();

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const statusVal = statusFilter ? statusFilter.value : 'all';

  const filtered = broadcastMessagingCampaigns.filter(item => {
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) || 
      item.createdBy.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.date.toLowerCase().includes(query);
    
    const matchesStatus = statusVal === 'all' || item.status.toLowerCase() === statusVal.toLowerCase();

    return matchesQuery && matchesStatus;
  });

  // Dynamic page size (default 20 items per page as requested)
  const pageSize = broadcastPaginationState.pageSize || 20;
  broadcastPaginationState.pageSize = pageSize;
  broadcastPaginationState.totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (broadcastPaginationState.currentPage > broadcastPaginationState.totalPages) {
    broadcastPaginationState.currentPage = 1;
  }

  if (countBadge) {
    if (!query && statusVal === 'all') {
      countBadge.textContent = `${filtered.length} campaigns`;
    } else {
      countBadge.textContent = `${filtered.length} campaign${filtered.length === 1 ? '' : 's'}`;
    }
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <i class="hgi-stroke hgi-search-01" style="font-size: 26px; opacity: 0.5; display: block; margin-bottom: 8px;"></i>
          <span style="font-size: 14px; font-weight: 500;">No campaigns found matching your search.</span>
        </td>
      </tr>
    `;
    renderPaginationControls('broadcast-pagination-group', null, { currentPage: 1, totalPages: 1 }, () => {});
    return;
  }

  // Calculate slice for items
  const start = (broadcastPaginationState.currentPage - 1) * pageSize;
  const itemsToDisplay = filtered.slice(start, start + pageSize);

  tbody.innerHTML = itemsToDisplay.map(item => {
    const itemName = item.name || item.title || 'Untitled Campaign';
    const itemDate = item.date || '07 Jun 2026 | 3:58 PM';
    const itemStatus = item.status || 'Sent';
    const itemSource = item.source || 'Group';
    const statusClass = itemStatus.toLowerCase();
    const sourceClass = itemSource.toLowerCase();

    let statusIconHtml = '';
    if (statusClass === 'sent') {
      statusIconHtml = `
        <span class="status-icon-box sent">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'scheduled') {
      statusIconHtml = `
        <svg class="status-icon-triangle" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7.134 2.5a1 1 0 011.732 0l5.196 9a1 1 0 01-.866 1.5H2.804a1 1 0 01-.866-1.5l5.196-9z" fill="#d97706"/>
          <path d="M8 6.2v2.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="8" cy="10.8" r="0.75" fill="#ffffff"/>
        </svg>
      `;
    } else if (statusClass === 'failed') {
      statusIconHtml = `
        <span class="status-icon-box failed">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M2 2L8 8M8 2L2 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'partial') {
      statusIconHtml = `
        <span class="status-icon-box" style="background-color: #ea580c;">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M2 5.5L4 7.5L8 2.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;
    }

    const recStr = typeof item.recipients === 'number' ? item.recipients.toLocaleString() : (item.recipients || '0');
    const unitCost = item.unitCost || '₦4.92';
    const grossCost = item.grossCost || '₦0.00';
    const createdBy = item.createdBy || 'Adebayo Ogunlesi';

    return `
      <tr>
        <td class="b-date-cell" style="text-align: left;">${itemDate}</td>
        <td class="b-campaign-name" style="text-align: left; cursor: pointer;" onclick="showCampaignDetailsView('${escapeHtml(itemName).replace(/'/g, "\\'")}')">${escapeHtml(itemName)}</td>
        <td style="text-align: left;">
          <span class="b-status-pill ${statusClass}">
            ${statusIconHtml}
            <span>${itemStatus}</span>
          </span>
        </td>
        <td style="text-align: left;">
          <span class="b-source-pill ${sourceClass}">${itemSource}</span>
        </td>
        <td style="text-align: left;">${recStr}</td>
        <td style="text-align: left;">${unitCost}</td>
        <td style="text-align: left;" class="b-cost-gross">${grossCost}</td>
        <td class="b-creator-name" style="text-align: left;">${escapeHtml(createdBy)}</td>
        <td style="text-align: left;">
          <button class="b-action-btn" title="View Details" onclick="showCampaignDetailsView('${escapeHtml(itemName).replace(/'/g, "\\'")}')">
            <svg class="b-action-eye-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>View Details</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  renderPaginationControls(
    'broadcast-pagination-group',
    null,
    broadcastPaginationState,
    (newPage) => {
      broadcastPaginationState.currentPage = newPage;
      renderBroadcastMessagingTable();
    }
  );
}

let currentActionCampaignName = null;

function toggleCampaignActionMenu(event, btnEl, campaignName) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const menu = document.getElementById('b-floating-action-menu');
  if (!menu) return;

  if (currentActionCampaignName === campaignName && menu.classList.contains('open')) {
    closeCampaignActionMenu();
    return;
  }

  currentActionCampaignName = campaignName;
  const btn = btnEl || (event && (event.currentTarget || event.target)) || document.querySelector('.b-action-btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();

  // Position popup directly beneath the button, aligned to its right edge
  const menuWidth = 145;
  const leftPos = Math.max(16, rect.right - menuWidth);
  const topPos = rect.bottom + 6;

  menu.style.top = `${topPos}px`;
  menu.style.left = `${leftPos}px`;
  menu.classList.add('open');
}

function closeCampaignActionMenu() {
  const menu = document.getElementById('b-floating-action-menu');
  if (menu) menu.classList.remove('open');
  currentActionCampaignName = null;
}

function openCampaignDetails(campaignName) {
  const campaign = broadcastMessagingCampaigns.find(c => c.name === campaignName) || broadcastMessagingCampaigns[0];
  if (!campaign) return;

  const nameEl = document.getElementById('cd-campaign-name');
  const dateEl = document.getElementById('cd-date');
  const createdByEl = document.getElementById('cd-created-by');
  const sourceEl = document.getElementById('cd-source');
  const recipientsEl = document.getElementById('cd-recipients');
  const unitCostEl = document.getElementById('cd-unit-cost');
  const grossCostEl = document.getElementById('cd-gross-cost');
  const statusBadgeEl = document.getElementById('cd-status-badge');
  const msgEl = document.getElementById('cd-message-text');

  if (nameEl) nameEl.textContent = campaign.name;
  if (dateEl) dateEl.textContent = campaign.date;
  if (createdByEl) createdByEl.textContent = campaign.createdBy;
  if (sourceEl) sourceEl.textContent = `${campaign.source} List`;
  if (recipientsEl) recipientsEl.textContent = `${campaign.recipients} contacts`;
  if (unitCostEl) unitCostEl.textContent = campaign.unitCost;
  if (grossCostEl) grossCostEl.textContent = campaign.grossCost;

  if (statusBadgeEl) {
    const statusClass = campaign.status.toLowerCase();
    let iconHtml = '';
    if (statusClass === 'sent') {
      iconHtml = `<span class="status-icon-box sent"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L4.8 8.8L9.5 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
    } else if (statusClass === 'scheduled') {
      iconHtml = `<span class="status-icon-box scheduled"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13.5H1.5L8 2Z" fill="#d97706"/><path d="M8 6V9" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="white"/></svg></span>`;
    } else if (statusClass === 'failed') {
      iconHtml = `<span class="status-icon-box failed"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3L9 9M9 3L3 9" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>`;
    } else {
      iconHtml = `<span class="status-icon-box partial"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="white" stroke-width="1.8"/></svg></span>`;
    }
    statusBadgeEl.innerHTML = `
      <span class="b-status-pill ${statusClass}">
        ${iconHtml}
        <span>${campaign.status}</span>
      </span>
    `;
  }

  if (msgEl) {
    const sampleMsgs = {
      'New Year Promo 2026': 'Exclusive New Year 2026 Promo! 🎉 Enjoy up to 40% discount on all premium accessories this festive season. Use code NY2026 at checkout or visit any of our flagship branches today. Terms & conditions apply.',
      'Black Friday Deals': '🔥 BLACK FRIDAY IS LIVE! Unbeatable price cuts across our entire electronics catalog. First 500 buyers get free nationwide delivery. Shop now: https://klayed.com/bf',
      'Customer Appreciation Week': 'Dear Valued Customer, thank you for choosing Klayed. As a token of our appreciation, here is a ₦2,500 voucher on your next order: THANKS25. Valid until Sunday!',
      'Flash Sale Alert - Electronics': '⚡ FLASH SALE ALERT: 50% OFF high-end smartphones, smartwatches, and headphones for the next 4 hours only! Grab yours before stock runs out.',
      'Monthly Newsletter - January': 'January Digest 📰: Top 5 business trends for 2026, our latest product releases, and customer spotlight of the month. Read the full issue inside.',
      'Valentine Special Offers': 'Spread love this Valentine\'s! ❤️ Surprise your loved ones with bespoke gift boxes and luxury hampers with same-day delivery.',
      'End of Year Clearance': 'Year-End Inventory Clearance Sale! Up to 60% off warehouse items. All sales final. Don\'t miss out on these incredible bargains.',
      'Christmas Greetings Campaign': 'Merry Christmas from all of us at Klayed! 🎄 Wishing you and your family joy, peace, and prosperity this festive season.',
      'Product Launch - Series X': 'Introducing the all-new Series X 🚀 Engineered for unprecedented performance and elegance. Pre-order now to receive exclusive early-bird perks.'
    };
    msgEl.textContent = sampleMsgs[campaign.name] || `${campaign.name} WhatsApp broadcast message dispatched to recipients.`;
  }

  openModal('modal-campaign-details');
}

function initBroadcastMessaging() {
  const searchInput = document.getElementById('broadcast-search-input');
  const statusFilter = document.getElementById('broadcast-status-filter');
  const dateFilter = document.getElementById('broadcast-date-filter');
  const viewDetailsBtn = document.getElementById('btn-view-campaign-details');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      closeCampaignActionMenu();
      renderBroadcastMessagingTable();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', () => {
      closeCampaignActionMenu();
      renderBroadcastMessagingTable();
    });
  }

  if (dateFilter) {
    dateFilter.addEventListener('change', () => {
      closeCampaignActionMenu();
      showToast(`Filter applied: ${dateFilter.options[dateFilter.selectedIndex].text}`);
      renderBroadcastMessagingTable();
    });
  }

  const bPageSizeSelect = document.getElementById('broadcast-page-size-select');
  if (bPageSizeSelect) {
    bPageSizeSelect.addEventListener('change', (e) => {
      broadcastPaginationState.pageSize = parseInt(e.target.value, 10) || 20;
      broadcastPaginationState.currentPage = 1;
      closeCampaignActionMenu();
      renderBroadcastMessagingTable();
    });
  }

  if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetCamp = currentActionCampaignName;
      closeCampaignActionMenu();
      if (targetCamp) {
        showCampaignDetailsView(targetCamp);
      }
    });
  }

  // Dismiss action menu on outside clicks and window scrolls
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#b-floating-action-menu') && !e.target.closest('.b-action-btn')) {
      closeCampaignActionMenu();
    }
  });

  window.addEventListener('scroll', () => {
    closeCampaignActionMenu();
  }, true);

  renderBroadcastMessagingTable();
}

// ==========================================================================
// Campaign Details Full-Page View Logic & Wave Chart Rendering
// ==========================================================================
let redrawDeliveryWaveChart = null;
let currentActiveCampaignData = null;

function showCampaignDetailsView(campaignName) {
  const campaign = broadcastMessagingCampaigns.find(c => c.name === campaignName) || broadcastMessagingCampaigns[0];
  if (!campaign) return;
  currentActiveCampaignData = campaign;

  // 1. Hide all secondary views and main dashboard
  const mainDashboard = document.getElementById('dashboard-view');
  if (mainDashboard) mainDashboard.style.display = 'none';

  const secondarySections = document.querySelectorAll('.secondary-view-section');
  secondarySections.forEach(s => s.classList.remove('active-view'));

  // 2. Keep the messaging navigation item highlighted in sidebar
  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  navLinks.forEach(l => l.classList.remove('active'));
  const messagingLink = document.querySelector('.nav-link[data-view="messaging"]');
  if (messagingLink) messagingLink.classList.add('active');

  // 3. Show Campaign Details View
  const detailsView = document.getElementById('view-campaign-details');
  if (detailsView) {
    detailsView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. Populate dynamic data
  const titleEl = document.getElementById('cd-page-title');
  const statusEl = document.getElementById('cd-page-status');
  const idEl = document.getElementById('cd-page-id');
  const dateEl = document.getElementById('cd-page-date');
  const sourceEl = document.getElementById('cd-page-source');
  const recipientsEl = document.getElementById('cd-page-recipients');
  const unitCostEl = document.getElementById('cd-page-unit-cost');
  const grossCostEl = document.getElementById('cd-page-gross-cost');
  const createdByEl = document.getElementById('cd-page-created-by');
  const msgBodyEl = document.getElementById('cd-page-message-body');
  const phoneMsgEl = document.getElementById('cd-page-phone-message');
  const charsTagEl = document.getElementById('cd-page-chars-tag');
  const deliveredPill = document.getElementById('cd-page-delivered-count');
  const failedPill = document.getElementById('cd-page-failed-count');
  const reachedRatio = document.getElementById('cd-page-reached-ratio');

  if (titleEl) titleEl.textContent = campaign.name;
  if (dateEl) dateEl.textContent = campaign.date;
  if (sourceEl) sourceEl.textContent = campaign.source;
  if (recipientsEl) recipientsEl.textContent = campaign.recipients;
  if (unitCostEl) unitCostEl.textContent = campaign.unitCost;
  if (grossCostEl) grossCostEl.textContent = campaign.grossCost;
  if (createdByEl) createdByEl.textContent = campaign.createdBy;

  // Derive an aesthetic campaign ID
  const index = broadcastMessagingCampaigns.findIndex(c => c.name === campaign.name);
  const campIdNum = String(index >= 0 ? index + 1 : 1).padStart(3, '0');
  if (idEl) idEl.textContent = `Campaign ID: camp_${campIdNum}`;

  // Update Status Pill
  if (statusEl) {
    const statusClass = campaign.status.toLowerCase();
    statusEl.className = `b-status-pill ${statusClass}`;
    let iconHtml = '';
    if (statusClass === 'sent') {
      iconHtml = `
        <span class="status-icon-box sent">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.5L4.8 8.8L9.5 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'scheduled') {
      iconHtml = `
        <span class="status-icon-box scheduled">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L14.5 13.5H1.5L8 2Z" fill="#d97706"/>
            <path d="M8 6V9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="8" cy="11.5" r="0.75" fill="white"/>
          </svg>
        </span>
      `;
    } else if (statusClass === 'failed') {
      iconHtml = `
        <span class="status-icon-box failed">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M3 3L9 9M9 3L3 9" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      `;
    } else {
      iconHtml = `
        <span class="status-icon-box partial">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="white" stroke-width="1.8"/>
          </svg>
        </span>
      `;
    }
    statusEl.innerHTML = `
      ${iconHtml}
      <span id="cd-page-status-text">${campaign.status}</span>
    `;
  }

  // Delivery & reached count metrics
  const recClean = parseInt(campaign.recipients.replace(/,/g, ''), 10) || 50;
  const isFailedCamp = campaign.status === 'Failed';
  const deliveredCount = isFailedCamp ? 0 : Math.round(recClean * 0.98);
  const failedCount = isFailedCamp ? recClean : Math.max(0, recClean - deliveredCount);

  if (deliveredPill) deliveredPill.textContent = deliveredCount >= 1000 ? `${(deliveredCount / 1000).toFixed(0)}k delivered` : `${deliveredCount} delivered`;
  if (failedPill) failedPill.textContent = `${failedCount} failed`;
  if (reachedRatio) reachedRatio.textContent = isFailedCamp ? `0 / ${recClean} reached` : `${recClean} / ${recClean} reached`;

  // Sample copy per campaign matching realistic broadcasts
  const sampleMsgs = {
    'New Year Promo 2026': 'Happy New Year! Start 2026 with amazing deals at our store. Get up to 50% off on selected items. Use code NY2026 at checkout. Offer valid until January 31st. Terms and conditions apply.',
    'Black Friday Deals': '🔥 BLACK FRIDAY IS LIVE! Unbeatable price cuts across our entire electronics catalog. First 500 buyers get free nationwide delivery. Shop now: https://klayed.com/bf',
    'Customer Appreciation Week': 'Dear Valued Customer, thank you for choosing Klayed. As a token of our appreciation, here is a ₦2,500 voucher on your next order: THANKS25. Valid until Sunday!',
    'Flash Sale Alert - Electronics': '⚡ FLASH SALE ALERT: 50% OFF high-end smartphones, smartwatches, and headphones for the next 4 hours only! Grab yours before stock runs out.',
    'Monthly Newsletter - January': 'January Digest 📰: Top 5 business trends for 2026, our latest product releases, and customer spotlight of the month. Read the full issue inside.',
    'Valentine Special Offers': 'Spread love this Valentine\'s! ❤️ Surprise your loved ones with bespoke gift boxes and luxury hampers with same-day delivery.',
    'End of Year Clearance': 'Year-End Inventory Clearance Sale! Up to 60% off warehouse items. All sales final. Don\'t miss out on these incredible bargains.',
    'Christmas Greetings Campaign': 'Merry Christmas from all of us at Klayed! 🎄 Wishing you and your family joy, peace, and prosperity this festive season.',
    'Product Launch - Series X': 'Introducing the all-new Series X 🚀 Engineered for unprecedented performance and elegance. Pre-order now to receive exclusive early-bird perks.'
  };

  const messageText = sampleMsgs[campaign.name] || `${campaign.name}: Official WhatsApp broadcast message dispatched to all selected customers.`;
  if (msgBodyEl) msgBodyEl.textContent = messageText;
  if (phoneMsgEl) phoneMsgEl.textContent = messageText;
  if (charsTagEl) charsTagEl.textContent = `${messageText.length} chars`;

  // Draw or redraw the delivery overview donut chart & recipients table
  setTimeout(() => {
    drawCdDonutChart();
    if (!cdRecipientsState.data || cdRecipientsState.data.length === 0) {
      initCdRecipientsData();
    }
    renderCdRecipientsTable();
  }, 40);
}

// Draw the Delivery Overview Segmented Donut Chart for Campaign Details Page (matching User Reference Image 2)
function drawCdDonutChart() {
  const container = document.getElementById('cd-donut-chart-svg');
  if (!container) return;

  const size = 210;
  const center = 105;
  const radius = 76;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;
  const gap = 4.5;

  // Exact metrics matching User Reference Image 2
  // Delivered: 60.12% (11,740), Read: 16.28% (2,480), Pending: 14.50% (411), Failed: 9.10% (199)
  // Total Sent: 12,350, Badge: ↗ 8.2%
  const totalSentEl = document.getElementById('cd-donut-total-sent');
  const badgeEl = document.getElementById('cd-donut-badge');
  const valDelivered = document.getElementById('cd-legend-val-delivered');
  const pctDelivered = document.getElementById('cd-legend-pct-delivered');
  const valRead = document.getElementById('cd-legend-val-read');
  const pctRead = document.getElementById('cd-legend-pct-read');
  const valPending = document.getElementById('cd-legend-val-pending');
  const pctPending = document.getElementById('cd-legend-pct-pending');
  const valFailed = document.getElementById('cd-legend-val-failed');
  const pctFailed = document.getElementById('cd-legend-pct-failed');

  if (totalSentEl) totalSentEl.textContent = '12,350';
  if (badgeEl) badgeEl.textContent = '↗ 8.2%';
  if (valDelivered) valDelivered.textContent = '11,740';
  if (pctDelivered) pctDelivered.textContent = '60.12%';
  if (valRead) valRead.textContent = '2,480';
  if (pctRead) pctRead.textContent = '16.28%';
  if (valPending) valPending.textContent = '411';
  if (pctPending) pctPending.textContent = '14.50%';
  if (valFailed) valFailed.textContent = '199';
  if (pctFailed) pctFailed.textContent = '9.10%';

  // 4 segments on the donut ring matching the segmented flat-cut style and colors of Image 1:
  // Deep Navy Blue (Delivered), Slate Blue (Pending), Brick Red (Failed), Moss Green (Read)
  const segments = [
    { pct: 0.6012, color: '#10359c' },
    { pct: 0.1450, color: '#4361ee' },
    { pct: 0.0910, color: '#9e4747' },
    { pct: 0.1628, color: '#387a5c' }
  ];

  let currentRot = -90;
  let circlesSvg = '';

  segments.forEach(seg => {
    const length = Math.max(0, (seg.pct * circumference) - gap);
    circlesSvg += `
      <circle
        cx="${center}" cy="${center}" r="${radius}"
        fill="transparent"
        stroke="${seg.color}"
        stroke-width="${strokeWidth}"
        stroke-dasharray="${length} ${circumference}"
        transform="rotate(${currentRot} ${center} ${center})"
        stroke-linecap="butt"
      />
    `;
    currentRot += seg.pct * 360;
  });

  container.innerHTML = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display: block; overflow: visible;">
      ${circlesSvg}
    </svg>
  `;
}

redrawDeliveryWaveChart = () => {
  const detailsView = document.getElementById('view-campaign-details');
  if (detailsView && detailsView.classList.contains('active-view')) {
    drawCdDonutChart();
  }
};

function setCdPreviewDevice(device) {
  const mockup = document.getElementById('cd-phone-mockup');
  const btnIos = document.getElementById('btn-cd-device-ios');
  const btnAndroid = document.getElementById('btn-cd-device-android');

  if (!mockup) return;
  if (device === 'android') {
    mockup.classList.remove('is-ios');
    mockup.classList.add('is-android');
    if (btnAndroid) btnAndroid.classList.add('active');
    if (btnIos) btnIos.classList.remove('active');
  } else {
    mockup.classList.remove('is-android');
    mockup.classList.add('is-ios');
    if (btnIos) btnIos.classList.add('active');
    if (btnAndroid) btnAndroid.classList.remove('active');
  }
}

function initCampaignDetailsPage() {
  const backBtn = document.getElementById('btn-cd-page-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // Return to Broadcast Messaging view
      const messagingLink = document.querySelector('.nav-link[data-view="messaging"]');
      if (messagingLink) {
        messagingLink.click();
      } else {
        const detailsView = document.getElementById('view-campaign-details');
        if (detailsView) detailsView.classList.remove('active-view');
        const messagingView = document.getElementById('view-messaging');
        if (messagingView) messagingView.classList.add('active-view');
      }
    });
  }

  // Live time for preview status row
  const timeEl = document.getElementById('cd-phone-status-time');
  const phoneBubbleTime = document.getElementById('cd-page-phone-time');
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  if (timeEl) timeEl.textContent = `${hrs}:${mins}`;
  if (phoneBubbleTime) phoneBubbleTime.textContent = `${hrs}:${mins}`;

  // Draw the delivery overview donut chart
  drawCdDonutChart();

  // Initialize and render the recipient delivery log table (Image 1 added to Image 2)
  if (!cdRecipientsState.data || cdRecipientsState.data.length === 0) {
    initCdRecipientsData();
  }
  renderCdRecipientsTable();

  // Handle window resizing for responsive canvas/SVG
  window.addEventListener('resize', () => {
    if (redrawDeliveryWaveChart) redrawDeliveryWaveChart();
  });

  // URL deep-link support: ?view=campaign-details&campaign=New+Year+Promo+2026
  const params = new URLSearchParams(window.location.search);
  if (params.get('view') === 'campaign-details') {
    const target = params.get('campaign') || 'New Year Promo 2026';
    showCampaignDetailsView(target);
    if (params.get('device') === 'android') {
      setCdPreviewDevice('android');
    }
  }
}

// ==========================================================================
// Campaign Details Recipient Delivery Log Controller (Matching User Reference Image 1)
// ==========================================================================
let cdRecipientsState = {
  searchQuery: '',
  statusFilter: 'all',
  currentPage: 1,
  pageSize: 10,
  data: []
};

function initCdRecipientsData() {
  const baseNumbers = [
    { phone: '08037388632', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:30 AM', details: '-' },
    { phone: '08053437379', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:31 AM', details: '-' },
    { phone: '08068163624', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:30 AM', details: '-' },
    { phone: '08078441750', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:31 AM', details: '-' },
    { phone: '08091317208', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:30 AM', details: '-' },
    { phone: '08105409812', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:31 AM', details: '-' },
    { phone: '08128201892', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:30 AM', details: '-' },
    { phone: '08138061038', status: 'Not Delivered', deliveredAt: '-', details: 'Network timeout', retryable: true },
    { phone: '08147246523', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:30 AM', details: '-' },
    { phone: '08164092300', status: 'Delivered', deliveredAt: '15 Jan 2026 | 11:31 AM', details: '-' }
  ];

  // Seed remaining items up to 100 results (10 pages)
  const additionalPrefixes = ['0802', '0808', '0811', '0815', '0817', '0818', '0901', '0902', '0903', '0905', '0906', '0907', '0908', '0909', '0701', '0702', '0703', '0704', '0705', '0706', '0708'];
  const generatedData = [...baseNumbers.map((item, idx) => ({ id: idx + 1, ...item }))];

  for (let i = 11; i <= 100; i++) {
    const pfx = additionalPrefixes[(i * 3) % additionalPrefixes.length];
    const randDigits = String(1000000 + ((i * 1234567) % 9000000)).slice(0, 7);
    const phone = `${pfx}${randDigits}`;
    const isFailed = i === 18 || i === 34 || i === 47;
    const min = 30 + (i % 20);
    const minStr = String(min).padStart(2, '0');
    
    generatedData.push({
      id: i,
      phone: phone,
      status: isFailed ? 'Not Delivered' : 'Delivered',
      deliveredAt: isFailed ? '-' : `15 Jan 2026 | 11:${minStr} AM`,
      details: isFailed ? (i === 18 ? 'Phone switched off' : (i === 34 ? 'Network timeout' : 'Device unreachable')) : '-',
      retryable: isFailed
    });
  }

  cdRecipientsState.data = generatedData;
}

function renderCdRecipientsTable() {
  const tbody = document.getElementById('cd-recipients-table-body');
  const resultsCountEl = document.getElementById('cd-pagination-results-text');
  const paginationControls = document.getElementById('cd-pagination-buttons');
  if (!tbody) return;

  // Filter
  const q = cdRecipientsState.searchQuery.trim().toLowerCase();
  const filter = cdRecipientsState.statusFilter;

  const filtered = cdRecipientsState.data.filter(item => {
    const matchPhone = !q || item.phone.includes(q);
    const matchStatus = filter === 'all' || item.status.toLowerCase() === filter.toLowerCase();
    return matchPhone && matchStatus;
  });

  const total = filtered.length;
  const pageSize = cdRecipientsState.pageSize;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  
  if (cdRecipientsState.currentPage > totalPages) {
    cdRecipientsState.currentPage = totalPages;
  }
  const currentPage = cdRecipientsState.currentPage;

  if (resultsCountEl) {
    resultsCountEl.textContent = `${total} results`;
  }

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pageItems = filtered.slice(startIdx, endIdx);

  if (pageItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 36px 14px; color: var(--text-muted);">
          No matching recipient records found.
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = pageItems.map(item => {
      const isDelivered = item.status === 'Delivered';
      const badgeClass = isDelivered ? 'delivered' : 'not-delivered';
      
      let actionHtml = '-';
      if (!isDelivered && item.retryable) {
        actionHtml = `
          <button type="button" class="cd-retry-action-btn" onclick="handleCdRetryDelivery(${item.id}, this)">
            <i class="hgi-stroke hgi-arrow-reload-horizontal cd-retry-icon"></i>
            <span>Retry</span>
          </button>
        `;
      }

      return `
        <tr>
          <td class="td-phone">${item.phone}</td>
          <td class="td-status">
            <span class="cd-recipient-badge ${badgeClass}">${item.status}</span>
          </td>
          <td class="td-delivered-at">${item.deliveredAt}</td>
          <td class="td-details">${item.details}</td>
          <td class="td-action">${actionHtml}</td>
        </tr>
      `;
    }).join('');
  }

  // Render Pagination Buttons matching User Reference Image 2: [ < Previous | 1 | 2 | 3 | ... | 8 | 9 | 10 | Next > ]
  if (paginationControls) {
    let paginationHtml = '';
    
    // Previous Button with left chevron
    paginationHtml += `
      <button type="button" class="pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}" onclick="goToCdPage(${currentPage - 1})" aria-label="Previous Page">
        <i class="hgi-stroke hgi-arrow-left-01 pagination-chevron"></i>
        <span>Previous</span>
      </button>
    `;

    // Pages logic matching Image 2
    if (totalPages <= 7) {
      for (let p = 1; p <= totalPages; p++) {
        paginationHtml += `
          <button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToCdPage(${p})">
            ${p}
          </button>
        `;
      }
    } else {
      if (currentPage <= 3) {
        // e.g. 1, 2, 3, ..., 8, 9, 10
        for (let p = 1; p <= 3; p++) {
          paginationHtml += `
            <button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToCdPage(${p})">
              ${p}
            </button>
          `;
        }
        paginationHtml += `<span class="pagination-btn pagination-ellipsis">...</span>`;
        for (let p = totalPages - 2; p <= totalPages; p++) {
          paginationHtml += `
            <button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToCdPage(${p})">
              ${p}
            </button>
          `;
        }
      } else if (currentPage >= totalPages - 2) {
        for (let p = 1; p <= 3; p++) {
          paginationHtml += `
            <button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToCdPage(${p})">
              ${p}
            </button>
          `;
        }
        paginationHtml += `<span class="pagination-btn pagination-ellipsis">...</span>`;
        for (let p = totalPages - 2; p <= totalPages; p++) {
          paginationHtml += `
            <button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="goToCdPage(${p})">
              ${p}
            </button>
          `;
        }
      } else {
        paginationHtml += `
          <button type="button" class="pagination-btn" onclick="goToCdPage(1)">1</button>
          <span class="pagination-btn pagination-ellipsis">...</span>
          <button type="button" class="pagination-btn" onclick="goToCdPage(${currentPage - 1})">${currentPage - 1}</button>
          <button type="button" class="pagination-btn active" onclick="goToCdPage(${currentPage})">${currentPage}</button>
          <button type="button" class="pagination-btn" onclick="goToCdPage(${currentPage + 1})">${currentPage + 1}</button>
          <span class="pagination-btn pagination-ellipsis">...</span>
          <button type="button" class="pagination-btn" onclick="goToCdPage(${totalPages})">${totalPages}</button>
        `;
      }
    }

    // Next Button with right chevron
    paginationHtml += `
      <button type="button" class="pagination-btn pagination-next ${currentPage === totalPages ? 'disabled' : ''}" onclick="goToCdPage(${currentPage + 1})" aria-label="Next Page">
        <span>Next</span>
        <i class="hgi-stroke hgi-arrow-right-01 pagination-chevron"></i>
      </button>
    `;

    paginationControls.innerHTML = paginationHtml;
  }
}

function handleCdRecipientSearch(val) {
  cdRecipientsState.searchQuery = val;
  cdRecipientsState.currentPage = 1;
  const clearBtn = document.getElementById('cd-search-clear');
  if (clearBtn) {
    clearBtn.style.display = val ? 'flex' : 'none';
  }
  renderCdRecipientsTable();
}

function clearCdRecipientSearch() {
  const input = document.getElementById('cd-recipient-search');
  if (input) {
    input.value = '';
    input.focus();
  }
  handleCdRecipientSearch('');
}

function toggleCdStatusDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('cd-status-filter-menu');
  const trigger = document.getElementById('cd-status-filter-trigger');
  if (menu && trigger) {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.classList.remove('open');
      trigger.classList.remove('open');
    } else {
      menu.classList.add('open');
      trigger.classList.add('open');
    }
  }
}

function selectCdStatusFilter(statusVal, labelText) {
  cdRecipientsState.statusFilter = statusVal;
  cdRecipientsState.currentPage = 1;

  const currentLabel = document.getElementById('cd-status-filter-current-label');
  if (currentLabel) currentLabel.textContent = labelText;

  const options = document.querySelectorAll('.cd-filter-option');
  options.forEach(opt => opt.classList.remove('active'));
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }

  const menu = document.getElementById('cd-status-filter-menu');
  const trigger = document.getElementById('cd-status-filter-trigger');
  if (menu) menu.classList.remove('open');
  if (trigger) trigger.classList.remove('open');

  renderCdRecipientsTable();
}

function changeCdPageSize(size) {
  cdRecipientsState.pageSize = parseInt(size, 10) || 10;
  cdRecipientsState.currentPage = 1;
  renderCdRecipientsTable();
}

function goToCdPage(page) {
  cdRecipientsState.currentPage = page;
  renderCdRecipientsTable();
}

function handleCdRetryDelivery(id, btn) {
  const item = cdRecipientsState.data.find(d => d.id === id);
  if (!item || !btn) return;

  btn.classList.add('retrying');
  btn.disabled = true;
  showToast(`Retrying broadcast delivery to ${item.phone}...`);

  setTimeout(() => {
    item.status = 'Delivered';
    item.deliveredAt = 'Just now';
    item.details = '-';
    item.retryable = false;
    renderCdRecipientsTable();
    showToast(`Broadcast delivered successfully to ${item.phone}!`);
  }, 700);
}

// Close status filter dropdown when clicking outside
document.addEventListener('click', (e) => {
  const filterContainer = document.querySelector('.cd-filter-dropdown-container');
  if (filterContainer && !filterContainer.contains(e.target)) {
    const menu = document.getElementById('cd-status-filter-menu');
    const trigger = document.getElementById('cd-status-filter-trigger');
    if (menu) menu.classList.remove('open');
    if (trigger) trigger.classList.remove('open');
  }
});

// ==========================================================================
// Wallets & Billing View Engine (Matching Reference Image)
// ==========================================================================
const fundingHistoryData = [
  {
    id: 'wal-1',
    date: '13 Aug 2026 | 6:12 AM',
    amount: 50000,
    reference: 'WAL-FND-889102',
    status: 'confirmed',
    initiatedBy: 'Oluwaseun Adeyemi'
  },
  {
    id: 'wal-2',
    date: '13 Aug 2026 | 4:12 AM',
    amount: 25000,
    reference: 'WAL-FND-887419',
    status: 'pending',
    initiatedBy: 'Oluwaseun Adeyemi'
  },
  {
    id: 'wal-3',
    date: '11 Aug 2026 | 5:12 AM',
    amount: 100000,
    reference: 'WAL-FND-882310',
    status: 'confirmed',
    initiatedBy: 'Tunde Bakare'
  },
  {
    id: 'wal-4',
    date: '09 Aug 2026 | 7:12 AM',
    amount: 35000,
    reference: 'WAL-FND-879412',
    status: 'confirmed',
    initiatedBy: 'Oluwaseun Adeyemi'
  },
  {
    id: 'wal-5',
    date: '05 Aug 2026 | 11:30 AM',
    amount: 75000,
    reference: 'WAL-FND-874201',
    status: 'confirmed',
    initiatedBy: 'Adewale Balogun'
  },
  {
    id: 'wal-6',
    date: '01 Aug 2026 | 9:45 AM',
    amount: 15000,
    reference: 'WAL-FND-869830',
    status: 'confirmed',
    initiatedBy: 'Oluwaseun Adeyemi'
  }
];

let walletsFilterState = 'all';
let walletsSearchState = '';

function renderFundingHistory() {
  const tbody = document.getElementById('wallets-history-tbody');
  if (!tbody) return;

  const query = (walletsSearchState || '').toLowerCase().trim();
  const filtered = fundingHistoryData.filter(item => {
    // Filter by status tab
    if (walletsFilterState !== 'all' && item.status !== walletsFilterState) {
      return false;
    }
    // Filter by search query
    if (query) {
      const matchRef = item.reference.toLowerCase().includes(query);
      const matchInitiator = item.initiatedBy.toLowerCase().includes(query);
      const matchDate = item.date.toLowerCase().includes(query);
      const matchAmount = item.amount.toString().includes(query);
      return matchRef || matchInitiator || matchDate || matchAmount;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 42px 20px; color: var(--text-muted);">
          <i class="hgi-stroke hgi-search-01" style="font-size: 26px; opacity: 0.4; display: block; margin-bottom: 8px;"></i>
          <span style="font-size: 13.5px; font-weight: 500;">No funding records found</span>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isPending = item.status === 'pending';
    const amountClass = isPending ? 'wallets-amount-pending' : 'wallets-amount-positive';
    const amountFormatted = `+₦${item.amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
    const statusPillClass = isPending ? 'pill-pending' : 'pill-confirmed';
    const statusDotClass = isPending ? 'dot-amber' : 'dot-green';
    const statusLabel = isPending ? 'Pending' : 'Confirmed';

    return `
      <tr>
        <td class="wallets-date-cell">${escapeHtml(item.date)}</td>
        <td class="wallets-amount-cell ${amountClass}">${amountFormatted}</td>
        <td>
          <div class="wallets-reference-wrap">
            <span>${escapeHtml(item.reference)}</span>
            <button type="button" class="btn-copy-ref" onclick="copyText('${escapeHtml(item.reference)}', 'Reference ${escapeHtml(item.reference)} copied!')" title="Copy Reference">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </td>
        <td>
          <span class="wallets-status-pill ${statusPillClass}">
            <span class="badge-dot ${statusDotClass}"></span>
            <span>${statusLabel}</span>
          </span>
        </td>
        <td class="wallets-initiator-cell" style="text-align: right; padding-right: 24px;">${escapeHtml(item.initiatedBy)}</td>
      </tr>
    `;
  }).join('');
}

window.setFundingHistoryFilter = function(filter) {
  walletsFilterState = filter;
  document.querySelectorAll('.wallets-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderFundingHistory();
};

window.handleFundingSearch = function(query) {
  walletsSearchState = query;
  renderFundingHistory();
};

window.copyText = function(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopyText(text, successMsg);
    });
  } else {
    fallbackCopyText(text, successMsg);
  }
};

function fallbackCopyText(text, successMsg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg || 'Copied to clipboard!');
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
  document.body.removeChild(textarea);
}

window.copyAllBankDetails = function() {
  const text = `Bank Name: Providus Bank\nAccount Number: 9928374610\nAccount Name: Herlabytes Technologies / Moniepoint MFB`;
  copyText(text, 'Bank account details copied to clipboard!');
};

window.setQuickFundAmount = function(amount) {
  const amountInput = document.getElementById('fund-input-amount');
  const submitBtn = document.getElementById('btn-fund-submit');
  if (amountInput) {
    amountInput.value = amount;
  }
  if (submitBtn) {
    submitBtn.textContent = `Proceed to Fund ₦${amount.toLocaleString()}`;
  }
  document.querySelectorAll('.fund-chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent.includes(amount.toLocaleString()));
  });
};

function initWalletsPage() {
  renderFundingHistory();

  // Wire input change in fund wallet modal to update submit button text
  const amountInput = document.getElementById('fund-input-amount');
  const submitBtn = document.getElementById('btn-fund-submit');
  if (amountInput && submitBtn) {
    amountInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) || 0;
      submitBtn.textContent = `Proceed to Fund ₦${val.toLocaleString()}`;
      document.querySelectorAll('.fund-chip').forEach(chip => {
        chip.classList.toggle('active', chip.textContent.includes(val.toLocaleString()));
      });
    });
  }

  // Robust Global Funding Form & Button Click Submission Handler
  const formFund = document.getElementById('form-fund-wallet');
  if (formFund) {
    formFund.addEventListener('submit', window.handleFundSubmit);
  }
  if (submitBtn) {
    submitBtn.addEventListener('click', window.handleFundSubmit);
  }
}

// Global robust submission handler for "Proceed to Fund"
let _isSubmittingFund = false;
window.handleFundSubmit = function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }

  // Prevent rapid double invocation
  if (_isSubmittingFund) return false;
  _isSubmittingFund = true;
  setTimeout(() => { _isSubmittingFund = false; }, 600);

  const amountInput = document.getElementById('fund-input-amount');
  let amount = 50000;
  if (amountInput) {
    const parsed = parseFloat(amountInput.value);
    if (!isNaN(parsed) && parsed > 0) {
      amount = parsed;
    }
  }

  const paymentMethodSelect = document.getElementById('fund-payment-method');
  const paymentMethod = paymentMethodSelect ? paymentMethodSelect.value : '';

  // Close the funding modal immediately
  closeModal('modal-fund-wallet');

  // Date string generator
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const day = String(now.getDate()).padStart(2, '0');
  const mon = months[now.getMonth()];
  const yr = now.getFullYear();
  let hrs = now.getHours();
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12 || 12;
  const mins = String(now.getMinutes()).padStart(2, '0');
  const dateStr = `${day} ${mon} ${yr} | ${hrs}:${mins} ${ampm}`;
  const newRef = `WAL-FND-${Math.floor(100000 + Math.random() * 900000)}`;

  // Simulated Payment Failure Mode
  if (paymentMethod === 'failed-test') {
    if (typeof fundingHistoryData !== 'undefined' && Array.isArray(fundingHistoryData)) {
      fundingHistoryData.unshift({
        id: `wal-${Date.now()}`,
        date: dateStr,
        amount: amount,
        reference: newRef,
        status: 'pending',
        initiatedBy: 'Adewale Balogun'
      });
      if (typeof renderFundingHistory === 'function') renderFundingHistory();
    }

    const failedReasonEl = document.getElementById('fund-failed-reason');
    if (failedReasonEl) failedReasonEl.textContent = 'Simulated payment gateway timeout / card declined';

    setTimeout(() => {
      openModal('modal-fund-failed');
    }, 60);
    return false;
  }

  // Successful Flow
  if (typeof state !== 'undefined' && typeof state.walletBalance === 'number') {
    state.walletBalance += amount;
    const formattedBalance = `₦${state.walletBalance.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
    
    const mainBalanceEl = document.getElementById('wallet-main-balance');
    if (mainBalanceEl) mainBalanceEl.textContent = formattedBalance;
    
    const metricBalanceEl = document.getElementById('metric-wallet-balance');
    if (metricBalanceEl) metricBalanceEl.textContent = formattedBalance;
  }

  if (typeof fundingHistoryData !== 'undefined' && Array.isArray(fundingHistoryData)) {
    fundingHistoryData.unshift({
      id: `wal-${Date.now()}`,
      date: dateStr,
      amount: amount,
      reference: newRef,
      status: 'confirmed',
      initiatedBy: 'Adewale Balogun'
    });
    if (typeof renderFundingHistory === 'function') renderFundingHistory();
  }

  const lastUpdatedEl = document.getElementById('wallet-last-updated');
  if (lastUpdatedEl) lastUpdatedEl.textContent = `Updated ${dateStr}`;

  // Populate Success Modal content
  const successAmtEl = document.getElementById('fund-success-amount-display');
  if (successAmtEl) successAmtEl.textContent = `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;

  const receiptAmtEl = document.getElementById('fund-success-receipt-amount');
  if (receiptAmtEl) receiptAmtEl.textContent = `+₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;

  const receiptRefEl = document.getElementById('fund-success-receipt-ref');
  if (receiptRefEl) receiptRefEl.textContent = newRef;

  setTimeout(() => {
    openModal('modal-fund-success');
  }, 60);

  return false;
};

// Global modal helpers for quick triggering / testing
window.openFundSuccessModal = function(amount = 50000) {
  const successAmtEl = document.getElementById('fund-success-amount-display');
  if (successAmtEl) successAmtEl.textContent = `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
  const receiptAmtEl = document.getElementById('fund-success-receipt-amount');
  if (receiptAmtEl) receiptAmtEl.textContent = `+₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
  openModal('modal-fund-success');
};

window.openFundFailedModal = function(reason = 'Payment authorization declined by provider or network timeout') {
  const reasonEl = document.getElementById('fund-failed-reason');
  if (reasonEl) reasonEl.textContent = reason;
  openModal('modal-fund-failed');
};

// ==========================================================================
// Reports Overview Engine (Exact Match to User Reference Screenshots)
// ==========================================================================

const REPORTS_CAMPAIGNS_DATA = [
  { id: 'rep-1', date: '07 Jun 2026 | 3:58 PM', name: 'New Year Promo 2026', status: 'sent', source: 'Group', recipients: 6135, unitCost: 4.92, grossCost: 30184.20 },
  { id: 'rep-2', date: '08 Jun 2026 | 6:58 AM', name: 'Black Friday Deals', status: 'scheduled', source: 'CSV', recipients: 7237, unitCost: 4.66, grossCost: 33724.42 },
  { id: 'rep-3', date: '09 Jun 2026 | 3:50 PM', name: 'Customer Appreciation Week', status: 'sent', source: 'Group', recipients: 1148, unitCost: 5.26, grossCost: 6038.48 },
  { id: 'rep-4', date: '10 Jun 2026 | 5:34 PM', name: 'Flash Sale Alert - Electronics', status: 'failed', source: 'Manual', recipients: 8230, unitCost: 4.47, grossCost: 36788.10 },
  { id: 'rep-5', date: '11 Jun 2026 | 8:47 AM', name: 'Monthly Newsletter - January', status: 'sent', source: 'Group', recipients: 4885, unitCost: 4.82, grossCost: 23545.70 },
  { id: 'rep-6', date: '12 Jun 2026 | 7:16 AM', name: 'Valentine Special Offers', status: 'partial', source: 'CSV', recipients: 5114, unitCost: 3.92, grossCost: 20046.88 },
  { id: 'rep-7', date: '13 Jun 2026 | 2:04 PM', name: 'End of Year Clearance', status: 'sent', source: 'Group', recipients: 5432, unitCost: 4.01, grossCost: 21782.32 },
  { id: 'rep-8', date: '14 Jun 2026 | 5:58 PM', name: 'Christmas Greetings Campaign', status: 'sent', source: 'Mixed', recipients: 2073, unitCost: 4.00, grossCost: 8292.00 },
  { id: 'rep-9', date: '15 Jun 2026 | 6:07 AM', name: 'Product Launch - Series X', status: 'scheduled', source: 'Manual', recipients: 6653, unitCost: 4.80, grossCost: 31934.40 },
  { id: 'rep-10', date: '16 Jun 2026 | 4:27 PM', name: 'Holiday Travel Promo', status: 'failed', source: 'CSV', recipients: 7551, unitCost: 4.02, grossCost: 30355.02 },
  { id: 'rep-11', date: '17 Jun 2026 | 1:29 PM', name: 'Loyalty Rewards Announcement', status: 'sent', source: 'Group', recipients: 2728, unitCost: 4.59, grossCost: 12521.52 },
  { id: 'rep-12', date: '18 Jun 2026 | 4:12 PM', name: 'Weekend Flash Deals', status: 'partial', source: 'Manual', recipients: 4343, unitCost: 5.07, grossCost: 22019.01 },
  { id: 'rep-13', date: '19 Jun 2026 | 12:35 PM', name: 'New Store Opening', status: 'sent', source: 'Group', recipients: 7052, unitCost: 3.99, grossCost: 28137.48 },
  { id: 'rep-14', date: '20 Jun 2026 | 3:03 PM', name: 'Referral Program Launch', status: 'sent', source: 'Group', recipients: 4331, unitCost: 4.18, grossCost: 18103.58 },
  { id: 'rep-15', date: '21 Jun 2026 | 3:41 PM', name: 'Payment Reminder - Due Invoices', status: 'scheduled', source: 'CSV', recipients: 4804, unitCost: 5.36, grossCost: 25749.44 },
  { id: 'rep-16', date: '22 Jun 2026 | 2:16 PM', name: 'Black Friday Follow-Up', status: 'sent', source: 'Group', recipients: 972, unitCost: 4.65, grossCost: 4519.80 },
  { id: 'rep-17', date: '23 Jun 2026 | 7:49 AM', name: 'Service Update Notice', status: 'sent', source: 'Manual', recipients: 1328, unitCost: 3.86, grossCost: 5126.08 },
  { id: 'rep-18', date: '24 Jun 2026 | 8:12 AM', name: 'End of Month Promo', status: 'partial', source: 'Mixed', recipients: 3736, unitCost: 3.72, grossCost: 13897.92 },
  { id: 'rep-19', date: '25 Jun 2026 | 3:41 PM', name: 'Black Friday Early Access', status: 'sent', source: 'CSV', recipients: 7483, unitCost: 4.10, grossCost: 30680.30 },
  { id: 'rep-20', date: '26 Jun 2026 | 6:07 PM', name: 'Customer Survey Invite', status: 'failed', source: 'Group', recipients: 7502, unitCost: 4.00, grossCost: 30008.00 },
  { id: 'rep-21', date: '27 Jun 2026 | 11:20 AM', name: 'VIP Priority Support Announcement', status: 'sent', source: 'Group', recipients: 3200, unitCost: 4.45, grossCost: 14240.00 },
  { id: 'rep-22', date: '28 Jun 2026 | 2:15 PM', name: 'Weekend Cashback Bonanza', status: 'scheduled', source: 'CSV', recipients: 6420, unitCost: 4.20, grossCost: 26964.00 },
  { id: 'rep-23', date: '29 Jun 2026 | 9:30 AM', name: 'Mid-Year Inventory Liquidation', status: 'sent', source: 'Manual', recipients: 5190, unitCost: 4.15, grossCost: 21538.50 },
  { id: 'rep-24', date: '30 Jun 2026 | 4:50 PM', name: 'Q3 Product Roadmap Showcase', status: 'partial', source: 'Mixed', recipients: 4210, unitCost: 5.10, grossCost: 21471.00 },
  { id: 'rep-25', date: '01 Jul 2026 | 8:10 AM', name: 'Back to School Savings Wave', status: 'sent', source: 'Group', recipients: 8120, unitCost: 4.30, grossCost: 34916.00 },
  { id: 'rep-26', date: '02 Jul 2026 | 1:45 PM', name: 'July Customer Delight Drop', status: 'sent', source: 'CSV', recipients: 5890, unitCost: 4.60, grossCost: 27094.00 },
  { id: 'rep-27', date: '03 Jul 2026 | 6:30 PM', name: 'Special Weekend Voucher Code', status: 'scheduled', source: 'Manual', recipients: 2940, unitCost: 4.75, grossCost: 13965.00 },
  { id: 'rep-28', date: '04 Jul 2026 | 10:05 AM', name: 'Merchant Gateway Upgrade Push', status: 'failed', source: 'Mixed', recipients: 1840, unitCost: 4.90, grossCost: 9016.00 },
  { id: 'rep-29', date: '05 Jul 2026 | 3:25 PM', name: 'Lagos Branch Anniversary Promo', status: 'sent', source: 'Group', recipients: 7310, unitCost: 4.12, grossCost: 30117.20 },
  { id: 'rep-30', date: '06 Jul 2026 | 11:40 AM', name: 'Exclusive Platinum Tier Welcome', status: 'sent', source: 'CSV', recipients: 3420, unitCost: 5.25, grossCost: 17955.00 },
  { id: 'rep-31', date: '07 Jul 2026 | 5:15 PM', name: 'Airtime & Data Discount Blast', status: 'partial', source: 'Manual', recipients: 4680, unitCost: 3.95, grossCost: 18486.00 },
  { id: 'rep-32', date: '08 Jul 2026 | 9:00 AM', name: 'Abuja High-Volume Merchant Brief', status: 'sent', source: 'Group', recipients: 6240, unitCost: 4.50, grossCost: 28080.00 },
  { id: 'rep-33', date: '09 Jul 2026 | 2:50 PM', name: 'Cross-Border Payment Release', status: 'scheduled', source: 'CSV', recipients: 5780, unitCost: 4.85, grossCost: 28033.00 },
  { id: 'rep-34', date: '10 Jul 2026 | 7:20 PM', name: 'Cart Abandonment Retargeting', status: 'sent', source: 'Mixed', recipients: 2150, unitCost: 4.40, grossCost: 9460.00 },
  { id: 'rep-35', date: '11 Jul 2026 | 8:35 AM', name: 'Customer Appreciation Double Points', status: 'sent', source: 'Group', recipients: 6980, unitCost: 4.25, grossCost: 29665.00 },
  { id: 'rep-36', date: '12 Jul 2026 | 1:10 PM', name: 'Sunday Super Deal Flash', status: 'failed', source: 'Manual', recipients: 1450, unitCost: 4.05, grossCost: 5872.50 },
  { id: 'rep-37', date: '13 Jul 2026 | 4:40 PM', name: 'Klayed Business Suite Webinar RSVP', status: 'sent', source: 'CSV', recipients: 4120, unitCost: 5.15, grossCost: 21218.00 },
  { id: 'rep-38', date: '14 Jul 2026 | 10:15 AM', name: 'Mid-Month Salary Advance Alert', status: 'scheduled', source: 'Group', recipients: 7850, unitCost: 4.35, grossCost: 34147.50 },
  { id: 'rep-39', date: '15 Jul 2026 | 3:30 PM', name: 'Virtual Dollar Card Zero-Fee Day', status: 'sent', source: 'Mixed', recipients: 5320, unitCost: 4.65, grossCost: 24738.00 },
  { id: 'rep-40', date: '16 Jul 2026 | 6:45 PM', name: 'Late Evening Order Push', status: 'partial', source: 'Manual', recipients: 3180, unitCost: 4.10, grossCost: 13038.00 },
  { id: 'rep-41', date: '17 Jul 2026 | 9:20 AM', name: 'Weekend Early Bird Access', status: 'sent', source: 'Group', recipients: 6740, unitCost: 4.55, grossCost: 30667.00 },
  { id: 'rep-42', date: '18 Jul 2026 | 12:05 PM', name: 'Port Harcourt Retail Hub Launch', status: 'sent', source: 'CSV', recipients: 4920, unitCost: 4.70, grossCost: 23124.00 },
  { id: 'rep-43', date: '19 Jul 2026 | 4:15 PM', name: 'International Money Transfer Slash', status: 'scheduled', source: 'Manual', recipients: 3860, unitCost: 4.80, grossCost: 18528.00 },
  { id: 'rep-44', date: '20 Jul 2026 | 8:50 AM', name: 'Account Security Audit Notice', status: 'sent', source: 'Group', recipients: 8410, unitCost: 4.02, grossCost: 33808.20 },
  { id: 'rep-45', date: '21 Jul 2026 | 2:25 PM', name: 'Kano Regional Partner Meetup', status: 'failed', source: 'Mixed', recipients: 1620, unitCost: 4.35, grossCost: 7047.00 },
  { id: 'rep-46', date: '22 Jul 2026 | 5:40 PM', name: 'Mid-Week Restock Notification', status: 'sent', source: 'CSV', recipients: 5240, unitCost: 4.45, grossCost: 23318.00 },
  { id: 'rep-47', date: '23 Jul 2026 | 11:10 AM', name: 'Loyalty Reward Points Expiry Alert', status: 'partial', source: 'Group', recipients: 4390, unitCost: 4.95, grossCost: 21730.50 },
  { id: 'rep-48', date: '24 Jul 2026 | 3:55 PM', name: 'Weekend BBQ Promo Kickoff', status: 'sent', source: 'Manual', recipients: 2780, unitCost: 4.25, grossCost: 11815.00 },
  { id: 'rep-49', date: '25 Jul 2026 | 7:30 PM', name: 'Saturday Night Exclusive Coupon', status: 'scheduled', source: 'Mixed', recipients: 3640, unitCost: 4.60, grossCost: 16744.00 },
  { id: 'rep-50', date: '26 Jul 2026 | 10:45 AM', name: 'Sunday Supermarket Cashback', status: 'sent', source: 'Group', recipients: 7120, unitCost: 4.18, grossCost: 29761.60 },
  { id: 'rep-51', date: '27 Jul 2026 | 2:10 PM', name: 'Corporate Account Manager Intro', status: 'sent', source: 'CSV', recipients: 1980, unitCost: 5.30, grossCost: 10494.00 },
  { id: 'rep-52', date: '28 Jul 2026 | 6:00 PM', name: 'End of July Clearance Final Notice', status: 'partial', source: 'Manual', recipients: 4570, unitCost: 3.88, grossCost: 17731.60 },
  { id: 'rep-53', date: '29 Jul 2026 | 9:15 AM', name: 'Mobile Banking Upgrade Briefing', status: 'scheduled', source: 'Group', recipients: 6830, unitCost: 4.42, grossCost: 30188.60 },
  { id: 'rep-54', date: '30 Jul 2026 | 1:50 PM', name: 'August Kickoff Sneak Peek', status: 'sent', source: 'Mixed', recipients: 3120, unitCost: 4.75, grossCost: 14820.00 },
  { id: 'rep-55', date: '31 Jul 2026 | 5:30 PM', name: 'Month-End Revenue Wrap Promo', status: 'sent', source: 'CSV', recipients: 5940, unitCost: 4.52, grossCost: 26848.80 }
];

window.reportsTableCurrentPage = 1;
window.reportsTablePageSize = 20;

window.switchReportsSubTab = function(tabName) {
  const overviewBtn = document.getElementById('tab-reports-overview');
  const campaignsBtn = document.getElementById('tab-reports-campaigns');
  const overviewContent = document.getElementById('reports-tab-overview-content');
  const campaignsContent = document.getElementById('reports-tab-campaigns-content');

  if (tabName === 'campaigns') {
    if (overviewBtn) overviewBtn.classList.remove('active');
    if (campaignsBtn) campaignsBtn.classList.add('active');
    if (overviewContent) overviewContent.classList.remove('active');
    if (campaignsContent) campaignsContent.classList.add('active');
    renderReportsCampaignsTable();
  } else {
    if (campaignsBtn) campaignsBtn.classList.remove('active');
    if (overviewBtn) overviewBtn.classList.add('active');
    if (campaignsContent) campaignsContent.classList.remove('active');
    if (overviewContent) overviewContent.classList.add('active');
    setTimeout(() => {
      updateReportsCharts();
    }, 40);
  }
};

window.renderReportsCampaignsTable = function(filterQuery = '') {
  const tbody = document.getElementById('reports-campaigns-tbody');
  if (!tbody) return;

  const q = (filterQuery || '').toLowerCase().trim();
  const filtered = REPORTS_CAMPAIGNS_DATA.filter(item => {
    if (!q) return true;
    return item.name.toLowerCase().includes(q) ||
           item.source.toLowerCase().includes(q) ||
           item.status.toLowerCase().includes(q) ||
           item.date.toLowerCase().includes(q);
  });

  const totalItems = filtered.length;
  const pageSize = window.reportsTablePageSize || 20;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  if (window.reportsTableCurrentPage > totalPages) {
    window.reportsTableCurrentPage = totalPages;
  }
  if (window.reportsTableCurrentPage < 1) {
    window.reportsTableCurrentPage = 1;
  }

  const currentPage = window.reportsTableCurrentPage;
  const startIndex = (currentPage - 1) * pageSize;
  const pageData = filtered.slice(startIndex, startIndex + pageSize);

  if (pageData.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 48px 16px; color: var(--text-muted);">
          <i class="hgi-stroke hgi-search-01" style="font-size: 28px; display: block; margin-bottom: 8px;"></i>
          No campaigns found matching "<strong>${filterQuery}</strong>"
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = pageData.map(c => {
      const statusTitle = c.status.charAt(0).toUpperCase() + c.status.slice(1);
      return `
        <tr>
          <td class="reports-td-date">${c.date}</td>
          <td class="reports-td-campaign">${c.name}</td>
          <td>
            <span class="reports-status-pill status-${c.status}">
              <span class="pill-dot"></span>
              <span>${statusTitle}</span>
            </span>
          </td>
          <td>
            <span class="reports-source-pill source-${c.source.toLowerCase()}">
              <span class="pill-dot"></span>
              <span>${c.source}</span>
            </span>
          </td>
          <td class="reports-td-num">${c.recipients.toLocaleString()}</td>
          <td class="reports-td-unit">₦${c.unitCost.toFixed(2)}</td>
          <td class="reports-td-gross">₦${c.grossCost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td style="text-align: right;">
            <button type="button" class="reports-row-action-btn" title="Options" onclick="showToast('Action menu for ${c.name.replace(/'/g, "\\'")}')">•••</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Update Pagination Controls using Standard Segmented Group (Matching User Image 2)
  renderPaginationControls(
    'reports-pagination-group',
    null,
    { currentPage, totalPages },
    (newPage) => {
      window.reportsTableCurrentPage = newPage;
      renderReportsCampaignsTable(filterQuery);
    }
  );

  // Hook up page size selector
  const pageSizeSelect = document.getElementById('reports-page-size-select');
  if (pageSizeSelect && !pageSizeSelect.dataset.listenerAttached) {
    pageSizeSelect.dataset.listenerAttached = 'true';
    pageSizeSelect.value = window.reportsTablePageSize;
    pageSizeSelect.addEventListener('change', (e) => {
      window.reportsTablePageSize = parseInt(e.target.value, 10) || 20;
      window.reportsTableCurrentPage = 1;
      renderReportsCampaignsTable(filterQuery);
    });
  }
};

window.exportReportsCSV = function() {
  const headers = ['Date', 'Campaign Name', 'Status', 'Source', 'Recipients', 'Unit Cost (NGN)', 'Gross Cost (NGN)'];
  const rows = REPORTS_CAMPAIGNS_DATA.map(c => [
    `"${c.date}"`,
    `"${c.name.replace(/"/g, '""')}"`,
    `"${c.status.toUpperCase()}"`,
    `"${c.source}"`,
    c.recipients,
    c.unitCost.toFixed(2),
    c.grossCost.toFixed(2)
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Klayed_Campaign_Reports_Overview_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (typeof showToast === 'function') {
    showToast('Campaign reports CSV downloaded successfully!');
  }
};

window.recipientsChartMode = window.recipientsChartMode || 'bar'; // 'bar' | 'combo' | 'line'

window.renderRecipientsByMonthChart = function() {
  const canvas = document.getElementById('chart-recipients-by-month');
  if (!canvas) return;

  const parent = canvas.parentElement;
  if (!parent) return;

  const rect = parent.getBoundingClientRect();
  const width = rect.width || 520;
  const height = rect.height || 200;

  if (width <= 0 || height <= 0) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.resetTransform ? ctx.resetTransform() : ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const isDark = document.body.classList.contains('dark-theme');
  const maxVal = 160000;
  const mode = window.recipientsChartMode || 'bar';

  const padding = {
    top: 14 * dpr,
    right: 20 * dpr,
    bottom: 24 * dpr,
    left: 36 * dpr
  };

  const plotW = canvas.width - padding.left - padding.right;
  const plotH = canvas.height - padding.top - padding.bottom;

  // 1. Horizontal dashed gridlines & Y-axis labels matching Image 2
  const ySteps = [0, 40000, 80000, 120000, 160000];
  ctx.lineWidth = 1 * dpr;
  ctx.font = `${10 * dpr}px 'Work Sans', -apple-system, sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.setLineDash([3 * dpr, 3 * dpr]);
  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : '#e5e7eb';
  ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';

  ySteps.forEach(step => {
    const y = padding.top + plotH - (step / maxVal) * plotH;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.stroke();

    const label = step === 0 ? '0' : (step / 1000) + 'K';
    ctx.fillText(label, padding.left - 6 * dpr, y);
  });

  // 2. Data from Image 1: Jun (116k) and Jul (143k)
  const chartItems = [
    { month: 'Jun', label: 'Jun', sent: 116000, delivered: 88624 },
    { month: 'Jul', label: 'Jul', sent: 143256, delivered: 109448 }
  ];

  // Draw 6 vertical dashed grid lines for console aesthetic matching Image 2
  const numVLines = 6;
  for (let i = 0; i < numVLines; i++) {
    const vx = padding.left + (i / (numVLines - 1)) * plotW;
    ctx.beginPath();
    ctx.moveTo(vx, padding.top);
    ctx.lineTo(vx, padding.top + plotH);
    ctx.stroke();
  }

  ctx.setLineDash([]);

  // X positions for the two months (Jun at 28% width, Jul at 72% width)
  const xJun = padding.left + 0.28 * plotW;
  const xJul = padding.left + 0.72 * plotW;
  const xPositions = [xJun, xJul];

  // 3. Draw Area & Line (if in combo or line mode)
  if (mode === 'line' || mode === 'combo') {
    const y0 = padding.top + plotH - (chartItems[0].sent / maxVal) * plotH;
    const y1 = padding.top + plotH - (chartItems[1].sent / maxVal) * plotH;
    const baselineY = padding.top + plotH;

    const areaGrad = ctx.createLinearGradient(0, padding.top, 0, baselineY);
    areaGrad.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.22)' : 'rgba(16, 53, 156, 0.12)');
    areaGrad.addColorStop(1, isDark ? 'rgba(59, 130, 246, 0.01)' : 'rgba(16, 53, 156, 0.01)');

    // Gradient fill below line
    ctx.beginPath();
    ctx.moveTo(xJun, baselineY);
    ctx.lineTo(xJun, y0);
    ctx.lineTo(xJul, y1);
    ctx.lineTo(xJul, baselineY);
    ctx.closePath();
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // Line stroke
    ctx.beginPath();
    ctx.strokeStyle = '#10359c';
    ctx.lineWidth = 2.2 * dpr;
    ctx.lineCap = 'round';
    ctx.moveTo(xJun, y0);
    ctx.lineTo(xJul, y1);
    ctx.stroke();

    // Data points dots
    [ { x: xJun, y: y0 }, { x: xJul, y: y1 } ].forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 2 * dpr;
      ctx.strokeStyle = '#10359c';
      ctx.stroke();
    });
  }

  // 4. Draw Column Bars matching Image 2 (in bar or combo mode)
  if (mode === 'bar' || mode === 'combo') {
    const barWidth = 20 * dpr;
    const radius = 4 * dpr;

    chartItems.forEach((item, idx) => {
      const bx = xPositions[idx];
      const barH = (item.sent / maxVal) * plotH;
      const barTop = padding.top + plotH - barH;
      const barLeft = bx - barWidth / 2;

      // Rounded top column bar matching Image 2
      ctx.fillStyle = '#8ea1b6';
      ctx.beginPath();
      ctx.moveTo(barLeft, barTop + barH);
      ctx.lineTo(barLeft, barTop + radius);
      ctx.quadraticCurveTo(barLeft, barTop, barLeft + radius, barTop);
      ctx.lineTo(barLeft + barWidth - radius, barTop);
      ctx.quadraticCurveTo(barLeft + barWidth, barTop, barLeft + barWidth, barTop + radius);
      ctx.lineTo(barLeft + barWidth, barTop + barH);
      ctx.closePath();
      ctx.fill();

      // Subtle Delivered portion indicator inside column or side indicator
      const delivH = (item.delivered / maxVal) * plotH;
      const delivTop = padding.top + plotH - delivH;
      ctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
      ctx.fillRect(barLeft + 1 * dpr, delivTop, barWidth - 2 * dpr, delivH);
    });
  }

  // 5. Month labels below each column matching typography of Image 2
  ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = `${10.5 * dpr}px 'Work Sans', -apple-system, sans-serif`;

  chartItems.forEach((item, idx) => {
    const bx = xPositions[idx];
    ctx.fillText(item.month, bx, canvas.height - padding.bottom + 6 * dpr);
  });

  // Attach interactive tooltip and toggle button handlers
  const tooltip = document.getElementById('reports-chart-tooltip');
  if (canvas && tooltip && !canvas._hasHoverEvents) {
    canvas._hasHoverEvents = true;

    canvas.addEventListener('mousemove', (e) => {
      const bRect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - bRect.left) * dpr;
      let hoveredIdx = -1;

      xPositions.forEach((pos, i) => {
        if (Math.abs(mouseX - pos) <= 24 * dpr) {
          hoveredIdx = i;
        }
      });

      if (hoveredIdx >= 0) {
        const item = chartItems[hoveredIdx];
        tooltip.innerHTML = `
          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px; font-size: 12px;">${item.month} 2026</div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #8ea1b6;">
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #8ea1b6;"></span>
            Sent: <strong>${item.sent.toLocaleString()}</strong>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #f59e0b; margin-top: 2px;">
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #f59e0b;"></span>
            Delivered: <strong>${item.delivered.toLocaleString()}</strong> (76.4%)
          </div>
        `;
        tooltip.style.display = 'block';

        const tipX = (xPositions[hoveredIdx] / dpr);
        const tipY = (padding.top / dpr) + 10;
        tooltip.style.left = `${tipX}px`;
        tooltip.style.top = `${tipY}px`;
        tooltip.style.transform = hoveredIdx === 0 ? 'translate(8px, 0)' : 'translate(-105%, 0)';
      } else {
        tooltip.style.display = 'none';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  }

  // Toggle button setup (Bar -> Line -> Combo -> Bar)
  const toggleBtn = document.getElementById('btn-toggle-recipients-chart');
  if (toggleBtn && !toggleBtn._hasClickListener) {
    toggleBtn._hasClickListener = true;
    toggleBtn.addEventListener('click', () => {
      if (window.recipientsChartMode === 'bar') {
        window.recipientsChartMode = 'line';
      } else if (window.recipientsChartMode === 'line') {
        window.recipientsChartMode = 'combo';
      } else {
        window.recipientsChartMode = 'bar';
      }
      if (typeof showToast === 'function') {
        showToast(`Switched chart view to ${window.recipientsChartMode.toUpperCase()}`);
      }
      renderRecipientsByMonthChart();
    });
  }
};

window.renderReportsDonutChart = function() {
  const container = document.getElementById('reports-donut-container');
  if (!container) return;

  // Exact data distribution corresponding to Image 2:
  // Delivered (60.12%, Navy #10359c) -> Pending (14.50%, Blue #4361ee) -> Failed (9.10%, Brick Red #9e4747) -> Read (16.28%, Moss Green #387a5c)
  const segments = [
    { fraction: 0.6012, color: '#10359c', label: 'Delivered' },
    { fraction: 0.1450, color: '#4361ee', label: 'Pending' },
    { fraction: 0.0910, color: '#9e4747', label: 'Failed' },
    { fraction: 0.1628, color: '#387a5c', label: 'Read' }
  ];

  const size = 190;
  const center = size / 2;
  const radius = 68;
  const strokeWidth = 22;
  const circumference = 2 * Math.PI * radius;
  const gap = 4.5;

  let currentAngle = -90;
  let circlesSvg = '';

  segments.forEach(seg => {
    const arcLength = Math.max(0, (seg.fraction * circumference) - gap);
    circlesSvg += `
      <circle
        cx="${center}"
        cy="${center}"
        r="${radius}"
        fill="transparent"
        stroke="${seg.color}"
        stroke-width="${strokeWidth}"
        stroke-dasharray="${arcLength} ${circumference}"
        transform="rotate(${currentAngle} ${center} ${center})"
        stroke-linecap="butt"
      />
    `;
    currentAngle += seg.fraction * 360;
  });

  container.innerHTML = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display: block; overflow: visible;">
      ${circlesSvg}
    </svg>
  `;
};

window.sourceChartMode = window.sourceChartMode || 'bar'; // 'bar' | 'combo' | 'line'

window.renderRecipientsBySourceChart = function() {
  const canvas = document.getElementById('chart-recipients-by-source');
  if (!canvas) return;

  const parent = canvas.parentElement;
  if (!parent) return;

  const rect = parent.getBoundingClientRect();
  const width = rect.width || 1040;
  const height = rect.height || 220;

  if (width <= 0 || height <= 0) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.resetTransform ? ctx.resetTransform() : ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const isDark = document.body.classList.contains('dark-theme');
  const maxVal = 140000;
  const mode = window.sourceChartMode || 'bar';

  const padding = {
    top: 16 * dpr,
    right: 28 * dpr,
    bottom: 24 * dpr,
    left: 40 * dpr
  };

  const plotW = canvas.width - padding.left - padding.right;
  const plotH = canvas.height - padding.top - padding.bottom;

  // 1. Horizontal dashed gridlines & Y-axis labels matching Image 2
  const ySteps = [0, 35000, 70000, 105000, 140000];
  ctx.lineWidth = 1 * dpr;
  ctx.font = `${10 * dpr}px 'Work Sans', -apple-system, sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.setLineDash([3 * dpr, 3 * dpr]);
  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : '#e5e7eb';
  ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';

  ySteps.forEach(step => {
    const y = padding.top + plotH - (step / maxVal) * plotH;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.stroke();

    const label = step === 0 ? '0' : (step / 1000) + 'K';
    ctx.fillText(label, padding.left - 6 * dpr, y);
  });

  // 2. Data from Image 1: Group (~128k), Csv (~53k), Manual (~51k), Mixed (~19.5k)
  const sources = [
    { label: 'Group', sent: 128000, delivered: 97792 },
    { label: 'Csv', sent: 53000, delivered: 40492 },
    { label: 'Manual', sent: 51000, delivered: 38964 },
    { label: 'Mixed', sent: 19500, delivered: 14898 }
  ];

  // Draw 8 vertical dashed grid lines for console aesthetic
  const numVLines = 8;
  for (let i = 0; i < numVLines; i++) {
    const vx = padding.left + (i / (numVLines - 1)) * plotW;
    ctx.beginPath();
    ctx.moveTo(vx, padding.top);
    ctx.lineTo(vx, padding.top + plotH);
    ctx.stroke();
  }

  ctx.setLineDash([]);

  // X positions spaced evenly across the chart area
  const xPositions = sources.map((s, idx) => {
    return padding.left + (plotW * ((idx + 0.5) / sources.length));
  });

  // 3. Draw Area & Line (in line or combo mode)
  if (mode === 'line' || mode === 'combo') {
    const baselineY = padding.top + plotH;
    const points = sources.map((s, idx) => {
      const x = xPositions[idx];
      const y = padding.top + plotH * (1 - (s.sent / maxVal));
      return { x, y, label: s.label };
    });

    const areaGradientTop = isDark ? 'rgba(59, 130, 246, 0.22)' : 'rgba(16, 53, 156, 0.12)';
    const areaGradientBottom = isDark ? 'rgba(59, 130, 246, 0.01)' : 'rgba(16, 53, 156, 0.005)';
    const gradient = ctx.createLinearGradient(0, padding.top, 0, baselineY);
    gradient.addColorStop(0, areaGradientTop);
    gradient.addColorStop(1, areaGradientBottom);

    // Area Fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, baselineY);
    ctx.lineTo(points[0].x, points[0].y);

    const cp1x = points[0].x + (points[1].x - points[0].x) * 0.45;
    const cp1y = points[0].y;
    const cp2x = points[0].x + (points[1].x - points[0].x) * 0.55;
    const cp2y = points[1].y;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[1].x, points[1].y);

    const cp3x = points[1].x + (points[2].x - points[1].x) * 0.5;
    const cp3y = points[1].y;
    const cp4x = points[1].x + (points[2].x - points[1].x) * 0.5;
    const cp4y = points[2].y;
    ctx.bezierCurveTo(cp3x, cp3y, cp4x, cp4y, points[2].x, points[2].y);

    const cp5x = points[2].x + (points[3].x - points[2].x) * 0.45;
    const cp5y = points[2].y;
    const cp6x = points[2].x + (points[3].x - points[2].x) * 0.55;
    const cp6y = points[3].y;
    ctx.bezierCurveTo(cp5x, cp5y, cp6x, cp6y, points[3].x, points[3].y);

    ctx.lineTo(points[3].x, baselineY);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line stroke
    ctx.beginPath();
    ctx.strokeStyle = '#10359c';
    ctx.lineWidth = 2.2 * dpr;
    ctx.lineCap = 'round';
    ctx.moveTo(points[0].x, points[0].y);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[1].x, points[1].y);
    ctx.bezierCurveTo(cp3x, cp3y, cp4x, cp4y, points[2].x, points[2].y);
    ctx.bezierCurveTo(cp5x, cp5y, cp6x, cp6y, points[3].x, points[3].y);
    ctx.stroke();

    // Data points dots
    points.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 2 * dpr;
      ctx.strokeStyle = '#10359c';
      ctx.stroke();
    });
  }

  // 4. Draw Column Bars matching Image 2 (in bar or combo mode)
  if (mode === 'bar' || mode === 'combo') {
    const barWidth = 24 * dpr;
    const radius = 4 * dpr;

    sources.forEach((item, idx) => {
      const bx = xPositions[idx];
      const barH = (item.sent / maxVal) * plotH;
      const barTop = padding.top + plotH - barH;
      const barLeft = bx - barWidth / 2;

      // Rounded top column bar matching Image 2
      ctx.fillStyle = '#8ea1b6';
      ctx.beginPath();
      ctx.moveTo(barLeft, barTop + barH);
      ctx.lineTo(barLeft, barTop + radius);
      ctx.quadraticCurveTo(barLeft, barTop, barLeft + radius, barTop);
      ctx.lineTo(barLeft + barWidth - radius, barTop);
      ctx.quadraticCurveTo(barLeft + barWidth, barTop, barLeft + barWidth, barTop + radius);
      ctx.lineTo(barLeft + barWidth, barTop + barH);
      ctx.closePath();
      ctx.fill();

      // Subtle Delivered portion indicator
      const delivH = (item.delivered / maxVal) * plotH;
      const delivTop = padding.top + plotH - delivH;
      ctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
      ctx.fillRect(barLeft + 1 * dpr, delivTop, barWidth - 2 * dpr, delivH);
    });
  }

  // 5. Category labels below each column matching Image 2 typography
  ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = `${10.5 * dpr}px 'Work Sans', -apple-system, sans-serif`;

  sources.forEach((item, idx) => {
    const bx = xPositions[idx];
    ctx.fillText(item.label, bx, canvas.height - padding.bottom + 6 * dpr);
  });

  // Attach interactive tooltip and toggle button handlers
  const tooltip = document.getElementById('reports-source-tooltip');
  if (canvas && tooltip && !canvas._hasHoverEvents) {
    canvas._hasHoverEvents = true;

    canvas.addEventListener('mousemove', (e) => {
      const bRect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - bRect.left) * dpr;
      let hoveredIdx = -1;

      xPositions.forEach((pos, i) => {
        if (Math.abs(mouseX - pos) <= 24 * dpr) {
          hoveredIdx = i;
        }
      });

      if (hoveredIdx >= 0) {
        const item = sources[hoveredIdx];
        tooltip.innerHTML = `
          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px; font-size: 12px;">${item.label}</div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #8ea1b6;">
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #8ea1b6;"></span>
            Sent: <strong>${item.sent.toLocaleString()}</strong>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #f59e0b; margin-top: 2px;">
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #f59e0b;"></span>
            Delivered: <strong>${item.delivered.toLocaleString()}</strong> (76.4%)
          </div>
        `;
        tooltip.style.display = 'block';

        const tipX = (xPositions[hoveredIdx] / dpr);
        const tipY = (padding.top / dpr) + 10;
        tooltip.style.left = `${tipX}px`;
        tooltip.style.top = `${tipY}px`;
        tooltip.style.transform = hoveredIdx === 0 ? 'translate(8px, 0)' : 'translate(-105%, 0)';
      } else {
        tooltip.style.display = 'none';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  }

  // Toggle button setup (Bar -> Line -> Combo -> Bar)
  const toggleBtn = document.getElementById('btn-toggle-source-chart');
  if (toggleBtn && !toggleBtn._hasClickListener) {
    toggleBtn._hasClickListener = true;
    toggleBtn.addEventListener('click', () => {
      if (window.sourceChartMode === 'bar') {
        window.sourceChartMode = 'line';
      } else if (window.sourceChartMode === 'line') {
        window.sourceChartMode = 'combo';
      } else {
        window.sourceChartMode = 'bar';
      }
      if (typeof showToast === 'function') {
        showToast(`Switched Recipients by Source view to ${window.sourceChartMode.toUpperCase()}`);
      }
      renderRecipientsBySourceChart();
    });
  }
};

window.updateReportsCharts = function() {
  const reportsSection = document.getElementById('view-reports');
  if (!reportsSection || (!reportsSection.classList.contains('active-view') && reportsSection.style.display === 'none')) {
    // Section not active yet, wait or render if mounted
  }
  renderRecipientsByMonthChart();
  renderReportsDonutChart();
  renderRecipientsBySourceChart();
};

function initReportsChartLegendDock() {
  // 1. Month Chart (#reports-chart-box)
  const chartBox = document.getElementById('reports-chart-box');
  const btnDockSide = document.getElementById('btn-reports-dock-side');
  const btnDockBottom = document.getElementById('btn-reports-dock-bottom');

  if (chartBox) {
    function setReportsDock(mode) {
      if (mode === 'side') {
        chartBox.classList.add('side-docked');
        localStorage.setItem('klayed_reports_chart_dock', 'side');
      } else {
        chartBox.classList.remove('side-docked');
        localStorage.setItem('klayed_reports_chart_dock', 'bottom');
      }
      setTimeout(() => {
        if (typeof window.renderRecipientsByMonthChart === 'function') {
          window.renderRecipientsByMonthChart();
        }
      }, 40);
    }

    if (btnDockSide) {
      btnDockSide.addEventListener('click', (e) => {
        e.stopPropagation();
        setReportsDock('side');
      });
    }
    if (btnDockBottom) {
      btnDockBottom.addEventListener('click', (e) => {
        e.stopPropagation();
        setReportsDock('bottom');
      });
    }

    const savedDock = localStorage.getItem('klayed_reports_chart_dock');
    if (savedDock === 'bottom') {
      chartBox.classList.remove('side-docked');
    } else {
      chartBox.classList.add('side-docked');
    }
  }

  // 2. Source Chart (#reports-source-chart-box)
  const sourceChartBox = document.getElementById('reports-source-chart-box');
  const btnSourceDockSide = document.getElementById('btn-reports-source-dock-side');
  const btnSourceDockBottom = document.getElementById('btn-reports-source-dock-bottom');

  if (sourceChartBox) {
    function setSourceDock(mode) {
      if (mode === 'side') {
        sourceChartBox.classList.add('side-docked');
        localStorage.setItem('klayed_source_chart_dock', 'side');
      } else {
        sourceChartBox.classList.remove('side-docked');
        localStorage.setItem('klayed_source_chart_dock', 'bottom');
      }
      setTimeout(() => {
        if (typeof window.renderRecipientsBySourceChart === 'function') {
          window.renderRecipientsBySourceChart();
        }
      }, 40);
    }

    if (btnSourceDockSide) {
      btnSourceDockSide.addEventListener('click', (e) => {
        e.stopPropagation();
        setSourceDock('side');
      });
    }
    if (btnSourceDockBottom) {
      btnSourceDockBottom.addEventListener('click', (e) => {
        e.stopPropagation();
        setSourceDock('bottom');
      });
    }

    const savedSourceDock = localStorage.getItem('klayed_source_chart_dock');
    if (savedSourceDock === 'bottom') {
      sourceChartBox.classList.remove('side-docked');
    } else {
      sourceChartBox.classList.add('side-docked');
    }
  }
}

function initReportsPage() {
  // Setup Docking / Collapse interaction on Reports Month chart
  initReportsChartLegendDock();

  // Populate initial campaign reports table
  renderReportsCampaignsTable();

  // Setup Search Input event
  const searchInput = document.getElementById('reports-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      renderReportsCampaignsTable(query);
      // Auto-switch to campaigns table if searching
      if (query.trim().length > 0) {
        const campaignsBtn = document.getElementById('tab-reports-campaigns');
        if (campaignsBtn && !campaignsBtn.classList.contains('active')) {
          switchReportsSubTab('campaigns');
        }
      }
    });
  }

  // Draw initial charts
  setTimeout(() => {
    updateReportsCharts();
  }, 100);

  // Redraw on window resize with debounce
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const reportsSection = document.getElementById('view-reports');
      if (reportsSection && reportsSection.classList.contains('active-view')) {
        updateReportsCharts();
      }
    }, 150);
  });
}

// ==========================================================================
// Team Members Page (Exact Match to Reference Screenshot)
// ==========================================================================

const TEAM_MEMBERS_DATA = [
  {
    id: 'tm-1',
    initials: 'AO',
    name: 'Adebayo Ogunlesi',
    email: 'adebayo@herbalytes.com',
    role: 'Owner',
    roleClass: 'role-owner',
    status: 'Active',
    statusClass: 'status-active',
    joined: 'Nov 1, 2025'
  },
  {
    id: 'tm-2',
    initials: 'CO',
    name: 'Chinaza Okonkwo',
    email: 'chinaza@herbalytes.com',
    role: 'Admin',
    roleClass: 'role-admin',
    status: 'Active',
    statusClass: 'status-active',
    joined: 'Dec 15, 2025'
  },
  {
    id: 'tm-3',
    initials: 'FI',
    name: 'Fatima Ibrahim',
    email: 'fatima@herbalytes.com',
    role: 'Campaign Manager',
    roleClass: 'role-campaign-manager',
    status: 'Active',
    statusClass: 'status-active',
    joined: 'Jan 8, 2026'
  },
  {
    id: 'tm-4',
    initials: 'EN',
    name: 'Emeka Nwosu',
    email: 'emeka@herbalytes.com',
    role: 'Finance Manager',
    roleClass: 'role-finance-manager',
    status: 'Active',
    statusClass: 'status-active',
    joined: 'Jan 20, 2026'
  },
  {
    id: 'tm-5',
    initials: 'TA',
    name: 'Temitope Adeyemi',
    email: 'temitope@herbalytes.com',
    role: 'Report Viewer',
    roleClass: 'role-report-viewer',
    status: 'Disabled',
    statusClass: 'status-disabled',
    joined: 'Feb 1, 2026'
  }
];

const TEAM_PENDING_DATA = [
  {
    id: 'tp-1',
    email: 'chidi.okafor@partner.ng',
    role: 'Campaign Manager',
    roleClass: 'role-campaign-manager',
    sent: 'Feb 5, 2026',
    expires: 'Feb 12, 2026',
    status: 'Pending',
    statusClass: 'status-pending'
  },
  {
    id: 'tp-2',
    email: 'zainab.bello@audit.com',
    role: 'Report Viewer',
    roleClass: 'role-report-viewer',
    sent: 'Feb 7, 2026',
    expires: 'Feb 14, 2026',
    status: 'Pending',
    statusClass: 'status-pending'
  }
];

window.switchTeamSubTab = function(tab) {
  const activeBtn = document.getElementById('tab-team-active');
  const pendingBtn = document.getElementById('tab-team-pending');
  const activeContent = document.getElementById('team-tab-active-content');
  const pendingContent = document.getElementById('team-tab-pending-content');

  if (tab === 'pending') {
    if (activeBtn) activeBtn.classList.remove('active');
    if (pendingBtn) pendingBtn.classList.add('active');
    if (activeContent) activeContent.classList.remove('active');
    if (pendingContent) pendingContent.classList.add('active');
    renderPendingInvitesTable();
  } else {
    if (pendingBtn) pendingBtn.classList.remove('active');
    if (activeBtn) activeBtn.classList.add('active');
    if (pendingContent) pendingContent.classList.remove('active');
    if (activeContent) activeContent.classList.add('active');
    renderTeamMembersTable();
  }
};

window.renderTeamMembersTable = function() {
  const tbody = document.getElementById('team-members-tbody');
  if (!tbody) return;

  tbody.innerHTML = TEAM_MEMBERS_DATA.map(m => `
    <tr>
      <td>
        <div class="team-member-cell">
          <div class="team-member-avatar">${m.initials}</div>
          <span class="team-member-name">${m.name}</span>
        </div>
      </td>
      <td><span class="team-member-email">${m.email}</span></td>
      <td>
        <span class="team-role-pill ${m.roleClass}">${m.role}</span>
      </td>
      <td>
        <span class="team-status-pill ${m.statusClass}">${m.status}</span>
      </td>
      <td><span class="team-member-date">${m.joined}</span></td>
      <td style="text-align: right;">
        <button type="button" class="team-row-action-btn" title="Actions" onclick="toggleTeamMemberActionMenu(event, this, '${m.id}')">•••</button>
      </td>
    </tr>
  `).join('');

  const countBadge = document.getElementById('team-active-count-badge');
  if (countBadge) countBadge.textContent = TEAM_MEMBERS_DATA.length;
};

window.renderPendingInvitesTable = function() {
  const tbody = document.getElementById('team-pending-tbody');
  if (!tbody) return;

  if (TEAM_PENDING_DATA.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 48px 16px; color: var(--text-muted);">
          No pending invitations
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = TEAM_PENDING_DATA.map(p => `
      <tr>
        <td><span class="team-member-email-primary">${p.email}</span></td>
        <td><span class="team-role-pill ${p.roleClass}">${p.role}</span></td>
        <td><span class="team-member-date">${p.sent}</span></td>
        <td><span class="team-member-date">${p.expires}</span></td>
        <td><span class="team-status-pill status-pending">${p.status}</span></td>
        <td style="text-align: right;">
          <button type="button" class="team-row-action-btn" title="Actions" onclick="togglePendingInviteActionMenu(event, this, '${p.id}')">•••</button>
        </td>
      </tr>
    `).join('');
  }

  const countBadge = document.getElementById('team-pending-count-badge');
  if (countBadge) countBadge.textContent = TEAM_PENDING_DATA.length;
};

let currentTeamMemberId = null;
let currentPendingInviteId = null;

window.closeTeamActionMenus = function() {
  const m1 = document.getElementById('team-pending-action-menu');
  const m2 = document.getElementById('team-member-action-menu');
  if (m1) m1.classList.remove('open');
  if (m2) m2.classList.remove('open');
  currentTeamMemberId = null;
  currentPendingInviteId = null;
};

window.togglePendingInviteActionMenu = function(event, btnEl, inviteId) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const menu = document.getElementById('team-pending-action-menu');
  if (!menu) return;

  const mMember = document.getElementById('team-member-action-menu');
  if (mMember) mMember.classList.remove('open');

  if (currentPendingInviteId === inviteId && menu.classList.contains('open')) {
    closeTeamActionMenus();
    return;
  }

  currentPendingInviteId = inviteId;
  const btn = btnEl || (event && (event.currentTarget || event.target));
  if (!btn) return;
  const rect = btn.getBoundingClientRect();

  const menuWidth = 160;
  const leftPos = Math.max(16, rect.right - menuWidth);
  const topPos = rect.bottom + 6;

  menu.style.top = `${topPos}px`;
  menu.style.left = `${leftPos}px`;
  menu.classList.add('open');
};

window.toggleTeamMemberActionMenu = function(event, btnEl, memberId) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const menu = document.getElementById('team-member-action-menu');
  if (!menu) return;

  const mPending = document.getElementById('team-pending-action-menu');
  if (mPending) mPending.classList.remove('open');

  if (currentTeamMemberId === memberId && menu.classList.contains('open')) {
    closeTeamActionMenus();
    return;
  }

  currentTeamMemberId = memberId;
  const member = TEAM_MEMBERS_DATA.find(m => m.id === memberId);
  const disableTextEl = document.getElementById('team-disable-text');
  if (disableTextEl && member) {
    disableTextEl.textContent = member.status === 'Disabled' ? 'Enable' : 'Disable';
  }

  const btn = btnEl || (event && (event.currentTarget || event.target));
  if (!btn) return;
  const rect = btn.getBoundingClientRect();

  const menuWidth = 155;
  const leftPos = Math.max(16, rect.right - menuWidth);
  const topPos = rect.bottom + 6;

  menu.style.top = `${topPos}px`;
  menu.style.left = `${leftPos}px`;
  menu.classList.add('open');
};

// Aliases for compatibility
window.showPendingInviteMenu = function(id) {
  const btn = event ? (event.currentTarget || event.target) : null;
  togglePendingInviteActionMenu(event, btn, id);
};

window.showTeamMemberMenu = function(id) {
  const btn = event ? (event.currentTarget || event.target) : null;
  toggleTeamMemberActionMenu(event, btn, id);
};

// Menu Action Handlers for Pending Invites
window.handleMenuResendInvite = function() {
  if (!currentPendingInviteId) return;
  const id = currentPendingInviteId;
  closeTeamActionMenus();
  resendInvite(id);
};

window.handleMenuRevokeInvite = function() {
  if (!currentPendingInviteId) return;
  const id = currentPendingInviteId;
  closeTeamActionMenus();
  revokeInvite(id);
};

// Menu Action Handlers for Active Members
window.handleMenuEditRole = function() {
  if (!currentTeamMemberId) return;
  const member = TEAM_MEMBERS_DATA.find(m => m.id === currentTeamMemberId);
  closeTeamActionMenus();
  if (!member) return;

  const modal = document.getElementById('modal-edit-member-role');
  const idInput = document.getElementById('edit-role-member-id');
  const nameInput = document.getElementById('edit-role-member-name');
  const roleSelect = document.getElementById('edit-select-role');

  if (idInput) idInput.value = member.id;
  if (nameInput) nameInput.value = `${member.name} (${member.email})`;
  if (roleSelect) roleSelect.value = member.role;

  if (modal) {
    modal.classList.add('open');
    modal.classList.add('active');
  }
};

window.closeEditRoleModal = function() {
  const modal = document.getElementById('modal-edit-member-role');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
};

window.handleEditRoleSubmit = function(e) {
  e.preventDefault();
  const idInput = document.getElementById('edit-role-member-id');
  const roleSelect = document.getElementById('edit-select-role');
  if (!idInput || !roleSelect) return;

  const id = idInput.value;
  const newRole = roleSelect.value;
  const member = TEAM_MEMBERS_DATA.find(m => m.id === id);
  if (!member) return;

  let roleClass = 'role-campaign-manager';
  if (newRole === 'Owner') roleClass = 'role-owner';
  else if (newRole === 'Admin') roleClass = 'role-admin';
  else if (newRole === 'Finance Manager') roleClass = 'role-finance-manager';
  else if (newRole === 'Report Viewer') roleClass = 'role-report-viewer';

  member.role = newRole;
  member.roleClass = roleClass;
  renderTeamMembersTable();
  closeEditRoleModal();
  showToast(`Role updated to ${newRole} for ${member.name}`);
};

window.handleMenuToggleDisable = function() {
  if (!currentTeamMemberId) return;
  const member = TEAM_MEMBERS_DATA.find(m => m.id === currentTeamMemberId);
  closeTeamActionMenus();
  if (!member) return;

  if (member.status === 'Disabled') {
    member.status = 'Active';
    member.statusClass = 'status-active';
    renderTeamMembersTable();
    showToast(`Member ${member.name} enabled`);
  } else {
    member.status = 'Disabled';
    member.statusClass = 'status-disabled';
    renderTeamMembersTable();
    showToast(`Member ${member.name} disabled`);
  }
};

window.handleMenuRemoveMember = function() {
  if (!currentTeamMemberId) return;
  const idx = TEAM_MEMBERS_DATA.findIndex(m => m.id === currentTeamMemberId);
  closeTeamActionMenus();
  if (idx !== -1) {
    const removed = TEAM_MEMBERS_DATA.splice(idx, 1)[0];
    renderTeamMembersTable();
    showToast(`Member ${removed.name} removed`);
  }
};

// Global click listener to close menus when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.team-floating-action-menu') && !e.target.closest('.team-row-action-btn')) {
    closeTeamActionMenus();
  }
});

window.addEventListener('scroll', function() {
  closeTeamActionMenus();
}, true);

window.resendInvite = function(id) {
  const inv = TEAM_PENDING_DATA.find(p => p.id === id);
  if (!inv) return;
  showToast(`Invitation resent to ${inv.email}`);
};

window.revokeInvite = function(id) {
  const idx = TEAM_PENDING_DATA.findIndex(p => p.id === id);
  if (idx !== -1) {
    const revoked = TEAM_PENDING_DATA.splice(idx, 1)[0];
    renderPendingInvitesTable();
    showToast(`Invitation for ${revoked.email} revoked`);
  }
};

window.validateInviteForm = function() {
  const emailInput = document.getElementById('invite-input-email');
  const roleSelect = document.getElementById('invite-select-role');
  const submitBtn = document.getElementById('btn-invite-submit');

  if (!submitBtn) return;

  const email = emailInput ? emailInput.value.trim() : '';
  const role = roleSelect ? roleSelect.value : '';

  // Validate email format and role selection
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const roleValid = Boolean(role && role.trim() !== '');

  const isValid = emailValid && roleValid;
  submitBtn.disabled = !isValid;
  if (isValid) {
    submitBtn.classList.remove('disabled');
  } else {
    submitBtn.classList.add('disabled');
  }
};

window.openInviteMemberModal = function() {
  const modal = document.getElementById('modal-invite-team-member');
  if (modal) {
    modal.classList.add('open');
    modal.classList.add('active');
  }
  validateInviteForm();
};

window.closeInviteMemberModal = function() {
  const modal = document.getElementById('modal-invite-team-member');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
  const form = document.getElementById('form-invite-member');
  if (form) form.reset();
  validateInviteForm();
};

window.handleInviteMemberSubmit = function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('invite-input-email');
  const roleSelect = document.getElementById('invite-select-role');
  const submitBtn = document.getElementById('btn-invite-submit');

  if (submitBtn && submitBtn.disabled) return;

  const email = (emailInput ? emailInput.value : '').trim();
  const role = (roleSelect && roleSelect.value) ? roleSelect.value : 'Campaign Manager';

  if (!email) return;

  let roleClass = 'role-campaign-manager';
  if (role === 'Owner') roleClass = 'role-owner';
  else if (role === 'Admin') roleClass = 'role-admin';
  else if (role === 'Finance Manager') roleClass = 'role-finance-manager';
  else if (role === 'Report Viewer') roleClass = 'role-report-viewer';

  const today = new Date();
  const sentStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const expireDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const expiresStr = expireDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  TEAM_PENDING_DATA.unshift({
    id: `tp-${Date.now()}`,
    email: email,
    role: role,
    roleClass: roleClass,
    sent: sentStr,
    expires: expiresStr,
    status: 'Pending',
    statusClass: 'status-pending'
  });

  closeInviteMemberModal();
  renderPendingInvitesTable();
  switchTeamSubTab('pending');
  showToast(`Invitation sent to ${email} as ${role}!`);
};

function initTeamMembers() {
  renderTeamMembersTable();
  renderPendingInvitesTable();
}

// ==========================================================================
// Settings Page Logic (Profile, Password, WhatsApp Numbers)
// ==========================================================================
const WHATSAPP_NUMBERS_DATA = [
  {
    id: 'wn-1',
    phone: '+2348012345678',
    isPrimary: true,
    label: 'Herbalytes Wellness',
    status: 'Connected',
    statusClass: 'status-connected'
  },
  {
    id: 'wn-2',
    phone: '+2348098765432',
    isPrimary: false,
    label: 'Herbalytes Support',
    status: 'Pending',
    statusClass: 'status-pending'
  },
  {
    id: 'wn-3',
    phone: '+2347055550101',
    isPrimary: false,
    label: 'Herbalytes Orders',
    status: 'Disconnected',
    statusClass: 'status-disconnected'
  }
];

window.copyWorkspaceId = function(id) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(id).then(() => {
      showToast('Workspace ID copied to clipboard');
    }).catch(() => {
      showToast('Workspace ID: ' + id);
    });
  } else {
    showToast('Workspace ID: ' + id);
  }
};

window.switchSettingsTab = function(tabName) {
  // Maintained for backwards compatibility
  if (typeof renderWhatsAppNumbersList === 'function') {
    renderWhatsAppNumbersList();
  }
};

window.renderWhatsAppNumbersList = function() {
  const container = document.getElementById('whatsapp-numbers-list');
  if (!container) return;

  if (WHATSAPP_NUMBERS_DATA.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 20px; color: var(--text-muted);">
        <p style="margin: 0; font-size: 14px;">No WhatsApp numbers linked yet.</p>
      </div>
    `;
    return;
  }

  let html = '';
  WHATSAPP_NUMBERS_DATA.forEach(item => {
    const isDisconnected = item.status === 'Disconnected';

    let actionBtnHtml = '';
    if (isDisconnected) {
      actionBtnHtml = `
        <button type="button" class="wa-action-btn retry" onclick="retryWhatsAppConnection('${item.id}')" title="Retry Connection">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
            <path d="M16 21h5v-5"/>
          </svg>
          <span>Retry</span>
        </button>
      `;
    } else {
      actionBtnHtml = `
        <button type="button" class="wa-action-btn disconnect" onclick="disconnectWhatsAppNumber('${item.id}')" title="Disconnect Number">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
          <span>Disconnect</span>
        </button>
      `;
    }

    html += `
      <div class="wa-number-item">
        <div class="wa-number-info">
          <div class="wa-number-title-row">
            <span class="wa-number-phone">${escapeHtml(item.phone)}</span>
            ${item.isPrimary ? '<span class="wa-primary-badge">PRIMARY</span>' : ''}
          </div>
          <span class="wa-number-label">${escapeHtml(item.label)}</span>
        </div>
        <div class="wa-number-actions">
          <span class="wa-status-pill ${item.statusClass}">
            <span class="wa-status-dot"></span>
            <span>${escapeHtml(item.status)}</span>
          </span>
          ${actionBtnHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
};

window.disconnectWhatsAppNumber = function(id) {
  const item = WHATSAPP_NUMBERS_DATA.find(n => n.id === id);
  if (!item) return;
  item.status = 'Disconnected';
  item.statusClass = 'status-disconnected';
  renderWhatsAppNumbersList();
  showToast(`${item.phone} disconnected`);
};

window.retryWhatsAppConnection = function(id) {
  const item = WHATSAPP_NUMBERS_DATA.find(n => n.id === id);
  if (!item) return;
  showToast(`Reconnecting ${item.phone}...`);
  setTimeout(() => {
    item.status = 'Connected';
    item.statusClass = 'status-connected';
    renderWhatsAppNumbersList();
    showToast(`${item.phone} reconnected successfully!`);
  }, 800);
};

window.toggleSettingsPassword = function(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  if (btnEl) {
    if (isPassword) {
      btnEl.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
          <line x1="2" y1="2" x2="22" y2="22"/>
        </svg>
      `;
    } else {
      btnEl.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      `;
    }
  }
};

window.resetSettingsPasswordForm = function() {
  const form = document.getElementById('form-change-password');
  if (form) form.reset();
};

window.handleSettingsProfileSubmit = function(e) {
  e.preventDefault();
  const nameInput = document.getElementById('settings-profile-name');
  const emailInput = document.getElementById('settings-profile-email');

  const name = nameInput ? nameInput.value.trim() : 'Adebayo Ogunlesi';
  const email = emailInput ? emailInput.value.trim() : 'adebayo@herbalytes.com';

  showToast('Profile information updated successfully!');
};

window.handleSettingsPasswordSubmit = function(e) {
  e.preventDefault();
  const currentPass = document.getElementById('settings-input-current-pass');
  const newPass = document.getElementById('settings-input-new-pass');
  const confirmPass = document.getElementById('settings-input-confirm-pass');

  if (!currentPass || !newPass || !confirmPass) return;

  if (newPass.value.length < 8) {
    showToast('New password must be at least 8 characters long', 'error');
    return;
  }

  if (newPass.value !== confirmPass.value) {
    showToast('New passwords do not match', 'error');
    return;
  }

  resetSettingsPasswordForm();
  showToast('Password updated successfully!');
};

window.openLinkWhatsAppModal = function() {
  const modal = document.getElementById('modal-link-whatsapp');
  if (modal) {
    modal.classList.add('open');
    modal.classList.add('active');
  }
};

window.closeLinkWhatsAppModal = function() {
  const modal = document.getElementById('modal-link-whatsapp');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
  const form = document.getElementById('form-link-whatsapp');
  if (form) form.reset();
};

window.handleLinkWhatsAppSubmit = function(e) {
  e.preventDefault();
  const phoneInput = document.getElementById('link-wa-input-phone');
  const labelInput = document.getElementById('link-wa-input-label');

  const phone = phoneInput ? phoneInput.value.trim() : '';
  const label = labelInput ? labelInput.value.trim() : 'WhatsApp Business';

  if (!phone) return;

  WHATSAPP_NUMBERS_DATA.push({
    id: `wn-${Date.now()}`,
    phone: phone,
    isPrimary: WHATSAPP_NUMBERS_DATA.length === 0,
    label: label,
    status: 'Connected',
    statusClass: 'status-connected'
  });

  closeLinkWhatsAppModal();
  renderWhatsAppNumbersList();
  showToast(`Connected ${phone} successfully!`);
};

function initSettingsPage() {
  renderWhatsAppNumbersList();
}

// ==========================================================================
// Authentication Screen Controller (Klayed / HorizonX Split 2-Card Layout)
// ==========================================================================
let authCurrentMode = 'signup'; // 'signup' | 'login'

window.openAuthScreen = function(mode = 'signup') {
  const authOverlay = document.getElementById('auth-screen');
  if (!authOverlay) return;

  authCurrentMode = mode;
  updateAuthScreenUI();

  authOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-focus appropriate input after animation
  setTimeout(() => {
    const focusTarget = authCurrentMode === 'signup'
      ? document.getElementById('auth-input-name')
      : document.getElementById('auth-input-email');
    if (focusTarget) focusTarget.focus();
  }, 150);
};

window.closeAuthScreen = function() {
  const authOverlay = document.getElementById('auth-screen');
  if (!authOverlay) return;

  authOverlay.classList.remove('open');
  document.body.style.overflow = '';
};

window.toggleAuthMode = function() {
  authCurrentMode = authCurrentMode === 'signup' ? 'login' : 'signup';
  updateAuthScreenUI();
};

function updateAuthScreenUI() {
  const isSignUp = authCurrentMode === 'signup';

  const titleEl = document.getElementById('auth-title');
  const subtitleEl = document.getElementById('auth-subtitle');
  const nameField = document.getElementById('auth-field-name');
  const companyField = document.getElementById('auth-field-company');
  const pwInput = document.getElementById('auth-input-password');
  const termsText = document.getElementById('auth-checkbox-text');
  const forgotLink = document.getElementById('auth-forgot-link');
  const btnLabel = document.getElementById('auth-btn-label');
  const footerPrompt = document.getElementById('auth-footer-prompt');
  const toggleBtn = document.getElementById('auth-toggle-mode-btn');
  const themeLabel = document.getElementById('auth-theme-label');

  if (titleEl) {
    titleEl.textContent = isSignUp ? 'Create your account' : 'Welcome to Klayed!';
  }
  
  if (subtitleEl) {
    subtitleEl.textContent = isSignUp 
      ? 'Set up your workspace to start sending campaigns.' 
      : 'Sign in to your merchant account';
  }

  if (nameField) {
    nameField.style.display = isSignUp ? 'block' : 'none';
  }

  if (companyField) {
    companyField.style.display = isSignUp ? 'block' : 'none';
  }

  if (pwInput) {
    pwInput.placeholder = isSignUp ? 'At least 10 characters' : 'Password';
  }

  if (termsText) {
    termsText.innerHTML = isSignUp
      ? 'I agree to the <a href="#" onclick="event.preventDefault(); showToast(\'Klayed Terms of Service\');">Terms of Service</a> and <a href="#" onclick="event.preventDefault(); showToast(\'Klayed Privacy Policy\');">Privacy Policy</a>'
      : 'Remember me on this browser';
  }

  if (forgotLink) {
    forgotLink.style.display = isSignUp ? 'none' : 'inline-block';
  }

  if (btnLabel) {
    btnLabel.textContent = isSignUp ? 'Create account' : 'Sign In';
  }

  if (footerPrompt) {
    footerPrompt.textContent = isSignUp ? 'Already have an account?' : "Don't have an account?";
  }

  if (toggleBtn) {
    toggleBtn.textContent = isSignUp ? 'Sign in' : 'Sign up';
  }

  if (themeLabel) {
    const isDark = document.body.classList.contains('dark-theme');
    themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }
}

window.toggleAuthPasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input || !btn) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  const iconOpen = btn.querySelector('.icon-eye-open');
  const iconClosed = btn.querySelector('.icon-eye-closed');

  if (iconOpen && iconClosed) {
    iconOpen.style.display = isPassword ? 'none' : 'block';
    iconClosed.style.display = isPassword ? 'block' : 'none';
  }
};

window.handleAuthSubmit = function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('auth-input-name');
  const emailInput = document.getElementById('auth-input-email');
  const companyInput = document.getElementById('auth-input-company');
  const pwInput = document.getElementById('auth-input-password');
  const termsCheckbox = document.getElementById('auth-checkbox-terms');
  const submitBtn = document.getElementById('auth-btn-submit');
  const btnLabel = document.getElementById('auth-btn-label');

  const fullName = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const companyName = companyInput ? companyInput.value.trim() : '';
  const pw = pwInput ? pwInput.value : '';

  if (authCurrentMode === 'signup') {
    if (!fullName) {
      showToast('Please enter your full name');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!companyName) {
      showToast('Please enter your company name');
      if (companyInput) companyInput.focus();
      return;
    }

    if (!pw || pw.length < 10) {
      showToast('Password must be at least 10 characters');
      if (pwInput) pwInput.focus();
      return;
    }

    if (termsCheckbox && !termsCheckbox.checked) {
      showToast('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
  } else {
    // Sign in / Login
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!pw || pw.length < 6) {
      showToast('Please enter your password');
      if (pwInput) pwInput.focus();
      return;
    }
  }

  // Loading animation on submit button
  if (submitBtn && btnLabel) {
    submitBtn.disabled = true;
    const originalText = btnLabel.textContent;
    btnLabel.textContent = authCurrentMode === 'signup' ? 'Creating account...' : 'Signing in...';

    setTimeout(() => {
      submitBtn.disabled = false;
      btnLabel.textContent = originalText;
      closeAuthScreen();

      // Greeting based on input
      if (authCurrentMode === 'signup') {
        showToast(`Welcome to Klayed, ${fullName}! Your ${companyName} workspace is ready.`);
      } else {
        const username = email.split('@')[0];
        const displayName = username.charAt(0).toUpperCase() + username.slice(1);
        showToast(`Welcome back to Klayed, ${displayName}!`);
      }
    }, 650);
  }
};

window.toggleDashboardTheme = function() {
  const isDark = document.body.classList.contains('dark-theme');
  if (typeof applyTheme === 'function') {
    applyTheme(!isDark);
  } else {
    document.body.classList.toggle('dark-theme');
  }

  const themeLabel = document.getElementById('auth-theme-label');
  if (themeLabel) {
    const updatedDark = document.body.classList.contains('dark-theme');
    themeLabel.textContent = updatedDark ? 'Light Mode' : 'Dark Mode';
  }
};

// Authentication Screen Initialization & Deep Link Routing
document.addEventListener('DOMContentLoaded', () => {
  // Check URL query parameters or hash to automatically open auth screen
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view');
    const authParam = urlParams.get('auth');
    const hash = window.location.hash;

    if (viewParam === 'login' || hash === '#login') {
      openAuthScreen('login');
    } else if (viewParam === 'signup' || authParam === 'true' || hash === '#signup' || hash === '#auth') {
      openAuthScreen('signup');
    }
  } catch (err) {
    console.warn('Auth URL param check error:', err);
  }
});



