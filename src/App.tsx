import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import LinksCard from "./components/LinksCard";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("Servicios");
  const [content, setContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Oculta el contenido antes de cambiar
    setIsVisible(false);

    const timeout = setTimeout(() => {
      // Muestra el nuevo contenido después de un breve retraso
      setContent(getContent());
      setIsVisible(true);
    }, 300); // El tiempo debe coincidir con la duración de la animación

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const getContent = () => {
    switch (activeTab) {
      case "Servicios":
        return [
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Servicio de Ingeniería Avanzada",
            link: "https://www.example.com/servicios",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Servicio de Ingeniería Avanzada",
            link: "https://www.example.com/servicios",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Servicio de Ingeniería Avanzada",
            link: "https://www.example.com/servicios",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
      case "Proyectos":
        return [
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Proyectos Industriales en ejecución",
            link: "https://www.example.com/proyectos",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Servicio de Ingeniería Avanzada",
            link: "https://www.example.com/servicios",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
      default:
        return [
          {
            logo: "https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg",
            title: "Equipos de última generación",
            link: "https://www.example.com/equipos",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Hero setActiveTab={setActiveTab} activeTab={activeTab} />
      <div
        className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {content.map((item, index) => (
          <LinksCard key={`${activeTab}-${index}`} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

