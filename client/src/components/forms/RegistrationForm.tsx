import React, { useState, useRef } from "react";
import { Camera, Upload, Fingerprint, CheckCircle } from "lucide-react";
import { registerIdentity } from "../../utils/Provider";

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    country: "",
    region: "",
    biometricConsent: false,
    capturedImage: "",
  });
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        }
      })
      .catch((err) => console.error("Error opening camera", err));
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const imageData = canvasRef.current.toDataURL("image/png");
      setFormData((prev) => ({ ...prev, capturedImage: imageData }));
      console.log("Captured Image URL:", imageData);
      closeCamera();
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const startScan = () => {
    console.log("Fingerprint scan started...");
    setTimeout(() => {
      console.log("Fingerprint scan completed: Fingerprint data captured");
    }, 2000);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-1/4 h-2 rounded-full mx-1 ${
                step >= num
                  ? "bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2">
          {step === 1 && "Personal Information"}
          {step === 2 && "Biometric Verification"}
          {step === 3 && "Document Upload"}
          {step === 4 && "Review & Submit"}
        </h2>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="+123456789"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Take a clear photo of your face using your device's camera
            </p>
            <button
              onClick={openCamera}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            >
              Open Camera
            </button>
            <video
              ref={videoRef}
              autoPlay
              className="w-full h-auto mt-4"
            ></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
            <button
              onClick={captureImage}
              className="bg-green-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-green-600"
            >
              Capture Image
            </button>
          </div>

          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <Fingerprint
              className="w-16 h-16 mx-auto mb-4 text-gray-400 cursor-pointer"
              onClick={startScan}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Tap the fingerprint icon to scan your fingerprint
            </p>
             <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
               Start Scan
             </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="p-6 border-2 border-dashed rounded-lg">
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              Upload a valid government-issued ID document
            </p>
            <div className="flex justify-center">
              <input
                type="file"
                className="hidden"
                id="document-upload"
                accept="image/*,.pdf"
              />
              <label
                htmlFor="document-upload"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer"
              >
                Choose File
              </label>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Supported documents: National ID, Passport, Driver's License
            </p>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-medium mb-4">Review Your Information</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Name:</dt>
                <dd>{formData.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">
                  Date of Birth:
                </dt>
                <dd>{formData.dateOfBirth}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Email:</dt>
                <dd>{formData.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Phone:</dt>
                <dd>{formData.phone}</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              name="biometricConsent"
              checked={formData.biometricConsent}
              onChange={handleInputChange}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm">
              I consent to the collection and processing of my biometric data
              for identity verification purposes
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Back
          </button>
        )}
        <button
          onClick={
            step === 4
              ? () => {
                  /*console.log('Submit', formData)*/

                  // registerIdentity()
                  console.log(formData);
                  registerIdentity(
                    formData.name,
                    new Date(formData.dateOfBirth).getTime(),
                    formData.email,
                    formData.phone,
                    "image",
                    "finger",
                    "docdir"
                  );
                }
              : nextStep
          }
          className="ml-auto bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          {step === 4 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

// import React, { useState } from 'react';
// import { Camera, Upload, Fingerprint, CheckCircle } from 'lucide-react';

// export const RegistrationForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     email: '',
//     phone: '',
//     country: '',
//     region: '',
//     biometricConsent: false,
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
//   const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           {[1, 2, 3, 4].map(num => (
//             <div
//               key={num}
//               className={`w-1/4 h-2 rounded-full mx-1 ${
//                 step >= num
//                   ? 'bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500'
//                   : 'bg-gray-200 dark:bg-gray-700'
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-2">
//           {step === 1 && 'Personal Information'}
//           {step === 2 && 'Biometric Verification'}
//           {step === 3 && 'Document Upload'}
//           {step === 4 && 'Review & Submit'}
//         </h2>
//       </div>

//       {step === 1 && (
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Date of Birth</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               placeholder="your@email.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//               placeholder="+123456789"
//             />
//           </div>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="space-y-6">
//           <div className="text-center p-8 border-2 border-dashed rounded-lg">
//             <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//               Take a clear photo of your face using your device's camera
//             </p>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
//               Open Camera
//             </button>
//           </div>

//           <div className="text-center p-8 border-2 border-dashed rounded-lg">
//             <Fingerprint className="w-16 h-16 mx-auto mb-4 text-gray-400" />
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//               Scan your fingerprint using a compatible device
//             </p>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
//               Start Scan
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div className="space-y-6">
//           <div className="p-6 border-2 border-dashed rounded-lg">
//             <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//             <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
//               Upload a valid government-issued ID document
//             </p>
//             <div className="flex justify-center">
//               <input
//                 type="file"
//                 className="hidden"
//                 id="document-upload"
//                 accept="image/*,.pdf"
//               />
//               <label
//                 htmlFor="document-upload"
//                 className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer"
//               >
//                 Choose File
//               </label>
//             </div>
//           </div>
//           <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
//             <p className="text-sm text-yellow-800 dark:text-yellow-200">
//               Supported documents: National ID, Passport, Driver's License
//             </p>
//           </div>
//         </div>
//       )}

//       {step === 4 && (
//         <div className="space-y-6">
//           <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
//             <h3 className="font-medium mb-4">Review Your Information</h3>
//             <dl className="space-y-2">
//               <div className="flex justify-between">
//                 <dt className="text-gray-600 dark:text-gray-400">Name:</dt>
//                 <dd>{formData.name}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600 dark:text-gray-400">Date of Birth:</dt>
//                 <dd>{formData.dateOfBirth}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600 dark:text-gray-400">Email:</dt>
//                 <dd>{formData.email}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600 dark:text-gray-400">Phone:</dt>
//                 <dd>{formData.phone}</dd>
//               </div>
//             </dl>
//           </div>
//           <div className="flex items-start gap-2">
//             <input
//               type="checkbox"
//               id="consent"
//               name="biometricConsent"
//               checked={formData.biometricConsent}
//               onChange={handleInputChange}
//               className="mt-1"
//             />
//             <label htmlFor="consent" className="text-sm">
//               I consent to the collection and processing of my biometric data for identity verification purposes
//             </label>
//           </div>
//         </div>
//       )}

//       <div className="flex justify-between mt-8">
//         {step > 1 && (
//           <button
//             onClick={prevStep}
//             className="px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
//           >
//             Back
//           </button>
//         )}
//         <button
//           onClick={step === 4 ? () => console.log('Submit', formData) : nextStep}
//           className="ml-auto bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
//         >
//           {step === 4 ? 'Submit' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// };
