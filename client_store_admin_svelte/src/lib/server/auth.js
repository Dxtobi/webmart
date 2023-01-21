
import { authUser } from "../auth/user"

export const authenticateUser = async (event) => {
   
	// get the cookies from the request
	const { cookies } = event
	console.log('auth-function-lib', cookies.get('auth'));

	// get the user token from the cookie
	const userToken = cookies.get("auth")

	// if the user token is not valid, return null

	if (userToken) {
		return 
	}
	// this is where you would check the user token against your database
	const checkUser =  await fetch(`${API_URI}/auth/login`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			},
		body: JSON.stringify(query)
	});

	// to see if it is valid and return the user object
	if (userToken === "regularusertoken") {
		const user = {
			id: 1,
			email: "user@example.com",
			role: "USER",
		}
		//authUser = user
		return user
	}
	if (userToken === "adminusertoken") {
		const user = {
			id: 2,
			email: "admin@example.com",
			role: "ADMIN",
		}
		return user
	}

	return null
}