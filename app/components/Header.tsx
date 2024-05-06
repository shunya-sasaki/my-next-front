export const Header = () => {
    const headerClass = [
        "flex",
        "justify-between",
        "bg-customgray2",
        "text-white",
        "h-full",
        "w-full",
        "pl-4"
    ].join(" ");
    return (
        <header className={headerClass}>
                <div className="text-3xl content-center">This is a header</div>
                <div className="content-center">This is a link to the home page</div>
        </header>
    );
};
