import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathName } = useLocation()
    
    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history

        if(canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, [pathName])

    return (
        <></>
    )
}

export default ScrollToTop