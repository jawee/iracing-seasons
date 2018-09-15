CREATE TABLE race_rows (
	id int not null auto_increment,
	raceid int not null,
	driverid int not null,
	car varchar(255),
	position int,
	startposition int,
	incidents int,
	points int,
	infractionpoints int,
	penaltypoints int,
	primary key (id),
	foreign key (raceid),
	foreign key (driverid)
)