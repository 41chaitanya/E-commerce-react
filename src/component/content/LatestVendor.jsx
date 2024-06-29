import React from 'react'
const data={
    latestVendor:[
        {
            short:'defaulterVendor',
            latestVendorId:1,
            name:'Shraddha',
        },
        {
            short:'defaulterVendor',
            latestVendorId:2,
            name:'dateapp',
        },
        {
            short:'warner',
            latestVendorId:3,
            name:'Warner',
        },
        {
            short:'vintageCharm',
            latestVendorId:4,
            name:'Vintage Charm',
        },
        {
            short:'rimberio',
            latestVendorId:5,
            name:'Rimberio',
        },
        {
            short:'laranaInc',
            latestVendorId:6,
            name:'Larana, Inc',
        },
        {
            short:'faugetShop',
            latestVendorId:7,
            name:'Fauget Shop',
        },
        {
            short:'envine',
            latestVendorId:8,
            name:'Envine',
        },
        {
            short:'shopy',
            latestVendorId:9,
            name:'Shopy',
        },

    ],
    featuredItems:[
        {
            short:'galaxyUltra',
            featuredItemsId:1,
            name:'Galaxy S23 Ultra',
            priceEnable:856.00,
            priceDisable:898.8,
            location:'Yangon',
            discount:5,

        },
        {
            short:'colourfulGraphicTeesForKids',
            featuredItemsId:2,
            name:'Colourful Graphic Tees for Kids',
            priceEnable:30.00,
            priceDisable:null,
            location:'Mandalay',
            discount:null,

        },
        {
            short:'waffleShirt',
            featuredItemsId:3,
            name:'Waffle Shirt',
            priceEnable:277.00,
            priceDisable:307.78,
            location:'Yangon',
            discount:10,

        },
        {
            short:'acerAspire',
            featuredItemsId:4,
            name:'Acer Aspire 5',
            priceEnable:345.00,
            priceDisable:null,
            location:'London',
            discount:null,

        },
        {
            short:'fordRanger',
            featuredItemsId:5,
            name:'Ford Ranger',
            priceEnable:43525.00,
            priceDisable:null,
            location:'Yangon',
            discount:null,

        },
        {
            short:'luxuryCondoLivingAtTheSky',
            featuredItemsId:6,
            name:'Luxury Condo living at the sky',
            priceEnable:250000.00,
            priceDisable:null,
            location:'Singapore',
            discount:null,

        },
        
        
    ]
}
const LatestVendor = () => {
  return (
    <div className='grid grid-cols-12 gap-2'>
        <div className="bg-red-500 col-span-8 col-start-3 ">
            <div id='caroulesVendor' className="grid grid-cols-1">
                
            </div>
            <div id='featuredItems' className="grid grid-cols-1">
                
            </div>
        </div>
       
      
    </div>
  )
}

export default LatestVendor
