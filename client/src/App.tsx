import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Programs from "@/pages/Programs";
import AIMLInternship from "@/pages/AIMLInternship";
import DataScienceBootcamp from "@/pages/DataScienceBootcamp";
import DeepLearning from "@/pages/DeepLearning";
import FullStack from "@/pages/FullStack";
import DigitalMarketing from "@/pages/DigitalMarketing";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import HireDevelopers from "@/pages/HireDevelopers";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/programs" component={Programs} />
          <Route path="/programs/ai-ml-internship" component={AIMLInternship} />
          <Route path="/programs/data-science" component={DataScienceBootcamp} />
          <Route path="/programs/deep-learning" component={DeepLearning} />
          <Route path="/full-stack" component={FullStack} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/hire-developers" component={HireDevelopers} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
