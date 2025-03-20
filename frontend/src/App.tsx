import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";
import { Toaster } from 'sonner';

function App() {
  return (
    <>
    <Toaster />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;