import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<Index section="about" />} />
        <Route path="/committee" element={<Index section="committees" />} />
        <Route path="/messages" element={<Index section="message" />} />
        <Route path="/faq" element={<Index section="faq" />} />
        <Route path="/background-guide" element={<Index section="background-guide" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
