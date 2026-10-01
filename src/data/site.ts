import type { ImageMetadata } from 'astro';

import landClearing from '../assets/images/land-clearing.jpg';
import forestryMulching from '../assets/images/forestry-mulching.jpg';
import treeRemoval from '../assets/images/tree-removal.jpg';
import stumpRemoval from '../assets/images/stump-removal.jpg';
import brushClearing from '../assets/images/brush-clearing.jpg';
import sitePrep from '../assets/images/site-prep.jpg';

export const site = {
  name: 'Red Oak Land Clearing',
  shortName: 'Red Oak',
  tagline: 'Clearing the way for what’s next.',
  phone: '(555) 214-7730',
  phoneHref: 'tel:+15552147730',
  email: 'info@redoaklandclearing.com',
  address: '4120 County Road 9, Pine Ridge, TX 75000',
  city: 'Pine Ridge',
  region: 'East Texas',
  hours: [
    { days: 'Mon – Fri', time: '7:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  founded: 2009,
  serviceAreas: [
    'Pine Ridge',
    'Cedar Creek',
    'Hollis County',
    'Lakeview',
    'Marshall Springs',
    'Oak Hollow',
    'Brennan',
    'Fairfield',
  ],
  social: {
    facebook: '#',
    instagram: '#',
    google: '#',
  },
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  icon: string;
  benefits: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    short: 'Full lot and acreage clearing — trees, brush, stumps and debris — so you’re ready to build, farm or enjoy.',
    intro:
      'Whether you’re starting a new home site, opening up pasture, or reclaiming overgrown family land, we clear it right the first time. We remove trees, brush and stumps, haul or mulch the debris, and leave you with a clean, usable piece of ground.',
    image: landClearing,
    imageAlt: 'Bulldozer clearing brush through a stand of pine trees',
    icon: 'dozer',
    benefits: [
      'Selective or complete clearing — you choose what stays',
      'Debris hauled off, burned (where permitted) or mulched on site',
      'Equipment sized for small lots up to 100+ acre tracts',
      'Minimal soil disturbance and erosion-conscious practices',
    ],
    idealFor: ['New home sites', 'Pasture & farmland', 'Commercial development', 'Hunting land'],
    faqs: [
      {
        q: 'How long does it take to clear an acre?',
        a: 'Most wooded acres take one to two days depending on tree density, terrain and how much debris needs to be hauled. We’ll give you a realistic timeline with your estimate.',
      },
      {
        q: 'Can you leave certain trees standing?',
        a: 'Absolutely. Walk the property with us and flag what you want to keep — big oaks, shade trees, fence lines — and we’ll work around them.',
      },
    ],
  },
  {
    slug: 'forestry-mulching',
    title: 'Forestry Mulching',
    short: 'One machine cuts, grinds and spreads brush and small trees into nutrient-rich mulch. No burn piles, no hauling.',
    intro:
      'Forestry mulching is the fastest, cleanest way to reclaim overgrown land. Our mulching machines grind brush, saplings and small trees right where they stand, leaving a natural layer of mulch that protects the soil and suppresses regrowth.',
    image: forestryMulching,
    imageAlt: 'Forestry machine working in a pine stand',
    icon: 'leaf',
    benefits: [
      'No burning or hauling — debris becomes protective mulch',
      'Prevents erosion and retains soil moisture',
      'Low ground impact compared to traditional clearing',
      'Great for trails, fence lines and wildlife habitat',
    ],
    idealFor: ['Overgrown acreage', 'Trails & firebreaks', 'Fence lines', 'Wildlife food plots'],
    faqs: [
      {
        q: 'What size trees can a mulcher handle?',
        a: 'Our mulchers handle trees up to about 8 inches in diameter with ease. Larger trees are felled and processed separately.',
      },
      {
        q: 'Is mulching better than bulldozing?',
        a: 'For understory and brush, often yes — it’s faster, cheaper, and leaves your topsoil in place. For full build-ready sites, we usually combine both.',
      },
    ],
  },
  {
    slug: 'tree-removal',
    title: 'Tree Removal',
    short: 'Safe removal of dead, leaning or unwanted trees — from single hazard trees to whole stands.',
    intro:
      'A dead or leaning tree near your home, barn or fence line is an accident waiting to happen. Our experienced crew safely fells and removes trees of any size, cleans up completely, and can cut the wood to firewood length if you’d like to keep it.',
    image: treeRemoval,
    imageAlt: 'Arborist cutting a tree with a chainsaw in the woods',
    icon: 'tree',
    benefits: [
      'Hazard, storm-damaged and dead tree removal',
      'Controlled felling near homes and structures',
      'Firewood cutting and log stacking on request',
      'Fully insured crew with professional-grade equipment',
    ],
    idealFor: ['Storm damage', 'Dead or diseased trees', 'Trees near structures', 'View clearing'],
    faqs: [
      {
        q: 'Do you offer emergency storm service?',
        a: 'Yes. After major storms we prioritize downed trees on homes, driveways and fence lines. Call us directly for the fastest response.',
      },
      {
        q: 'Can I keep the wood?',
        a: 'Of course. We can cut it to firewood length and stack it wherever you’d like, or haul it all away — your call.',
      },
    ],
  },
  {
    slug: 'stump-removal',
    title: 'Stump Grinding & Removal',
    short: 'Get rid of unsightly stumps for good. We grind below grade so you can mow, plant or build.',
    intro:
      'Old stumps are trip hazards, mower-breakers and termite magnets. We grind stumps well below ground level or pull them out completely with the root ball, then backfill so the ground is ready for whatever comes next.',
    image: stumpRemoval,
    imageAlt: 'Large tree stump in a cleared field with pine trees beyond',
    icon: 'stump',
    benefits: [
      'Grinding 6–12 inches below grade',
      'Full root-ball extraction for building sites',
      'Backfill and leveling included',
      'Single stumps or entire cleared fields',
    ],
    idealFor: ['Yards & lawns', 'Pasture', 'Building pads', 'Previously logged land'],
    faqs: [
      {
        q: 'Grinding or full removal — which do I need?',
        a: 'If you’re planting grass or a garden, grinding is perfect. If you’re pouring a foundation or driveway, we recommend full extraction.',
      },
      {
        q: 'What happens to the grindings?',
        a: 'We can leave them as mulch, use them to backfill the hole, or haul them off. Most folks love the free mulch.',
      },
    ],
  },
  {
    slug: 'brush-clearing',
    title: 'Brush & Underbrush Clearing',
    short: 'Open up your woods, restore views and reduce fire risk by clearing thick underbrush and invasive growth.',
    intro:
      'Thick brush, yaupon, briars and invasive species can swallow a property fast. We clear the understory while preserving your healthy mature trees — giving you a clean, park-like look, better visibility and less fuel for wildfires.',
    image: brushClearing,
    imageAlt: 'Excavator with grapple clearing branches in a grassy field',
    icon: 'brush',
    benefits: [
      'Selective underbrush removal, keeps mature trees',
      'Invasive species control (yaupon, privet, cedar)',
      'Wildfire fuel reduction and defensible space',
      'Restores views and makes land walkable again',
    ],
    idealFor: ['Wooded homesites', 'Fire prevention', 'Hunting property', 'Ranch maintenance'],
    faqs: [
      {
        q: 'Will the brush just grow back?',
        a: 'Some regrowth is natural, but mulching and periodic maintenance keep it under control. We offer affordable maintenance visits every 1–2 years.',
      },
      {
        q: 'Can you work around my existing trees?',
        a: 'Yes — selective clearing is one of our specialties. We’re careful around root zones and trunks.',
      },
    ],
  },
  {
    slug: 'site-prep',
    title: 'Site Prep & Grading',
    short: 'Build-ready pads, driveways and level ground. We take your land from raw to ready.',
    intro:
      'Once the land is cleared, we can take it the rest of the way. Our dirt work crew handles house and barn pads, driveways, culverts, drainage and finish grading so your builder can get started right away.',
    image: sitePrep,
    imageAlt: 'Skid steer loader moving red dirt in a wooded area',
    icon: 'grade',
    benefits: [
      'House, shop and barn pads',
      'Driveways, culverts and drainage',
      'Rough and finish grading',
      'Coordination with your builder and inspectors',
    ],
    idealFor: ['New construction', 'Driveways', 'Drainage problems', 'Barns & shops'],
    faqs: [
      {
        q: 'Do you bring in fill dirt?',
        a: 'Yes. We can source and haul select fill, base material and topsoil as needed for your pad or driveway.',
      },
      {
        q: 'Can you work with my builder?',
        a: 'We do it all the time. We’ll coordinate pad elevations and timing directly with your builder to keep the project on track.',
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'They cleared four acres of yaupon and cedar on our place in two days. Showed up when they said, left it spotless, and the price was exactly what they quoted. Couldn’t ask for better.',
    name: 'Darlene M.',
    location: 'Cedar Creek',
  },
  {
    quote:
      'Had a big dead oak leaning toward the house after the spring storms. Red Oak had it down safely the next morning. These guys are the real deal — honest, friendly and they know their stuff.',
    name: 'Travis & Kelly R.',
    location: 'Pine Ridge',
  },
  {
    quote:
      'We hired them to clear and pad our new home site. They worked right alongside our builder and saved us weeks. We’ll be recommending them to everyone we know.',
    name: 'Marcus J.',
    location: 'Lakeview',
  },
];
