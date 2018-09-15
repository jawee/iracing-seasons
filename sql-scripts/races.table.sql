CREATE TABLE races (
    id int NOT NULL AUTO_INCREMENT,
    seasonid int,
    racenumber int,
    trackid int,
    PRIMARY KEY (id),
    FOREIGN KEY (trackid),
    FOREIGN KEY (seasonid)
);