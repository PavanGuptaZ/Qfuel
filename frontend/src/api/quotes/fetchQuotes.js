
export async function fetchQuotes() {

    try {
        const responce = await fetch("https://api.quotable.io/quotes/random?limit=3", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        const dataRevieved = await responce.json()

        return dataRevieved

    } catch (error) {
        console.log(error)
    }
}