import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorButton from "./components/ColorButton";
import ProfileInfo from "./socialNetworkComponents/ProfileInfo";
import Header from "./socialNetworkComponents/Header";
import Profile from "./Model/Profile";

function App() {
    const [background, setBackground] = React.useState("white");
    const [colorOptions, setColorOptions] = React.useState([
        "blue",
        "red",
        "green",
    ]);
    const [profiles, setProfiles] = React.useState([
        new Profile("John", 35, "New York"),
        new Profile("Jane", 45, "Los Angeles"),
        new Profile("Jim", 108, "Chicago"),
    ]);

    interface ProfileProps {
        profiles: Profile[];
    }

    return (
        <div className="App">
            <Header />
            {/* <header
                style={{ backgroundColor: background }}
                className="App-header"
            >
                {colorOptions.map((color) => {
                    return <ColorButton action={setBackground} col={color} />;
                })}

                <ColorButton action={setBackground} col="blue" />
            </header> */}
            {/* <ProfileInfo />
            <ProfileInfo /> */}
            {profiles.map((profile) => {
                return <ProfileInfo profile={profile} />;
            })}
        </div>
    );
}

export default App;
