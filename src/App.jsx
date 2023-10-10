import { Router } from "./router/Router";
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
    <Router />
  );
}

export default App;


