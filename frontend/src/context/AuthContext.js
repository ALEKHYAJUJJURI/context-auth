import { createContext, useState } from "react"

const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user,setUser] = useState({})
    return(
       <AuthContext.Provider value={{}}>
        {children}
       </AuthContext.Provider>
    )
}

export default AuthContext