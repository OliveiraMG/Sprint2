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

create table sensor (
idSensor int,
fkDatacenter int,
constraint fkDatacenter foreign key(fkDatacenter) references dataCenter(idDatacenter),
fkEmpresa int,
foreign key(fkEmpresa) references empresa(idEmpresa),
primary key (idSensor,fkDatacenter,fkEmpresa),
temp decimal(10,1),
umidade decimal(5,2)
);

alter table usuario add constraint chkEmail check (email LIKE '%@%.%');
alter table usuario add constraint chkSenha check (senha like '%!%' or '%.%' or '%@%' or '%$%' or '%*%' or '%&%');
 
select * from usuario;
 
insert into empresa values 
 (null,'Sptech','10921092313',null,'paulista','09876543','são paulo','são paulo'),
 (null,'ibm','10211219324','avenida','vila mariana','09812910', 'são paulo','são paulo');
 
insert into usuario values
 (1,1,'Samuel','Bryan','samuelbryan@gmail.com','11987543200','SamuelB','senha123!.',null);

insert into usuario values 
(2,1,'Marcus','Vinicius','marcusvinicius@gmail.com','11913973613','MarcusV','senha654!.',1),
(3,1,'Giovanana','Miniguiti','giovannaminiguiti@gmail.com','11965431122','GioMin','senha4321!!',1);
insert into usuario values
(1,2,'Igor','Gomes','igorg@gmail.com','11912347651','IgorG','Senha12!',null),
(2,2,'Roberto','Silva', 'rosilva@outlook.com','11983457231','rSilva','senha45!',1),
(3,2,'Marta','Silva', 'marta@outlook.com','11983259573','MartaSilva','Password1!',1);

desc dataCenter;
insert into dataCenter values
(1,1,'4 hacks','tier 2','São Paulo'),
(1,2,'10 hacks','tier 3','Hortolândia'),
(2,2,'8 hacks','tier 3','Piracicaba');

insert into sensor values
(1,1,1,28.5,45),
(2,1,1,27.8,47),
(1,2,2,25.5,50),
(1,1,2,22.5,64);

