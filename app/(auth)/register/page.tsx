
// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Link from "next/link";
// import "leaflet/dist/leaflet.css";
// import LeafletMap from "../../components/LeafletMap";

// const registrationSchema = z
//   .object({
//     firstName: z.string().min(2, "First name is required"),
//     lastName: z.string().min(2, "Last name is required"),
//     email: z.string().email("Invalid email"),
//     phone: z.string().min(10, "Enter a valid phone number"),
//     address: z.string().min(5, "Please select an address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string().min(6),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// type FormData = z.infer<typeof registrationSchema>;

// export default function RegistrationForm() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(registrationSchema),
//   });

  
//   const onAddressSelect = (address: string) => {
//     setValue("address", address);
//   };

//   const onSubmit = (data: FormData) => {
//     localStorage.setItem("registeredUser", JSON.stringify(data));
//     alert("Registration successful!");
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
//         <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Create Your Account</h2>
//           <p className="mt-4 text-lg text-gray-900 dark:text-white">Register with your details and location.</p>
//         </div>

//         <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="rounded-lg overflow-hidden">
//             <LeafletMap onAddressSelect={onAddressSelect} />
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
//               {[
//                 { label: "First Name", name: "firstName", type: "text", placeholder: "John" },
//                 { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe" },
//                 { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
//                 { label: "Phone Number", name: "phone", type: "tel", placeholder: "+63 912 345 6789" },
//                 { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
//                 { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "••••••••" },
//                 { label: "Address", name: "address", type: "text", placeholder: "Click marker on map..." },
//               ].map(({ label, name, type, placeholder }) => (
//                 <div key={name}>
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
//                   <input
//                     {...register(name as keyof FormData)}
//                     type={type}
//                     className={inputClass}
//                     placeholder={placeholder}
//                   />
//                   {errors[name as keyof FormData] && (
//                     <p className="text-red-500 text-sm">
//                       {errors[name as keyof FormData]?.message?.toString()}
//                     </p>
//                   )}
//                 </div>
//               ))}


//               <div className="flex items-start">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   required
//                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <label htmlFor="terms" className="ml-3 text-sm text-gray-900 dark:text-white">
//                   I accept the{" "}
//                   <a href="#" className="font-medium text-green-600 hover:underline">
//                     Terms and Conditions
//                   </a>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5"
//               >
//                 Create an account
//               </button>

//               <p className="text-sm text-gray-900 dark:text-white">
//                 Already have an account?{" "}
//                 <Link href="/login" className="font-medium text-green-600 hover:underline">
//                   Login here
//                 </Link>
//               </p>
//               <p className="mt-4 text-sm text-center">
//                 <Link href="/" className="text-green-600 hover:underline">
//                   Go Home
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const inputClass = `
//   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
//   focus:ring-green-600 focus:border-green-600 block w-full p-2.5
//   dark:bg-gray-700 dark:border-gray-600 dark:text-white
// `;



"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import LeafletMap from "../../components/LeafletMap";
import { FiUser, FiMail, FiPhone, FiLock, FiMapPin } from "react-icons/fi";

const registrationSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Enter a valid phone number"),
    address: z.string().min(5, "Please select an address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onAddressSelect = (address: string) => {
    setValue("address", address);
  };

  const onSubmit = (data: FormData) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    alert("Registration successful!");
  };

  const formFields = [
    { label: "First Name", name: "firstName", type: "text", placeholder: "John", icon: <FiUser /> },
    { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe", icon: <FiUser /> },
    { label: "Email", name: "email", type: "email", placeholder: "name@company.com", icon: <FiMail /> },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "+63 912 345 6789", icon: <FiPhone /> },
    { label: "Password", name: "password", type: "password", placeholder: "••••••••", icon: <FiLock /> },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "••••••••", icon: <FiLock /> },
    { label: "Address", name: "address", type: "text", placeholder: "Click marker on map...", icon: <FiMapPin /> },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Create Your Account
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Join us and explore all the features
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="h-[600px]">
              <LeafletMap onAddressSelect={onAddressSelect} />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {formFields.map(({ label, name, type, placeholder, icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      {icon}
                    </div>
                    <input
                      {...register(name as keyof FormData)}
                      type={type}
                      className={`${inputClass} pl-10`}
                      placeholder={placeholder}
                    />
                  </div>
                  {errors[name as keyof FormData] && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors[name as keyof FormData]?.message}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              {/* Terms and Conditions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  I accept the{" "}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Terms and Conditions
                  </a>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg 
                          hover:from-green-700 hover:to-green-800 focus:ring-4 focus:ring-green-300 
                          font-medium text-sm transition-all duration-300"
              >
                Create Account
              </motion.button>

              {/* Links */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-600 hover:text-green-500 font-medium">
                    Sign in
                  </Link>
                </p>
                <Link
                  href="/"
                  className="text-sm text-green-600 hover:text-green-500 font-medium inline-block"
                >
                  ← Back to Home
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

const inputClass = `
  w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-700 text-gray-900 dark:text-white
  focus:ring-2 focus:ring-green-500 focus:border-green-500
  placeholder-gray-400 dark:placeholder-gray-300
  transition-all duration-200
`;
