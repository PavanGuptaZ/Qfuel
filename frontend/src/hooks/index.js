import { useContext } from "react";
import { UserDetails } from "./ContextProvider";

export const useGetUser = () => {
    let data = useContext(UserDetails)
    return data.user
}

export const useUserLoading = () => {
    let data = useContext(UserDetails)
    return data.userLoading
}

export const useUserFetching = () => {
    let data = useContext(UserDetails)
    return data.userFetching
}
