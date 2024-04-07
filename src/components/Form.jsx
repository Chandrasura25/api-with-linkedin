import { UserButton, useUser } from '@clerk/clerk-react';
export default function Form(){
	const { user } = useUser();
	console.log(user);
	return(
		<>
	      <div className='h-screen w-full flex justify-center items-center'>
	        <UserButton/>
	      </div>
    	</>
	)
}