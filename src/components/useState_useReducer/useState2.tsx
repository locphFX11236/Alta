import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
};

export const User = () => {
    
    // // < AuthUser | null >(null) -> Thiết lập giá trị hiện tại là <null>, và trong giá trị sau đó theo <AuthUser>
    // const [user, setUser] = useState< AuthUser | null >(null);
    
    // {} as AuthUser -> object rỗng hay có giá trị giống như AuthUser
    const [user, setUser] = useState< AuthUser >({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'AAA',
            email: 'a@a.com'
        });
    };
    // const handleLogout = () => {
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
            {/* user? là giá trị này có thể có hoặc ko */}
        </div>
    );
};