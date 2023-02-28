import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import Footer2 from "@/components/molecules/Footer2";
import Section3 from "@/components/molecules/Section3";

const index = ()  => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by hehe" />
			<PrimaryNavigation />
            <Section1Article />
			<Section3 />
			<Share />
			<Footer2 />
		</BlankTemplate>
	);
};

export default index;
