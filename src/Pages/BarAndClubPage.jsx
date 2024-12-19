import { Fragment } from "react";
import BarsClubs from "../Components/Common/BarsClubs/BarsClubs";
import Helmet from "../Components/Common/Helmet/Helmet";

export default function BarAndClubPage({searchOption}) {
    return (
        <Fragment>
        <Helmet title="Bars And Clubs">
            <BarsClubs searchOption={searchOption}/>
        </Helmet>
        </Fragment>
    )
}