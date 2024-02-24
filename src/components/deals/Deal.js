import React from 'react'
import "./deal.css"
import img from "../../images/assignment img.png"
const Deal = () => {
    const deals = [
        {
            id:1,
            img: img,
            discount: 20,
            name: "Webbuilder",
            about: "Computer Modern classic with wix support",
            price:49.96,
        },
        {
            id:2,
            img: img,
            discount: 20,
            name: "Webbuilder",
            about: "Computer Modern classic with wix support",
            price:49.96,
        },
        {
            id:3,
            img: img,
            discount: 20,
            name: "Webbuilder",
            about: "Computer Modern classic with wix support",
            price:49.96,
        },
    ]
  return (
      <div className='deal-main'>
          <h3 className='deal-heading'>Related deals you might like</h3>
          <div className='cards'>
              {
                  deals.map((deal) => (
                      <div className='Card' key={deal.id}>
                          <div className='img'><img src={img} />
                              
                          </div>
                          <div className='discount-and-offer'>
                              <p className='deal-name'>{deal.name}</p>
                              <p>
                                  <span className='span-discount'>{deal.discount }% Off</span>
                                  <span className='span-limited'> Limited time</span>
                              </p>
                            
                          </div>
                          <div className='about-deal'>
                              <p>{deal.about}</p>
                          </div>
                          <div className='pricing'>
                              <span className='discounted-price'>${deal.price-deal.price*deal.discount/100 }</span>
                              <span className='actual-price'>${deal.price}</span>
                              <span className='discount'>({deal.discount}% Off)</span>
                          </div>
                          <button className='deal-button'>View Deal</button>
                      </div>
                  ))
              }
          </div>
    </div>
  )
}

export default Deal