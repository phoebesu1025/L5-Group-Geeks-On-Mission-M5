import DataTest from "./../Components/db/DataTest.js";
import RedBanner1 from "./../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1";
import Needs from "./Components/../CommonComponents/Needs/Needs";
import LatetestNews from "./../Components/CommonComponents/LatestNews/LatestNews";
import PropertyManager from "./../Components/CommonComponents/PropertyManagers/PropertyManager";
import HomeBanner from "./../Components/Pages/Home/Banner/HomeBanner";
import SuccessfulInvestors from "./../Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors";
import SuccessfulInvestorsV2 from "./../Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestorsV2";
import Faq from "./../Components/CommonComponents/FAQ/Main/Faq";
import RedBanner2 from "./../Components/CommonComponents/RedBanner/RedBanner2/RedBanner2";
import RedBanner3 from "./../Components/CommonComponents/RedBanner/RedBanner3/RedBanner3";
import RedBanner4 from "./../Components/CommonComponents/RedBanner/RedBanner4/RedBanner4";
import CarouselContainer from "./../Components/CommonComponents/PropertyCarousel/CarouselContainer";
import AllReversible from "./../Components/AllReversible/AllReversible";

import SuccessfulTenancy from "./../Components/SuccessfulTenancy/SuccessfulTenancy";
import MeetUsBanner from "./../Components/Pages/MeetUs/Banner/MeetUsBanner";

const AllComponents = () => {
  return (
    <div>
      <HomeBanner />
      <MeetUsBanner />
      <div className="pt-16">
        <p>hi</p>
        <p>hi</p>

        <DataTest />
        <RedBanner1 />
        <br />
        <RedBanner2 />
        <br />
        <RedBanner3 />
        <br />
        <RedBanner4 />
        <PropertyManager />
        <Needs />
        <LatetestNews />
        <SuccessfulInvestors />
        <SuccessfulInvestorsV2 />
        <Faq />
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>

      <SuccessfulTenancy />
      <AllReversible />

      <CarouselContainer />
    </div>
  );
};

export default AllComponents;
