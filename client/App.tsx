import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Outlets = lazy(() => import("./pages/Outlets"));
const OutletDetail = lazy(() => import("./pages/OutletDetail"));
const Spaces = lazy(() => import("./pages/Spaces"));
const BookSpace = lazy(() => import("./pages/BookSpace"));
const Membership = lazy(() => import("./pages/Membership"));
const Menu = lazy(() => import("./pages/Menu"));
const Events = lazy(() => import("./pages/Events"));
const Community = lazy(() => import("./pages/Community"));
const Auth = lazy(() => import("./pages/Auth"));
const UpdatePassword = lazy(() => import("./pages/UpdatePassword"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-white/60 text-sm">Loading…</div>}>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/outlets/:slug" element={<OutletDetail />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/book" element={<BookSpace />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
