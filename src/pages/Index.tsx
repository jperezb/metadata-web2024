import Navbar from "@/components/Navbar";
import Principal from "@/components/Principal";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Principal />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;