import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Featured from "./components/Featured";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Grid, makeStyles } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { featuredPosts, sidebar } from "./Data/Data";
import PostCard from "./components/PostCard";
import { Title } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Navbar />
          <Featured />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.title} />
            ))}
          </Grid>
          <Grid container spacing={4} className={classes.MainGrid}>
            <Main title="Welcome to the Firebase" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          <Footer>
            title="&copy; 2021 kaushik sherugar | All rights reserved"
            description= "Blogging site designed by kaushik by using material
            ui"
          </Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
