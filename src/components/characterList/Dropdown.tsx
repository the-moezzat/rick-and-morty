import React, {useState} from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

interface IProps {
    label: string;
    items: { [key: string]: string };
    onChange?: (e: SelectChangeEvent) => void;

}

export const Dropdown: React.FC<IProps> = ({label, items, onChange}) => {
    const [value, setValue] = useState('')
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value)
        if (onChange) {
            onChange(e);
        }
    }
    const itemKeys = Object.keys(items);
    const options = itemKeys.map((key) => <MenuItem value={key} key={key}>{items[key]}</MenuItem>);
    return <>

        <FormControl sx={{
            minWidth: '120px',
            backgroundColor: '#fff',
        }} size={"small"}>
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