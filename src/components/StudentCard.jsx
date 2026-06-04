import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

function StudentCard(props) {
  return (
    <Card
      sx={{
        width: 260,
        minHeight: 280,
        borderRadius: 4,
        background: "linear-gradient(135deg, #3f156d 0%, #764ba2 100%)",
        color: "white",
        boxShadow: 5,
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 10,
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Avatar
          src={props.image}
          sx={{
            width: 90,
            height: 90,
            mt: 1,
            border: "3px solid white",
          }}
        />

        <Typography variant="h5" fontWeight="bold">
          {props.name}
        </Typography>

        <Chip
          label={props.department}
          sx={{
            backgroundColor: "white",
            color: "#5a67d8",
            fontWeight: "bold",
          }}
        />

        <Typography variant="body1">{props.year}</Typography>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
