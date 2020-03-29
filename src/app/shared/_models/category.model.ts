
export interface Category {
  id: number;
  title: string;
  thumb: string;
  images: string[];
  slug: string;
  description?: string;
  status?: string;
  postDate?: string;
  lastUpdated?: string;
  subcategory?: any;
}
export type Categories = Array<Category>;

 
 

export var categoryHomeServicesData = [
  {
  "id": 1,
  "title": "Lawn & Garden",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_1.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/lawn.jpg"],
  "slug": "lawn_garden",
  "description": `<p>
  Your lawn and garden can do a lot for the beauty and value of
  your home, and gardening and lawn care can do a lot for your
  peace of mind, too, if you know what equipment and supplies
  you’ll need. Start now and get expert information on everything
  you need for your lawn/garden.
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 2,
  "title": "kitchen",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_2.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/kitchen.jpg"],
  "slug": "kitchen",
  "description": `<p>
  Your kitchen is the centerpiece of your home from updating your
  flooring, countertops to replacing your cabinets, kitchens need
  a lot of attention to detail.
</p>
<p>
 Many have found that a small update goes a long way to a kitchen ambience that is welcoming and encouraging. 
 Why don’t you let us help you find the right professional. Get started now for all your kitchen needs!
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 3,
  "title": "Carpet Cleaning",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_3.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/carpet-cleaning.jpg"],
  "slug": "carpet-cleaning",
  "description": `
  <p>
                Kids, pets, and traffic in and out of your house all take a toll
                on your carpets. Sometimes vacuuming just isn’t enough to keep
                your floors looking beautiful, which is why you should check out
                the best carpet cleaning services in your area right here. Let
                the experts give your carpet a new lease on life.
              </p>
  `,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 4,
  "title": "Handyman",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_4.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/handyman.jpg"],
  "slug": "handyman",
  "description": `<p>
  Whether you’re a general contractor or you just have a good bit
  of work you need done around your house or for your business,
  having an handyman on call can help a lot. Get started now to
  find the right handyman to get the job done for you – whatever
  the job may be.
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 5,
  "title": "Painting",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_5.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/painting.jpg"],
  "slug": "painting",
  "description": `<p>
  A new coat of paint can do wonders for any room in your house –
  not to mention what it can do for the exterior too! But painting
  takes time, equipment, and expertise. Instead of trying to do it
  yourself, let professional painters bid for your project.
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 6,
  "title": "Flooring",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_6.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/flooring1.jpg","http://s8.staging-host.com/xpbid/images/flooring2.jpg"],
  "slug": "flooring",
  "description": `<p>
  Whether you’re renovating your bathroom or kitchen, or you’re
  putting in new floors throughout your home, newly installed
  floor is a great option. To make your floors look amazing
  without wasting a lot of time, energy, and money, though, you’ll
  want to hire the right professionals. Start now and get the best
  service and recommendations for your tile floor.
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 7,
  "title": "Home Product Assembly",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_7.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/home-product.jpg","http://s8.staging-host.com/xpbid/images/home-product.jpg"],
  "slug": "home-product",
  "description": `<p>
  Have you purchased an item online that requires assembly? Do you
  really have time to do it yourself or would you rather have a
  professional help you install your office table, lawn
  chairs/table, childs play ground …. whatever it is, we got you
  covered. Take a picture or provide a sample picture of the item
  you want to assemble and allow skilled professionals to bid and
  complete your installation project. Let's get started!
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 8,
  "title": "Home Electronic Installations",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_8.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
  "slug": "home-electronic",
  "description": `<p>You’ve just purchased an electronic item for your home or business and you need a professional to 
  complete your installation. We can certainly help, from your large to small electronic need. 
  Find the right Service Professional. Let’s get started!</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 9,
  "title": "Moving Services",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_9.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/moving-services.jpg"],
  "slug": "moving-services",
  "description": `<p>
  Moving can be very tasking. You probably need help, often you
  find that most of your friends are busy. Regardless, experienced
  movers are ready to assist you with your simple or enormous
  moving project. Find a mover now and receive quick bids.
</p>`,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
},
{
  "id": 10,
  "title": "Home Renovations",
  "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
  "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
  "slug": "home-renovations",
  "description": ``,
  "status": "published",
  "postDate": "20-03-2019 10:10:11",
  "lastUpdated": "20-03-2019 10:10:11"
}
]; 


export var categoriesMockData = [
  {
    "id": 11,
    "title": "Home Service",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "home_services",
    "description": ``,
    "subcategory": categoryHomeServicesData
  },
  {
    "id": 12,
    "title": "Motorcycle",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "motorcycle",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 13,
    "title": "Medical Equipment",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "medical_equipment",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 14,
    "title": "Heavy Equipment",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "heavy_equipment",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 15,
    "title": "Boats",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "boats",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 16,
    "title": "Metal Fabrication",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "metal_fabrication",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 17,
    "title": "Business Industrial",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "business_industrial",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 18,
    "title": "Semi-Truck/ RV",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "semi_truck_rv",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 19,
    "title": "Automotive",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "automotive",
    "description": ``,
    "subcategory": ''
  },
  {
    "id": 20,
    "title": "Arts Craft",
    "thumb": "http://s8.staging-host.com/xpbid/images/category_10.jpg",
    "images": ["http://s8.staging-host.com/xpbid/images/home-electronic.jpg"],
    "slug": "arts_craft",
    "description": ``,
    "subcategory": ''
  }
];

