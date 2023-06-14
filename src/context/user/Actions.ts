import type { userLogin } from "../models/user-schema"
import type { User } from "./Context"

export const LoginStart = (userCredentials: userLogin) => ({
    type: "LOGIN_START",
})

export const LoginSuccessful = (user: User) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})