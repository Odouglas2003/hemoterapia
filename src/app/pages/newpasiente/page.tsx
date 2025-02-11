"use client";
import New from "../../../components/new_pasientef/page";
import Header from "../../../components/header/header";
export default function newpasiente(){
    return(<>
     <section style={{width:"100%", height:"12%",}}>
            <Header />
        </section>
        <section>
            <New />
        </section>
    </>)
}