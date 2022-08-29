import './insurance.css';

import healthInsuranceBanner from "./assets/healthInsuranceBanner.png"
import healthInsuranceAbout from "./assets/healthInsuranceAbout.png"
function HealthInsurance() {
    return (
        <div className="container">
            <div className="top-card-container">
                <h1 className="mobile-heading heading ">Car Insurance</h1>
                <div className="div-container">
                    <h1 className="heading">Health Insurance</h1>
                    <h1 className="description-title">The Right Health Insurance Plan for a Healthier You</h1>
                    <p className="description">
                    In these times of uncertainty, if there’s one key solution to securing healthcare needs – it’s health insurance plans. 
                    With rising cost of living the costs of medical treatment and medical care has skyrocketed. Without an appropriate health insurance in place, you and your family can be in a very difficult situation. 
                    Get the best deals in health insurance from Nishkaera.
                    </p>

                    <div className="button-container">
                        <button className="get-started-btn" type="button">Get Started</button>
                        <button className="learn-more-btn" type="button">Learn More</button>
                    </div>
                </div>
                <div className="banner-container">
                    <img src={healthInsuranceBanner} alt="images-text" className="banner-image" />
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
                <img src={healthInsuranceAbout} alt="text" className="details-image" />
                <div className="details-section-content">
                    <h1 className="description-title">What is Health Insurance?</h1>
                    <p className="description">
                        A health insurance policy is a financial safeguard that provides medical coverage to the insured during medical emergencies. Medical emergencies can occur at any moment, without any prior notice. In such cases, a health insurance policy is your saviour. The COVID Pandemic has made many of us understand the importance of having a health insurance not only for the self but the entire family. Additionally, it helps you boost tax savings. Under section 80D of the Income Tax Act, 1961, you can claim tax benefits against your health insurance premium.
                    </p>
                </div>
            </div>
            <div className="benefits-section">
                <p className="description-titles">Benefits of Health Insurance ?</p>
                <div className="benefits-details-container">
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269441/diagnosis_1_kicpkd.png" alt="text" />
                        <p className="benefit-details-title">
                            Covers Pre and Post Hospitalization
                        </p>
                        <p className="benefit-details-description">
                            One of the key benefits of a health insurance policy is that it covers your medical expenses incurred just before and after hospitalisation
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269441/heart-attack_1_ztzv8l.png" alt="text" />
                        <p className="benefit-details-title">Covers Pre-existing Diseases</p>
                        <p className="benefit-details-description">
                            A health plan covers you for a pre-existing disease once you have completed the waiting period mentioned in the policy certificate.
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269441/mobile-payment_1_s2ehlx.png" alt="text" />
                        <p className="benefit-details-title">Provides Cashless Treatment</p>
                        <p className="benefit-details-description">
                            At the time of hospitalisation, you don’t have to pay your hospital bill. Your health insurance company will settle it directly with the hospital
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269441/rescue-boat_1_nx0nf4.png" alt="text" />
                        <p className="benefit-details-title">Beat Medical Inflation</p>
                        <p className="benefit-details-description">
                            Cost of medical services is increasing day by day and it can be a heavy financial stress for those people who are not having adequate medical coverage
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-banner">
                <div className="">
                    <p className="footer-banner-title">
                        Get a Health Insurance

                        <br />
                        <span className="footer-span-element">
                            and Take control of your health
                        </span>
                    </p>
                </div>

                <button className="apply-now-btn" type="button">Apply Now</button>
            </div>
        </div>

    );
}

export default HealthInsurance;