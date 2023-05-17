import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {Episode} from "../../types/characterTypes";

interface IProps {
    episodes: Episode[];
}

export const EpisodeTable: React.FC<IProps> = ({episodes}) => {
    return (
        <>
            <Paper sx={{width: "100%", overflow: "hidden", borderRadius: "8px"}} elevation={2}>
                <TableContainer sx={{maxHeight: 330}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Episode</TableCell>
                                <TableCell>Air_date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {episodes.map((episode) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={episode.id}
                                    >
                                        <TableCell>{episode.id}</TableCell>
                                        <TableCell>{episode.name}</TableCell>
                                        <TableCell>{episode.episode}</TableCell>
                                        <TableCell>{episode.air_date}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*<TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />*/}
            </Paper>
        </>
    );
};