import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDrawer} from "../../hooks/useDrawer";

interface ICharacterCard {
    id: number
    name: string,
    imageUrl: string,
    species: string,
    gender: string,
    status: string
}

export const CharacterCard: React.FC<ICharacterCard> = ({id, gender, imageUrl, status, species, name}) => {
    const {openDrawer} = useDrawer();
    return (
        <div>
            <Card
                sx={{
                    display:  "flex",
                    flexDirection: {
                        md: "row", xs: "column"
                    },
                    alignItems: "start",
                    justifyContent: "space-between",
                    backgroundColor: "transparent"}}
                elevation={0}
            >
                <Stack direction={"row"} spacing={{md: 2, xs: 1}}>
                    <CardMedia image={imageUrl} title={name} sx={{
                        width: {md: "150px", xs: "100px"},
                        height: {md: "100px", xs: "80px"},
                        borderRadius: "16px"
                    }}/>
                    <CardContent sx={{padding: 0}} >
                        <Typography mb={{md: 2, xs: 0}} variant="h5" color={"#343a40"}>
                            {name}
                        </Typography>

                        <Stack direction="row" spacing={{md: 2, xs: 1}}>
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
                </Stack>

                <CardActions sx={{width: "100%"}}>
                    <Link to={`/character/${id}`}>
                        <Button variant="outlined" size="small" onClick={() => {
                            openDrawer(true);
                        }}>
                            Explore
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};