import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'




const Private = ({children}) => {
    const { user } = useContext(AuthContext);
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
    
};

Private.propTypes = {
    children: PropTypes.node
}

export default Private;