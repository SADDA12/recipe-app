import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";
import noRecipes from "../../assets/images/undraw_no_data_re_kwbl.svg";
import spinner from "../../assets/images/infinite-spinner.svg";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [loading, setLoading] = useState(false);

    const searchRecipes = () => {
        setLoading(true);
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchItem);
        // add the query parameter

        // fetch recipes
        fetch(url)
            .then((response) => { return response.json() })
            .then((data) => {
                // update the recipes state
                setRecipes(data.results);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }

    useEffect (searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }} >
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" 
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
                onKeyDown={event => event.key === 'Enter' && searchRecipes()}
                />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                { loading ? (
                    <Container sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={spinner} width="25%" />
                    </Container>
                ) : recipes.length > 0 ? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/>) : (
                    <Container sx={{display: 'flex', justifyContent: 'center'}}>
                         <img src={noRecipes} width="25%"/>
                    </Container>
                )}
            </Grid>
        </Container>
    );
}