import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { UserCard } from "./components/organisms/user/UserCard";
import { SearchInput } from "./components/molecules/SearchInput";
import "./style.css"

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
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard user={user} />
    </div>
  );
}

export default App;


