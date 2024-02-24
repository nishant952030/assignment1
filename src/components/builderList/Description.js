import React from 'react'
import "./description.css"
import img from "../../images/assignment img.png"
import { Trophy, Gem,Star ,ChevronDown} from "lucide-react"
const Description = () => {
    const builderList = [
        {
            id: 1,
            name: "WixPro 72-inch Responsive Website Builder",
            about: "Comprehensive Digital platform creation tool, streamlined design interface for professional websites and online stores (black/Blue)",
            whatYouget: "[What you get]: Receive the WixPro website builder suite access to premium design templates, an extensive library of widgets and apps, and detailed step by step guides.",
            imgSrc: img,
            bestChoice: true,
            bestValue: false,
            rating: 9.8,
            remark:"Excellent"
        },
        {
            id: 2,
            name: "SiteCraft 68-Inch Ultimate Web Design Studio",
            about: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
            whatYouget: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
            imgSrc: img,
            bestChoice: false,
            bestValue: true,
            rating: 9.5,
            remark:"Great"
        },
        {
            id: 3,
            name: "WixPro 72-inch Responsive Website Builder",
            about: "Comprehensive Digital platform creation tool, streamlined design interface for professional websites and online stores (black/Blue)",
            whatYouget: "[What you get]: Receive the WixPro website builder suite access to premium design templates, an extensive library of widgets and apps, and detailed step by step guides.",
            imgSrc: img,
            bestChoice: false,
            bestValue: false,
            rating: 9.3,
            remark:"Very Good"
        },
        {
            id: 4,
            name: "CDK Resposive Builder",
            about: "An extensive library of widgets and apps, and detailed step-by-step guides",
            whatYouget: "[What you get]: Receive the WixPro website builder suite access to premium design templates, an extensive library of widgets and apps, and detailed step by step guides.",
            imgSrc: img,
            bestChoice: false,
            bestValue: false,
            rating: 9.1,
            remark:"Good"
        },
    ]
    return (
        <div className='builder-list-main-section'>
            {builderList.map((builder) => (
                <div key={builder.id} className='description-list'>
                    <div className='image'><img src={builder.imgSrc}></img>
                        {builder.bestChoice || builder.bestValue ?
                            (builder.bestChoice ?
                                <div className='best'><Trophy size={15} />{" "} Best Choice</div> : <div className='best'><Gem size={15} /> Best value</div>
                            ) : ""}
                    </div>
                    <div className='heading-and-details'>
                        <div className='name-heading-div'><span className='name-heading'>{builder.name}-</span>{builder.about}</div>
                        <div className='name-heading-div'><span className='name-heading'>Main Highlight-</span><br></br>{builder.whatYouget}</div>
                        <div className='showmore'>Show more <span><ChevronDown size={14}/></span></div>
                    </div>
                    <div className='rating-and-view-button-div'>
                        <div className='ratings'>
                            <h3>{builder.rating}</h3>
                            <p>{builder.remark}</p>
                            <div className='stars'>
                                {(() => {
                                    const stars = [];
                                    for (let i = 0; i <Math.floor( builder.rating)/2; i++) {
                                        stars.push(<Star key={i} size={14} fill='#e7b40a'/>);
                                    }
                                    return stars;
                                })()}
                            </div>
                        </div>
                           <button className='button'>View</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Description