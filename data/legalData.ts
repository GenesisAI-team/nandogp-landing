// src/data/legalData.ts

export type LegalDocType =
  | "aviso-legal"
  | "privacidad"
  | "terminos"
  | "cookies"
  | null;

export const LEGAL_CONTENT = {
  "aviso-legal": {
    title: "Aviso Legal",
    content: `
      <div class="info-box">
        <p><strong>Titular del sitio web:</strong> Efrén Orlando Guaman Peñarreta</p>
        <p><strong>NIF:</strong> 73419940F</p>
        <p><strong>Domicilio:</strong> C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España</p>
        <p><strong>Teléfono:</strong> +34 605 474 930</p>
        <p><strong>Email:</strong> eonandogp@gmail.com</p>
      </div>

      <h3>1. Objeto</h3>
      <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>nando-gp.com</strong> (en adelante, el “Sitio Web”), así como las responsabilidades derivadas de la utilización de sus contenidos. El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación de este Aviso Legal.</p>

      <h3>2. Condiciones de uso</h3>
      <p>El usuario se compromete a usar el Sitio Web de forma diligente, legal y conforme a la buena fe, absteniéndose de:</p>
      <ul>
        <li>Usar el Sitio Web con fines ilícitos o lesivos.</li>
        <li>Provocar daños en los sistemas del titular o de terceros.</li>
        <li>Introducir o difundir virus o cualquier sistema susceptible de causar daños.</li>
      </ul>

      <h3>3. Propiedad intelectual e industrial</h3>
      <p>Los contenidos del Sitio Web (textos, imágenes, diseños, logotipos, código, etc.) son titularidad del responsable o se utilizan con autorización/licencia y están protegidos por la normativa aplicable. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>

      <h3>4. Responsabilidad</h3>
      <p>El titular no garantiza la disponibilidad permanente del Sitio Web ni la ausencia de errores, aunque adoptará medidas razonables para evitarlos. El titular no se responsabiliza del uso que los usuarios realicen de los contenidos.</p>

      <h3>5. Enlaces</h3>
      <p>El Sitio Web puede contener enlaces a sitios de terceros. El titular no se responsabiliza de contenidos, políticas o prácticas de dichos sitios.</p>

      <h3>6. Legislación y jurisdicción</h3>
      <p>Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario cuando este sea consumidor; en caso contrario, a los del domicilio del titular, salvo norma imperativa en contrario.</p>
    `,
  },
  privacidad: {
    title: "Política de Privacidad",
    content: `
      <h3>1. Responsable del tratamiento</h3>
      
      <div class="info-box">
        <p><strong>Responsable:</strong> Efrén Orlando Guaman Peñarreta</p>
        <p><strong>NIF:</strong> 73419940F</p>
        <p><strong>Dirección:</strong> C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España</p>
        <p><strong>Email:</strong> eonandogp@gmail.com</p>
        <p><strong>Teléfono:</strong> +34 605 474 930</p>
      </div>

      <h3>2. Qué datos tratamos y cómo los recogemos</h3>
      <p>En este negocio, los datos se recogen principalmente por WhatsApp y, en su caso, por llamadas/Email cuando el usuario los usa. Podemos tratar:</p>
      <ul>
        <li><strong>Identificativos:</strong> nombre y apellidos.</li>
        <li><strong>Contacto:</strong> teléfono, email.</li>
        <li><strong>Información del servicio:</strong> direcciones de recogida/entrega, fechas, detalles de la mudanza/porte, mensajes, fotos o inventario que el usuario envíe.</li>
        <li><strong>Datos de facturación:</strong> cuando se solicita factura con IVA.</li>
      </ul>

      <h3>3. Finalidades del tratamiento</h3>
      <p>Tratamos los datos para:</p>
      <ul>
        <li>Atender solicitudes de presupuesto y consultas (principalmente por WhatsApp).</li>
        <li>Gestionar y ejecutar servicios: mudanzas, portes, embalaje/protección, almacenamiento y logística asociada.</li>
        <li>Gestión administrativa y contable, incluida la emisión de facturas con IVA cuando proceda.</li>
        <li>Gestión de reclamaciones y atención post-servicio.</li>
      </ul>

      <h3>4. Base jurídica</h3>
      <ul>
        <li><strong>Ejecución de un contrato o medidas precontractuales:</strong> para preparar presupuestos y prestar el servicio.</li>
        <li><strong>Cumplimiento de obligaciones legales:</strong> facturación, obligaciones fiscales/contables.</li>
        <li><strong>Interés legítimo:</strong> atender comunicaciones y mejorar la calidad del servicio (sin usos invasivos).</li>
        <li><strong>Consentimiento (cuando aplique):</strong> por ejemplo, si el usuario solicita recibir comunicaciones por un canal específico o envía información voluntaria.</li>
      </ul>

      <h3>5. Conservación de datos</h3>
      <ul>
        <li><strong>Datos de presupuesto/consultas:</strong> durante el tiempo necesario para atender la solicitud y, posteriormente, por plazos razonables para seguimiento.</li>
        <li><strong>Datos de servicios y facturación:</strong> se conservarán durante los plazos exigidos por normativa fiscal y contable.</li>
        <li><strong>Mensajes de WhatsApp:</strong> podrán conservarse mientras sean necesarios para la relación comercial o reclamaciones.</li>
      </ul>

      <h3>6. Destinatarios</h3>
      <p>No se cederán datos a terceros salvo:</p>
      <ul>
        <li>Obligación legal (Administración Tributaria, autoridades competentes).</li>
        <li>Proveedores necesarios para la prestación del servicio (p. ej., almacenamiento si aplica) bajo compromisos de confidencialidad cuando proceda.</li>
      </ul>

      <h3>7. WhatsApp / Meta (canal de comunicación)</h3>
      <p>Si el usuario contacta por WhatsApp, debe saber que es un servicio prestado por WhatsApp/Meta y que sus datos pueden ser tratados conforme a sus políticas. El responsable utiliza WhatsApp como canal para atender solicitudes y coordinar servicios.</p>

      <h3>8. Derechos del usuario</h3>
      <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad.</p>
      <p>Para ejercerlos, envíe un email a: <strong>eonandogp@gmail.com</strong>, indicando el derecho y aportando información que permita identificar la solicitud.</p>
      <p>Asimismo, si considera vulnerados sus derechos, puede reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>

      <h3>9. Seguridad</h3>
      <p>Se aplican medidas razonables para proteger la información y evitar accesos no autorizados.</p>
    `,
  },
  terminos: {
    title: "Términos y Condiciones del Servicio",
    content: `
      <h3>1. Identificación del prestador</h3>
      
      <div class="info-box">
        <p><strong>Prestador:</strong> Efrén Orlando Guaman Peñarreta (autónomo)</p>
        <p><strong>NIF:</strong> 73419940F</p>
        <p><strong>Dirección:</strong> C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España</p>
        <p><strong>Contacto:</strong> +34 605 474 930 · eonandogp@gmail.com</p>
      </div>

      <h3>2. Servicios ofrecidos</h3>
      <p>Se prestan, bajo presupuesto y condiciones acordadas, los siguientes servicios:</p>
      <ul>
        <li>Mudanzas locales y nacionales (hogar).</li>
        <li>Mudanzas de oficina.</li>
        <li>Portes express.</li>
        <li>Embalaje, protección y manipulación de enseres.</li>
        <li>Almacenamiento (cuando se contrate).</li>
        <li>Posibilidad de seguro de mercancía (según condiciones indicadas en el presupuesto).</li>
      </ul>
      <p><strong>Zona de cobertura:</strong> Nacional (España).</p>

      <h3>3. Cómo se contrata (a distancia)</h3>
      <p>La contratación se realiza normalmente a distancia:</p>
      <ol>
        <li>Solicitud de presupuesto por WhatsApp/teléfono/email.</li>
        <li>Envío de presupuesto por WhatsApp (u otro canal acordado).</li>
        <li>Confirmación por WhatsApp (o canal acordado) para reservar fecha/servicio.</li>
      </ol>
      <p>La confirmación implica aceptación de estas condiciones y del presupuesto.</p>

      <h3>4. Precios y forma de pago</h3>
      <p>Los precios se determinan por presupuesto, según volumen, distancia, accesos, fechas, servicios extra, necesidad de embalaje, etc. El presupuesto indicará, cuando proceda, si incluye IVA.</p>
      <p>La forma de pago se indicará en el presupuesto o se acordará por WhatsApp (transferencia/efectivo/Bizum, etc. si aplica). Si aparecen circunstancias no informadas (p. ej., accesos complejos, volumen superior, objetos especiales), se informará y podrá ajustarse el precio antes de ejecutar.</p>

      <h3>5. Obligaciones del cliente</h3>
      <p>El cliente se compromete a:</p>
      <ul>
        <li>Facilitar información veraz (direcciones, fechas, volumen aproximado, accesos, ascensor, restricciones de aparcamiento, objetos especiales).</li>
        <li>Avisar de objetos frágiles, de valor o especiales (pianos, cajas fuertes, etc.).</li>
        <li>Tener preparado lo acordado (o contratar embalaje) según el servicio.</li>
        <li>Garantizar que puede realizarse la carga/descarga conforme a lo pactado.</li>
      </ul>

      <h3>6. Embalaje, protección y seguro</h3>
      <p>El prestador ofrece protección y embalaje cuando se contrata. El seguro de mercancía, si se contrata, quedará sujeto a lo indicado en el presupuesto: cobertura, límites, exclusiones, franquicias, y requisitos (por ejemplo, declaración de valor).</p>

      <h3>7. Almacenamiento</h3>
      <p>Si se contrata almacenamiento, se definirá en el presupuesto la duración, condiciones, precio y forma de entrega/retirada. El cliente debe comunicar con antelación la retirada y cumplir con pagos pactados.</p>

      <h3>8. Cancelaciones y cambios de fecha</h3>
      <p>Para reservas confirmadas:</p>
      <ul>
        <li><strong>Cancelación con más de 48h:</strong> sin coste.</li>
        <li><strong>Cancelación entre 24h y 48h:</strong> se podrá aplicar un cargo de hasta el 25% del presupuesto para cubrir planificación/bloqueo de agenda.</li>
        <li><strong>Cancelación con menos de 24h o no presentación:</strong> se podrá aplicar un cargo de hasta el 50% del presupuesto.</li>
      </ul>
      <p>Cambios de fecha: se intentará reprogramar sin coste si se avisa con suficiente antelación y hay disponibilidad. Si ya se han incurrido en gastos (peajes, permisos, desplazamientos, materiales), podrán repercutirse justificadamente.</p>

      <h3>9. Derecho de desistimiento</h3>
      <p>Si el cliente es consumidor, puede existir derecho de desistimiento en contratos a distancia. No obstante, cuando el servicio se presta en una fecha concreta o ya se ha iniciado con consentimiento del cliente (por ejemplo, reserva firme y ejecución programada), el desistimiento puede quedar limitado conforme a la normativa aplicable. En todo caso, se informará y se actuará conforme a la ley.</p>

      <h3>10. Reclamaciones</h3>
      <p>El cliente puede presentar reclamación por Email (eonandogp@gmail.com) o correo postal a la dirección del prestador. Se responderá en un plazo razonable.</p>
      <p>Si el cliente es consumidor, podrá acudir además a los sistemas públicos de consumo/OMIC o mecanismos de resolución alternativa disponibles. <em>Nota: la plataforma europea ODR fue objeto de discontinuación normativa.</em></p>

      <h3>11. Legislación aplicable</h3>
      <p>Estas condiciones se rigen por la legislación española. Para controversias: juzgados del domicilio del consumidor cuando proceda; en caso contrario, los del prestador, salvo norma imperativa.</p>
    `,
  },
  cookies: {
    title: "Política de Cookies",
    content: `
      <h3>1. Qué son las cookies</h3>
      <p>Las cookies son pequeños archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Sirven para permitir el funcionamiento técnico del sitio y, en algunos casos, para recordar preferencias.</p>

      <h3>2. Qué cookies utiliza este sitio</h3>
      <p>En este sitio web se utilizan solo <strong>cookies técnicas necesarias</strong> para:</p>
      <ul>
        <li>Permitir la navegación y el correcto funcionamiento del sitio.</li>
        <li>Mantener configuraciones básicas de sesión (si aplica técnicamente).</li>
      </ul>
      <p>No se utilizan cookies de analítica, publicidad ni perfilado, salvo que se añadan en el futuro (en cuyo caso se actualizará esta política y, si corresponde, se mostrará un banner/consentimiento).</p>

      <h3>3. Cookies de terceros</h3>
      <p>Si el sitio incluye contenido de terceros (por ejemplo, mapas incrustados, vídeos o widgets), esos terceros podrían instalar cookies. En ese caso, se recomienda revisar las políticas de dichos terceros.</p>

      <h3>4. Cómo desactivar cookies</h3>
      <p>El usuario puede configurar su navegador para bloquear o eliminar cookies. Al hacerlo, algunas funciones del sitio podrían no funcionar correctamente. Las opciones dependen del navegador (Chrome, Safari, Firefox, Edge, etc.).</p>

      <h3>5. Cambios en la política</h3>
      <p>Esta política puede actualizarse por cambios técnicos o legales. Se recomienda revisarla periódicamente.</p>
    `,
  },
};
