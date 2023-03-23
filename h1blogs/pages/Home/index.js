import { Banner } from "./partials/Banner";
import Layout from "../../components/layout";
import { Instutute } from "./partials/Institute";
import { TransFormingCourse } from "./partials/TransFormingCourse";
import { TraningHightLight } from "./partials/TraningHightLight";
import { UpSkillCarrier } from "./partials/UpSKillCarrier";
import { Tranding } from "./partials/Tranding";
import { ComparisionChar } from "./partials/CoparisionChart";
import { EndToEnd } from "./partials/EndToEnd";
import { Benifits } from "./partials/Benifits";
import { StandsOut } from "./partials/StandsOut";
import { Suitable } from "./partials/Suitable";
import { ExperienceH1tags } from "./partials/ExperienceH1tags";
import { CarrerOption } from "./partials/CarrerOption";
import { StudentFeedback } from "./partials/StudentFeedback";
const Home = () => {
  return (
    <Layout>
      <Banner />
      <TransFormingCourse />
      <Instutute />
      <Benifits />
      <ComparisionChar />
      <StandsOut />
      <Suitable />
      <ExperienceH1tags />
      <CarrerOption />
      {/* <EndToEnd /> */}
      <StudentFeedback />
    </Layout>
  );
};
export default Home;
