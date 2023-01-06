import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar";
import Home from "./home";
import * as React from "react";

export default function MainPage() {
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
      <Home />
    </>
  );
}
