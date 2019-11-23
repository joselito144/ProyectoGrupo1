export interface Unit {
    id: number,
    user: string,
    direccion: string,
    barrio: string,
    estrato: number,
    habitaciones: number,
    banios: number,
    parqueadero: number,
    valorCanon: number,
    area: number,
    tipoParqueadero?: string,
    tipoCocina?: string,
    fotoPrincipal: string[]
};