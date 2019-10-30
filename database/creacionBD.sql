-- Creación de tablas

drop table if exists PRODUCTOS;
drop table if exists COMPRAS;
drop table if exists VENTAS;
drop table if exists PROVEEDORES;
drop table if exists CLIENTES;
drop table if exists FACTURAS_VENTAS;
drop table if exists FACTURAS_COMPRAS;

create table PRODUCTOS(
codigoProducto integer,
descripcionProducto varchar(50) not null,
stock integer default 0,
primary key(codigoProducto)
);

create table COMPRAS(
idFactura integer,
idProducto integer,
cantidad integer default 0,
valor float,
primary key(idFactura, idProducto)
);

create table PROVEEDORES(
idProveedor integer,
nombreProveedor varchar(50) not null,
primary key(idProveedor)
);

create table CLIENTES(
idCliente integer,
nombreCliente varchar(50) not null,
primary key (idCliente)
);

create table VENTAS(
idFactura integer,
idProducto integer,
cantidad integer default 0,
valor float default 0,
primary key(idFactura, idProducto)
);

create table FACTURAS_COMPRAS(
idFactura integer,
fecha date not null,
idProveedor integer,
primary key(idFactura)
);

create table FACTURAS_VENTAS(
idFacturaVenta integer,
fecha date default getdate(),
idCliente integer,
primary key(idFacturaVenta)
);

-- Claves foráneas

alter table COMPRAS add constraint FORANEA_PRODUCTO_COMPRAS
foreign key (idProducto)
references PRODUCTOS(codigoProducto);

alter table COMPRAS add constraint FORANEA_FACTURA_COMPRAS
foreign key (idFactura)
references FACTURAS_COMPRAS(idFactura);

alter table VENTAS add constraint FORANEA_PRODUCTO_VENTAS
foreign key (idProducto)
references PRODUCTOS(codigoProducto);

alter table VENTAS add constraint FORANEA_FACTURA_VENTAS
foreign key (idFactura)
references FACTURAS_VENTAS(idFacturaVenta);

alter table FACTURAS_VENTAS add constraint FORANEA_CLIENTE_VENTAS
foreign key (idCliente)
references CLIENTES(idCliente);

alter table FACTURAS_COMPRAS add constraint FORANEA_PROVEEDOR_COMPRAS
foreign key (idProveedor)
references PROVEEDORES(idProveedor);