import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
        <h1>Error - Something went wrong</h1>
        <h3>{err.data}</h3>
        <h4>{err.status}-{err.statusText}</h4>
        </>
    )
}
export default Error;