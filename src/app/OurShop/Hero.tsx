import React from 'react'
import ShopCard from './ShopCard'
import Image1 from "../../../public/Images/OurShop/ShopCard1.png"
import Image2 from "../../../public/Images/OurShop/ShopCard2.png"
import Image3 from "../../../public/Images/OurShop/ShopCard3.png"
import Image4 from "../../../public/Images/OurShop/ShopCard4.png"
import Image5 from "../../../public/Images/OurShop/ShopCard5.png"
import Image6 from "../../../public/Images/OurShop/ShopCard6.png"
import Image7 from "../../../public/Images/OurShop/ShopCard7.png"
import Image8 from "../../../public/Images/OurShop/ShopCard8 (1).png"
import Image9 from "../../../public/Images/OurShop/ShopCard8 (2).png"
import Image from 'next/image'
import ShopButton1 from "../../../public/Images/OurShop/ShopButton1.png"
import ShopButton2 from "../../../public/Images/OurShop/ShopButton2.png"
import SideImage from "../../../public/Images/OurShop/Banner.png"


const data = [
    {
        id: 1,
        image: Image1,
        name: "Fresh Lime",
        OriginalPrice: "$45.00",
        DiscountedPrice: "$38.00"
    },{
        id: 2,
        image: Image2,
        name: "Chocolate Muffin",
        DiscountedPrice: "$28.00"
    },{
        id: 3,
        image: Image3,
        name: "Burger",
        OriginalPrice: "$45.00",
        DiscountedPrice: "$21.00"
    },{
        id: 4,
        image: Image4,
        name: "Country Burger",
        DiscountedPrice: "$45.00"
    },{
        id: 5,
        image: Image5,
        name: "Drink",
        OriginalPrice: "$45.00",
        DiscountedPrice: "$23.00"
    },{
        id: 6,
        image: Image6,
        name: "Pizza",
        DiscountedPrice: "$43.00"
    },{
        id: 7,
        image: Image7,
        name: "Cheese Butter",
        // OriginalPrice: "$45.00",
        DiscountedPrice: "$10.00"
    },{
        id: 8,
        image: Image8,
        name: "Sandwiches",
        DiscountedPrice: "$25.00"
    },{
        id: 9,
        image: Image9,
        name: "Chicken Chup",
        // OriginalPrice: "$45.00",
        DiscountedPrice: "$12.00"
    },{
        id: 10,
        image: Image4,
        name: "Country Burger",
        DiscountedPrice: "$45.00"
    },{
        id: 11,
        image: Image5,
        name: "Drink",
        OriginalPrice: "$45.00",
        DiscountedPrice: "$23.00"
    },{
        id: 12,
        image: Image6,
        name: "Pizza",
        DiscountedPrice: "$43.00"
    },{
        id: 13,
        image: Image7,
        name: "Cheese Butter",
        // OriginalPrice: "$45.00",
        DiscountedPrice: "$10.00"
    },{
        id: 14,
        image: Image8,
        name: "Sandwiches",
        DiscountedPrice: "$25.00"
    },{
        id: 15,
        image: Image9,
        name: "Chicken Chup",
        // OriginalPrice: "$45.00",
        DiscountedPrice: "$12.00"
    }
]

const Hero = () => {
  return (
    <div className='max-w-[1320px] xl:my-[120px] my-20 mx-auto flex gap-6 px-4'>
        {/**Cards Portion */}
        <div className='flex flex-col items-center justify-center gap-14'>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                {data.map((element) => {
                    return(
                        <ShopCard
                        key={element.id} 
                        image={element.image}
                        name={element.name}
                        OriginalPrice={element.OriginalPrice}
                        DiscountedPrice={element.DiscountedPrice}
                        />
                    )
                })}
            </div>

            <div className='flex gap-3'>
                <button className='border-2 border-[#F2F2F2] text-primary hover:text-background cursor-pointer py-3 px-5'>
                    <Image src={ShopButton1} alt=''></Image>
                </button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>1</button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>2</button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>3</button>
                <button className='border-2 border-[#F2F2F2] text-primary  hover:text-background cursor-pointer py-3 px-5'> <Image src={ShopButton2} alt=''></Image></button>
            </div>
        </div>


        {/**Category Portion */}
        <div className='md:flex flex-col gap-6 hidden'>
            <div className='relative'>
                <input type="text" placeholder='Search Products' className='bg-pink-50 font-inter text-base font-normal py-3 px-4' />
                <button className='bg-primary w-12 h-12 absolute'></button>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-helvetica font-bold text-xl'>category</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Sandwiches</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Burger</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Chicken Chup</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Drink</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Pizza</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Thi</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Non Veg</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Uncategorized</p>
                    </div>
                    
                </div>
            </div>

            <div>
                <Image src={SideImage} alt=''></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero