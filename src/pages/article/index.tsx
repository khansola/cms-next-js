import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section1Article from "@/components/molecules/Section1Article";
import Share from "@/components/molecules/Share";
import ArticleList from "@/components/molecules/ArticleList";
import Footer2 from "@/components/molecules/Footer2";
import Footer from "@/components/molecules/Footer";

const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by hehe" />
			<PrimaryNavigation />
            <Section1Article />
			<Share />
			<ArticleList />
			<Footer2 />
			<Footer />
		</BlankTemplate>
	);
};

export default index;
