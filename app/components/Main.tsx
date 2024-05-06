import { useRecoilValue } from "recoil"
import { stateViewMode } from "../states/stateViewMode"
import { MainView } from "./views/MainView";
import { ConfigView } from "./views/ConfigView";
import { ParetoView } from "./views/ParetoView";
import { TrendView } from "./views/TrendView";

export const Main = () => {
    const viewMode = useRecoilValue(stateViewMode);

    switch (viewMode) {
        case "Main":
            return <MainView />;
        case "Trend":
            return <TrendView />;
        case "Pareto":
            return <ParetoView />;
        case "Config":
            return <ConfigView />;
        default:
            return <MainView />;
    }
}