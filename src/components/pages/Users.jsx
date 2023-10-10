import styled from "styled-components"
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard";

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

    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;

    return (
        <SContainer>
            <h2>User一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
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