CREATE DATABASE Thermodata;
USE Thermodata;

CREATE TABLE empresa (
idEmpresa int primary key auto_increment,
nome varchar(45),
cnpj varchar(45),
logradouro varchar(45),
bairro varchar(45),
cep char(8),
cidade varchar(45),
estado varchar(45)
);

create table usuario (
idUsuario int,
fkEmpresa int,
constraint fkEmp foreign key(fkEmpresa) references empresa(idEmpresa),
primary key (idUsuario,fkEmpresa),
nomeUsuario varchar(45),
sobrenome varchar(45),
email varchar(50),
tel char(11),
username varchar(45),
senha varchar(24),
fkRepresentante int,
constraint fkRep foreign key(fkRepresentante) references usuario(idUsuario)
);

create table dataCenter(
idDatacenter int,
fkEmpresa int,
constraint fkEmpresa foreign key(fkEmpresa) references empresa(idEmpresa),
qtdHacks varchar(45),
tier char(6),
localDt varchar(45),
primary key(idDatacenter,fkEmpresa)
);

create table arduino (
idArduino int,
fkDatacenter int,
constraint fkDatacenter foreign key(fkDatacenter) references dataCenter(idDatacenter),
fkEmpresa int,
foreign key(fkEmpresa) references empresa(idEmpresa),
primary key (idArduino,fkDatacenter,fkEmpresa),
temp decimal(10,1),
umidade decimal(5,2)
);

alter table usuario add constraint chkEmail check (email LIKE '%@%.%');
alter table usuario add constraint chkSenha check (senha like '%!%' or '%.%' or '%@%' or '%$%' or '%*%' or '%&%');
 
select * from usuario;
 
insert into empresa values 
 (null,'Sptech','1092.1092.313',null,'paulista','09876543','são paulo','são paulo');
 
insert into usuario values
 (1,1,'Samuel','Bryan','samuelbryan@gmail.com','11987543200','SamuelB','senha123!.',null);
 