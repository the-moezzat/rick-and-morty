import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Error = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    maxWidth: '1440px',
                    margin: '0 auto',
                    alignItems: 'center',
                    justifyItems: 'center',
                    height: '100vh',
                    px: '14px'
                }}
            >
                <Box>
                <Typography variant={'h1'} fontWeight={'bold'} textAlign={'center'} color={"#212529"}>404</Typography>
                <Typography color={"#495057"}>Page not found <Link to={"/"}>Back to home</Link></Typography>

                </Box>
            </Box>

        </>
    );
};