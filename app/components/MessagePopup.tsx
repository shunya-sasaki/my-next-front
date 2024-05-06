import { countMaxUnicodeChars } from "@/app/utils/countUnicodeChar";

export const MessagePopup = (props: {
    messages: string[];
    isHover: boolean;
}): JSX.Element => {
    const { messages, isHover } = props;
    const messageOffset = 2;
    const messageLength = countMaxUnicodeChars(messages) + messageOffset; 
    const message = messages.map((message) => {
        return <>{message}<br/></>
    })
    const popupClass = [
        "absolute",
        "p-2",
        "ml-16",
        "bg-slate-500",
        "text-white",
        `w-64`,
    ].join(" ");
    return isHover ? <div className={popupClass}>{message}</div> : <></>;
};
