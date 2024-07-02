import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Local = ({ local }: any) => {
  console.log('local', local);
  return (
    <Paper sx={{ p: 2, backgroundColor: "darkorange" }}>
      <Typography variant="h5" fontWeight={600}>
        දේශීය
      </Typography>
      <List>
        {local.items.map((item: any, index: number) => (
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
          {local.price.name}
        </Typography>
        <Typography variant="subtitle1" ml={1}>
          (එක් අයෙකු සඳහා)
        </Typography>
      </Box>
    </Paper>
  );
};

export default Local;
