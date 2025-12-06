import { useQuery } from "@tanstack/react-query";
import { Typography, CircularProgress, Box } from "@mui/material";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Home() {
  const { data, isLoading } = useQuery<Post>({
    queryKey: ["posts", 1],
  });

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <div className="Body">
        <Typography variant="h4">Bem-vindo!</Typography>
        <Typography variant="body1">TESTE TESTE TESTE</Typography>{" "}
      </div>
    </>
  );
}

export default Home;
