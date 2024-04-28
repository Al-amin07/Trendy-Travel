import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div style={{
            backgroundImage: "url('/error.jpg')"
        }} className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center  justify-center">
           <div className="bg-slate-400 px-20 py-12 rounded-xl space-y-4">
            <h2 className="text-5xl font-bold text-white text-center">Opps!!!</h2>
            <h2 className="text-4xl font-bold text-white text-center">Page Not Found</h2>
           <p className="text-4xl font-bold text-white text-center">{error.statusText || error.message}</p>
           </div>
        </div>
    );
};

export default ErrorPage;