import {Box, useMediaQuery, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import {CharacterList} from "./characterList/CharacterList";

import CharacterDrawer from "./characterDetails/CharacterDrawer";

export default function App() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    maxWidth: '1440px',
                    margin: '0 auto',
                    alignItems: 'center',
                    height: '100vh',
                    px: {md: "14px", xs: 0}
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(16, 1fr)',
                        gap: 2,
                    }}
                >
                    {!isSmallScreen && (
                        <Box sx={{ gridColumn: 'span 9' }}>
                            <Outlet />
                        </Box>
                    )}
                    <Box
                        sx={{
                            gridColumn: {md: "span 7", xs: "span 16"},
                            overflowY: 'hidden',
                            borderRadius: {
                                xs: "0rem",
                                md: "2.4rem",
                            },
                            height: {
                                md: "640px",
                                xs: "100vh",
                            },
                            backgroundColor: "#f8f9fa",
                            pt: 2,
                            pb: 0,
                            px: {
                                md: 2,
                                xs: 0.5
                            },
                        }}
                    >
                        <CharacterList />
                    </Box>
                </Box>
                {isSmallScreen && (
                    <>
                        <CharacterDrawer>
                            <Outlet/>
                        </CharacterDrawer>
                    </>
                )}

            </Box>
        </>
    );
}
