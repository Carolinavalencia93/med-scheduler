export interface CreateDoctorRequest {
  nombreCompleto: string;
  especialidadId: number;
  estado: 'Activo' | 'Inactivo';
}
