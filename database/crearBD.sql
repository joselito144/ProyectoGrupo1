create table UNIDADES (
id integer identity(1,1),
barrio varchar(30) not null,
estrato integer not null,
valorCanon float not null default 0,
area float not null default 0,
direccion varchar(50) not null,
habitaciones integer not null default 1,
banios integer not null default 1,
parqueadero integer not null default 0,
cuartoUtil integer not null default 0,
tipoParqueadero varchar(20),
tipoCocina varchar(20),
imagenPrincipal varchar (200),
primary key(id)
)

create table FOTOGRAFIAS (
idUnidad integer,
nroFoto integer,
direccionFoto varchar(80),
primary key(idUnidad, nroFoto)
)

alter table FOTOGRAFIAS add constraint FORANEA_ID_UNIDAD
foreign key (idUnidad)
references UNIDADES(id);