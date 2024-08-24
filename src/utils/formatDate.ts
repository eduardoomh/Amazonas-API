// Función para transformar la fecha al formato en español
export function formatDateToSpanish(dateString: string, weekday = false) {
  const date = new Date(dateString);

  const timeZoneOffset = -6; // UTC-6
  const adjustedDate = adjustToTimeZone(date, timeZoneOffset);

  const formatterObject: any = weekday ? {
    weekday: 'long',
    day: "2-digit",
    year: "numeric",
    month: "long",

  } : {
    day: "2-digit",
    year: "numeric",
    month: "long",
}

// Crear un formateador de fecha en español
const formatter = new Intl.DateTimeFormat('es-ES', formatterObject);

// Formatear la fecha
return formatter.format(adjustedDate);
}

function adjustToTimeZone(date: any, timeZoneOffset: any) {
  // Ajusta la fecha para la zona horaria deseada
  const adjustedDate = new Date(date.getTime() - (timeZoneOffset * 60 * 60 * 1000));
  return adjustedDate;
}

