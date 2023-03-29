import Layout from "../../components/layout";
import { ContactBanner } from "./partials/Banner";
import { QuickContact } from "./partials/QuickContact";
import Addresses from "./partials/Addresses";
const Contact = () => {
  return (
    <Layout>
      {/* <ContactBanner /> */}
      <QuickContact />
      <Addresses />
    </Layout>
  );
};
export default Contact;
