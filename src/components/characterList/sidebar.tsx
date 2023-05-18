import {Box, Divider, Stack, Typography} from "@mui/material";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
import {CharacterCardSkeleton} from "../characterCard/CharacterCardSkeleton";
import {CharacterCard} from "../characterCard/CharacterCard";
import {useEffect, useRef, useState} from "react";
import {useGetCharactersQuery} from "../../store";
import {useCharacterSearch} from "../../hooks/useCharacterSearch";
import {useInfiniteScroll} from "../../hooks/useInfiniteScroll";
import {BasicCharacter} from "../../types/characterTypes";
import logo from "../../assets/logo.png";

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
            <Stack direction={"row"} alignItems={"center"} mb={{
                md: 2,
                xs: 1
            }}>
                <img src={logo} alt={logo} height={"44px"}/>
                <Search onChange={(e) => {
                    handleNameChange(e.target.value);
                    setPage(1);
                    setCharacters([]);
                    handleFetchingChange(true);
                }}
                        sx={{backgroundColor: "#fff"}}
                />
            </Stack>
            <Box
                sx={{
                    display: "flex",
                    gap: {
                        md: "18px",
                        xs: "10px"
                    },
                    alignItems: "start",
                    mb: {
                        md: 2,
                        xs: 1
                    },
                }}
            >
                <Typography
                    variant="body1"
                    color="#212529"
                    fontWeight="bold"
                    fontSize={{md: "18px", xs: "16px"}}
                >
                    Filter
                </Typography>
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
            </Box>
            <Stack
                divider={<Divider variant="fullWidth"/>}
                spacing={1}
                pb={3}
                sx={{
                    height: {
                        md: "72%",
                        xs: "85%"
                    }, overflowY: "auto"
                }}
            >
                {isLoading || fetching ? (
                    <CharacterCardSkeleton count={5}/>
                ) : error ? (
                    <Typography variant={"body1"} textAlign={"center"} fontSize={28} fontWeight={"bold"}> Something gone
                        wrong field to load characters</Typography>
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
                        <Typography variant={"body1"} textAlign={"center"} fontSize={28} fontWeight={"bold"}>Can't found
                            "{name}"</Typography>

                )}
                {next && (isFetching ? (
                    <>
                        <CharacterCardSkeleton count={3}/>
                    </>
                ) : (
                    <div ref={sentinelRef}> <CharacterCardSkeleton count={1}/></div>
                ))}
            </Stack>
        </>
    );
};