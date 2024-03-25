import { AppBar,Button, Toolbar, Typography } from "@mui/material";
import {Link} from "react-router-dom";

export default function Navbar() {

    return (
        <AppBar color="secondary" position="static">
            <Toolbar>
                 <Typography variant="h6" component={Link} to="/recipes" color="inherit" sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>
                <Button component={Link} to="/addrecipe"
                variant="contained" color="secondary">
                  Add new recipe
                </Button>
                
            </Toolbar>
        </AppBar>
    );
}