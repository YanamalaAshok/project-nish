import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AiOutlineArrowRight } from "react-icons/ai"

const HealthForm = () => {
	// function myFunction() {
	// 	window.location.href = "/form/investment";
	// }


	//React hook for checkbox communication address
	const [step, setStep] = useState(1)
	const FirstForm = () => (
		<div className="tw-flex tw-w-2/4">

			<Formik
				initialValues={{
					gender: "",
					dob: "",
					policyTerm: "",
					tobacoHabit: "",
					sumAssured: "",
          primaryInsurancePincode: "",
          
				}}
				validationSchema={Yup.object({

          gender: Yup.string()
							.oneOf(["Male", "Female", "Others"], "Please select a gender")
							.required("Please select a gender"),
          
          dob: Yup.date()
              .required("A Date of Birth is required"),

          policyTerm: Yup.string()
          .oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
          .required("Please select a sum assured"),

          tobacoHabit: Yup.string()
          .oneOf(["yes", "no"], "required")
          .required("required"),

          sumAssured: Yup.string()
          .required("Please select sum assured amount"),

          primaryInsurancePincode: Yup.string()
              .min(6, "Must be 6 characters")
							.max(6, "Must be 6 characters")
							.required("Please select primary assured Pincode"),
         
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
								htmlFor="gender"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
							 Your Gender
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="gender"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"
									as="select"
								>
									<option value="">Select</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Others">Others</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-2 tw-text-sm tw-font-semibold">
									<ErrorMessage name="gender" />{" "}
								</div>
							</div>

						</div>


            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
									<label
										htmlFor="dob"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
									>
										Date of Birth
									</label>
									<div className="tw-w-2/4">
										<Field
											name="dob"
											type="date"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-navgreen-500 tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									
									<div className="tw-text-red-500 tw-mt-2 tw-text-sm tw-font-semibold">
										<ErrorMessage name="dob" />{" "}
									</div>
							</div>
              </div>
              

              <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="policyTerm"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Policy Term
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="policyTerm"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  
									as="select"
								>
									<option value="">Choose your term</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="policyTerm" />{" "}
								</div>
							</div>

						</div>


            <div className="tw-w-full tw-flex tw-mt-3 tw-mb-3 tw-items-center ">
							<label
								htmlFor="tobacoHabit"
								className="tw-font-bold tw-text-black-800 tw-text-md tw-w-2/3 tw-text-left">
								Tobacco Habit
							</label>
							<div className="tw-w-3/4 tw-flex tw-items-center  tw-space-x-14">
								<label>
									<Field type="radio" name="tobacoHabit" className="tw-mr-2 tw-font-medium" value="yes" />
									Yes
								</label>
								<label>
									<Field type="radio" name="tobacoHabit" className="tw-mr-2 tw-font-medium" value="no" />
								  No
								</label>
							</div>

						</div>

						<div className="tw-text-red-500 tw-mt-1 tw-text-sm tw-text-center tw-font-semibold">
							<ErrorMessage name="tobacoHabit" />{" "}
						</div>

            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="sumAssured"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Sum Assured
                </label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="sumAssured"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Sum Assured Amount"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-2 tw-text-sm tw-font-semibold">
									<ErrorMessage name="sumAssured" />{" "}
								</div>
							</div>


						</div>


						<div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5">
							<label
								htmlFor="primaryInsurancePincode"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Primary Insured Pincode
							</label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="primaryInsurancePincode"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Pincode"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-1 tw-text-sm tw-font-semibold">
									<ErrorMessage name="primaryInsurancePincode" />{" "}
								</div>
							</div>

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
					mobile: "",
					email: "",
					annualIncome: "",
					education: "",
					occupation: "",
					agree: false
				}}
				validationSchema={Yup.object({

          mobile: Yup.string()
          .min(10, "Must be 10 characters")
          .max(10, "Must be 10 characters")
          .required("A mobile  number is required"),  

          email: Yup.string()
					.email("Invalid email address")
					.required("An Email Address is required"),

          annualIncome: Yup.string()
          .oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
          .required("Please select annual income"),
					

					education: Yup.string()
          .oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
          .required("Please select education"),

          occupation: Yup.string()
          .oneOf(["pqr", "xyz", "abc"], "Please select a marital status")
          .required("Please select occupation"),

          
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
								htmlFor="mobile"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Mobile No.
                </label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="mobile"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Mobile Number"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-2 tw-text-sm tw-font-semibold">
									<ErrorMessage name="mobile" />{" "}
								</div>
							</div>


						</div>


            <div className="tw-text-red-500 tw-mt-1 tw-text-sm tw-text-center tw-font-semibold">
							<ErrorMessage name="tobacoHabit" />{" "}
						</div>

            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="email"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Email ID
                </label>
							<div className="tw-flex tw-flex-col  tw-w-2/4 ">
								<Field
									name="email"
									style={{ height: "40px" }}
									type="text"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"  placeholder="Email Id"
								/>{" "}
								<div className="tw-text-red-500 tw-mt-2 tw-text-sm tw-font-semibold">
									<ErrorMessage name="email" />{" "}
								</div>
							</div>


						</div>


            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="annualIncome"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
							  Annual Income
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="annualIncome"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"
									as="select"
								>
									<option value="">Select Annual Income</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="annualIncome" />{" "}
								</div>
							</div>

						</div>

            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="education"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Education
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="education"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"
									as="select"
								>
									<option value="">Post Graduate</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="education" />{" "}
								</div>
							</div>

						</div>

            <div className="tw-full tw-flex tw-items-center tw-justify-start tw-mb-1.5 ">
							<label
								htmlFor="occupation"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-text-left tw-w-1/3"
							>
								Occupation
							</label>

							<div className="tw-w-2/4">
								<Field
									style={{ height: "40px" }}
									name="occupation"
									className="tw-border-navgreen-500 tw-mb-0.5   tw-border-solid tw-border-2 tw-outline-none  tw-rounded-md tw-h-full tw-w-full"
									as="select"
								>
									<option value="">Salaried</option>
									<option value="xyz">xyz</option>
									<option value="abc">abc</option>
									<option value="pqr">pqr</option>
								</Field>{" "}
								<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
									<ErrorMessage name="occupation" />{" "}
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
                  By clicking, I agree that the company and its represntatives can contact me through call , SMS, email & Whatapp even if I am registered under NDNC. I also agree that i have read abnd understood the T&C, Privacy policy, Disclaimer and agree to abide by the same
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

export default HealthForm;
