import { useRecoilState } from "recoil";
import { stateViewMode } from "@/app/states/stateViewMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export const SideBar = () => {
    const [mode, setMode] = useRecoilState(stateViewMode);

    const menuClass = [
        "w-full",
        "flex",
        "gap-0",
        "px-2",
        "rounded-lg",
        "text-black",
        "hover:bg-customred",
        "hover:fill-white",
        "hover:text-white",
        "duration-300",
    ].join(" ");

    const clickMain = () => {
        setMode("Main");
    };

    const clickConfig = () => {
        setMode("Config");
    };
    const clickTrend = () => {
        setMode("Trend");
    }
    const clickPareto = () => {
        setMode("Pareto");
    };

    const menus = [
        {
            name: "Main",
            clickFunc: clickMain,
            icon: <FontAwesomeIcon icon={faHouse} />,
        },
        {
            name: "Trend",
            clickFunc: clickTrend,
            icon: <FontAwesomeIcon icon={faArrowTrendUp} />,
        },
        {
            name: "Pareto",
            clickFunc: clickPareto,
            icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
        },
        {
            name: "Config",
            clickFunc: clickConfig,
            icon: <FontAwesomeIcon icon={faGear} />,
        },
    ];
    const listMenu = menus.map((menu) => (
        <li key={menu.name}>
            <button
                className={menuClass}
                onClick={menu.clickFunc}
                key={menu.name + "button"}
            >
                <div className="flex">
                    <div className="content-center">{menu.icon}</div>
                    <div className="px-2">{menu.name}</div>
                </div>
            </button>
        </li>
    ));

    return (
        <div className="border-r h-full w-48 bg-white top-0 bottom-0">
            <div className="h-full px-2 py-4">
                <ul className="space-y-4 text-lg font-bold">{listMenu}</ul>
            </div>
        </div>
    );
};
