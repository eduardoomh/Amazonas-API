export const formatToCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0, // Cambia esto si quieres mostrar decimales
    }).format(value);
};