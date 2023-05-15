import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Stack, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface ICharacterCard {
    id: number
    name: string,
    imageUrl: string,
    species: string,
    gender: string,
    status: string
}

const Img = styled("img")({
    width: "150px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "16px"
});
export const CharacterCard: React.FC<ICharacterCard> = ({id, gender, imageUrl, status, species, name}) => {
    return (
        <Card
            sx={{display: "flex", gap: "10px", backgroundColor: "transparent"}}
            elevation={0}
        >
            <CardMedia>
                <Img

                    src={imageUrl}
                    alt={name}
                />
            </CardMedia>
            <CardContent sx={{padding: "0px"}}>
                <Typography variant="h5" mb={"8px"}>
                    {name}
                </Typography>

                <Stack direction="row" spacing={2} mb={"4px"}>
                    <Typography paragraph mb={0}>
                        Status: {status}
                    </Typography>
                    <Typography paragraph mb={0}>
                        Gender: {gender}
                    </Typography>
                </Stack>
                <Typography paragraph mb={0}>
                    Species: {species}
                </Typography>
            </CardContent>
            <CardActions sx={{ml: "auto", alignSelf: "flex-start"}}>
                <Link to={`/character/${id}`}>
                    <Button variant="text" size="small" sx={{fontWeight: "bold"}}>
                        Explore
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};