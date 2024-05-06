/**
 * ディレクトリの存在確認を問い合わせるカスタムフック
 */
import axios from "axios";
import { useState } from "react";

export const useFetchDirectoryExist = () => {
    const [directoryExist, setDirectoryExist] = useState(undefined);
    const [directoryLastModifiedTime, setDirectoryLastModifiedTime] =
        useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const onClickFetchDirectoryExist = (targetDirectory: string) => {
        // percent encoding
        setIsLoading(true);
        axios
            .get(
                "http://localhost:8000/config/directory_exist/" +
                    "?directory=" +
                    encodeURIComponent(targetDirectory)
            )
            .then((response) => {
                console.log(response.data);
                setDirectoryExist(response.data["directory_exist"]);
                setDirectoryLastModifiedTime(
                    response.data["directory_last_modified_time"]
                );
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return { directoryExist, directoryLastModifiedTime, isLoading, onClickFetchDirectoryExist };
};
