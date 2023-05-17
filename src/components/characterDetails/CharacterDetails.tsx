import {LoaderFunction, useLoaderData} from "react-router-dom";
import {useGetCharacterByIdQuery} from "../../store";
import {Box, Chip, Stack, styled, Typography} from "@mui/material";
import {EpisodeTable} from "./EpisodeTable";
import {CharacterDetailsSkeleton} from "./CharacterDetailsSkeleton";
import Grid from "@mui/material/Unstable_Grid2";

export const loader: LoaderFunction = ({params}) => {
    return {id: params.characterId};
};
export const CharacterDetails = () => {
    const {id} = useLoaderData() as { id: number };

    const {data, isFetching, error} = useGetCharacterByIdQuery(id);

    const Image = styled("img")(({theme}) => ({
        [theme.breakpoints.down("md")]: {
            width: "150px",
            height: "150px",
        },
        borderRadius: "18px",
        width: "250px",
        height: "250px",
        alignSelf: "center",
    }));
    const SpecTitle = styled(Typography)(({theme}) => ({
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
        },
        fontSize: "18px",
        fontWeight: "bold",
        color: "#343a40"
    }));
    const SpecContnet = styled(Typography)(({theme}) => ({
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
        },
        fontSize: "18px",
        color: "#495057"
    }));

    return (
        <Box>
            {isFetching ?
                <CharacterDetailsSkeleton/> :
                error ?
                    <Typography variant={"body1"} textAlign={"center"} fontSize={28} fontWeight={"bold"}> Something gone
                        wrong field to load characters</Typography> :
                    (
                        !data ?
                            <Typography variant={"body1"} textAlign={"center"} fontSize={28} fontWeight={"bold"}>
                                Character "{id}" not found
                            </Typography>
                            :
                            (<>
                                <Stack direction={{
                                    xs: "column",
                                    md: "row"
                                }} spacing={2} mb={2}>
                                    <Image alt={data.name} src={data.image}/>
                                    <Stack spacing={"8px"} alignItems={"center"}>
                                        <Stack direction={"row"} mb={1} spacing={2} alignSelf={"center"}
                                               alignItems={"center"}>
                                            <Typography variant="h4" fontWeight={"bold"}
                                                        color={"#212529"}>{data.name}</Typography>
                                            <Chip variant={"filled"} label={data.status} sx={{
                                                borderRadius: "5px",
                                                color: "#fff",
                                                backgroundColor: (data.status === "Alive" ? "#51cf66" : data.status === "Dead" ? "#ff6b6b" : "#868e96"),
                                                fontSize: {md: "16px", xs: "14px"},
                                            }}/>
                                        </Stack>

                                        <Grid container columnSpacing={2} >
                                            <Grid xs={"auto"} md={12}>
                                                <Stack direction={"row"} alignItems={"center"} spacing={{
                                                    xs: "4px",
                                                    md:  "8px"
                                                }}>
                                                    <SpecTitle variant={"h5"}>Type</SpecTitle>

                                                    <SpecContnet variant={"body1"}>{data.species}</SpecContnet>
                                                </Stack>
                                            </Grid>
                                            <Grid xs={"auto"} md={12}>
                                                <Stack direction={"row"} alignItems={"center"} spacing={{
                                                    xs: "4px",
                                                    md:  "8px"
                                                }}>
                                                    <SpecTitle variant={"h5"}>Gender</SpecTitle>
                                                    <SpecContnet variant={"body1"}>{data.gender}</SpecContnet>
                                                </Stack>
                                            </Grid>
                                            <Grid xs={"auto"} md={12}>
                                                <Stack direction={"row"} alignItems={"center"} spacing={{
                                                    xs: "4px",
                                                    md:  "8px"
                                                }}>
                                                    <SpecTitle variant={"h5"}>Origin</SpecTitle>
                                                    <SpecContnet variant={"body1"}>{data.origin.name}</SpecContnet>
                                                </Stack>
                                            </Grid>
                                            <Grid xs={"auto"} md={12}>
                                                <Stack direction={"row"} alignItems={"center"} spacing={{
                                                    xs: "4px",
                                                    md:  "8px"
                                                }}>
                                                    <SpecTitle variant={"h5"}>Location</SpecTitle>
                                                    <SpecContnet variant={"body1"}>{data.location.name}</SpecContnet>
                                                </Stack>
                                            </Grid>
                                            <Grid xs={"auto"} md={12}>
                                                <Stack direction={"row"} alignItems={"center"} spacing={{
                                                    xs: "4px",
                                                    md:  "8px"
                                                }}>
                                                    <SpecTitle variant={"body1"}>Type</SpecTitle>
                                                    <SpecContnet variant={"body1"}>{data.type || "Unknown"}</SpecContnet>
                                                </Stack>
                                            </Grid>

                                        </Grid>
                                    </Stack>
                                </Stack>
                                <Typography variant={"h5"} fontWeight={"bold"} color={"#212529"}
                                            mb={1}>Episodes</Typography>
                                <EpisodeTable episodes={data.episode}/>
                            </>))
            }
        </Box>
    );
};