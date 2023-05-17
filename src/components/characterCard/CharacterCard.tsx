import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface ICharacterCard {
    id: number
    name: string,
    imageUrl: string,
    species: string,
    gender: string,
    status: string
}

export const CharacterCard: React.FC<ICharacterCard> = ({id, gender, imageUrl, status, species, name}) => {
    return (
        <div>
            <Card
                sx={{display: "flex", gap: "10px", backgroundColor: "transparent"}}
                elevation={0}
            >
                <CardMedia image={imageUrl} title={name} component={"img"} sx={{
                    width: "150px",
                    height: "100px",
                    borderRadius: "16px"
                }}/>
                <CardContent sx={{padding: "0px"}}>
                    <Typography gutterBottom variant="h5" color={"#343a40"}>
                        {name}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Typography color={"#868e96"}>
                            <Typography variant={"body1"} component={"span"}
                                        color={"#343a40"}>Status:</Typography> {status}
                        </Typography>
                        <Typography color={"#868e96"}>
                            <Typography variant={"body1"} component={"span"} color={"#343a40"}>
                                Gender:
                            </Typography> {gender}
                        </Typography>
                    </Stack>
                    <Typography color={"#868e96"}>
                        <Typography variant={"body1"} component={"span"} color={"#343a40"}>
                            Species:
                        </Typography> {species}
                    </Typography>
                </CardContent>
                <CardActions sx={{ml: "auto", alignSelf: "flex-start"}}>
                    <Link to={`/character/${id}`}>
                        <Button variant="outlined" size="small">
                            Explore
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};