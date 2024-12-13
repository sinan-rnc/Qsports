import { Fragment } from "react";
import BarsClubs from "../Components/Common/BarsClubs/BarsClubs";
import Helmet from "../Components/Common/Helmet/Helmet";

export default function BarAndClubPage() {
    return (
        <Fragment>
        <Helmet title="Bars And Clubs">
            <BarsClubs/>
        </Helmet>
        </Fragment>
    )
}