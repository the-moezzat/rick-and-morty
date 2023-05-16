import { useState } from "react";

type CharacterSearchValues = {
    name: string;
    gender: string;
    status: string;
    fetching: boolean;
};

type CharacterSearchHandlers = {
    handleNameChange: (value: string) => void;
    handleGenderChange: (value: string) => void;
    handleStatusChange: (value: string) => void;
    handleFetchingChange: (value: boolean) => void;
};

export const useCharacterSearch = (
    initialName = "",
    initialGender = "",
    initialStatus = ""
): [CharacterSearchValues, CharacterSearchHandlers] => {
    const [name, setName] = useState<string>(initialName);
    const [gender, setGender] = useState<string>(initialGender);
    const [status, setStatus] = useState<string>(initialStatus);
    const [fetching, setFetching] = useState<boolean>(false);

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleGenderChange = (value: string) => {
        setGender(value);
    };

    const handleStatusChange = (value: string) => {
        setStatus(value);
    };
    const handleFetchingChange = (value: boolean) => {
        setFetching(value);
    };

    const searchValues: CharacterSearchValues = {
        name,
        gender,
        status,
        fetching
    };

    const searchHandlers: CharacterSearchHandlers = {
        handleNameChange,
        handleGenderChange,
        handleStatusChange,
        handleFetchingChange
    };

    return [searchValues, searchHandlers];
};
