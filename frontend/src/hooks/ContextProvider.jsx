import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { createContext } from "react";
import { fetchRefresh } from "../api/refresh/refresh";

export const UserDetails = createContext()

export const ContextProvider = ({ children }) => {
    const useRefreshQuery = useQuery({
        queryKey: ['refresh'],
        queryFn: () => fetchRefresh()
    })

    return (
        <UserDetails.Provider value={{
            user: useRefreshQuery.data,
            userLoading: useRefreshQuery.isLoading,
            userFetching: useRefreshQuery.isFetching
        }}>
            {children}
        </UserDetails.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
