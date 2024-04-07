import React, { useEffect, useState } from 'react';
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";

function Form() {
    const { user } = useUser();
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        emailAddress: "",
        imageUrl: ""
    });

    useEffect(() => {
        if (user) {
            const { firstName, lastName, emailAddress, imageUrl } = user.externalAccounts[0];
            setUserData({
                firstname: firstName ?? "",
                lastname: lastName ?? "",
                emailAddress: emailAddress ?? "",
                imageUrl: imageUrl ?? ""
            });
        } else {
            setUserData({
                firstname: "",
                lastname: "",
                emailAddress: "",
                imageUrl: ""
            });
        }
    }, [user]);
  
    return (
        <>
        <div className='h-screen w-full justify-center flex items-center'>
            <header className='fixed w-full top-0 border-b border-b-2 px-4 py-2.5 flex justify-between items-center'>
                <h3>Test</h3>
                {user ? (
                    <UserButton />
                ) : (
                    <SignInButton mode="modal" className="border px-4 py-2 rounded-full"/>
                )}
            </header>
            <div className='mt-8 p-8 w-[350px] shadow-lg rounded'>
                <form class="flex flex-col justify-start gap-4">
	                <div class="relative z-0 w-full mb-5 group">
	                <label className="account-form_image-label">
	                {user && userData.imageUrl ? (
                        <img src={userData.imageUrl} alt="User" />
                    ) : (
                        <img src="/src/assets/profile.svg" alt="Default Profile" />
                    )}
                    </label>
	                </div>
				 	<div class="relative z-0 w-full mb-5 group">
				      <input type="email"
				       name="email"
				       value={userData.emailAddress}
                        readOnly={user ? true : false}
				        id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				      <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
				   </div>
				   <div class="relative z-0 w-full mb-5 group">
				      <input type="text"
				       name="firstname"
				       value={userData.firstname}
                        readOnly={user ? true : false}
				        id="firstname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				      <label for="firstname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
				   </div>
				   <div class="relative z-0 w-full mb-5 group">
				      <input type="text"
				       name="lastname"
				       value={userData.lastname}
                        readOnly={user ? true : false}
				        id="lastname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				      <label for="lastname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
				   </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form;
