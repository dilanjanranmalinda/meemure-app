import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const Additional = ({ additional }: any) => {
  return (
    <Paper sx={{ p: 2, backgroundColor: "brown" }}>
      <Typography variant="body1">Additional Information:</Typography>
      <List>
        {additional.map((item: any, index: number) => (
          <ListItem key={index}>
            <ListItemText
              primaryTypographyProps={{
                component: "span",
              }}
              primary={`\u2022 ${item}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Additional;
