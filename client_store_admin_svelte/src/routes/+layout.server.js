export const load = async ({ locals }) => {
    //console.log(locals, 'load from layout')
    return {
        user:locals.user
    }
}