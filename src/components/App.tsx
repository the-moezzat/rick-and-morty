
import {Sidebar} from "./characterList/sidebar";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    maxWidth: '1440px',
                    margin: '0 auto',
                    alignItems: 'center',
                    height: '100vh',
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
                            height: '600px',
                            backgroundColor: '#f8f9fa',
                            pt: 2,
                            pb: 8,
                            px: 2,
                        }}
                    >
                        <Sidebar />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default App;
