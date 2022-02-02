import { Header} from "../Module/index";
import { GetData,ModalData} from "../api";
const DashboardPage=()=>{
    return(
        <>
        <div>
             <Header/>
             <h1>WelCome To Dashboard</h1>
             {/* <ModalData/> */}
             {/* <GetData/>   */}
             <GetData/>
        </div> 
        </>            
    );
}
export default DashboardPage;