create table usuarios (
	id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
);


create table categorias (
  id serial primary key,
  descricao text not null unique
);

insert into categorias (descricao)
values 
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');


create table produtos (
  id serial primary key,
  descricao text not null,
  quantidade_estoques integer not null,
  valor integer not null,
  categoria_id integer references categorias(id)
);


create table clientes (
  id serial primary key,
  nome text not null,
  email text not null unique,
  cpf varchar(11) unique, 
  cep varchar(8), 
  rua text,
  numero text,
  bairro text,
  cidade text not null,
  estado varchar(2)


);


create database pdv;








