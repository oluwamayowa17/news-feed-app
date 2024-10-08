import { Comment, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";

interface PostProps {
  posts: { id: number; creator: string; created_on: string; image: string; content: string }[];
}

const Post: React.FC<PostProps> = ({ posts }) => {

  function avatarText(name: string){
    return name.charAt(0).toUpperCase();
  }
  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 5 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" sx={{ bgcolor: "red" }}>
                {avatarText(post.creator)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.creator}
            subheader={post.created_on}
          />

          {post.image  && <CardMedia component="img" src={post.image} alt="Post image" sx={{height: 500}}/>}

          <CardContent>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              {post.creator}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorite">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
            </IconButton>
            <IconButton aria-label="comment">
              <Comment />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}

      
    </>
  );
};

export default Post;
