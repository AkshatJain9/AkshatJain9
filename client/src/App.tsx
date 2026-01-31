import { useState } from "react";
import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Router base: at site root use "", else use first path segment (e.g. /AkshatJain9 for github.io/repo-name/).
function getRouterBase(): string {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname;
  if (path === "/" || path === "") return "";
  const segment = path.split("/").filter(Boolean)[0];
  return segment ? `/${segment}` : "";
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [routerBase] = useState(getRouterBase);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={routerBase}>
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
