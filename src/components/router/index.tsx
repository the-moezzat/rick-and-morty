import {Typography} from "@mui/material";
import logo from '../../../public/logo.png'
export default function Index() {
    return (
        <>
            <img src={logo} alt={logo} height={'52px'} style={{marginBottom: "32px"}}/>
            <Typography variant={"h1"} fontWeight={"bold"} fontSize={72} letterSpacing={"-2px"} lineHeight={"1.1"}
                        color={"#212529"} mb={4}>
                Explore the world of Rick & Morty
            </Typography>
            <Typography paragraph fontSize={18} color={"#495057"}>
                Choose any character from the list to learn more about it also you can search on any character you wanna
                learn about it
            </Typography>
        </>
    );
}