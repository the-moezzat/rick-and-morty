
import {Sidebar} from "./characterList/sidebar";
import {Outlet} from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import {Box} from "@mui/material";
function App() {
    return (
        <>
            <Grid container maxWidth={"144rem"} mx={"auto"} height={"100vh"} p={"1.4rem"} alignItems={"center"} justifyContent={"center"} disableEqualOverflow>

                <Grid container columnSpacing={2} columns={{md: 16, xs: 12}} xs={12} disableEqualOverflow>
                    <Grid md={9} xs={12}>
                        <Outlet />
                    </Grid>
                    <Grid
                        md={7}
                        xs={12}
                        sx={{
                            borderRadius: '2.4rem',
                            height: '64rem',
                            backgroundColor: '#f8f9fa',
                            pt: 2,
                            pb: 8,
                            px: 2,
                        }}
                    >
                        <Sidebar />

                    </Grid>
                </Grid>
            </Grid>
            {/*<Box
                sx={{
                    display: 'grid',
                    maxWidth: '1440px',
                    margin: '0 auto',
                    alignItems: 'center',
                    height: '100vh',
                    px: '14px'
                }}
            >

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(16, 1fr)',
                        gap: 2,
                    }}
                >
                    <Box sx={{ gridColumn: 'span 9' }}>
                        <Outlet />
                    </Box>
                    <Box
                        sx={{
                            gridColumn: 'span 7',
                            overflowY: 'hidden',
                            borderRadius: '24px',
                            height: '640px',
                            backgroundColor: '#f8f9fa',
                            pt: 2,
                            pb: 8,
                            px: 2,
                        }}
                    >
                        <Sidebar />
                    </Box>
                </Box>
            </Box>*/}
        </>
    );
}

export default App;
