import {Card, Typography} from "@mui/material";
import {TextEditor} from "./TextEditor";
import {useEffect, useState} from "react";
import {AvatarProfile} from "../profile/AvatarProfile";

export const ProfileCard = ()=>{

    const [icon, setIcon] = useState<string | null>(null);

    const [uploadedIcon,setUploadedIcon] = useState<string | null>(null);

    const [baseIcon, setBaseIcon] = useState<string>('');

    const [firstName, setFirstName] = useState<string | null>(null);

    const [baseFirstName, setBaseFirstName] = useState<string>('');

    const [lastName, setLastName] = useState<string | null>(null);

    const [baseLastName, setBaseLastName] = useState<string>('');

    const [pass, setPass] = useState<string | null>(null);

    const [studentId, setStudentId] = useState<string | null>(null);

    const [baseStudentId, setBaseStudentId] = useState<string>('');

    const [nickName, setNickName] = useState<string | null>(null);

    const [baseNickName, setBaseNickName] = useState<string>('');

    const [description,setDescription] = useState<string | null>(null);

    const [baseDescription,setBaseDescription] = useState('')

    useEffect(() => {
        const getProfile = async () => {
            // const profile = await Auth.getProfile();
            // if (profile.type === "success") {
            //     setBaseIcon(profile.value.avatar)
            //     setBaseName(profile.value.name)
            //     setBaseStudentId(profile.value.studentId)
            // }
        }
        getProfile()
    }, []);

    return <div>
        <Card variant="outlined" style={{maxWidth:"440px",width:"100%",margin:20,padding:20}}>
            <Typography variant="h5" style={{margin:5}}>
                公開情報 (ブログ等に掲載されます)
            </Typography>
            <AvatarProfile title="アイコン" baseIcon={baseIcon} icon={icon} setIcon={setIcon} setUploadedIcon={setUploadedIcon}/>

            <TextEditor id="nickname" title="ニックネーム" before={baseNickName} after={nickName} setBody={setNickName}/>

            <TextEditor id="description" title="自己紹介文" before={baseDescription} after={description} setBody={setDescription}/>
        </Card>
        <Card variant="outlined" style={{width:"440px",margin:20,padding:20}}>
            <Typography variant="h5" style={{margin:5}}>
                個人情報 (パスワードを除き, サークル内で共有されます)
            </Typography>

            <TextEditor id="student_id" title={"学籍番号"} before={baseStudentId} after={studentId} setBody={setStudentId}/>

            <TextEditor id="password" title={"パスワード"} before={""} after={pass} setBody={setPass}/>

            <TextEditor id="last_name" title={"姓"} before={baseLastName} after={lastName} setBody={setLastName}/>

            <TextEditor id="first_name" title={"名"} before={baseFirstName} after={firstName} setBody={setFirstName}/>

        </Card>
    </div>
}
