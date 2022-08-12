import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const MovieListCard = ({ item }) => {
        const { id, title, genres } = item;
        return (
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: "260px",
                margin: "25px",
                marginTop: "40px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${id}.jpeg`}
                  style={{ height: "auto" }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {genres.join(",")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
}

export default MovieListCard