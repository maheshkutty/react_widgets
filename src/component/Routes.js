import { useEffect, useState } from 'react'

const Routes = ({path, children}) => {
    const [currentPath, setCurrentpath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentpath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }
    }, [])
    return currentPath === path ? children : null;
} 

export default Routes;