import React from "react";
import "./ProfileInfoStyles.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Profile from "../Model/Profile";

interface Props {
    // Define the props for your component here
    profile: Profile;
    // name: string;
    // dob: Date;
    // location: string;
}

// interface Name {
//     first: string;
//     last: string;
// }

// interface Dob {
//     age: number;
// }

// interface Location {
//     city: string;
//     country: string;
// }

interface Picture {
    medium: string;
    large: string;
}

interface User {
    // name: Name;
    // dob: Dob;
    // location: Location;
    picture: Picture;
}

const ProfileInfo: React.FC<Props> = ({ profile }) => {
    // Add your component logic here

    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        // Fetch user data from an API
        fetch("https://randomuser.me/api")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[0]);
            });
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="container" sx={{ marginBottom: "2rem" }}>
            <CardMedia
                component="img"
                image={user.picture.large}
                alt="Profile"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {profile.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Age: {profile.dob}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Location: {profile.location}
                </Typography>

                {/* <Typography variant="body2" color="text.secondary">
                    Location:{" "}
                    {`${user.location.city}, ${user.location.country}`}
                </Typography> */}
            </CardContent>
        </Card>
    );
};

export default ProfileInfo;
