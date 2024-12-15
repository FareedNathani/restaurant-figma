import React from 'react'
import Header from './Header'
import OurChefCards from './OurChefCards'
import image1 from "../../../public/Images/Our Chef/OurChefImage1.png"
import image2 from "../../../public/Images/Our Chef/OurChefImage2.png"
import image3 from "../../../public/Images/Our Chef/OurChefImage3.png"
import image4 from "../../../public/Images/Our Chef/OurChefImage4.png"
import image5 from "../../../public/Images/Our Chef/OurChefImage5.png"
import image6 from "../../../public/Images/Our Chef/OurChefImage6.png"
import image7 from "../../../public/Images/Our Chef/OurChefImage7.png"
import image8 from "../../../public/Images/Our Chef/OurChefImage8.png"
import image9 from "../../../public/Images/Our Chef/OurChefImage9.png"
import image10 from "../../../public/Images/Our Chef/OurChefImage10.png"
import image11 from "../../../public/Images/Our Chef/OurChefImage11.png"
import image12 from "../../../public/Images/Our Chef/OurChefImage12.png"


const ChefsData = [
  { id: 1, name: "Tahmina Rumi", designation: "Chef", image: image1 },
  { id: 2, name: "Jorina Begum", designation: "Chef", image: image2 },
  { id: 3, name: "M. Mohammad", designation: "Chef", image: image3 },
  { id: 4, name: "Munna Kathy", designation: "Chef", image: image4 },
  { id: 5, name: "Tahmina Rumi", designation: "Cook", image: image5 },
  { id: 6, name: "Bisnu Devgon", designation: "Chef", image: image6 },
  { id: 7, name: "Motin Molladst", designation: "Chef", image: image7 },
  { id: 8, name: "William Rumi", designation: "Chef", image: image8 },
  { id: 9, name: "Kets William Roy", designation: "Chef", image: image9 },
  { id: 10, name: "Mahmud Kholil", designation: "Chef", image: image10 },
  { id: 11, name: "Ataur Rahman", designation: "Chef", image: image11 },
  { id: 12, name: "Monalisa Holly", designation: "Chef", image: image12 },
]

const page = () => {
  return (
    <div>
        <Header />
        <div className='max-w-[1320px] mx-auto my-[120px] px-3'>
          <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6'>
            {ChefsData.map((elements) => {
              return(
                <OurChefCards 
                key={elements.id}
                image={elements.image}
                name={elements.name}
                designation={elements.designation}
                />
              )
            })}

          </div>
        </div>

    </div>
  )
}

export default page