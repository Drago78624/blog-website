import {redirect} from "react-router-dom"

export const checkAuthLoader = () => {
    const token = true

    if(!token){
        return redirect("/login")
    }

    return null
}