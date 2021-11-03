import React, {Dispatch, useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export const Password:React.FC<{set:Dispatch<string>}> = (props)=>{
    const [visiblePass,setVisiblePass] = useState(false);
    const handleClickShowPassword = () => setVisiblePass(!visiblePass);
    const handleMouseDownPassword = () => setVisiblePass(!visiblePass);

    return <TextField
        onChange={(e)=>{props.set(e.target.value)}}
        type={visiblePass?"text":"password"}
        placeholder="パスワード"
        style={{width:"100%"}}
        size="small"
        InputProps={{
            endAdornment:<InputAdornment position="end">
                <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {
                        visiblePass ? <Visibility/> : <VisibilityOff/>
                    }
                </IconButton>
            </InputAdornment>
        }}
    />
}