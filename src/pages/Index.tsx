import Navbar from "@/components/Navbar";
import Principal from "@/components/Principal";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Principal />
      <Services />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;