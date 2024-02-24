import React, { useEffect, useState } from 'react'
import "./footer.css"
import { ChevronDown } from "lucide-react"
const Footer = () => {
    const [maxWidth, setMaxWidth] = useState(window.innerWidth);
    const [showCat, setShowCat] = useState(true)
    const [showCatDrop, setShowCatDrop] = useState(false)
    const [showContact, setShowContact] = useState(true)
    const [showContactDrop, setShowContactDrop] = useState(false)
    const [showcountry, setShowcountry] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setMaxWidth(window.innerWidth);
            console.log(maxWidth)
            if (maxWidth < 410) {
                setShowCat(false)
                setShowContact(false)
            }
            if (maxWidth >= 410) {
                setShowCat(true)
                setShowContact(true)
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [maxWidth]);
    const handleCat = () => {
        setShowCatDrop(!showCatDrop)
        setShowContactDrop(false)
    }
    const handleContact = () => {
        setShowContactDrop(!showContactDrop)
        setShowCatDrop(false)
    }
    return (
        <div className='footer-main'>
            <div className='content-div'>
                <div className='categories'>
                    <h3 onClick={handleCat}>Categories {maxWidth < 410 && <ChevronDown size={18} />}</h3>
                    <div className={showCat ? "" : "hidden"}>
                        <p>Web Builder</p>
                        <p>Hosting</p>
                        <p>Data Center</p>
                        <p>Robotic-Automation</p>
                    </div>
                    {showCatDrop && <div className="catDrop">
                        <p>Web Builder</p>
                        <p>Hosting</p>
                        <p>Data Center</p>
                        <p>Robotic-Automation</p>
                    </div>}
                </div>
                <div className='contact'>
                    <h3 onClick={handleContact}>Contact {maxWidth < 410 && <ChevronDown size={18} />} </h3>
                    <div className={showContact ? "" : "hidden"}>
                        <p>Contact</p>
                        <p>Privacy Popcy</p>
                        <p>Terms of service</p>
                        <p>Categories</p>
                        <p>About</p>
                    </div>
                    {showContactDrop && <div className="contactDrop">
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                        <p>Categories</p>
                        <p>About</p>
                    </div>}
                </div>
                <div className='country'>
                    <h3>Country </h3>
                    <p>United States<span><ChevronDown size={14} color='#B6BDC4' /></span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer