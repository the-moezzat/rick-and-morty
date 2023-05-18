import { LoaderFunction, useLoaderData } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../store";
import { Box, styled, Chip, Grid, Stack, Typography } from "@mui/material";
import { CharacterDetailsSkeleton } from "./CharacterDetailsSkeleton";
import { EpisodeTable } from "./EpisodeTable";
import React from "react";

const ErrMessage = styled(Typography)`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

const Image = styled("img")(({ theme }) => ({
    borderRadius: "18px",
    width: "250px",
    height: "250px",
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
        width: "150px",
        height: "150px",
    },
}));

const SpecTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: "#343a40",
    [theme.breakpoints.down("md")]: {
        fontSize: "16px",
    },
}));

const SpecContent = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#495057",
    [theme.breakpoints.down("md")]: {
        fontSize: "16px",
    },
}));

const SpecGroup = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.down("md")]: {
        gap: "4px",
    },
}));

type CharacterImageProps = {
    alt: string;
    src: string;
};

const CharacterImage: React.FC<CharacterImageProps> = ({ alt, src }) => (
    <Image alt={alt} src={src} />
);

type CharacterDetailsHeaderProps = {
    name: string;
    status: string;
};

const CharacterDetailsHeader: React.FC<CharacterDetailsHeaderProps> = ({
                                                                           name,
                                                                           status,
                                                                       }) => (
    <Stack
        direction="row"
        mb={1}
        spacing={2}
        alignSelf={{ xs: "center", md: "start" }}
        alignItems="center"
    >
        <Typography variant="h4" fontWeight="bold" color="#212529">
            {name}
        </Typography>
        <Chip
            variant="filled"
            label={status}
            sx={{
                borderRadius: "5px",
                color: "#fff",
                backgroundColor:
                    status === "Alive"
                        ? "#51cf66"
                        : status === "Dead"
                            ? "#ff6b6b"
                            : "#868e96",
                fontSize: { md: "16px", xs: "14px" },
            }}
        />
    </Stack>
);

type CharacterSpecGroupProps = {
    title: string;
    content: string;
};

const CharacterSpecGroup: React.FC<CharacterSpecGroupProps> = ({
                                                                   title,
                                                                   content,
                                                               }) => (
    <Grid item xs="auto" md={12}>
        <SpecGroup>
            <SpecTitle variant="h5">{title}</SpecTitle>
            <SpecContent variant="body1">{content}</SpecContent>
        </SpecGroup>
    </Grid>
);

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = ({ params }) => {
    return { id: params.characterId };
};

export const CharacterDetails: React.FC = () => {
    const { id } = useLoaderData() as { id: number };
    const { data, isFetching, error } = useGetCharacterByIdQuery(id);

    if (isFetching) {
        return <CharacterDetailsSkeleton />;
    }

    if (error) {
        return (
            <ErrMessage variant="body1">
                Something went wrong while trying to load character
            </ErrMessage>
        );
    }

    if (!data) {
        return (
            <ErrMessage variant="body1">
                Character "{id}" not found
            </ErrMessage>
        );
    }

    const { name, status, image, species, gender, origin, location, type, episode } =
        data;

    return (
        <Box>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={2}>
                <CharacterImage alt={name} src={image} />
                <Stack spacing="8px" alignItems="center">
                    <CharacterDetailsHeader name={name} status={status} />
                    <Grid container columnSpacing={2} rowSpacing={1}>
                        <CharacterSpecGroup title="Type" content={species} />
                        <CharacterSpecGroup title="Gender" content={gender} />
                        <CharacterSpecGroup title="Origin" content={origin.name} />
                        <CharacterSpecGroup title="Location" content={location.name} />
                        <CharacterSpecGroup
                            title="Type"
                            content={type || "Unknown"}
                        />
                    </Grid>
                </Stack>
            </Stack>
            <Typography variant="h5" fontWeight="bold" color="#212529" mb={1}>
                Episodes
            </Typography>
            <EpisodeTable episodes={episode} />
        </Box>
    );
};
