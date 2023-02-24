import BlankTemplate from "@/components/templates/BlankTemplate";
import Contact from "@/components/molecules/Contact";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Footer from "@/components/molecules/Footer";
import Footer2 from "@/components/molecules/Footer2";

const index = () => {
  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <Contact />
      <Footer2 />
      <Footer />
    </BlankTemplate>
  );
};

export default index;
