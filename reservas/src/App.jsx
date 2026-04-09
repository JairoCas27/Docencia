import { useState } from 'react'

function App() {
  const [reserva, setReserva] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    personas: 1,
    comentarios: ''
  });

  const [confirmado, setConfirmado] = useState(false);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-dark text-white text-center py-3">
              <h2 className="mb-0">Reserva en "RESTAURANT "Sazón y Sabor"</h2>
            </div>
            
            <div className="card-body p-4">
              {!confirmado ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" name="nombre" className="form-control" placeholder="Ej. Juan Pérez" onChange={handleChange} required />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Fecha</label>
                      <input type="date" name="fecha" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Hora</label>
                      <input type="time" name="hora" className="form-control" onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Número de Comensales</label>
                    <select name="personas" className="form-select" onChange={handleChange}>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Notas Especiales (Opcional)</label>
                    <textarea name="comentarios" className="form-control" rows="2" onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn btn-warning w-100 fw-bold">
                    CONFIRMAR MI MESA
                  </button>
                </form>
              ) : (
                <div className="text-center animate__animated animate__fadeIn">
                  <div className="alert alert-success mb-4">
                    <h4>¡Reserva Exitosa!</h4>
                    <p>Todo listo, <strong>{reserva.nombre}</strong>.</p>
                  </div>
                  <ul className="list-group list-group-flush text-start mb-4">
                    <li className="list-group-item"><strong>Fecha:</strong> {reserva.fecha}</li>
                    <li className="list-group-item"><strong>Hora:</strong> {reserva.hora}</li>
                    <li className="list-group-item"><strong>Mesa para:</strong> {reserva.personas}</li>
                  </ul>
                  <button className="btn btn-outline-secondary w-100" onClick={() => setConfirmado(false)}>
                    Hacer otra reserva
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;