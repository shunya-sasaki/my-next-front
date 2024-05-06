export const DummyPlotObject = () => {
    const plotClass = [
        "bg-slate-100",
        "content-center",
        "text-center",
        "text-slate-500",
        "min-h-96",
        "h-full",
    ].join(" ");
    return <div className={plotClass}>None Data</div>;
};
