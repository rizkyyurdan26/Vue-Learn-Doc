const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUser() {

    const res = await fetch(`${BASE_URL}/users`)
    
    if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    return res.json()
    
}

export async function getUserId(id){
    const res = await fetch(`${BASE_URL}/users/${id}`)

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }
    console.log(res)

    return res.json()
}

export async function delUser(id) {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE'
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }
    console.log(res)

    return true
}

