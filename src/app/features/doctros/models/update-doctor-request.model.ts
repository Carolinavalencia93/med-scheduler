export interface UpdateDoctorRequest {
  id: number;
  nombreCompleto: string;
  especialidadId: number;
  estado: 'Activo' | 'Inactivo';
}
