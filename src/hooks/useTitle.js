import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Asbab Furniture`;
    }, [title])
};

export default useTitle;