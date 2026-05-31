import Card from "@mui/material/Card";
import cardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function StudentCard(props) {
  return (
    <Card
      sx={{
        width: 250,
        minHeight: 150,
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
      }}
      variant="outlined"
    >
      <cardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.department}</Typography>
        <Typography>{props.year}</Typography>
      </cardContent>
    </Card>
  );
}

export default StudentCard;
