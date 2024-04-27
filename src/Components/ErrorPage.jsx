import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div style={{
            backgroundImage: "url('/404.avif')"
        }} className="min-h-screen bg-cover bg-no-repeat bg-center">
            <p className="text-4xl font-bold text-center">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;