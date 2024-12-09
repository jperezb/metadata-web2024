import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctenos</h3>
            <p className="text-gray-400">Email: contacto@metadata.cl</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/metadata-limitada/" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Metadata.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;