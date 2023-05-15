import React from "react";
import {InputAdornment, SxProps, TextField, Theme} from "@mui/material";
import {MagnifyingGlass} from "@phosphor-icons/react";

interface IProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    sx?:  SxProps<Theme> | undefined
}

export const Search: React.FC<IProps> = ({onChange, sx}) => {
    return (
        <>
            <TextField
                variant="outlined"
                label="Search"
                size="small"
                onChange={onChange}
                sx={sx}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MagnifyingGlass size={24}/>
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        </>
    );
};