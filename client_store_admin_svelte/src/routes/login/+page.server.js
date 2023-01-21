import { redirect } from "@sveltejs/kit"
import { API_URI } from '$env/static/private';


export const actions = {

    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        console.log('others>>>', password, email);
        const query = {email,password}
       const response = await fetch(`${API_URI}/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(query)
            });

        const finData = await response.json()
        //console.log("joseph_morgan: ", finData.accessToken)
        if (!finData) {
            return
        }
		/*cookies.set("auth", finData.accessToken, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,//process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})*/

		throw redirect(303, "/dashboard/overview")
	},

    logout: async ({ cookies, locals }) => {

        cookies.delete("auth")
        console.log(locals, 'from logout')
        locals.user=null
        throw redirect(303, "/login")              
	},


}