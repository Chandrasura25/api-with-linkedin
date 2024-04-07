import { SignInButton } from '@clerk/clerk-react';

export default function Home(){
	return(
		<>
			<SignInButton mode="modal" redirectUrl='/form'/>
		</>
		)
}