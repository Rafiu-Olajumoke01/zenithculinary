'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import featuredCourses from '../data/courses';

const TransactionPage = () => {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        promoCode: '',
        agreedToTerms: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setCurrentStep(2);
        window.scrollTo(0, 0);
    };

  
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
    };

    // Submit the transaction
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentStep(4);
        window.scrollTo(0, 0);
    };

   
    const calculateTotal = () => {
        if (!selectedCourse) return 0;
        const price = selectedCourse.amount || selectedCourse.price || selectedCourse.cost || 0;
        const discount = selectedCourse.discount || selectedCourse.discountAmount || 0;
        return price - discount;
    };

    const getOriginalPrice = () => {
        if (!selectedCourse) return 0;
        return selectedCourse.amount || selectedCourse.price || selectedCourse.cost || 0;
    };

    // Step 1: Course Selection
    const renderCourseSelection = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Course</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer ${selectedCourse?.id === course.id
                                ? 'border-green-500 ring-2 ring-green-500'
                                : 'border-gray-200'
                            }`}
                        onClick={() => handleCourseSelect(course)}
                    >
                        <div className="relative h-48">
                            <img
                                src={course.image || "/api/placeholder/400/300"}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                            {(course.discount || course.discountAmount || 0) > 0 && (
                                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    SAVE ${course.discount || course.discountAmount}
                                </span>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                            <div className="text-sm text-gray-600 mb-2">
                                {course.duration} | Starts {course.startDate}
                            </div>
                            <div className="flex items-baseline">
                                {(course.discount || course.discountAmount || 0) > 0 ? (
                                    <>
                                        <span className="text-lg font-bold text-green-600">
                                            ${(course.amount || course.price || course.cost || 0) - (course.discount || course.discountAmount || 0)}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through ml-2">
                                            ${course.amount || course.price || course.cost || 0}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-lg font-bold text-green-600">
                                        ${course.amount || course.price || course.cost || 0}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Step 2: Student Information
    const renderStudentInformation = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Continue to Payment
                </button>
            </div>
        </div>
    );

    // Step 3: Payment Information
    const renderPaymentInformation = () => (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-green-500 focus-within:border-green-500">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="•••• •••• •••• ••••"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="flex-1 outline-none"
                        required
                    />
                    <div className="flex space-x-2">
                        <div className="h-6 w-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                        <div className="h-6 w-8 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                        <div className="h-6 w-8 bg-green-600 rounded text-white text-xs flex items-center justify-center">AE</div>
                    </div>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                    <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            placeholder="•••"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Promo Code (Optional)</label>
                <div className="flex">
                    <input
                        type="text"
                        name="promoCode"
                        value={formData.promoCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
                    />
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
                    >
                        Apply
                    </button>
                </div>
            </div>
            <div className="mt-6">
                <label className="flex items-start">
                    <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="#" className="text-green-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
                    </span>
                </label>
            </div>
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Complete Payment
                </button>
            </div>
        </form>
    );

    // Step 4: Confirmation
    const renderConfirmation = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-8">
                Thank you for enrolling in {selectedCourse?.title}. We've sent a confirmation email to {formData.email} with all the details.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                    <span>Course:</span>
                    <span>{selectedCourse?.title}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Start Date:</span>
                    <span>{selectedCourse?.startDate}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Duration:</span>
                    <span>{selectedCourse?.duration}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Original Price:</span>
                    <span>${getOriginalPrice()}</span>
                </div>
                {(selectedCourse?.discount || selectedCourse?.discountAmount || 0) > 0 && (
                    <div className="flex justify-between mb-2 text-green-600">
                        <span>Discount:</span>
                        <span>-${selectedCourse?.discount || selectedCourse?.discountAmount}</span>
                    </div>
                )}
                <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                </div>
            </div>
            <p className="text-gray-600 mb-6">
                Your enrollment has been confirmed. We're looking forward to seeing you in class!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/my-courses" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    View My Courses
                </Link>
                <Link href="/" className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Return to Homepage
                </Link>
            </div>
        </div>
    );

    // Order Summary (sidebar)
    const renderOrderSummary = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center mb-4">
                    <img
                        src={selectedCourse?.image || "/api/placeholder/80/80"}
                        alt={selectedCourse?.title}
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                        <h3 className="font-medium">{selectedCourse?.title}</h3>
                        <p className="text-sm text-gray-600">{selectedCourse?.duration}</p>
                    </div>
                </div>
                <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Original Price</span>
                        <span>${getOriginalPrice()}</span>
                    </div>
                    {(selectedCourse?.discount || selectedCourse?.discountAmount || 0) > 0 && (
                        <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-${selectedCourse?.discount || selectedCourse?.discountAmount}</span>
                        </div>
                    )}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${calculateTotal()}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                <p className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure payment
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Money-back guarantee
                </p>
            </div>
        </div>
    );

    const renderProgressSteps = () => {
        const steps = [
            { number: 1, title: "Course" },
            { number: 2, title: "Information" },
            { number: 3, title: "Payment" },
            { number: 4, title: "Confirmation" },
        ];

        return (
            <div className="w-full py-6">
                <div className="flex items-center">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            {/* Step indicator */}
                            <div className="flex items-center relative">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative ${currentStep >= step.number
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }`}>
                                    {currentStep > step.number ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        step.number
                                    )}
                                </div>
                                <div className="absolute top-0 -ml-10 text-center w-32 text-xs font-medium">
                                    {step.title}
                                </div>
                            </div>

                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="flex-auto border-t border-gray-300 mx-1">
                                    <div className={`border-t-2 ${currentStep > step.number ? "border-green-600" : "border-transparent"
                                        }`}></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    };

    // Main render function
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800">Enrollment & Payment</h1>
                    <p className="text-gray-600 mt-2">Complete your enrollment to begin your culinary journey</p>
                </div>

                {renderProgressSteps()}

                <div className="mt-8">
                    {currentStep < 4 && selectedCourse ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                {currentStep === 1 && renderCourseSelection()}
                                {currentStep === 2 && renderStudentInformation()}
                                {currentStep === 3 && renderPaymentInformation()}
                            </div>
                            <div className="lg:col-span-1">
                                {renderOrderSummary()}
                            </div>
                        </div>
                    ) : currentStep === 1 ? (
                        renderCourseSelection()
                    ) : (
                        renderConfirmation()
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;