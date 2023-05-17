import {Grid, useMediaQuery, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import {Sidebar} from "./characterList/sidebar";

import CharacterDrawer from "./CharacterDrawer";

export default function App() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Grid
                container
                maxWidth="144rem"
                mx="auto"
                height="100vh"
                px={{
                    xs: "0rem", md: "1.4rem",
                }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid
                    container
                    columns={16}
                    item
                >
                    {!isSmallScreen && (
                        <Grid md={9} item>
                            <Outlet/>
                        </Grid>
                    )}
                    <Grid
                        md={isSmallScreen ? 16 : 7}
                        xs={16}
                        sx={{
                            borderRadius: {
                                xs: "0rem",
                                md: "2.4rem",
                            },
                            height: {
                                md: "64rem",
                                xs: "100vh",
                            },
                            backgroundColor: "#f8f9fa",
                            pt: 2,
                            pb: 8,
                            px: {
                                md: 2,
                                xs: 0.5
                            },

                        }}
                        item
                    >
                        <Sidebar/>
                    </Grid>
                </Grid>
                {isSmallScreen && (
                    <>
                        <CharacterDrawer>
                            <Outlet/>
                        </CharacterDrawer>
                    </>
                )}

            </Grid>
        </>
    );
}