import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Remove the # from the hash
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                // Small delay to ensure page is fully loaded
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 100);
            }
        }
    }, [location]);

    return null;
};
