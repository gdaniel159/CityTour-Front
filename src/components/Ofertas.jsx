import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import "../styles/OfertasComponent.css";

export function OfertasComponent() {
  const ofertas = [
    {
      id: 1,
      titulo: "Oferta 1",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-ayacucho-ayacucho-magico.jpg",
      precio: "$10.00",
    },
    {
      id: 2,
      titulo: "Oferta 2",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-moquegua-full-day-moquegua.jpg",
      precio: "$10.00",
    },
    {
      id: 3,
      titulo: "Oferta 3",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-lima-canon-autisha-aventureros.jpg",
      precio: "$10.00",
    },
    {
      id: 4,
      titulo: "Oferta 4",
      imagenUrl:
        "https://www.ytuqueplanes.com/imagenes/Fotos/ofertas/oferta-p-moquegua-full-day-moquegua.jpg",
      precio: "$10.00",
    },
  ];

  return (
    <>
      <div className="enc1 ml-4 mr-3 mt-3 w-3">
        <h1 className="flex align-items-center">
          <i className="pi pi-ticket text-2xl color-oferta"></i>
          <Link
            to="/ofertas"
            className="nav-link enlace color-oferta mr-3 ml-3"
          >
            Ofertas
          </Link>
          <div className="cubeOf">
            <i className="pi pi-arrow-right"></i>
          </div>
        </h1>
      </div>
      <div className="flex justify-content-center align-items-center main-container">
        {ofertas.map((oferta) => (
          <div key={oferta.id} className="">
            <div className="image-container">
              <img
                src={oferta.imagenUrl}
                alt={oferta.titulo}
                className="imageOferta"
                width="299"
                height="450"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex banner-container mt-5 mb-5">
        <Image
          src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Escapate-rutina.png"
          alt="Banner 1"
          width="95%"
          height="auto"
        />
        <Image
          src="https://www.ytuqueplanes.com/imagenes//fotos/bannersOfertas/banner-oferta-Disfruta-Loreto.png"
          alt="Banner 1"
          width="95%"
          height="auto"
        />
      </div>
    </>
  );
}