// import * as React from "react";
import {ReactNode} from "react";
import {Global} from "@emotion/react";
import {styled} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {grey} from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {useDrawer} from "../hooks/useDrawer";

const drawerBleeding = 56;

interface Props {
    children: ReactNode;
}

const Root = styled("div")(({theme}) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light" ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "light" ? "#343a40" : grey[800],
}));

const Puller = styled(Box)(({theme}) => ({
    width: 40,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[200] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));

export default function CharacterDrawer({children}: Props) {
    const {isOpen: open, openDrawer } = useDrawer()

    const toggleDrawer = (newOpen: boolean) => () => {
        openDrawer(newOpen)
    };

    return (
        <Root>
            <CssBaseline/>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(95% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: "absolute",
                        top: -drawerBleeding + 30,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                    }}
                >
                    <Box p={2}>
                    <Puller/>
                    </Box>
                    {/*<Typography sx={{pt: 2.5, pb: 1, color: "#fff", fontSize: "1.4rem", textAlign: "center"}}>*/}
                    {/*    /!*Morty Smith*!/*/}
                    {/*</Typography>*/}
                </StyledBox>
                <Box p={1} pt={1.5}>
                    {children}
                </Box>
            </SwipeableDrawer>
        </Root>
    );
}