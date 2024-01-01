import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { womenDropdownData, menDropdownData } from '../ConstentData';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdClear } from 'react-icons/md';

function SightDropdown({ onClose }) {
    const [isMenVisible, setIsMenVisible] = useState(false);
    const [isWomenVisible, setIsWomenVisible] = useState(false);

    const toggleMenVisibility = () => {
        setIsMenVisible(!isMenVisible);
        setIsWomenVisible(false); 
    };

    const toggleWomenVisibility = () => {
        setIsWomenVisible(!isWomenVisible);
        setIsMenVisible(false); 
    };

    return (
        <div className="sight-dropdown">
            <div className="modal-content">
                <div className="model-content-head">
                    <Link to="/">
                        <h2>BEYOUNG</h2>
                    </Link>
                    <button className="close-modal-btn" onClick={onClose}>
                        <MdClear />
                    </button>
                </div>
                <div className="model-content-body">
                    <h3 onClick={toggleMenVisibility}> <Link to="/mens-clothing">Men</Link> {isMenVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}</h3>
                    {isMenVisible && (
                        <div className="sight-drop-con">
                            {menDropdownData.map((data, index) => (
                                <div className="d-content" key={index}>
                                    <h4>{data.title}</h4>
                                    {data.items.map((dcon, index) => (
                                        <Link key={index} to={`/men/${dcon.subCategory}`}>
                                            {dcon.heading}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <hr />
                    <h3 onClick={toggleWomenVisibility}><Link to="/womens-clothing">Women</Link> {isWomenVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}</h3>
                    {isWomenVisible && (
                        <div className="sight-drop-con">
                            {womenDropdownData.map((data, index) => (
                                <div className="d-content" key={index}>
                                    <h4>{data.title}</h4>
                                    {data.items.map((dcon, index) => (
                                        <Link key={index} to={`/women/${dcon.subCategory}`}>
                                            {dcon.heading}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <hr />
                    <div className="sight-drob-con">
                        <Link to="/combo-products"> Combo-Product</Link>
                        <Link to="/bb-ke-favorites">BB-KE-FEVOURITES</Link>
                        <Link to="/winter-wears">WINTER-WEARS</Link>
                        <Link to="/new-arrival">NEW-ARRIVALS</Link>
                        <Link to="/urban-shirt">URBAN-SHIRT</Link>
                        <Link to="/tracksuit-pants">CARGO-PANTS</Link>
                        <Link to="/oversize-tshirts">OVERSIZE T SHIRT</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SightDropdown;
