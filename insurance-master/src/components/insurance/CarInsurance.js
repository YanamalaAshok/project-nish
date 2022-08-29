import './insurance.css';

function CarInsurance() {
    return (
        <div className="container">
            <div className="top-card-container">
                <h1 className="mobile-heading heading ">Car Insurance</h1>
                <div className="div-container">
                    <h1 className="heading">Car Insurance</h1>
                    <h1 className="description-title">Your Car's Caretaker</h1>
                    <p className="description">Third-party insurance is a statutory requirement as per the Indian law under the Motor vehicles Act, 1988. As per the law, any motor vehicle driven 
                    in public places without insurance is a punishable offence. Availability of motor insurance has become extremely easy and convenient. Many insurers offer motor insurance online. 
                    It is, however, important to understand the nuances of motor insurance before availing one.
                    </p>
                    <div className="button-container">
                        <button className="get-started-btn" type="button">Get Started</button>
                        <button className="learn-more-btn" type="button">Learn More</button>
                    </div>
                </div>
                <div className="banner-container">
                    <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661076955/image-removebg-preview_9_1_1_mmpqby.png" alt="images-text" className="banner-image" />
                </div>
            </div>

            <marquee className="offering-companies">
                <div className="company-scroller">
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661233795/image-removebg-preview_53_1_mtz1ba.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661233795/image_6_cbrgiy.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661233795/image-removebg-preview_7_1_xejppz.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661233795/image-removebg-preview_8_1_bpjt2i.png" alt="text" className="insurance-company-logo" />
                    </div>
                </div>
            </marquee>

            <div className="middle-section">
                <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661234998/image_7_ijsji9.png" alt="text" className="details-image" />
                <div className="details-section-content">
                    <h1 className="description-title">What is car Insurance?</h1>
                    <p className="description">A comprehensive car insurance policy help reduce your cost when your car is met with an accident or natural calamity. It also covers your vehicle against theft and burglary. At times,
                        you may end up hurting others or damaging property in an accident. A car insurance policy covers such third party liabilities as well.
                        If you own a car in India, having third party insurance is a must for you. That’s why it’s crucial to buy and renew your policy on time to stay on the right side of the law and be covered against car damages.
                    </p>
                </div>
            </div>
            <div className="benefits-section">
                <p className="description-titles">Benefits of Car Insurance ?</p>
                <div className="benefits-details-container">
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661234995/policy_1_mi69vf.png" alt="text" />
                        <p className="benefit-details-title">Comprehensive Policy</p>
                        <p className="benefit-details-description">One of the key benefits of a health insurance policy is that it covers yours medical expences incurrened just before and after hospitalization.</p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661234995/car-insurance_1_uid4ln.png" alt="text" />
                        <p className="benefit-details-title">Stand-alone own-damage car insurance</p>
                        <p className="benefit-details-description">A health plan covers you for a pre-existing disease once you have completed the waiting period mentioned in the policy certificate.</p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661234995/relations_1_gwprnw.png" alt="text" />
                        <p className="benefit-details-title">Third party car insurance</p>
                        <p className="benefit-details-description">At the time of hospitalisation, you don’t have to pay your hospital bill. Your health insurance company will settle it directly with the hospital</p>
                    </div>
                </div>
            </div>

            <div className="footer-banner">
                <div className="">
                    <p className="footer-banner-title">
                        Get a Car Insurance<br />
                        <span className="footer-span-element">
                            and use you brakes to meet us.
                        </span>
                    </p>
                </div>

                <button className="apply-now-btn" type="button">Apply Now</button>
            </div>
        </div>

    );
}

export default CarInsurance;