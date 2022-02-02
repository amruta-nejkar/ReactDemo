import { Header} from "../Module/index";
import { GetData} from "../api";
const DashboardPage=()=>{
    return(
        <>
        <div>
             <Header/>
             <h1>WelCome To Dashboard</h1>
             <GetData/>
        </div> 
        </>            
    );
}
export default DashboardPage;