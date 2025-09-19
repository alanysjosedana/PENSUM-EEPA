function mostrarDetalles(asignatura) {
  const detallesDiv = document.getElementById('detalles');

  if (asignatura === 'matematicas') {
    detallesDiv.innerHTML = '<h2>Matemáticas</h2><p>Este curso cubre álgebra, cálculo y geometría. Requiere conocimientos previos en aritmética básica.</p>';
  } else if (asignatura === 'historia') {
    detallesDiv.innerHTML = '<h2>Historia</h2><p>Exploraremos eventos históricos clave desde la Edad Media hasta la Revolución Industrial.</p>';
  } else if (asignatura === 'literatura') {
    detallesDiv.innerHTML = '<h2>Literatura</h2><p>Este curso incluye estudios de autores como Shakespeare, Cervantes, y escritores contemporáneos.</p>';
  } else if (asignatura === 'quimica') {
    detallesDiv.innerHTML = '<h2>Química</h2><p>Se cubren conceptos fundamentales como la tabla periódica, reacciones químicas y compuestos orgánicos.</p>';
  } else {
    detallesDiv.innerHTML = '<p>Selecciona una asignatura para ver los detalles.</p>';
  }
}
