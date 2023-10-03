import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItemText,
  Divider,
  Box,
  ListItem,
  Button,
} from "@mui/material";

import { Edit as EditIcon, Person as PersonIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "../../Redux/actions/userProfileAction";
const UserProfile = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userProfile.profile);
  console.log(selector, "hhh");
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <Container>
      <Paper style={{ padding: "10px", marginTop: "20px" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          display={"flex"}
          alignItems={"center"}
        >
          <Grid display="flex" alignItems="flex-start" marginRight={15}>
            <Grid item alignItems={"flex-start"}>
              <Avatar sx={{ width: 100, height: 100, bgcolor: "#1976d2" }}>
                <PersonIcon />
              </Avatar>
            </Grid>
            <Grid item sx={{ color: "#1976d2" }} margin={2}>
              <Typography variant="h4">{selector.firstName}</Typography>
              <Typography variant="subtitle1">Web Developer</Typography>
            </Grid>
          </Grid>

          <Grid>
            <Grid item>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem sx={{ padding: 2 }}>
                    <ListItemText sx={{ mr: 10 }}>First Name:</ListItemText>
                    <Typography sx={{ mr: 5 }}>{selector.firstName}</Typography>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Divider />
                  </ListItem>
                  <ListItem sx={{ padding: 2 }}>
                    <ListItemText sx={{ mr: 10 }}>Second Name:</ListItemText>
                    <Typography sx={{ mr: 5 }}>{selector.lastName}</Typography>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Divider />
                  </ListItem>
                  <ListItem sx={{ padding: 2 }}>
                    <ListItemText sx={{ mr: 10 }}>Email:</ListItemText>
                    <Typography sx={{ mr: 5 }}>{selector.email}</Typography>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Divider />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserProfile;
