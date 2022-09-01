import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AiOutlineArrowRight } from "react-icons/ai"
// import { AiOutlineQuestionCircle } from "react-icons/ai"



const CarForm = () => {
	// function myFunction() {
	// 	window.location.href = "/form/investment";
	// }


	//React hook for checkbox communication address
	const [step, setStep] = useState(1)
	const FirstForm = () => (
		<div className="tw-flex tw-w-2/4">
			<Formik
				initialValues={{
					title: "",
					dateofpurchase: "",
					RtoNum: "",
					make: "",
					model: "",
					variant: "",
					pucCertification: ""

				}}
				validationSchema={Yup.object({

					dateofpurchase: Yup.string()

						.required("Enter date of first registration"),
					RtoNum: Yup.string()

						.required("Enter RTO number"),


					model: Yup.string()
						
						.required("Please select a model"),
					make: Yup.string()
						.required("Please select make"),
					variant: Yup.string()
						.required("Please select variant"),
					pucCertification: Yup.string()
						.oneOf(["yes", "no"], "required")
						.required("required"),



				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);
						//	myFunction();

						alert(JSON.stringify(values, null, 2));
						setStep((prev) => prev + 1)
						setSubmitting(false);
					}, 100);
				}}
			>
				{({ values, errors }) => (
					<Form className="tw-w-full">
						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="lastName"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Date of Registration
							</label>
							<div className="tw-flex  tw-flex-col   tw-w-2/4 ">
								<Field
									name="dateofpurchase"
									type="text"
									style={{ height: "40px" }}
									className=" tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  " placeholder="Enter date of registration"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="dateofpurchase" />{" "}
								</div>
								
							</div>
							

						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="RtoNum"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								RTO Number
							</label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="RtoNum"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  " placeholder="Enter RTO number"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="RtoNum" />{" "}
								</div>
							</div>


						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="title"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Make
							</label>

							<div className="tw-w-2/4">
							<Field
									name="make"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Enter Make"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="make" />{" "}
								</div>
							</div>


						</div>
						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="model"
								className="tw-font-bold tw-border-navgreen-500 tw-text-black-800 tw-text-md tw-w-1/3 tw-text-left"
							>
								Model
							</label>

							<div className="tw-w-2/4">
							<Field
									name="model"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Select Model"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="model" />{" "}
								</div>
							</div>


						</div>
						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="title"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-1/3 tw-text-left"
							>
								Variant
							</label>

							<div className="tw-w-2/4 tw-h-full">
							<Field
									name="variant"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Select Variant"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="variant" />{" "}
								</div>
							</div>
						</div>


						<div className="tw-w-full tw-flex tw-items-center ">
							<label
								htmlFor="pucCertification"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Do you have valid PUC Certification?
							</label>
							<div className="tw-w-2/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="pucCertification" className="tw-mr-2 tw-font-medium" value="yes" />
									Yes
								</label>
								<label>
									<Field type="radio" name="pucCertification" className="tw-mr-2 tw-font-medium" value="no" />
									No
								</label>
							</div>


						</div>
						<div className="tw-text-red-500 tw-text-center tw-mt-2 tw-text-sm tw-font-semibold">
							<ErrorMessage name="pucCertification" />{" "}
						</div>
						<div className="tw-w-full tw-flex tw-items-end tw-justify-end tw-mt-4 tw-text-center ">
							<button
								type="submit"

								className="tw-self-end tw-flex tw-items-center tw-border-0 tw-outline-0 tw-bg-transparent tw-text-navgreen-500 tw-font-bold"
							>
								<span >Next</span> <div className="tw-border-navgreen-500 tw-border-3 tw-border-solid tw-ml-4 tw-p-1 tw-pt-0 tw-rounded-lg " > <AiOutlineArrowRight style={{ fontSize: "20px" }} /> </div>
							</button>
						</div>
					</Form>
				)}
			</Formik></div>
	)

	const SecondForm = () => (
		<div className="tw-flex tw-w-2/4">
			<Formik
				initialValues={{
					title: "",
					previousInsurancer: "",
					previousPolicyType: "",
					existingPolicyExpiry: "",
					claimsmadeExisting: "",
					existingNoClaim: "",
					carRegistration:"",

				}}
				validationSchema={Yup.object({

					previousInsurancer: Yup.string()
						.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
						.required("Please select a previous Insurancer"),

					previousPolicyType: Yup.string()
						.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
						.required("Please select Previous Policy type"),

					existingPolicyExpiry: Yup.string()
						.required("Enter Policy Expiry Date."),

					claimsmadeExisting: Yup.string()
						.oneOf(["yes", "no"], "required")
						.required("required"),

					existingNoClaim: Yup.string()
						.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
						.required("Please select Existing no claim bonus"),

					carRegistration: Yup.string()
						.oneOf(["yes", "no"], "required")
						.required("required"),


				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);

						alert(JSON.stringify(values, null, 2));
						setStep((prev) => prev + 1)
						setSubmitting(false);
					}, 100);
				}}
			>
				{({ values, errors }) => (
					<Form className="tw-w-full">
						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="previousInsurancer"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Previous Insurancer
							</label>
							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="make"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
									as="select"
								>
									<option value="">Go Digit General Insurance Ltd.</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="previousInsurancer" />{" "}
								</div>
							</div>

						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="previousPolicyType"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Previous Policy type
							</label>
							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="previousPolicyType"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
									as="select"
								>
									<option value="">Comprehensive/Package</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="previousPolicyType" />{" "}
								</div>
							</div>


						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="existingPolicyExpiry"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Existing Policy expiry date is
								</label>
							<div className="tw-flex  tw-flex-col   tw-w-2/4 ">
								<Field
									name="existingPolicyExpiry"
									type="date"
									style={{ height: "40px" }}
									className=" tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="existingPolicyExpiry" />{" "}
								</div>
							</div>


						</div>
						<div className="tw-w-full tw-flex tw-items-center ">
							<label
								htmlFor="claimsmadeExisting"
								className="tw-font-bold tw-text-black-800 tw-mt-3 tw-text-md tw-w-2/3 tw-text-left">
								Claims made in existing policy
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="claimsmadeExisting" className="tw-mr-2 tw-font-medium" value="yes" />
									Yes
								</label>
								<label>
									<Field type="radio" name="claimsmadeExisting" className="tw-mr-2 tw-font-medium" value="no" />
									No
								</label>
							</div>
						</div>
						<div className="tw-text-red-500 tw-text-center tw-mt-2 tw-text-sm tw-font-semibold">
							<ErrorMessage name="claimsmadeExisting" />{" "}
						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="existingNoClaim"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-1/3 tw-text-left"
							>
							    Existing no claim bonus
							</label>

							<div className="tw-w-2/4 tw-h-full">
								<Field
									name="existingNoClaim"
									style={{ height: "40px" }}
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5  tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
									as="select"
								>
									<option value="">0%</option>
									<option value="xyz">20%</option>
									<option value="abc">35%</option>
									<option value="pqr">45%</option>
									<option value="pqr">50%</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="existingNoClaim" />{" "}
								</div>
							</div>
						</div>


						<div className="tw-w-full tw-flex tw-items-center ">
							<label
								htmlFor="carRegistration"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Car is registered in the name of
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="carRegistration" className="tw-mr-2 tw-font-medium" value="yes" />
									Individual
								</label>
								<label>
									<Field type="radio" name="carRegistration" className="tw-mr-2 tw-font-medium" value="no" />
									Company
								</label>
							</div>

						</div>
						<div className="tw-text-red-500 tw-mt-2 tw-text-center tw-text-sm tw-font-semibold">
							<ErrorMessage name="carRegistration" />{" "}
						</div>
						

						<div className="tw-w-full tw-flex tw-items-end tw-justify-end tw-mt-4 tw-text-center ">
							<button
								type="submit"

								className="tw-self-end tw-flex tw-items-center tw-border-0 tw-outline-0 tw-bg-transparent tw-text-navgreen-500 tw-font-bold"
							>
								<span >Next</span> <div className="tw-border-navgreen-500 tw-border-3 tw-border-solid tw-ml-4 tw-p-1 tw-pt-0 tw-rounded-lg " > <AiOutlineArrowRight style={{ fontSize: "20px" }} /> </div>
							</button>
						</div>
						{/* <div className="tw-text-left tw-font-md">
								{errors.length !== 0  ? "please fill all required fileds " : ""}
							</div>
							<pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
					</Form>
				)}
			</Formik></div>
	)
	const ThirdForm = () => (
		<div className="tw-flex tw-w-2/4">
			<Formik
				initialValues={{
					title: "",
					firstName: "",
					lastName: "",
					email: "",
					mobile: "",
					agree: false
				}}
				validationSchema={Yup.object({

					firstName: Yup.string()
							.max(30, "Must be 30 characters or less")
							.required("Enter your full name."),
					lastName: Yup.string()
							.max(30, "Must be 30 characters or less")
							.required("Enter your Last name."),

					email: Yup.string()
					.email("Invalid email address")
					.required("An Email Address is required"),
			
					mobile: Yup.string()
						.min(10, "Must be 10 characters")
						.max(10, "Must be 10 characters")
						.required("A mobile  number is required"),
				
					agree: Yup.bool().oneOf(
						[true],
						"Please agree terms and conditions"
					),

				})}

				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);
						//	myFunction();

						alert(JSON.stringify(values, null, 2));

						setSubmitting(false);
					}, 100);
				}}
			>
				{({ values, errors }) => (
					<Form className="tw-w-full">
						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="firstName"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								First Name
							</label>
							<div className="tw-flex  tw-flex-col   tw-w-2/4 ">
								<Field
									name="firstName"
									type="text"
									style={{ height: "40px" }}
									className=" tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="First Name"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="firstName" />{" "}
								</div>
							</div>

						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="lastName"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Last Name
							</label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="lastName"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  " placeholder="Last Name"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="lastName" />{" "}
								</div>
							</div>

						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="email"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Email ID
							</label>
							<div className="tw-flex  tw-flex-col   tw-w-2/4 ">
								<Field
									name="email"
									type="text"
									style={{ height: "40px" }}
									className=" tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  " placeholder="Email Address"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="email" />{" "}
								</div>
							</div>

						</div>

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="mobile"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Mobile No.
							</label>
							<div className="tw-flex  tw-flex-col   tw-w-2/4 ">
								<Field
									name="mobile"
									type="text"
									style={{ height: "40px" }}
									className=" tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  " placeholder="Contact Number"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="mobile" />{" "}
								</div>
							</div>

						</div>

		
						<div className="tw-w-full tw-flex tw-items-center ">
							<div className="tw-w-full tw-flex tw-items-center tw-space-x-8">
								<Field
									type="checkbox"
									id="agree"
									name="agree"
									className="tw-self-center "
								/>
								<label
									htmlFor="agree"
									className=" tw-w-3/4 tw-text-md tw-font-semibold tw-text-gray-600 tw-self-center"
								>
									I agree that the company and its represntatives can contact me through call, SMS, Email & Whatsapp even if i am registered under NDNC. I also agree that I have read and understood the T&C, Privacy Policy, Disclaimer and agree to abide by the same.
								</label>
							</div>
						</div>
						<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
							<ErrorMessage name="agree" />{" "}
						</div>

						<div className="tw-w-full tw-flex tw-items-end tw-justify-end tw-mt-4 tw-text-center ">
							<button
								type="submit"

								className="tw-self-end tw-flex tw-items-center tw-border-0 tw-outline-0 tw-bg-transparent tw-text-navgreen-500 tw-font-bold"
							>
								<span >Next</span> <div className="tw-border-navgreen-500 tw-border-3 tw-border-solid tw-ml-4 tw-p-1 tw-pt-0 tw-rounded-lg " > <AiOutlineArrowRight style={{ fontSize: "20px" }} /> </div>
							</button>
						</div>
						{/* <div className="tw-text-left tw-font-md">
								{errors.length !== 0  ? "please fill all required fileds " : ""}
							</div>
							<pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
					</Form>
				)}
			</Formik></div>
	)
	const showStepForm = () => {
		switch (step) {
			case 1:
				return <FirstForm />
			case 2:
				return <SecondForm />
			case 3:
				return <ThirdForm />
		}
	}


	return (
		<>
			<div className="tw-p-4">
				<h1 className="tw-text-center tw-font-md tw-mt-4" >Kindly provide us the following information</h1>
				<p className="tw-text-center tw-font-sm">This information will let us know the basic details about you</p>

				<div className="tw-p-4  tw-m-2 tw-w-full tw-flex tw-flex-row tw-items-center">
					{/* <span className=" tw-flex tw-items-center tw-gap-2 tw-text-left tw-text-lg tw-text-gray-600 tw-font-semibold">
					<p>Personal Details</p>
					<FaCheckCircle className="tw-text-green-500" />
				</span> */}
					<div className="tw-flex tw-flex-col tw-items-center tw-justify-center  tw-w-1/4">
						<button onClick={() => {
							setStep(1)
						}} style={{ height: "40px" }} className={`focus:tw-outline-none tw-mb-4  tw-rounded-full tw-text-xl tw-font-semibold  ${step === 1 ? "tw-shadow-boxShadow-3xl tw-w-60 tw-border-0 tw-bg-navgreen-1000 tw-text-white" : "tw-w-40 tw-border-2 tw-bg-white tw-border-navgreen-1000"}`}>Step 1</button>
						<button onClick={() => {
							setStep(2)
						}} style={{ height: "40px" }} className={`focus:tw-outline-none tw-mb-4  tw-rounded-full  tw-text-xl tw-font-semibold  ${step === 2 ? "tw-shadow-lg tw-w-60 tw-border-0 tw-bg-navgreen-1000 tw-text-white" : "tw-w-40 tw-border-2 tw-bg-white tw-border-navgreen-1000"}`}>Step 2</button>
						<button style={{ height: "40px" }} onClick={() => {
							setStep(3)
						}} className={`tw-mb-4 focus:tw-outline-none  tw-rounded-full tw-text-xl tw-font-semibold  ${step === 3 ? "tw-shadow-lg tw-w-60 tw-border-0 tw-bg-navgreen-1000 tw-text-white" : " tw-w-40 tw-border-2 tw-bg-white tw-border-navgreen-1000"}`}>Step 3</button>

					</div>
					{showStepForm()}

				</div>

			</div>

		</>
	);
};

export default CarForm;
