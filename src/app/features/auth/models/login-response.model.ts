export interface User {
  id: number;
  correo: string;
  nombreCompleto: string;
  proveedorId: number | null;
  rol: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}
