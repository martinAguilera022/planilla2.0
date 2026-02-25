
function obtenerDatosFormulario() {

  const marcarEstado = (valor) => ({
    bueno: valor === "Bueno" ? "X" : "",
    regular: valor === "Regular" ? "X" : "",
    malo: valor === "Malo" ? "X" : ""
  });

  const marcarSiNoNA = (valor) => ({
    si: valor === "Si" ? "X" : "",
    no: valor === "No" ? "X" : "",
    na: valor === "NA" ? "X" : ""
  });

  return {

    datosGenerales: {
      fecha: document.getElementById("fecha")?.value,
      hora: document.getElementById("hora")?.value,
      supervisor: document.getElementById("supervisor")?.value,
      granja: document.getElementById("granja")?.value,
      propietario: document.getElementById("propietario")?.value,
      tipoPollo: document.getElementById("tipoPollo")?.value,
      destinos:document.getElementById("destino")?.value,
      mortandad:document.getElementById("mortandad")?.value,
      direccion:document.getElementById("direccion")?.value,
    },
    cuadrillas: [
      {
        nombre: document.getElementById("cuadrilla1")?.value || "",
        operarios: document.getElementById("operarios1")?.value || ""
      },
      {
        nombre: document.getElementById("cuadrilla2")?.value || "",
        operarios: document.getElementById("operarios2")?.value || ""
      },
      {
        nombre: document.getElementById("cuadrilla3")?.value || "",
        operarios: document.getElementById("operarios3")?.value || ""
      }
    ],
    presentesCarga: {
      propietario: document.getElementById("propietarioPresente")?.checked ? "X" : "",
      encargado: document.getElementById("encargadoPresente")?.checked ? "X" : "",
      ninguno: document.getElementById("ningunoPresente")?.checked ? "X" : ""
    },
    caminoHastaGranja:{
      tierra: document.getElementById("tierra").checked ?  "X" : "",
      
      asfaltado:document.getElementById("asfaltado").checked ? "X" : "",
      mejorado: document.getElementById("mejorado").checked ? "X" : "",
    },
    evaluacionInfraestructura: {
      caminosInternos: {
        ...marcarEstado(document.querySelector('input[name="caminosInternos"]:checked')?.value || ""),
        obs: document.getElementById("obsCaminosInternos")?.value || ""
      },
      caminosHasta: {
        ...marcarEstado(document.querySelector('input[name="caminosHasta"]:checked')?.value || ""),
        obs: document.getElementById("obsCaminosHasta")?.value || ""
      },
      tejidosGalpon: {
        ...marcarEstado(document.querySelector('input[name="tejidosGalpon"]:checked')?.value || ""),
        obs: document.getElementById("obsTejidosGalpon")?.value || ""
      },
      camaGalpon: {
        ...marcarEstado(document.querySelector('input[name="camaGalpon"]:checked')?.value || ""),
        obs: document.getElementById("obsCamaGalpon")?.value || ""
      },
      estadoJaulas: {
        ...marcarEstado(document.querySelector('input[name="estadoJaulas"]:checked')?.value || ""),
        obs: document.getElementById("obsEstadoJaulas")?.value || ""
      }
    },

    infraestructura: {
      caminosInternos: {
        ...marcarEstado(document.querySelector('input[name="caminosInternos"]:checked')?.value),
        obs: document.getElementById("obsCaminosInternos")?.value
      },
      caminosHasta: {
        ...marcarEstado(document.querySelector('input[name="caminosHasta"]:checked')?.value),
        obs: document.getElementById("obsCaminosHasta")?.value
      },
      tejidosGalpon: {
        ...marcarEstado(document.querySelector('input[name="tejidosGalpon"]:checked')?.value),
        obs: document.getElementById("obsTejidosGalpon")?.value
      },
      camaGalpon: {
        ...marcarEstado(document.querySelector('input[name="camaGalpon"]:checked')?.value),
        obs: document.getElementById("obsCamaGalpon")?.value
      },
      estadoJaulas: {
        ...marcarEstado(document.querySelector('input[name="estadoJaulas"]:checked')?.value),
        obs: document.getElementById("obsEstadoJaulas")?.value
      }
    },

    corteAlimento: {
      horaCorte: document.getElementById("horaCorteAlimento")?.value,
      comienzoCarga: document.getElementById("horaComienzoCarga")?.value,
      horasAyuno: document.getElementById("horasAyuno")?.value
    },

    carga: {
      equipo: document.getElementById("nombreEquipoCarga")?.value,

      personalCapacitado: {
        ...marcarEstado(document.querySelector('input[name="personalCapacitado"]:checked')?.value),
        obs: document.getElementById("obsPersonalCapacitado")?.value
      },

      manipulacionAves: {
        ...marcarEstado(document.querySelector('input[name="manipulacionAves"]:checked')?.value),
        obs: document.getElementById("obsManipulacionAves")?.value
      },

      encerradoAves: {
        ...marcarEstado(document.querySelector('input[name="encerradoAves"]:checked')?.value),
        obs: document.getElementById("obsEncerradoAves")?.value
      },

      cargaJaulas: {
        ...marcarEstado(document.querySelector('input[name="cargaJaulas"]:checked')?.value),
        obs: document.getElementById("obsCargaJaulas")?.value
      },
      avesMuertasEval:{
        ...marcarEstado(document.querySelector('input[name="avesMuertasEval"]:checked')?.value),
        obs: document.getElementById('obsAvesMuertas')?.value,
      },

      carganAvesMuertas: marcarSiNoNA(
        document.querySelector('input[name="seCarganAvesMuertas"]:checked')?.value || ""
      ),
      bienestarAnimal: marcarSiNoNA(
        document.querySelector('input[name="bienestarAnimal"]:checked')?.value || ""
      ),
      puertas: marcarSiNoNA(
        document.querySelector('input[name="puertas"]:checked')?.value || ""
      )
    },

    observacionesFinales: document.getElementById("observacionesFinales")?.value
  };
}
function generarPlanilla() {
  const datos = obtenerDatosFormulario();
	
	const planilla = document.getElementById("planillaPDF");

	planilla.innerHTML = `
  <div class="w-[794px] min-h-[1123px] bg-white text-black font-sans text-[11px] leading-normal border-2 border-black mx-auto">
  <!-- ===================== HEADER ===================== -->
  <div class="pt-4">
    <div class="flex justify-between items-start px-6">
      
      <div class="w-full text-center">
        <div class="text-red-600 font-semibold text-[13px]">
          Departamento de Logística
        </div>
        <div class="font-bold italic text-[18px]">
          Grupo GTA
        </div>
      </div>

      <div class="text-right text-[11px] leading-normal">
        <div>CPLF00</div>
        <div>Revisión: 00</div>
        <div>Vigencia: 01/12/2024</div>
      </div>

    </div>
  </div>

  <div class="border-t-2 border-black mt-3"></div>

  <div class="text-center font-bold border-y-2 border-black bg-gray-200 pb-2 text-[12px]">
    Planilla de Inspección de Granjas - Carga de Aves
  </div>

  <!-- ===================== DATOS ===================== -->
  <div class="px-6 pt-3 space-y-1">

    <div class="flex justify-between">
      <div class="flex gap-2">
        <span>Fecha de inspección:</span>
        <div class="border-b border-black w-60 campo-linea">${datos.datosGenerales.fecha}</div>
      </div>
      <div class="flex gap-2">
        <span>Hora:</span>
        <div class="border-b border-black w-32 campo-linea">${datos.datosGenerales.hora}</div>
      </div>  
    </div>

    <div class="flex gap-2">
      <span>Supervisor:</span>
      <div class="border-b border-black w-[380px] campo-linea">${datos.datosGenerales.supervisor}</div>
    </div>

    <div class="flex gap-2">
      <span class="font-bold">Nombre de la granja:</span>
      <div class="border-b border-black w-[500px] campo-linea">${datos.datosGenerales.granja}</div>
    </div>

    <div class="flex gap-2">
      <span class="font-bold">Dirección:</span>
      <div class="border-b border-black w-[520px] campo-linea">${datos.datosGenerales.direccion}</div>
    </div>

    <div class="flex gap-2">
      <span class="font-bold">Propietario:</span>
      <div class="border-b border-black w-56 campo-linea">${datos.datosGenerales.propietario}</div>
    </div>

    <div class="flex gap-2">
      <span class="font-bold">Tipo de pollo (EXP / MI)</span>
      <div class="border-b border-black w-32 campo-linea">${datos.datosGenerales.tipoPollo}</div>
    </div>

    <div class="flex gap-2">
      <span class="font-bold">Destino/s:</span>
      <div class="border-b border-black w-[350px] campo-linea">${datos.datosGenerales.destinos}</div>
    </div>

    <!-- Cuadrilla -->
    <div class="flex gap-4 pt-1">
      <div class="pt-4">
        <div>Cuadrilla:</div>
        <div>Cant operarios:</div>
      </div>

     <table class="border border-black border-collapse text-[11px]  [&_td]:align-middle [&_th]:align-middle">
    <tr>
      <td class="border border-black w-24 h-6 text-center">
        ${datos.cuadrillas[0].nombre}
      </td>
      <td class="border border-black w-24 text-center">
        ${datos.cuadrillas[1].nombre}
      </td>
      <td class="border border-black w-24 text-center">
        ${datos.cuadrillas[2].nombre}
      </td>
    </tr>
    <tr>
      <td class="border border-black h-6 text-center">
        ${datos.cuadrillas[0].operarios}
      </td>
      <td class="border border-black text-center">
        ${datos.cuadrillas[1].operarios}
      </td>
      <td class="border border-black text-center">
        ${datos.cuadrillas[2].operarios}
      </td>
    </tr>
  </table>
    </div>

    <div class="flex gap-2 pt-1">
      <span class="font-bold">Mortandad en carga:</span>
        <div class="border-b border-black w-32 campo-linea">${datos.datosGenerales.mortandad}</div>
    </div>

   <div class="flex gap-6 pt-1">
  <span class="font-bold">Presente al momento de la carga:</span>

  <span> ${datos.presentesCarga.propietario}  Propietario</span>
  <span> ${datos.presentesCarga.encargado}  Encargado</span>
  <span> ${datos.presentesCarga.ninguno}  Ninguno</span>
</div>

    <div class="flex gap-12 pt-1">
  <span class="font-bold">Camino hasta la granja:</span>

  <span>[ ${datos.caminoHastaGranja.tierra} ] Tierra</span>
  <span>[ ${datos.caminoHastaGranja.asfaltado} ] Asfaltado</span>
  <span>[ ${datos.caminoHastaGranja.mejorado} ] Mejorado</span>
</div>

  </div>

  <!-- ===================== TABLA 1 ===================== -->
  <div class="mt-3">

    <table class="w-full border-2 border-black border-collapse text-[11px]  [&_td]:align-middle [&_th]:align-middle">
      <thead>
        <tr>
          <th class="border border-black w-[45%]"></th>
          <th class="border border-black italic font-bold">Bueno</th>
          <th class="border border-black italic font-bold">Regular</th>
          <th class="border border-black italic font-bold">Malo</th>
          <th class="border border-black italic font-bold">Observaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-black px-2 py-1">Caminos internos de la granja</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosInternos.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosInternos.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosInternos.malo}</td>
          <td class="border border-black ">${datos.evaluacionInfraestructura.caminosInternos.obs}</td>
          
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">Caminos hasta la Granja</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosHasta.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosHasta.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.caminosHasta.malo}</td>
          <td class="border border-black ">${datos.evaluacionInfraestructura.caminosHasta.obs}</td>
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">Tejidos de los galpones</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.tejidosGalpon.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.tejidosGalpon.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.tejidosGalpon.malo}</td>
          <td class="border border-black">${datos.evaluacionInfraestructura.tejidosGalpon.obs}</td>
        </tr>
        <tr>
            <td class="border border-black px-2 py-1">Cama de los galpones</td>
            <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.camaGalpon.bueno }</td>
            <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.camaGalpon.regular }</td>
            <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.camaGalpon.malo }</td>
            <td class="border border-black ">${datos.evaluacionInfraestructura.camaGalpon.obs }</td>
          </tr>
        <tr>
            <td class="border border-black px-2 py-1">Estado de las jaulas</td>
            <td class="border border-black  px-2 py-1 text-center">${datos.evaluacionInfraestructura.estadoJaulas.bueno}</td>
            <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.estadoJaulas.regular}</td>
            <td class="border border-black px-2 py-1 text-center">${datos.evaluacionInfraestructura.estadoJaulas.malo}</td>
            <td class="border border-black  ">${datos.evaluacionInfraestructura.estadoJaulas.obs}</td>
          </tr>
      </tbody>
    </table>

    <div class="h-6 border-b-2 border-black"></div>

    <div class="flex border-b-2 border-black text-[11px]">
      <div class="w-1/2 border-r border-black px-2 py-1">Corte Alimento: ${datos.corteAlimento.horaCorte} </div>
      <div class="w-1/2 px-2 py-1">Comienzo de carga: ${datos.corteAlimento.comienzoCarga}</div>
    </div>

    <div class="border-b-2 border-black px-2 py-1 text-[11px]">
      Horas de ayuno: ${datos.corteAlimento.horasAyuno}
    </div>

    <div class="h-6 border-b-2 border-black"></div>

    <div class="font-bold underline mt-2 px-2">CARGA</div>
    <div class="font-bold mt-1 px-2">Equipo de carga: ${datos.carga.equipo}</div>

    <!-- TABLA 2 -->
    <table class="w-full border-2 border-black border-collapse text-[11px] mt-1  [&_td]:align-middle [&_th]:align-middle">
      <thead>
        <tr>
          <th class="border border-black w-[45%]"></th>
          <th class="border border-black italic font-bold mb-10">Bueno</th>
          <th class="border border-black italic font-bold mb-10">Regular</th>
          <th class="border border-black italic font-bold mb-10">Mala</th>
          <th class="border border-black italic font-bold mb-10">Observaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-black px-2 py-1">¿El personal está debidamente capacitado?</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.personalCapacitado.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.personalCapacitado.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.personalCapacitado.malo}</td>
          <td class="border border-black">${datos.carga.personalCapacitado.obs}</td>
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">Manipulación de las aves al momento de la carga</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.manipulacionAves.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.manipulacionAves.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.manipulacionAves.malo}</td>
          <td class="border border-black">${datos.carga.manipulacionAves.obs}</td>
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">Encerrado de las aves</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.encerradoAves.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.encerradoAves.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.encerradoAves.malo}</td>
          <td class="border border-black">${datos.carga.encerradoAves.obs}</td>
        </tr>
        <tr>
            <td class="border border-black px-2 py-1">Carga de las jaulas al camión</td>
            <td class="border border-black px-2 py-1 text-center">${datos.carga.cargaJaulas.bueno}</td>
            <td class="border border-black px-2 py-1 text-center">${datos.carga.cargaJaulas.regular}</td>
            <td class="border border-black px-2 py-1 text-center">${datos.carga.cargaJaulas.malo}</td>
            <td class="border border-black">${datos.carga.cargaJaulas.obs}</td>
          </tr>
        <tr>
          <td class="border border-black px-2 py-1">¿Las aves muertas son retiradas?</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.avesMuertasEval.bueno}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.avesMuertasEval.regular}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.avesMuertasEval.malo}</td>
          <td class="border border-black">${datos.carga.avesMuertasEval.obs}</td>
          </tr>
      </tbody>
    </table>

  </div>

  <!-- TABLA FINAL -->
  <div class="mt-2">

    <table class="w-full border-2 border-black border-collapse text-[11px]">
      <thead>
        <tr>
          <th class="border border-black w-[65%]"></th>
          <th class="border border-black italic font-bold w-[8%]">Si</th>
          <th class="border border-black italic font-bold w-[8%]">No</th>
          <th class="border border-black italic font-bold w-[8%]">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-black px-2 py-1">¿Se cargan aves muertas?</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.carganAvesMuertas.si}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.carganAvesMuertas.no}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.carganAvesMuertas.na}</td>
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">¿Se sacrifican respetando el bienestar animal las aves no aptas?</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.bienestarAnimal.si}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.bienestarAnimal.no}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.bienestarAnimal.na}</td>
        </tr>
        <tr>
          <td class="border border-black px-2 py-1">¿Son suficientes el número de puertas de la granja?</td>
          <td class="border border-black px-2 py-1 text-center ">${datos.carga.puertas.si}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.puertas.no}</td>
          <td class="border border-black px-2 py-1 text-center">${datos.carga.puertas.na}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex gap-4 mt-2 px-2 text-[11px]">
      <span class="font-bold">N/A=</span>
      <span>No aplica</span>
    </div>

    <div class="mt-3 border-2 border-black">
      <div class="border-b-2 border-black px-2 py-1 font-bold">
        Observaciones
      </div>
      <div class="h-24">${datos.observacionesFinales}</div>
    </div>

    <div class="flex justify-around mt-8 text-center text-[11px]">
      <div class="w-56">
        <div class="border-t border-black mb-1"></div>
        Supervisor de la carga
      </div>
      <div class="w-56">
        <div class="border-t border-black mb-1"></div>
        Propietario de la granja
      </div>
    </div>

    <div class="mt-6 border-t-2 border-black">
      <div class="flex text-center text-[10px] ">
        <div class="w-1/3 border-r border-black py-2">
          Preparado por: Victoria Cicardo
        </div>
        <div class="w-1/3 border-r border-black py-2">
          Revisado por: Adrián Ruiz
        </div>
        <div class="w-1/3 py-2 ">
          Aprobado por: Ariel De Grazia
        </div>
      </div>
    </div>

  </div>

</div>
	`;
  generarPDF();
}
async function generarPDF() {
  await document.fonts.ready;
  const { jsPDF } = window.jspdf;
  const elemento = document.getElementById("planillaPDF");
  if (!elemento) return;

  // Guardar estilos originales
  const originalStyles = {
    width: elemento.style.width,
    maxWidth: elemento.style.maxWidth,
    margin: elemento.style.margin,
    display: elemento.style.display
  };

  // Forzar que se renderice con su ancho real (aunque se salga de la pantalla)
  elemento.style.width = "fit-content";
  elemento.style.maxWidth = "none";
  elemento.style.margin = "0";
  elemento.style.display = "inline-block";

  await new Promise(r => requestAnimationFrame(r));

  const canvas = await html2canvas(elemento, {
    scale: 2,
    windowWidth: 1200
  });

  // Restaurar estilos
  elemento.style.width = originalStyles.width;
  elemento.style.maxWidth = originalStyles.maxWidth;
  elemento.style.margin = originalStyles.margin;
  elemento.style.display = originalStyles.display;

  const imgData = canvas.toDataURL("image/png");

  const pageWidth = 794;
  const pageHeight = 1123;

  const pdf = new jsPDF({
    orientation: "p",
    unit: "px",
    format: [pageWidth, pageHeight]
  });

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;

  const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
  const finalWidth = imgWidth * scale;
  const finalHeight = imgHeight * scale;

  const x = (pageWidth - finalWidth) / 2;
  const y = (pageHeight - finalHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
  pdf.save('Planilla_Inspeccion');
  Swal.fire({
    icon: 'success',
    title: 'Archivo generado',
    text: 'El PDF se descargó correctamente',
    confirmButtonColor: '#16a34a'
  });
}