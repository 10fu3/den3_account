import React, {Dispatch} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SchoolSectionList} from "../const/SchoolSection";

export const SchoolSection:React.FC<{value:string,set:Dispatch<string>}> = (props)=>{

    return <FormControl fullWidth>
        <InputLabel>学科</InputLabel>
        <Select
            value={props.value}
            label="学科"
            onChange={(e)=>{props.set(e.target.value as string)}}
        >
            {
                SchoolSectionList.map(e=>{
                    return <MenuItem value={e.symbol}>{e.name}</MenuItem>
                })
            }
        </Select>
    </FormControl>
}