import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AiOutlineArrowRight } from "react-icons/ai"

const LifeForm = () => {
	// function myFunction() {
	// 	window.location.href = "/form/investment";
	// }


	//React hook for checkbox communication address
	const [step, setStep] = useState(1)
	


const FirstForm = () => (
		<div className="tw-flex tw-w-2/4">

			<Formik
				initialValues={{
					buyPolicyFor: "",
					sumAssured: "",
					primaryInsuredGender: "",
					primaryInsuredAge: "",
					proposerPincode: "",
					additionalFamilyMem: "",
					proposerMobileNo: "",
					agree: false
				}}
				validationSchema={Yup.object({

					buyPolicyFor: Yup.string()
									.oneOf(["yes", "no"], "required")
									.required("required"),

					sumAssured: Yup.string()
					.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
					.required("Please select a sum assured"),

					primaryInsuredGender: Yup.string()
					.oneOf(["yes", "no"], "required")
					.required("required"),

					primaryInsuredAge: Yup.string()
					.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
					.required("Please select age"),

					proposerPincode: Yup.string()
					.min(6, "Must be 6 characters")
					.max(6, "Must be 6 characters")
					.required("A Pin Code is required"),

					additionalFamilyMem: Yup.string()
							.oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
							.required("Please select xyz"),
							
					proposerMobileNo: Yup.string()
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
						setStep((prev) => prev + 1)
						setSubmitting(false);
					}, 100);
				}}
			>
				{({ values, errors }) => (
					<Form className="tw-w-full">

            <div className="tw-w-full tw-flex tw-items-center ">
							<label
								htmlFor="buyPolicyFor"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Buy Policy For
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="buyPolicyFor" className="tw-mr-2 tw-font-medium" value="yes" />
									Individual
								</label>
								<label>
									<Field type="radio" name="buyPolicyFor" className="tw-mr-2 tw-font-medium" value="no" />
								  Family
								</label>
							</div>

						</div>
						<div className="tw-text-red-500 tw-mt-3 tw-text-center tw-text-sm tw-font-semibold">
							<ErrorMessage name="buyPolicyFor" />{" "}
						</div>


            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="sumAssured"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Sum Assured
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="sumAssured"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
									as="select"
								>
									<option value="">Select</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="sumAssured" />{" "}
								</div>
							</div>


						</div>

            <div className="tw-w-full tw-flex tw-items-center ">
							<label
								htmlFor="primaryInsuredGender"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Primary Insured Gender
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-14">
								<label>
									<Field type="radio" name="primaryInsuredGender" className="tw-mr-2 tw-font-medium" value="yes" />
									Male
								</label>
								<label>
									<Field type="radio" name="primaryInsuredGender" className="tw-mr-2 tw-font-medium" value="no" />
								  Female
								</label>
							</div>

						</div>

						<div className="tw-text-red-500 tw-mt-2 tw-text-center tw-text-sm tw-font-semibold">
							<ErrorMessage name="primaryInsuredGender" />{" "}
						</div>

            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="primaryInsuredAge"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Primary Insured Age
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="primaryInsuredAge"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "
									as="select"
								>
									<option value="">Select</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="primaryInsuredAge" />{" "}
								</div>
							</div>


						</div>


						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="proposerPincode"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Proposer Pincode
							</label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="proposerPincode"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "placeholder="Pincode"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="proposerPincode" />{" "}
								</div>
							</div>

						</div>


						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="additionalFamilyMem"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Additional Family Members
							</label>

							<div className="tw-w-2/4 tw-flex ">
								<Field
									style={{ height: "40px" }}
									name="additionalFamilyMem"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5 tw-mr-1.5 tw-flex tw-items-row  tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md  tw-w-2/4  "
									as="select"
								>
								
									<option value="">Adults?</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc.</option>
									<option value="pqr">pqr.</option>
                  			
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="additionalFamilyMem" />{" "}
								</div>
								<Field
									style={{ height: "40px" }}
									name="additionalFamilyMem"
									className="tw-my-select tw-border-navgreen-500  tw-mb-0.5 tw-flex tw-items-row  tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md  tw-w-2/4  "
									as="select"
								>
								
									<option value="">Children?</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc.</option>
									<option value="pqr">pqr.</option>
                  			
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4  tw-text-sm tw-font-semibold">
									<ErrorMessage name="additionalFamilyMem" />{" "}
								</div>
								
								</div>
									
						</div>
						

						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="proposerMobileNo"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Proposer Mobile No
							</label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="proposerMobileNo"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full " placeholder="Mobile No"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="proposerMobileNo" />{" "}
								</div>
							</div>

						</div>


            <div className="tw-w-full tw-flex tw-items-center ">
							<div className="tw-w-full tw-flex tw-items-center tw-space-x-8">
								<Field
									type="checkbox"
									id="agree"
									name="agree"
									className="tw-self-center"
								/>
								<label
									htmlFor="agree"
									className=" tw-w-4/4 tw-text-md tw-font-semibold tw-text-gray-600 tw-self-center"
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
					</Form>
				)}
			</Formik></div>
	)


	const SecondForm = () => (
		<div className="tw-flex tw-w-2/4">
			<Formik
				initialValues={{
					adult: "",
					child1: "",
					child2: "",
					agree: false
				}}
				validationSchema={Yup.object({

					adult: Yup.string()
              
              .required("Age required"),

					child1: Yup.string()
              .required("Age required"),

					child2: Yup.string()
              .required("Age required"),

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
						 <div className="tw-w-full tw-flex tw-items-center tw-mt-4">
							<label
								htmlFor="adult"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Adult
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="adult" className="tw-mr-2  tw-font-medium" value="yes" />
									Male
								</label>
								<label>
									<Field type="radio" name="adult" className="tw-mr-2 tw-font-medium" value="no" />
								  Female
								</label>
							</div>

							<div className="tw-w-3/4">
							
						
								<Field
									name="proposerPincode"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "placeholder="Enter Age"
								/>{" "}
								
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="adult" />{" "}
								</div>
							</div>
							</div>
							


            <div className="tw-w-full tw-flex tw-items-center tw-mt-4 ">
							<label
								htmlFor="child1"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Child 1
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="child1" className="tw-mr-2 tw-font-medium" value="yes" />
									Male
								</label>
								<label>
									<Field type="radio" name="child1" className="tw-mr-2 tw-font-medium" value="no" />
                  Female
								</label>
							</div>


							<div className="tw-w-3/4">
							
						
							<Field
								name="proposerPincode"
								style={{ height: "40px" }}
								type="text"
								className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "placeholder="Enter Age"
							/>{" "}
							
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="adult" />{" "}
							</div>
						</div>
						</div>

            <div className="tw-w-full tw-flex tw-items-center tw-mt-4 ">
							<label
								htmlFor="child2"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Child 2
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center tw-space-x-8">
								<label>
									<Field type="radio" name="child2" className="tw-mr-2 tw-font-medium" value="yes" />
									Male
								</label>
								<label>
									<Field type="radio" name="child2" className="tw-mr-2 tw-font-medium" value="no" />
								  Female
								</label>
							</div>

							<div className="tw-w-3/4">
							
						
							<Field
								name="proposerPincode"
								style={{ height: "40px" }}
								type="text"
								className="tw-border-navgreen-500  tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full  "placeholder="Enter Age"
							/>{" "}
							
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="adult" />{" "}
							</div>
						</div>
						</div>

						<div className="tw-w-full tw-flex tw-items-center ">
							<div className="tw-w-full tw-flex tw-items-center tw-space-x-8">
								<Field
									type="checkbox"
									id="agree"
									name="agree"
									className="tw-self-center"
								/>
								<label
									htmlFor="agree"
									className=" tw-w-4/4 tw-text-md tw-mt-7 tw-font-semibold tw-text-gray-600 tw-self-center"
								>
                  By clicking, I agree that the company and its represntatives can contact me through call , SMS, email & Whatapp even if I am registered under NDNC. I also agree that i have read abnd understood the T&C, Privacy policy, Disclaimer and agree to abide by the same
								</label>
							</div>
						</div>
						<div className="tw-text-red-500 tw-mt-4  tw-text-sm tw-font-semibold">
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
						}} style={{ height: "40px" }} className={`focus:tw-outline-none tw-mb-4  tw-rounded-full  tw-text-xl tw-font-semibold  ${step === 2? "tw-shadow-lg tw-w-60 tw-border-0 tw-bg-navgreen-1000 tw-text-white" : "tw-w-40 tw-border-2 tw-bg-white tw-border-navgreen-1000"}`}>Step 2</button>
						

					</div>
					{showStepForm()}

				</div>

			</div>

		</>
	);
};

export default LifeForm;
