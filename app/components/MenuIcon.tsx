import { ReactSVG } from "react-svg";

export const MenuIcon = (props:
    {
    path: string,
    obj_key: string,
    size: string
    }
) => {
    const { path, obj_key, size } = props;
    return (
        <ReactSVG
            src={path}
            className="fill-customred"
            beforeInjection={(svg) => {
                svg.setAttribute("style", `width: ${size}; height: ${size}`);
                svg.setAttribute("viewBox", "0 0 96 96");
            }}
            key={obj_key}
        />
    );
};
