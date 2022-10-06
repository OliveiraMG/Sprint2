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
primary key(idDatacenter)
);

create table sensor (
idSensor int,
fkDatacenter int,
constraint fkDatacenter foreign key(fkDatacenter) references dataCenter(idDatacenter),
primary key (idSensor),
tempIDealMinima float,
tempIDealMaxima float,
umidadeIdeal float
);
create table metrica (
idMetrica int auto_increment,
temperaturaAtual float,
umidadeAtual float,
dtHora datetime,
fkSensor int,
foreign key (fkSensor) references sensor(idSensor),
primary key (idMetrica,fkSensor)
);
alter table usuario add constraint chkEmail check (email LIKE '%@%.%');
alter table usuario add constraint chkSenha check (senha like '%!%' or senha like'%.%' or senha like '%@%' or senha like '%$%' or senha like '%*%' or senha like '%&%');
 
 
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


insert into dataCenter values
(1,1,'4 hacks','tier 2','São Paulo'),
(2,2,'10 hacks','tier 3','Hortolândia'),
(3,2,'8 hacks','tier 3','Piracicaba');

insert into sensor values
(1,1,19.8,25.6,45),
(2,1,21,26.8,47),
(3,2,21.9,25.5,50),
(4,2,22.5,27,54);

insert into metrica values
(null,27,50,'2022-10-05 09:38:22',1),
(null,25.8,48,'2022-10-05 09:40:22',1),
(null,25.6,48.8,'2022-10-05 09:42:22',1),
(null,24.2,44.2,'2022-12-08 07:35:10',2),
(null,24.5,44.5,'2022-12-08 07:40:10',2),
(null,19.5,54.4,'2022-10-05 09:45:00',3),
(null,14,62.4,'2022-10-05 10:00:00',3),
(null,22.3,48.6,'2022-10-08 15:40:18',4),
(null,28.7,49,'2022-10-08 15:44:18',4);

select * from empresa;
select * from usuario;
select * from dataCenter;
select * from sensor;
select * from metrica;

select * from empresa join usuario 
on fkEmpresa= idEmpresa;

select * from empresa join dataCenter
on fkEmpresa=idEmpresa;

select * from dataCenter  left join sensor 
on fkDatacenter=idDatacenter;

select * from  metrica join sensor on
fkSensor=idSensor;

select m.temperaturaAtual as TemperaturaAtual,
                          s.tempIdealMinima as temperaturaIdealMinima,
                          s.tempIdealMaxima as temperaturaIdealMaxima
                          from metrica as m join
                              sensor as s 
                              on m.fkSensor=s.idSensor;
                              
                              
                              
select empresa.nome,
         dataCenter.tier,
			 sensor.tempIdealMaxima,
                   metrica.temperaturaAtual
                     from metrica join sensor
                     on metrica.fkSensor=sensor.idSensor
                     join dataCenter on sensor.fkDatacenter=dataCenter.idDatacenter
                     join empresa on dataCenter.fkEmpresa=empresa.idEmpresa;