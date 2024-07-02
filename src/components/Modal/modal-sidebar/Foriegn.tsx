import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Foriegn = ({ foriegn }: any) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" fontWeight={600}>
        Foreign
      </Typography>
      <List>
        {foriegn.items.map((item: any, index: number) => (
          <ListItem key={index}>
            <ListItemText
              primaryTypographyProps={{
                component: "span",
                style: { fontWeight: "bold" },
              }}
              primary={`\u2022 ${item.detail}`}
            />
          </ListItem>
        ))}
      </List>
      <Box display="flex">
        <Typography variant="h5" className="price">
          {foriegn.price.name}
        </Typography>
        <Typography variant="subtitle1" ml={1}>
          (Per person)
        </Typography>
      </Box>
    </Paper>
  );
};

export default Foriegn;
