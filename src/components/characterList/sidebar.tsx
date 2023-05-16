import {Button, Divider, Stack, Typography} from "@mui/material";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
import {CharacterCardSkeleton} from "../characterCard/CharacterCardSkeleton";
import {CharacterCard} from "../characterCard/CharacterCard";
import {useEffect, useState} from "react";
import {useGetCharactersQuery} from "../../store";
import {useCharacterSearch} from "../../hooks/useCharacterSearch";

export const Sidebar = () => {
    const [{status, gender, name, fetching}, {handleStatusChange, handleNameChange, handleGenderChange, handleFetchingChange}] = useCharacterSearch()
    const [page, setPage] = useState<number>(1);
    const [characters, setCharacters] = useState<any[]>([]);


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

    const data = charactersData?.results;


    useEffect(() => {
        data && setCharacters((characters) => [...characters, ...data]);
        handleFetchingChange(false)
    }, [data]);

    return (
        <>
            <Typography variant={"h2"} fontWeight={"bold"} color={"#212529"} fontSize={"28px"}>
                Explore Rick & Morty characters
            </Typography>
            <Search onChange={(e) => {
                handleNameChange(e.target.value);
                setPage(1)
                setCharacters([])
                handleFetchingChange(true)
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
                    setPage(1)
                    setCharacters([])
                    handleFetchingChange(true)
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
                    setPage(1)
                    setCharacters([])
                    handleFetchingChange(true)
                }}
            />
            <Stack
                divider={<Divider variant="inset" />}
                spacing={1}
                sx={{ height: '80%', overflowY: 'auto' }}
            >
                {isLoading || fetching ? (
                    <CharacterCardSkeleton count={5}/>
                ) : error ? (
                    <p>error</p>
                ) : (
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
                    ))
                )}
                {isFetching ? (
                    <>
                        <CharacterCardSkeleton count={3} />
                    </>
                ) : (
                    <Button
                        onClick={() => {
                            setPage(page + 1);
                        }}
                    >
                        Load More
                    </Button>
                )}
                {/*<Pagination*/}
                {/*    count={charactersData?.info.pages}*/}
                {/*    onChange={(_, page) => {*/}
                {/*        setPage(page);*/}
                {/*    }}*/}
                {/*/>*/}
            </Stack>
        </>
    );
};