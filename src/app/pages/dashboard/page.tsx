import Dasd from "../../../components/component-dashboard/dashboardt";
import Header from "../../../components/header/header";
export default function dashboard(){
    return(<>
    <section style={{width:"100%", height:"12%",}}>
        <Header />
    </section>
    <section>
        <Dasd />
    </section>    
    </>)
}