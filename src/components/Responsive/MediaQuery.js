import { useMediaQuery } from "react-responsive";

const Pc = ({children}) => {
    const isPc = useMediaQuery({ minWidth: 767})
    return isPc ? children : null
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({ maxWidth: 767})
    return isMobile ? children : null
}

export {Pc, Mobile}