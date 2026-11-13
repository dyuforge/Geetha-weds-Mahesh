export type WeddingThemeId = 'temple-arch' | 'gopuram-lotus' | 'courtyard-lamps';

export interface ThemeConfig {
  id: WeddingThemeId;
  name: string;
  subtitle: string;
  invocation: string;
  invocationMeaning: string;
  bgImage: string;
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  accentColor: string;
  secondaryAccent: string;
  borderGlow: string;
  architectureLabel: string;
  floralNote: string;
}

export interface CeremonyEvent {
  id: string;
  side: 'bride' | 'groom' | 'both';
  sideLabel: string;
  name: string;
  hindiTitle: string;
  date: string;
  time: string;
  venueArea: string;
  mapUrl?: string;
  dressCode: string;
  description: string;
  accentColor: string;
  badgeColor: string;
  iconType: 'haldi' | 'mehendi' | 'sangeet' | 'muhurtham' | 'reception';
}

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  caption: string;
  dateLocation: string;
  imageUrl: string;
  fallbackScene: 'portrait' | 'prewedding' | 'haldi' | 'mehendi' | 'traditional';
  aspectLabel: string;
}

export interface WeddingVideoConfig {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

export interface VenueDetails {
  title: string;
  eventLabel: string;
  dateTimeLabel: string;
  name: string;
  hallName: string;
  addressLine1: string;
  addressLine2: string;
  cityStatePin: string;
  landmark: string;
  googleMapsUrl: string;
  hospitalityNote: string;
}

export interface SideScheduleItem {
  date: string;
  dayLabel: string;
  event: string;
  time: string;
  venue: string;
  mapUrl?: string;
  iconType: 'haldi' | 'mehendi' | 'sangeet' | 'muhurtham' | 'reception';
  bgImage?: string;
}

export interface WeddingData {
  bride: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  weddingDate: {
    displayDate: string;
    shortDate: string;
    isoDateTime: string; // Used for live countdown
    hinduCalendarDate: string;
  };
  muhurtham: {
    timeWindow: string;
    lagna: string;
    nakshatra: string;
    auspiciousNote: string;
  };
  venue: VenueDetails;
  receptionVenue: VenueDetails;
  brideSideSchedule: SideScheduleItem[];
  groomSideSchedule: SideScheduleItem[];
  rsvp: {
    whatsappNumber: string;
    displayPhone: string;
    contactPerson: string;
    rsvpDeadline: string;
    defaultMessage: string;
  };
  ceremonies: CeremonyEvent[];
  gallery: GalleryPhoto[];
  video: WeddingVideoConfig;
  themes: Record<WeddingThemeId, ThemeConfig>;
}

export const defaultWeddingData: WeddingData = {
  groom: {
    firstName: 'Mahesh',
    fullName: 'Sriramula Umamaheswara Chary',
    parents: {
      father: 'Sri Sriramula Srinivasa Chary',
      mother: 'Smt. Sriramula Kamakshi',
      familyOrigin: 'Sriramula Vari Kutumbam',
    },
    bio: 'With the divine blessings of elders and sacred traditions, stepping into a joyous new chapter of life.',
  },
  bride: {
    firstName: 'Geetha',
    fullName: 'Rangu Geetha Madhuri',
    parents: {
      father: 'Sri Rangu Prabhakara Rao',
      mother: 'Smt. Rangu Bhagya Lakshmi',
      familyOrigin: 'Rangu Vari Kutumbam',
    },
    bio: 'Rooted in love, grace, and cherished family values, beginning a sacred journey of togetherness.',
  },
  weddingDate: {
    displayDate: 'Saturday, 12th December 2026',
    shortDate: '12 • 12 • 2026',
    isoDateTime: '2026-12-12T19:29:00+05:30',
    hinduCalendarDate: 'December 12th, Saturday at 7:29 PM IST',
  },
  muhurtham: {
    timeWindow: '07:29 PM IST',
    lagna: 'Subha Muhurtham • Saturday Evening',
    nakshatra: 'Kalyana Vaibhogam',
    auspiciousNote: 'Jeelakarra Bellam, Mangalya Dharanam & Talambralu under the sacred Kalyana Mandapam',
  },
  venue: {
    title: 'Wedding Venue (Pelli)',
    eventLabel: 'Subh Muhurtham • Dec 12th, Saturday at 7:29 PM',
    dateTimeLabel: 'Saturday, 12th December 2026 • 7:29 PM',
    name: 'ASR Convention',
    hallName: 'ASR Convention Hall',
    addressLine1: 'Lalpuram',
    addressLine2: 'Guntur District',
    cityStatePin: 'Lalpuram, Guntur, Andhra Pradesh',
    landmark: 'Lalpuram, Guntur',
    googleMapsUrl: 'https://share.google/EyIE2Beb1kxANXDZo',
    hospitalityNote: 'We cordially invite you and your family to grace the wedding ceremony and bless the newlyweds.',
  },
  receptionVenue: {
    title: 'Vratham & Reception Venue',
    eventLabel: 'Vratham & Reception • Dec 14th at 11:00 AM',
    dateTimeLabel: 'Monday, 14th December 2026 • 11:00 AM',
    name: 'Raja Rani Function Hall',
    hallName: 'Raja Rani Function Hall',
    addressLine1: 'Jangareddygudem',
    addressLine2: 'Eluru / West Godavari Region',
    cityStatePin: 'Jangareddygudem, Andhra Pradesh',
    landmark: 'Raja Rani Function Hall, Jangareddygudem',
    googleMapsUrl: 'https://share.google/O2Z9t337pE3JohHuU',
    hospitalityNote: 'Join us for the sacred Satyanarayana Swamy Vratham followed by the Grand Wedding Reception & Lunch.',
  },
  brideSideSchedule: [
    {
      date: 'Dec 10, 2026',
      dayLabel: 'Thursday',
      event: 'Pelli Kuthuru & Haldi',
      time: '8:05 AM',
      venue: 'At Our Residence',
      mapUrl: 'https://maps.app.goo.gl/QajhXv9KGaz1VBBy5',
      iconType: 'haldi',
      bgImage: './backgrounds/event-haldi.jpg',
    },
    {
      date: 'Dec 11, 2026',
      dayLabel: 'Friday',
      event: 'Sangeeth',
      time: '6:00 PM',
      venue: 'At Our Residence',
      mapUrl: 'https://maps.app.goo.gl/QajhXv9KGaz1VBBy5',
      iconType: 'sangeet',
      bgImage: './backgrounds/event-sangeeth.jpg',
    },
    {
      date: 'Dec 12, 2026',
      dayLabel: 'Saturday',
      event: 'Kalyanam',
      time: '7:29 PM',
      venue: 'ASR Convention, Lalpuram, Guntur',
      mapUrl: 'https://share.google/EyIE2Beb1kxANXDZo',
      iconType: 'muhurtham',
      bgImage: './backgrounds/event-marriage.jpg',
    },
    {
      date: 'Dec 14, 2026',
      dayLabel: 'Monday',
      event: 'Vratham & Reception',
      time: '11:00 AM',
      venue: 'Raja Rani Function Hall, Jangareddygudem',
      mapUrl: 'https://share.google/O2Z9t337pE3JohHuU',
      iconType: 'reception',
      bgImage: './backgrounds/event-reception.jpg',
    },
  ],
  groomSideSchedule: [
    {
      date: 'Dec 10, 2026',
      dayLabel: 'Thursday',
      event: 'Pelli Koduku & Haldi Function',
      time: '8:00 AM Onwards',
      venue: 'At Our Residence',
      iconType: 'haldi',
    },
    {
      date: 'Dec 12, 2026',
      dayLabel: 'Saturday',
      event: 'Pelli Koduku & Pelli (Wedding)',
      time: '7:29 PM',
      venue: 'ASR Convention, Lalpuram, Guntur',
      mapUrl: 'https://share.google/EyIE2Beb1kxANXDZo',
      iconType: 'muhurtham',
    },
    {
      date: 'Dec 14, 2026',
      dayLabel: 'Monday',
      event: 'Vratham & Reception',
      time: '11:00 AM',
      venue: 'Raja Rani Function Hall, Jangareddygudem',
      mapUrl: 'https://share.google/O2Z9t337pE3JohHuU',
      iconType: 'reception',
    },
  ],
  rsvp: {
    whatsappNumber: '',
    displayPhone: 'Sriramula & Rangu Families',
    contactPerson: 'Sriramula & Rangu Families',
    rsvpDeadline: 'December 10, 2026',
    defaultMessage:
      'Namaste! 🙏 With immense joy, we confirm our presence at the Wedding & Reception celebrations of Mahesh (Sriramula Umamaheswara Chary) & Geetha (Rangu Geetha Madhuri) on 12th & 14th December 2026.',
  },
  ceremonies: [
    {
      id: 'haldi-bride',
      side: 'bride',
      sideLabel: 'Bride’s Side • Pelli Kuthuru',
      name: 'Pelli Kuthuru & Haldi Function',
      hindiTitle: 'పెళ్లి కూతురు మరియు పసుపు వేడుక',
      date: 'Thursday, 10th December 2026',
      time: '08:05 AM',
      venueArea: 'At Our Residence',
      dressCode: 'Traditional Yellow, Marigold & Festive Ethnic Wear',
      description:
        'Auspicious morning Pelli Kuthuru ceremony and sacred turmeric (Haldi) blessings with family and loved ones at our residence.',
      accentColor: '#D97706',
      badgeColor: 'from-amber-100/90 to-yellow-50/90',
      iconType: 'haldi',
    },
    {
      id: 'haldi-groom',
      side: 'groom',
      sideLabel: 'Groom’s Side • Pelli Koduku',
      name: 'Pelli Koduku & Haldi Function',
      hindiTitle: 'పెళ్లి కొడుకు మరియు పసుపు వేడుక',
      date: 'Thursday, 10th December 2026',
      time: '08:00 AM Onwards',
      venueArea: 'At Our Residence',
      dressCode: 'Traditional Pattu Pancha / Kurta & Shades of Yellow',
      description:
        'Traditional Pelli Koduku ceremony and joyful Haldi celebrations with sacred mangala snanam and elders’ blessings at our residence.',
      accentColor: '#B45309',
      badgeColor: 'from-amber-100/90 to-orange-50/90',
      iconType: 'haldi',
    },
    {
      id: 'mehendi-sangeeth',
      side: 'bride',
      sideLabel: 'Bride’s Side • Pelli Kuthuru',
      name: 'Pelli Kuthuru, Mehendi & Sangeeth',
      hindiTitle: 'పెళ్లి కూతురు • మెహందీ & సంగీత్ సంధ్య',
      date: 'Friday, 11th December 2026',
      time: '06:00 PM Onwards',
      venueArea: 'At Our Residence',
      dressCode: 'Festive Green, Floral Ethnic & Sangeeth Glamour',
      description:
        'An evening of intricate bridal Mehendi, Pelli Kuthuru rituals, joyful music, and Sangeeth celebrations at our residence.',
      accentColor: '#15803D',
      badgeColor: 'from-emerald-100/90 to-green-50/90',
      iconType: 'sangeet',
    },
    {
      id: 'muhurtham',
      side: 'both',
      sideLabel: 'The Sacred Wedding • Pelli',
      name: 'Pelli Kuthuru / Pelli Koduku & Subh Muhurtham (Pelli)',
      hindiTitle: 'శుభ వివాహ ముహూర్తం • కళ్యాణ వైభోగం',
      date: 'Saturday, 12th December 2026',
      time: '07:29 PM IST',
      venueArea: 'ASR Convention, Lalpuram, Guntur ( & At Our Residence )',
      mapUrl: 'https://share.google/EyIE2Beb1kxANXDZo',
      dressCode: 'Traditional Kanjeevaram Pattu Sarees & Silk Pancha / Sherwani',
      description:
        'The sacred wedding ceremony (Pelli) of Mahesh & Geetha amidst Vedic chants, Nadaswaram melodies, Jeelakarra Bellam, Mangalya Dharanam, and Talambralu.',
      accentColor: '#9E1B32',
      badgeColor: 'from-rose-100/95 to-amber-50/95',
      iconType: 'muhurtham',
    },
    {
      id: 'reception',
      side: 'both',
      sideLabel: 'Both Families • Grand Celebration',
      name: 'Satyanarayana Swamy Vratham & Reception',
      hindiTitle: 'సత్యనారాయణ స్వామి వ్రతం & రిసెప్షన్ వేడుక',
      date: 'Monday, 14th December 2026',
      time: '11:00 AM Onwards',
      venueArea: 'Raja Rani Function Hall, Jangareddygudem',
      mapUrl: 'https://share.google/O2Z9t337pE3JohHuU',
      dressCode: 'Grand Traditional & Royal Festive Attire',
      description:
        'Sacred Satyanarayana Swamy Vratham in the morning followed by the Grand Wedding Reception and festive feast at Raja Rani Function Hall, Jangareddygudem.',
      accentColor: '#8F192E',
      badgeColor: 'from-amber-100/90 to-rose-50/90',
      iconType: 'reception',
    },
  ],
  gallery: [
    {
      id: 1,
      title: 'Mahesh & Geetha — Kalyana Vaibhogam',
      category: '1. Couple Portrait',
      caption:
        'Mahesh & Geetha beginning their sacred journey together with the blessings of Sriramula and Rangu families.',
      dateLocation: 'ASR Convention • Lalpuram, Guntur',
      imageUrl: './backgrounds/temple-arch-kalash.jpg',
      fallbackScene: 'portrait',
      aspectLabel: 'Sacred Union',
    },
    {
      id: 2,
      title: 'Divine Temple Blessings',
      category: '2. Temple Gopuram & Lotus Mandapam',
      caption:
        'Sacred temple gopuram, golden bells, and blooming pink lotuses heralding the auspicious wedding celebrations.',
      dateLocation: 'December 12th, 2026 • 7:29 PM',
      imageUrl: './backgrounds/temple-gopuram-lotus.jpg',
      fallbackScene: 'traditional',
      aspectLabel: 'Subh Muhurtham',
    },
    {
      id: 3,
      title: 'Auspicious Lamps & Pushkarini',
      category: '3. Vratham & Reception',
      caption:
        'Sacred brass deepams and lotus urli welcoming guests to Raja Rani Function Hall, Jangareddygudem.',
      dateLocation: 'December 14th, 2026 • 11:00 AM',
      imageUrl: './backgrounds/temple-courtyard-lamps.jpg',
      fallbackScene: 'haldi',
      aspectLabel: 'Reception',
    },
    {
      id: 4,
      title: 'Pelli Kuthuru & Pelli Koduku Festivities',
      category: '4. Haldi, Mehendi & Sangeeth',
      caption:
        'Joyous Haldi, Mehendi, and Sangeeth celebrations filled with turmeric blessings, jasmine garlands, and family warmth.',
      dateLocation: 'December 10th & 11th, 2026 • Residence',
      imageUrl: './backgrounds/temple-arch-kalash.jpg',
      fallbackScene: 'mehendi',
      aspectLabel: 'Pre-Wedding',
    },
    {
      id: 5,
      title: 'Two Families, One Sacred Bond',
      category: '5. Sriramula & Rangu Families',
      caption:
        'United in love and tradition — Sriramula Umamaheswara Chary weds Rangu Geetha Madhuri.',
      dateLocation: 'Guntur & Jangareddygudem',
      imageUrl: './backgrounds/temple-gopuram-lotus.jpg',
      fallbackScene: 'traditional',
      aspectLabel: 'Kalyanam',
    },
  ],
  video: {
    title: 'Mahesh & Geetha — Subha Vivaha Kalyana Vaibhogam',
    subtitle: 'Traditional South Indian Temple Wedding Invitation',
    duration: '02:18',
    location: 'ASR Convention, Guntur & Raja Rani Function Hall, Jangareddygudem',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: './backgrounds/temple-arch-kalash.jpg',
    description:
      'With the divine blessings of Lord Ganesha, Sri Sriramula Srinivasa Chary & Smt. Sriramula Kamakshi and Sri Rangu Prabakaro & Smt. Rangu Bhagya Lakshmi cordially invite you to the wedding of Mahesh & Geetha.',
  },
  themes: {
    'temple-arch': {
      id: 'temple-arch',
      name: 'Sacred Temple Arch & Kalash',
      subtitle: 'Jasmine Garlands, Brass Kuthuvilakku, Mango Kalash & Kolam',
      invocation: '॥ ఓం శ్రీ గణేశాయ నమః • శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥',
      invocationMeaning: 'Om Sri Ganeshaya Namaha • SriRastu Subhamastu Avighnamastu',
      bgImage: './backgrounds/temple-arch-kalash.jpg',
      primaryBg: '#F6ECD9',
      secondaryBg: '#EAD7B7',
      cardBg: 'rgba(251, 245, 232, 0.88)',
      accentColor: '#7A1824',
      secondaryAccent: '#B8860B',
      borderGlow: 'rgba(184, 134, 11, 0.45)',
      architectureLabel: 'Golden Temple Arch, Brass Deepam & Lotus Urli',
      floralNote: 'White Jasmine (Malli), Pink Lotus, Banana Leaves & Kolam',
    },
    'gopuram-lotus': {
      id: 'gopuram-lotus',
      name: 'Temple Gopuram & Pink Lotus',
      subtitle: 'Carved Stone Pillars, Sacred Gopuram & Blooming Lotuses',
      invocation: '॥ ఓం శ్రీ మహాగణపతయే నమః • కళ్యాణ వైభోగం ॥',
      invocationMeaning: 'Sri Mahaganapataye Namaha • Subhamastu • Kalyana Vaibhogam',
      bgImage: './backgrounds/temple-gopuram-lotus.jpg',
      primaryBg: '#F4E8D1',
      secondaryBg: '#E6D2B2',
      cardBg: 'rgba(250, 242, 226, 0.88)',
      accentColor: '#6B1020',
      secondaryAccent: '#2E5A27',
      borderGlow: 'rgba(184, 134, 11, 0.45)',
      architectureLabel: 'Dravidian Temple Gopuram & Carved Mandapam Pillars',
      floralNote: 'Blooming Pink Lotuses, Banana Leaves & Hanging Brass Lamp',
    },
    'courtyard-lamps': {
      id: 'courtyard-lamps',
      name: 'Temple Courtyard & Pushkarini',
      subtitle: 'Mandapam Pillars, Temple Tank Reflections & Brass Lamps',
      invocation: '॥ ఓం శ్రీ గణేశాయ నమః • శుభ వివాహ మహోత్సవం ॥',
      invocationMeaning: 'Sacred Blessings of Lord Ganesha & Temple Mandapam',
      bgImage: './backgrounds/temple-courtyard-lamps.jpg',
      primaryBg: '#F5E9D4',
      secondaryBg: '#E8D5B5',
      cardBg: 'rgba(252, 246, 235, 0.88)',
      accentColor: '#6E1420',
      secondaryAccent: '#9C6B21',
      borderGlow: 'rgba(184, 134, 11, 0.45)',
      architectureLabel: 'Sacred Pushkarini Temple Tank & Stone Pillars',
      floralNote: 'Jasmine Toran, Temple Bells, Brass Urli & Lotus Rangoli',
    },
  },
};
