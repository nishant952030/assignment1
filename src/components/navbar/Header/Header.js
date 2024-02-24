import React from 'react'
import { CheckCircle2,Info ,ChevronDown} from 'lucide-react';
import "./header.css"
const Header = () => {
    return (
        <div className='header-section'>
            <p className='heading-biggest'>Best Website builders in the US</p>
            <div className='heading-line'></div>
            <div className='update-and-relevant-section'>
                <div className='last-update-section'>
                    <div className='last-update' ><span className='check-circle'><CheckCircle2 size={18}/></span>Last Updated- <span> February 22, 2020</span></div>
                    <div className='last-update' ><span className='check-circle'><Info size={18}/></span>Advertising Disclosure </div>
                </div>
                <div className='relevancy'> Top Relevant<span><ChevronDown/></span></div>
            </div>
            <div className='heading-line'></div>
        </div>
    )
}
export default Header;