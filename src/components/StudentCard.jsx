import Card from "@mui/material/Card";
import cardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function StudentCard(props) {
  return (
    <Card sx={{ minWidth: 300, margin: 2 }}>
      <cardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.department}</Typography>
        <Typography>{props.year}</Typography>
      </cardContent>
    </Card>
  );
}

export default StudentCard;
