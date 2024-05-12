import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { TEXT_COLOR } from "../../../accets/app-constants";

const ModalDesc = ({ description, items }: any) => {
  return (
    <Grid item>
      <Typography variant="body1" paragraph color={TEXT_COLOR}>
        {description}
      </Typography>
      <List>
        {items.map((item: any, index: number) => (
          <ListItem key={index}>
            <ListItemText
              primaryTypographyProps={{
                component: "span",
                style: { fontWeight: "bold", color: TEXT_COLOR },
              }}
              primary={`\u2022 ${item.name}`}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ModalDesc;
