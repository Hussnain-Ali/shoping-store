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

const number = [1, 2, 3, 4, 5];
const UserProfile = () => {
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
              <Typography variant="h4">John Doe</Typography>
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
                  {number.map((index, value) => (
                    <ListItem sx={{ padding: 2 }} key={index}>
                      <ListItemText sx={{ mr: 10 }}>
                        First Name,{value}
                      </ListItemText>
                      <Typography sx={{ mr: 5 }}>Hussnain</Typography>
                      <Button>
                        <EditIcon />
                      </Button>
                      <Divider />
                    </ListItem>
                  ))}
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
