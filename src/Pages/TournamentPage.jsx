import { Fragment } from "react";
import Tournaments from "../Components/Common/Tournaments/Tournaments";
import TournamentEvents from "../Components/Common/TournamentEvents/TournamentEvents";

export default function TournamentPage() {
    return (
        <Fragment>
            <Tournaments/>
            <TournamentEvents/>
        </Fragment>
    )
}