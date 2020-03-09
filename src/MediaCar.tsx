import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

interface MediaCardProps {
  imageUrl?: string;
  learnMore?: string;
  title: string;
  key?: string;
}

export default function ImgMediaCard({
  imageUrl,
  title,
  learnMore,
  key
}: MediaCardProps) {
  const classes = useStyles();

  return (
    <Card key={title} className={classes.card}>
      <CardActionArea>
        {imageUrl && (
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imageUrl}
            title="Contemplative Reptile"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button
          size="small"
          color="primary"
          onClick={() => window.open(learnMore, "_blank")}
        >
          Share
        </Button> */}

        {learnMore && (
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(learnMore, "_blank")}
          >
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
