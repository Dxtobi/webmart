import { redirect } from "@sveltejs/kit"


export const POST = async ({ cookies, locals }) => {
    cookies.delete("auth")
    console.log(locals, 'from logout')
	throw redirect(303, "/")
}




