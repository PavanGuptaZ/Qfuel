
export async function fetchRefresh() {

    try {
        const responce = await fetch(import.meta.env.VITE_BACKEND_LINK + "/auth/refresh", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
        const dataRevieved = await responce.json()

        if (dataRevieved?.user) {
            return dataRevieved.user
        }
        return false

    } catch (error) {
        console.log('error')
        return false
    }
}