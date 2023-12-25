
export async function fetchLikeDislike(like, data) {

    try {
        const responce = await fetch(import.meta.env.VITE_BACKEND_LINK + "/quotes/" + helper[like], {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        const dataRevieved = await responce.json()

        return dataRevieved

    } catch (error) {
        console.log(error)
    }
}
const helper = {
    true: 'dislike',
    false: 'like'
}