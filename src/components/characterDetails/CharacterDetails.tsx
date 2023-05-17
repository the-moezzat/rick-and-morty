import {LoaderFunction, useLoaderData} from "react-router-dom";
import {useGetCharacterByIdQuery} from "../../store";
import {Chip, Stack, Typography} from "@mui/material";
import {EpisodeTable} from "./EpisodeTable";

export const loader: LoaderFunction = ({params}) => {
    return {id: params.characterId};
};
export const CharacterDetails = () => {
    const {id} = useLoaderData() as { id: number };

    const {data, isFetching, error} = useGetCharacterByIdQuery(id);

    return (
        <>
            {!data || isFetching ?
                "loading" :
                <>
                    <Stack direction={"row"} spacing={2} mb={2}>
                        <img alt={data.name} src={data.image} width={250} height={250} style={{borderRadius: "14px"}}/>
                        <Stack spacing={"8px"}>
                            <Stack direction={"row"} alignItems={"center"} mb={1} spacing={2}>
                                <Typography variant="h4" fontWeight={"bold"} color={"#212529"}>{data.name}</Typography>
                                <Chip variant={"filled"} label={data.status} sx={{
                                    borderRadius: "5px",
                                    color: "#fff",
                                    backgroundColor: (data.status === "Alive" ? "#51cf66" : data.status === "Dead" ? "#ff6b6b" : "#868e96"),
                                    fontSize: "16px",
                                }}/>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                            color={"#343a40"}>Species</Typography>
                                <Typography variant={"body1"} color={"#495057"}
                                            fontSize={18}>{data.species}</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                            color={"#343a40"}>Gender</Typography>
                                <Typography variant={"body1"} color={"#495057"} fontSize={18}>{data.gender}</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                            color={"#343a40"}>Origin</Typography>
                                <Typography variant={"body1"} color={"#495057"}
                                            fontSize={18}>{data.origin.name}</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                            color={"#343a40"}>Location</Typography>
                                <Typography variant={"body1"} color={"#495057"}
                                            fontSize={18}>{data.location.name}</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Typography variant={"body1"} fontWeight={"bold"} fontSize={18}
                                            color={"#343a40"}>Type</Typography>
                                <Typography variant={"body1"} color={"#495057"}
                                            fontSize={18}>{data.type || "Unknown"}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Typography variant={"h5"} fontWeight={"bold"} color={"#212529"} mb={1}>Episodes</Typography>
                    <EpisodeTable episodes={data.episode}/>
                </>
            }
        </>
    );
};