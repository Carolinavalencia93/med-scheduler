export interface Doctor {
  id: number;
  nombreCompleto: string;
  especialidad: string;
  estado: 'Activo' | 'Inactivo';
}
