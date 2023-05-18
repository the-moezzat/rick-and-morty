import {Skeleton, Stack, Typography} from "@mui/material";

export const CharacterDetailsSkeleton = () => {
    return (
        <>
            <Stack direction={{
                xs: "column",
                md: "row"
            }} spacing={2} mb={2} aria-label={"character-details-skeleton"}>
                <Skeleton width={"250px"} height={"250px"} variant={"rounded"} sx={{borderRadius: '14px', alignSelf: "center"}}/>
                <Stack spacing={"8px"}>
                    <Stack direction={"row"} alignItems={"center"} mb={1} spacing={2}>
                        <Skeleton width={200} height={30} variant={"rounded"}/>

                        <Skeleton variant={"rounded"} width={50} height={30} sx={{borderRadius: "5px",}}/>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                    color={"#343a40"}>Species</Typography>
                        <Typography variant={"body1"} fontSize={18}>
                            <Skeleton width={100} variant={"rounded"}/>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                    color={"#343a40"}>Gender</Typography>
                        <Typography variant={"body1"} fontSize={18}>
                            <Skeleton width={100} variant={"rounded"}/>
                        </Typography> </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                    color={"#343a40"}>Origin</Typography>
                        <Typography variant={"body1"} fontSize={18}>
                            <Skeleton width={100} variant={"rounded"}/>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant={"h5"} fontWeight={"bold"} fontSize={18}
                                    color={"#343a40"}>Location</Typography>
                        <Typography variant={"body1"} fontSize={18}>
                            <Skeleton width={100} variant={"rounded"}/>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant={"body1"} fontWeight={"bold"} fontSize={18}
                                    color={"#343a40"}>Type</Typography>
                        <Typography variant={"body1"} fontSize={18}>
                            <Skeleton width={100} variant={"rounded"}/>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant={"h5"} fontWeight={"bold"} color={"#212529"} mb={1}>Episodes</Typography>

        </>
    );
};