import { Banner } from "./partials/Banner";
import Layout from "../../components/layout"
import {Instutute} from './partials/Institute'
import {TransFormingCourse} from './partials/TransFormingCourse'
import {TraningHightLight} from './partials/TraningHightLight'
import { UpSkillCarrier } from "./partials/UpSKillCarrier";
import { Tranding } from "./partials/Tranding";
import { ComparisionChar } from "./partials/CoparisionChart";
import { EndToEnd } from "./partials/EndToEnd";
const Home=()=>{
    return(
        <Layout>
            
            <Banner/>
            <Instutute/>
          
            <TransFormingCourse/>
          
            <TraningHightLight/>
         
            <UpSkillCarrier/>
        
            <Tranding/>
           
            <ComparisionChar/>
            <EndToEnd/>

           
        </Layout>
        
    )
}
export default Home;