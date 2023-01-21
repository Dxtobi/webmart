import { Handle, redirect } from "@sveltejs/kit"
import { authenticateUser } from "$lib/server/auth"


export const handle = async ({ event, resolve }) => {
    
    console.log('hit this 00')
    //step one
    event.locals.user = authenticateUser(event)
    //$authUser = authenticateUser(event)

    if (event.url.pathname.startsWith('/dashboard')){

        console.log('hit this 12')
        if (!event.locals.user) {
            console.log('hit this 14')
            throw redirect(303, '/login')
        } 

        if (event.url.pathname.startsWith('/dashboard/admin')){
            console.log('hit this20')
            if (event.locals.user.role !== 'ADMIN') {
                console.log('hit this 22')
                throw redirect(303, '/dashboard/overview')      
            }
        }

    }

    //step 2
    const response = await resolve(event)


    //step 3

    return response
}