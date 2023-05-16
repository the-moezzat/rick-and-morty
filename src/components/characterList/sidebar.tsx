import {Divider, Stack, Typography} from "@mui/material";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
import {CharacterCardSkeleton} from "../characterCard/CharacterCardSkeleton";
import {CharacterCard} from "../characterCard/CharacterCard";
import {useEffect, useRef, useState} from "react";
import {useGetCharactersQuery} from "../../store";
import {useCharacterSearch} from "../../hooks/useCharacterSearch";
import {useInfiniteScroll} from "../../hooks/useInfiniteScroll";
import {BasicCharacter} from "../../types/characterTypes";

export const Sidebar = () => {
    const [{status, gender, name, fetching}, {
        handleStatusChange,
        handleNameChange,
        handleGenderChange,
        handleFetchingChange
    }] = useCharacterSearch();
    const [page, setPage] = useState<number>(1);
    const [characters, setCharacters] = useState<BasicCharacter[]>([]);

    const {
        data: charactersData,
        isFetching,
        error,
        isLoading,
    } = useGetCharactersQuery({
        page,
        name,
        gender,
        status,
    });

    const next = charactersData && charactersData.info.next;
    const data = charactersData?.results || [];


    useEffect(() => {
            data && setCharacters((characters) => [...characters, ...data]);
            handleFetchingChange(false);
        },
        [data]);

    const {observe, unobserve} = useInfiniteScroll(() => {
        setPage((prevPage) => prevPage + 1);
    });

    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sentinelRef.current) {
            observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                unobserve(sentinelRef.current);
            }
        };
    }, [observe, unobserve]);

    return (
        <>
            <Typography variant={"h2"} fontWeight={"bold"} color={"#212529"} fontSize={"28px"}>
                Explore Rick & Morty characters
            </Typography>
            <Search onChange={(e) => {
                handleNameChange(e.target.value);
                setPage(1);
                setCharacters([]);
                handleFetchingChange(true);
            }}/>
            <Dropdown
                label={"Status"}
                items={{
                    alive: "Alive",
                    dead: "Dead",
                    unknown: "unknown"
                }}
                onChange={(e) => {
                    handleStatusChange(e.target.value);
                    setPage(1);
                    setCharacters([]);
                    handleFetchingChange(true);
                }}
            />
            <Dropdown
                label={"Gender"}
                items={{
                    male: "Male",
                    female: "Female",
                    unknown: "unknown"
                }}
                onChange={(e) => {
                    handleGenderChange(e.target.value);
                    setPage(1);
                    setCharacters([]);
                    handleFetchingChange(true);
                }}
            />
            <Stack
                divider={<Divider variant="middle"/>}
                spacing={1}
                sx={{height: "90%", overflowY: "auto"}}
            >
                {isLoading || fetching ? (
                    <CharacterCardSkeleton count={5}/>
                ) : error ? (
                    <p>something gone wrong</p>
                ) : (
                    data.length ?
                        characters.map((character) => (
                            <CharacterCard
                                id={character.id}
                                key={character.id}
                                name={character.name}
                                imageUrl={character.image}
                                gender={character.gender}
                                species={character.species}
                                status={character.status}
                            />
                        )) :
                        <p>Can't found "{name}"</p>

                )}
                {next && (isFetching ? (
                    <>
                        <CharacterCardSkeleton count={3}/>
                    </>
                ) : (
                    <div ref={sentinelRef}></div>
                ))}
            </Stack>
        </>
    );
};