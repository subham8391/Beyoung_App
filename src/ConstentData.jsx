
//footer data

export const footerLists = [
  {
    title: 'Popular TV Shows',
    items: ['Kumkum Bhagya', 'Kundali Bhagya', 'Bhagya Lakshmi', 'Meet', 'Annapoorna', 'Indira', 'Korean Drama',],
  },
  {
    title: 'Premium Movies',
    items: ['Habibi', 'Kisi Ka Bhi Kisi Ka Jaan', 'Bandaa', 'RRR', 'Uunchai', 'Uri: The Surgical Strike', 'The Kashmir Files', 'Dial 100', 'Helmet'],
  },
  {
    title: 'Popular Live TV Channels',
    items: ['Zee News', 'Zee TV HD', '&TV HD', 'Zee Marathi HD'],
  },
  {
    title: 'Popular Web Series',
    items: ['Taj', 'Sunflower', 'Tripling', 'Pitchers', 'Naxalbari', 'Anantham', 'Gaalivana'],
  },
  {
    title: 'Bollywood Top Celebrities',
    items: ['Sunny Leone', 'Disha Patani', 'Deepika Padukone', 'Salman Khan', 'Monoj Bajpayee', 'Nora Fatehi', 'Puja Hegda'],
  },
  {
    title: 'Games & News',
    items: ['Play', 'Stories']
  }
];

//means dropdown data

export const menDropdownData = [
  {
    title: 'Topwear',
    items: ['Printed T-Shirts','Oversize T-Shirts New','Plain T-Shirts','Full Sleeve T-Shirts','Shirts','Polo T-Shirts','Athleisure T-shirts','Half Sleeve T-Shirts','Plus Size T-Shirts','Combos',],
  },
  {
    title: 'Theme',
    items: ['Travel','Gym','Cartoon','Sports','Music','Biker','Funky','God','Quotes',],
  },
  {
    title: 'Special',
    items: ['Couple T-shirts','Bestseller T shirts','Deals & Offers',],
  },
  {
    title: 'Bottomwear',
    items: ['Joggers','Chino Pants','Boxers','Shorts New',' Cargo Pants New','Pyjamas',],
  },
  {
    title: 'Shirts',
    items: ['Plain Shirts','Urban Shirts','Casual Shirts',],
  },
  {
    title: 'Winter Wears',
    items: ['Jackets','Sweatshirts','Hoodies',]
  }
];

//womeans dropdown data

export const womenDropdownData = [
  {
    title: 'Topwear',
    items: ['Printed T-Shirts','Oversize T-Shirts New','Kurti','Women Shirts','Half Sleeve T-Shirts','Plain T-Shirts','Full Sleeve T-Shirts','Kurta Sets','Crop Tops','Plus Size T-Shirts','Combos',],
  },
  {
    title: 'Theme',
    items: ['Travel','Gym','Cartoon','Sports','Music','Biker','Funky','God','Quotes',],
  },
  {
    title: 'Special',
    items: ['Couple T-shirts','Bestseller T shirts','Deals & Offers',],
  },
  {
    title: 'Bottomwear',
    items: ['Boxer for Women','Jeggings','Women Pants','Couple Boxers',],
  },
  
];

//new arrival dropdown data
export const newArrivalDropdownData=['Urban Shirts','Winter Wears','Cargo Pants','Oversized T-Shirts','View All',]

//hot deal carousel data
import hotd1 from './image/hot-d-1.jpg';
import hotd2 from './image/hot-d-2.jpg';
import hotd3 from './image/hot-d-3.jpg';
import hotd4 from './image/hot-d-4.jpg';
import hotd5 from './image/hot-d-5.jpg';
import hotd6 from './image/hot-d-6.jpg';
import hotd7 from './image/hot-d-7.jpg';
import hotd8 from './image/hot-d-8.jpg';
import hotd9 from './image/hot-d-9.jpg';
import hotd10 from './image/hot-d-10.jpg';

//Discount coopen data

import cashb1 from './image/cash-b-1.png'
import cashb2 from './image/cash-b-2.png'
import cashb3 from './image/cash-b-3.png'
import cashb4 from './image/cash-b-4.png'
import cashb5 from './image/cash-b-5.png'
import cashb6 from './image/cash-b-6.png'
import cashb7 from './image/cash-b-7.png'
//t-sharts carousel
import tsimg from  './image/ts-img.jpg';
import tsimg1 from  './image/ts-img-1.jpg';
import tsimg2 from  './image/ts-img-2.jpg';
import tsimg3 from  './image/ts-img-3.jpg';
import tsimg4 from  './image/ts-img-4.jpg';
import tsimg5 from  './image/ts-img-5.jpg';
import tsimg6 from  './image/ts-img-6.jpg';
import tsimg7 from  './image/ts-img-7.jpg';
import tsimg8 from  './image/ts-img-8.jpg';
export const HomeData=[
  {DisCoopimages: [cashb1,cashb2,cashb3,cashb4,cashb5,cashb6,cashb7]},
  {HotDealimages: [hotd1, hotd2, hotd3, hotd4, hotd5, hotd6, hotd7,hotd8,hotd9,hotd10]},
  {NewArrivalData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10&filter={"sellerTag": "new arrival","subCategory": "shirt","gender": "Men"}'}},
  {TShartsData:[tsimg,tsimg1,tsimg2,tsimg3,tsimg4,tsimg5,tsimg6,tsimg7,tsimg8]},
  {ShartsData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products',subCategory: "shirt",gender: "Men"}},
  {BottomWareData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products',subCategory: "trouser",gender: "Men"}},
  {WomenData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products',gender: "Women"}},
  {SPCollectionData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products',gender: "Men"}},
  {TrandingStyleData:{apiEndpoint:'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products',sellerTag: "trending",gender: "Men"}},
  {FeaturedOnimages:[]},
]