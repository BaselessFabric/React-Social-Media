import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

type HeaderProps = {
    // Define the props for your component here
};

const Header: React.FC<HeaderProps> = (props) => {
    // Add your component logic here

    return (
        <AppBar position="static" sx={{ marginBottom: "2rem" }}>
            <Toolbar>
                <Typography variant="h6">Legbook</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
