
export async function fetchLoginAndRegister(type, data) {

    try {
        const responce = await fetch(import.meta.env.VITE_BACKEND_LINK + "/auth/" + type, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
        })
        const dataRevieved = await responce.json()
        return dataRevieved
    } catch (error) {
        console.log(error)
    }
}