import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface ShopCardProps{
    image: StaticImageData;
    name: string;
    OriginalPrice?: string;
    DiscountedPrice: string
}

const ShopCard = (props: ShopCardProps) => {
    const {image, name, OriginalPrice, DiscountedPrice} = props;

  return (
    <div>

    <div className='flex flex-col gap-2'>
        <div className='card '>
            <Image src={image} alt=''></Image>
        </div>
        <div className='font-inter'>
            <p className='font-bold text-lg'>{name}</p>
            <div className='flex gap-2'>
                <p className='text-primary'>{DiscountedPrice}</p>
                <p className='text-[#828282] line-through'>{OriginalPrice}</p>
            </div>
        </div>
    </div>

    </div>
    
  )
}

export default ShopCard