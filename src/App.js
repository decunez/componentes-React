import React from 'react';
import Imagen from './components/BasicElements/Imagen';
import Titulo from './components/BasicElements/Titulo';
import Parrafo from './components/BasicElements/Parrafo';
import Enlace from './components/BasicElements/Enlace';
import Lista from './components/ListsTables/Lista';
import Tabla from './components/ListsTables/Tabla';
import Formulario from './components/Forms/Formulario';
import Boton from './components/Forms/Boton';
import InputText from './components/Forms/InputText';
import InputPassword from './components/Forms/InputPassword';

function App() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert(`Formulario enviado:\nNombre: ${formData.nombre}\nEmail: ${formData.email}`);
  };

  const elementosLista = ['Manzana', 'Banana', 'Naranja'];
  const cabeceraTabla = ['Producto', 'Precio', 'Stock'];
  const datosTabla = [
    ['Laptop', '$999', '15'],
    ['Teléfono', '$699', '32'],
    ['Tablet', '$399', '12']
  ];

  return (
    <div className="container mt-5">
      <Titulo texto="Componentes React para representar elementos HTML" nivel={1} className="mb-4 text-center" />
      
      <div className="row mb-5">
        <div className="col-md-6">
          <Imagen 
            src="https://www.servnet.mx/hs-fs/hubfs/Blog/Blog_Articulos/Blog_Art%C3%ADculos/Blog_2024/Blog_Articulos_2024_Junio/Blog_Articulos_2024_Junio_TI/ALCANCE-TI.jpg?width=900&height=500&name=ALCANCE-TI.jpg" 
            alt="ESPE" 
            className="img-thumbnail mb-3"
          />
          <Parrafo texto="Las Tecnologías de la Información (TI) son el conjunto de herramientas, infraestructuras y sistemas que se utilizan para procesar, almacenar y transmitir información digitalmente. Incluyen hardware, software, redes y sistemas de gestión de información, y son fundamentales para la gestión eficiente de datos en diversos contextos, desde empresas hasta individuos. " />
          <Enlace 
            href="https://www.espe.edu.ec/ingenieria-tecnologias-informacion-linea/" 
            texto="Ingeniería en Tecnologías de la Información" 
            className="btn btn-link d-block mb-3" 
          />
          
          <Titulo texto="Lista de productos" nivel={3} className="mt-4" />
          <Lista elementos={elementosLista} />
        </div>
        
        <div className="col-md-6">
          <Titulo texto="Tabla de inventario" nivel={3} className="mb-3" />
          <Tabla cabecera={cabeceraTabla} datos={datosTabla} />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Titulo texto="Formulario de contacto" nivel={2} className="mb-4 text-center" />
          <Formulario onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <InputText 
                name="nombre" 
                placeholder="Tu nombre completo" 
                value={formData.nombre} 
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <InputText 
                name="email" 
                type="email"
                placeholder="tu@email.com" 
                value={formData.email} 
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <InputPassword 
                name="password" 
                placeholder="Mínimo 6 caracteres" 
                value={formData.password} 
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            
            <Boton 
              texto="Enviar formulario" 
              type="submit" 
              className="btn-primary w-100 mt-3"
            />
          </Formulario>
        </div>
      </div>
    </div>
  );
}

export default App;