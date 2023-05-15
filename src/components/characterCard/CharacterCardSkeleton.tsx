import { Box, Skeleton, Typography, Stack } from "@mui/material";
import React from "react";

interface IProps {
    count: number
}
export const CharacterCardSkeleton: React.FC<IProps> = ({ count }) => {
    const skeletonArray = Array.from({ length: count }, (_, index) => index);

    return (
        <>
            {skeletonArray.map((index) => (
                <Box
                    key={index}
                    sx={{ display: 'flex', gap: '10px', backgroundColor: 'transparent' }}
                    aria-label={"card-skeleton"}
                >
                    <Skeleton
                        variant="rounded"
                        width={"150px"}
                        height={"100px"}
                        sx={{
                            borderRadius: '16px',
                        }}
                    />
                    <Box>
                        <Typography variant="h5" mb={'8px'}>
                            <Skeleton width="150px" />
                        </Typography>

                        <Stack direction="row" spacing={2} mb={'4px'}>
                            <Typography paragraph mb={0}>
                                <Skeleton width="70px" />
                            </Typography>
                            <Typography paragraph mb={0}>
                                <Skeleton width="70px" />
                            </Typography>
                        </Stack>
                        <Typography paragraph mb={0}>
                            <Skeleton width={'90px'} />
                        </Typography>
                    </Box>
                    <Skeleton
                        width={'70px'}
                        height={'32px'}
                        sx={{ ml: 'auto', mr: '15px' }}
                    />
                </Box>
            ))}
        </>
    );
};
