export interface User {
  id: number;
  correo: string;
  nombreCompleto: string;
  proveedorId: number | null;
  rol: string;
}
