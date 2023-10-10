import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { UserCard } from "./components/organisms/user/UserCard";
import { SearchInput } from "./components/molecules/SearchInput";
import "./style.css"
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "つばさ",
  image: "https://source.unsplash.com/KnSYF3b4KcM",
  email: "12345@gmail.com",
  tel: "000-0000-0000",
  company: {
    name:"aaa会社"
  },
  website: "aaa.com",

}

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <br />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;


