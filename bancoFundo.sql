use fundao;

create table usuarios(
id integer auto_increment primary key,
nome varchar(120) not null,
cpf varchar(11) not null,
endereco varchar(110) not null,
email varchar(100) not null,
senha varchar(100) not null
);

create table carteiras(
id integer auto_increment primary key,
fiis varchar(7),
id_usuario integer,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

create table fundos(
id integer auto_increment primary key,
dividendo double not null,
adm varchar(100)not null,
tipo varchar(30) not null,
area varchar(50) not null,
desp_adm double not null,
id_usuario integer,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
id_carteira integer,
FOREIGN KEY (id_carteira) REFERENCES carteiras(id)
);

