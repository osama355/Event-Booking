import I1 from "../assests/full.jpg";
import I2 from "../assests/decor.jpg";
import I3 from "../assests/catering.jpg";
import I4 from "../assests/photography.jpg";
import I5 from "../assests/stage.jpg";
import I6 from "../assests/makeup.jpg";
import I7 from "../assests/valet.jpg";
import I8 from "../assests/dj.jpg";
import I9 from "../assests/card.jpg";
import I10 from "../assests/birthday.jpg";
import I11 from "../assests/entry.jpg";
import I12 from "../assests/bridal.jpg";
import I13 from "../assests/transport.jpg";
import I14 from '../assests/destination.jpg';
import c3 from '../assests/milad.jpg';
import c4 from '../assests/office.jpg';
import c5 from '../assests/school.jpg';

export const servicesData=[
    {
        id:1,
        name:'Events Full Service',
        decp:'We provide full services for all your events, Shaadi, Valima, Mayun, Dholki, Mehendis, Corporate Events, Dinners, Birthdays, Baby showers etc. please call 0321-788-8061,0335-7888038, 0335-7888062,',
        imageSrc:I1,
    },
    {
        id:2,
        name:'Decor',
        decp:'We provide rental services such as marque/tent, ,furniture, LED lights etc. Decor services are available as well. Please call 0321-788-8061',
        imageSrc:I2,
    },
    {
        id:3,
        name:'Catering',
        decp:'We provide catering for events of over 500 people having multiple dishes with proper taste.  Please call 0321-788-8061, 0213-5166550/1 ',
        imageSrc:I3,
    },
    {
        id:4,
        name:'Photography',
        decp:'We provide professional photography and video graphy for our events, for a quote please call 0321-788-8061, 0213-5166550/1 or email',
        imageSrc:I4,
    },
    {
        id:5,
        name:'Floral & Stage',
        decp:'Our creative and florist team work together to provide the best suited stage and flower decorations. Please call 0321-788-8061, 0213-5166550',
        imageSrc:I5,
    },
    {
        id:6,
        name:'Makeup Deals',
        decp:'We provide many make up deals and packages for bridal and groom, there is no need to worry we have all branded cosmetics items. Find out more at the time of booking.',
        imageSrc:I6,
    },
    {
        id:7,
        name:'Valet & Security',
        decp:'We provide private security and valet services, Please call 0321-788-8061, 0213-5166550.',
        imageSrc:I7,
    },
    {
        id:8,
        name:'DJ & Dance Floor',
        decp:'We provide DJ and dane floors for all your events in Karachi Pakistan, Please call 0321-788-8061, 0213-5166550.',
        imageSrc:I8,
    },
    {
        id:9,
        name:'Card Printing',
        decp:'We provide card printing services for any event bithday party, wedding and etc, Please call 0321-788-8061, 0213-5166550.',
        imageSrc:I9,
    },
    {
        id:10,
        name:'Destination Weddings',
        decp:'We provide destination wedding services our event managers will travel with your party to make sure everything goes smoothly, Please call  0321-788-8061, 0213-5166550.',
        imageSrc:I14,
    },
    {
        id:11,
        name:'Birthdays',
        decp:'We provide complete Birthday services with food and decor. Please call  0321-788-8061, 0213-5166550.',
        imageSrc:I10,
    },
    {
        id:12,
        name:'Bridal Shower',
        decp:'We provide full Bridal shower service with food and decor. Please call 0335-788-8038 0321-788-8061, 0213-5166550.',
        imageSrc:I12,
    },
    {
        id:13,
        name:'Transport',
        decp:'We provide transport service from you pickup point to event hall. Please call 0335-788-8038 0321-788-8061, 0213-5166550.',
        imageSrc:I13,
    },
    {
        id:14,
        name:'Entry',
        decp: 'We provide all the custome celebrations during entry. Please call 0335-788-8038 0321-788-8061, 0213-5166550.',
        imageSrc:I11,
    }
    
]


export const categories=[
    {
        id:1,
        name:"Wedding",
        imageSrc: I1,
        form:'/register/wedding',
    },
    {
        id:2,
        name:"Birthday Party",
        imageSrc: I10,
        form:'/register/birthday'
    },
    {
        id:3,
        name:"Milad & Aqiqah",
        imageSrc: c3,
        form:'/register/milad'
    },
    {
        id:4,
        name:"Event for Offices",
        imageSrc: c4,
        form:'/register/official'
    },
    {
        id:5,
        name:"School Event",
        imageSrc: c5,
        form:'/register/school'
    },
    {
        id:6,
        name:"Destination Wedding",
        imageSrc: I14,
        form:'/register/destination'
    },
]