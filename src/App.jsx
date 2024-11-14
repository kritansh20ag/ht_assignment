import { Box } from "@mui/material";
import Header from "./components/Header";
import LeaderboardTable from "./components/LeaderboardTable";

import ChampionsSection from "./components/Backdrop";
// import Top4CardsDisplay from "./components/Top4Card";
import Top4CardsDisplay from "./components/Top4CardDisplay";


function App() {
  return (
    <Box flexDirection={"column"} display={"flex"} >
      <Header />
     <ChampionsSection/>
     <Top4CardsDisplay/>
      <LeaderboardTable />
    </Box>
  );
}

export default App;
