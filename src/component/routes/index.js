import { useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";

export default function ThemeRoutes({userData=1}){
 const routes=[];
 if(userData===1){
    routes.push(UserRoutes)
 }
 return useRoutes(routes)
}
