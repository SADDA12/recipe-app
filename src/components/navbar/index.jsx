import {AppBar, Toolbar, Typography} from "@mui/material";


export default function NavBar() {
    return (
        <AppBar color="success" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
        </Toolbar>
      </AppBar>
    )
}