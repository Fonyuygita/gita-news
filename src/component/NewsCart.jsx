import React from 'react';
import { useStyles } from './NewsCart';
import { clsx, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, FavoriteIcon, ShareIcon, ExpandMoreIcon, MoreVertIcon, } from '../muiExport'




// fetch data here




export default function RecipeReviewCard({id, title,url, description, urlToImage, setSearch, search, author, source, content  }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
  
    <div className={classes.page}>
    {/* <inpu
     type="text"
     placeholder="Search for news..."
    value={search}
     onChange={(e) => setSearch(e.target.value)}
 />*/}
  
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor:"red", color:"white"}}>
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        
      />
      <CardMedia
        className={classes.media}
        image={urlToImage}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           {url}
          </Typography>
          <Typography paragraph>
            {content}
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
          <a href={url}>Learn More</a>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
  );
}
