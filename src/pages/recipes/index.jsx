import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{my: '2rem'}} maxWidth="sm">
            <TextField 
            fullWidth 
            id="outlined-basic" 
            label="Enter a keyword to search recipes and hit Enter" 
            variant="outlined" />

            <Grid  sx={{mt: '1rem'}} container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia 
                        component="img"
                        sx={{height: 140}}
                        image="https://images.unsplash.com/photo-1698309377471-54a87740d979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlY2lwZSUyMGltYWdlc3xlbnwwfHwwfHx8Mg%3D%3D" />
                    </Card>

                    <CardContent>
                        <Typography variant="h5">Recipe Name</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    );
}