import {Button, Card, CardContent, CardHeader, Divider, IconButton, InputAdornment, TextField} from "@mui/material";
import React, {CSSProperties, useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const LoginCard:React.FC<{}> = ()=>{

    const cardStyle:CSSProperties = {
        width:396,
        textAlign:"center"
    }

    const [studentId,setStudentId] = useState("");
    const [pass,setPass] = useState("");
    const [visiblePass,setVisiblePass] = useState(false);
    const [notFoundUser,setNotFoundUser] = useState(false);

    const handleClickShowPassword = () => setVisiblePass(!visiblePass);
    const handleMouseDownPassword = () => setVisiblePass(!visiblePass);

    const onLogin = ()=>{
        if(!(studentId.length > 0 && pass.length > 0)){
            setNotFoundUser(true)
            return
        }
        console.log(studentId+" "+pass)
        console.log((new URL(window.location.href)).searchParams.get("redirect"))
    }

    return <Card elevation={10} style={cardStyle}>
        <CardContent>
            <img style={{width:"100%",height:"auto"}} src="https://i.imgur.com/7Lu8gGi.png"/>
            <div style={{marginTop:10}}>
                <div style={{marginTop:10}}>
                    <TextField onChange={(e)=>{setStudentId(e.target.value)}} placeholder="学籍番号" style={{width:"100%"}} size="small"/>
                </div>
                <div style={{marginTop:10}}>
                    <TextField
                        onChange={(e)=>{setPass(e.target.value)}}
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
                </div>
                <div style={{marginTop:10}}>
                    {
                        notFoundUser  ?
                            <p style={{color:"red",fontSize:14}}>アカウントが存在しないかパスワードを間違えています</p> :
                            <></>
                    }
                </div>
                <div style={{marginTop:10}}>
                    <Button onClick={onLogin} style={{width:"100%",backgroundColor:"#166fe5",fontSize:20,fontWeight:"bold"}} variant="contained">
                        ログイン
                    </Button>
                </div>
                <div style={{marginTop:10}}>
                    <Link to="/" style={{textDecoration:"none",color:"#166fe5",fontSize:15}}>パスワードを忘れた場合</Link>
                </div>
                <div style={{marginTop:10}}>
                    <Divider/>
                </div>
                <div style={{marginTop:10}}>
                    <Link to="/register">
                        <Button style={{backgroundColor:"#2bac0b",fontSize:20,fontWeight:"bold"}} variant="contained">
                            新規登録
                        </Button>
                    </Link>
                </div>
            </div>
        </CardContent>
    </Card>
}