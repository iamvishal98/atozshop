import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase';


export const useAuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen =onAuthStateChanged(auth,(user) => {
            if(user)
                setAuthUser(user);
            else
                setAuthUser(null);
        })
    },[])

  return [authUser];
}

