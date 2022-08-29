import './insurance.css';

import lifeInsuranceAbout from "./assets/lifeInsuranceAbout.png"
import lifeInsuranceBanner from "./assets/lifeInsuranceBanner.png"
function LifeInsurance() {
    return (
        <div className="container">
            <div className="top-card-container">
                <h1 className="mobile-heading heading ">Car Insurance</h1>
                <div className="div-container">
                    <h1 className="heading">Life Insurance</h1>
                    <h1 className="description-title">
                        Buying the right Life Insurance is not Complicated anymore
                    </h1>
                    <p className="description">
                        Life insurance is the must for every earning member of a family for not only securing the future
                        of their families but to live a stress-free life. It is essential tool for the financial security of their
                        family members and dependents in the case of their untimely demise. It is a safety net for the dependents that can keep them away from any
                        foreseen and unforeseen expenditures in the future. Nishkaera offers the best deals for your life insurance
                    </p>

                    <div className="button-container">
                        <button className="get-started-btn" type="button">Get Started</button>
                        <button className="learn-more-btn" type="button">Learn More</button>
                    </div>
                </div>
                <div className="banner-container">
                    <img src={lifeInsuranceBanner} alt="images-text" className="banner-image" />
                </div>
            </div>

            <marquee className="offering-companies">
                <div className="company-scroller">
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661233795/image-removebg-preview_53_1_mtz1ba.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269927/image-removebg-preview_4_1_erpvql.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269863/image-removebg-preview_5_1_sggv7f.png" alt="text" className="insurance-company-logo" />
                    </div>
                    <div className='logo-con'>
                        <img src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269863/image-removebg-preview_6_1_fgwd4b.png" alt="text" className="insurance-company-logo" />
                    </div>
                </div>
            </marquee>

            <div className="middle-section">
                <img src={lifeInsuranceAbout} alt="text" className="details-image" />
                <div className="details-section-content">
                    <h1 className="description-title">What is Life Insurance?</h1>
                    <p className="description">
                        A life insurance plan is a contract between an insurance company (insurer) and an insurance policyholder, where the insurer promises to pay a sum of money in exchange for a premium paid by the policyholder after a set period or upon the death of an insured person. Life insurance is an financial instrument or product which offers you and your family financial protection. Some life insurance policies also offer optional add-ons, such as accidental death benefit, critical illness benefit, and others. Life insurance is very important to ensure the financial safety of your loved ones and every earning member should take adequate life insurance coverage to secure the future of the dependant members of his or her family.
                    </p>
                </div>
            </div>
            <div className="benefits-section">
                <p className="description-titles">Benefits of Health Insurance ?</p>
                <div className="benefits-details-container">
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269862/money-bag_1_iwutip.png" alt="text" />
                        <p className="benefit-details-title">
                            Financial Security
                        </p>
                        <p className="benefit-details-description">
                            Life insurance can provide you and your loved ones with financial security. Secure your family by choosing an adequate life cover so that they can maintain their standard of living in your absence.
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269862/gold-pot_1_wzonyo.png" alt="text" />
                        <p className="benefit-details-title">Wealth Creation</p>
                        <p className="benefit-details-description">
                            Life insurance products like annuity plans, savings plans, endowment plans help you build a retirement pool. These plans offer guaranteed income on maturity and help you secure your retirement with adequate savings.
                            A health plan covers you for a pre-existing disease once you have completed the waiting period mentioned in the policy certificate.
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269862/pig_1_sxrwje.png" alt="text" />
                        <p className="benefit-details-title">Tax Saving</p>
                        <p className="benefit-details-description">
                            The premiums paid under life insurance policies are tax` deductible under Section 80C and 80D of the Income Tax Act, 1961. The maturity benefits also enjoy a tax-free` status under Section 10(10D) in most cases.
                        </p>
                    </div>
                    <div className="benefit-details">
                        <img className="benefits-details-image" src="https://res.cloudinary.com/ccbpashokrock/image/upload/v1661269862/retirement_1_dkwfp2.png" alt="text" />
                        <p className="benefit-details-title">Retirment Planning</p>
                        <p className="benefit-details-description">
                            Life Insurance plans can also help you create wealth over time and build savings. Life insurance plans can be used to save for your future needs. They offer options to cover different types of risks and goals.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-banner">
                <div className="">
                    <p className="footer-banner-title">
                        Get a Life Insurance
                        <br />
                        <span className="footer-span-element">
                            for your Family.
                        </span>
                    </p>
                </div>

                <button className="apply-now-btn" type="button">Apply Now</button>
            </div>
        </div>

    );
}

export default LifeInsurance;