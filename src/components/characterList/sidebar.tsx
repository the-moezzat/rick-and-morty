import {Typography} from "@mui/material";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";

export const Sidebar = () => {
    return (
        <>
            <Typography variant={"h2"} fontWeight={"bold"} color={"#212529"} fontSize={"28px"}>
                Explore Rick & Morty characters
            </Typography>
            <Search/>
            <Dropdown
                label={"Status"}
                items={{
                    alive: "Alive",
                    dead: "Dead",
                    unknown: "unknown"
                }}
            />
            <Dropdown
                label={"Gender"}
                items={{
                    male: "Male",
                    female: "Female",
                    unknown: "unknown"
                }}
            />
        </>
    );
};