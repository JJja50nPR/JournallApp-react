
import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hooks";
import { CheckingAuth } from "../../ui";


export const AuthRouter = () => {

  const status  = useCheckAuth();

  if( status === 'checking' ) {
      return <CheckingAuth/>
  };
  


  
  return (
    <>

        <Outlet/>

        {
          (status === 'authenticated')
          ? <Navigate to={'/'}/>
          : null
        }
      


    </>
    
    
  )
}
