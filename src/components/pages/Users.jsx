import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
/* import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider"; */
import { useRecoilState } from "recoil";
import { UserState } from "../../store/Userstate";

const users = [...Array(10).keys()].map(((val) => {
    return{
        id: val,
        name: `つばさ${val}`,
        image: "https://source.unsplash.com/KnSYF3b4KcM",
        email: "12345@gmail.com",
        tel: "000-0000-0000",
        company: {
        name:"aaa会社"
        },
        website: "aaa.com",
        }
}));

export const Users = () => {

/*     const { userInfo, setUserInfo } = useContext(UserContext); */
    const [ userInfo, setUserInfo ] = useRecoilState(UserState);

    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin})
    return (
        <SContainer>
            <h2>User一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </SUserArea>
        </SContainer>
    )   
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;

`