import React, {useState} from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    SxProps,
    Theme
} from "@mui/material";

interface IProps {
    label: string;
    size?: "small" | "medium";
    items: { [key: string]: string };
    onChange?: (e: SelectChangeEvent) => void;
    sx?: SxProps<Theme> | undefined;
}

export const Dropdown: React.FC<IProps> = ({label, items, onChange, sx, size}) => {
    const [value, setValue] = useState('')
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value)
        if (onChange) {
            onChange(e);
        }
    }
    const itemKeys = Object.keys(items);
    const options = itemKeys.map((key) => (<MenuItem value={key} key={key}>{items[key]}</MenuItem>));
    return <>

        <FormControl sx={sx} size={size}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                id={`${label}-select`}
                value={value}
                label={label}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options}
            </Select>
        </FormControl>
    </>;
};