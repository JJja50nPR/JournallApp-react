import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hooks";

export const JournalRouter = () => {

  const status = useCheckAuth()
  return (
    <>
        <Outlet/>

        {
          (status === 'not-authenticated')
          ? <Navigate to={'/auth/login'}/>
          : null
        }

        
    </>
  )
}
