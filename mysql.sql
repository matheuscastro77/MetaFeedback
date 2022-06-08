 CREATE TABLE IF NOT EXISTS SYSTEM_USER (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(45) NOT NULL,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS EMAILS_EVALUATION (
    id VARCHAR(45) PRIMARY KEY,
    name VARCHAR(500) NULL,
    email VARCHAR(500) NULL,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  );


  CREATE TABLE IF NOT EXISTS PERFIL_LEAGUER (
    id VARCHAR(45) PRIMARY KEY,
    name VARCHAR(45) NULL,
    email VARCHAR(45) NULL,
    photo VARCHAR(500) NULL,
    team VARCHAR(100) NULL,
    technology VARCHAR(500) NULL,
    language VARCHAR(100) NULL,
    stage VARCHAR(100) DEFAULT "Introdução",
    role VARCHAR(50) DEFAULT "LEAGUER",
    responsible VARCHAR(50) NULL,
    profession ENUM("Back-end", "BI-Analista de Business Intelligence", "Cientista de dados", "Front-End", "FullStack", "Administrador de sistemas", "Administrador de rede", "Segurança da informação", "Computação em nuvem", "Desenvolvedor mobile", "Scrim master", "Arquiteto", "Desenvolverdor de software", "other"),
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    SYSTEM_USER_id VARCHAR(45) NULL,
    FOREIGN KEY (SYSTEM_USER_id) REFERENCES SYSTEM_USER(id)
  );

  CREATE TABLE IF NOT EXISTS FORM (
    id VARCHAR(45) PRIMARY KEY,
    email VARCHAR(45) NULL,
    LEAGUER_id VARCHAR(45) NULL,
    project VARCHAR(255) NULL,
    time VARCHAR(45) NULL,
    technology SET("Java", "PHP", "HTML", "CSS", "JavaScript", "C", "C#", "Python", "R", "TypeScript", "Ruby", "C++", "React", "Express", "Git", "Node.Js", "GitHub", "GitLab", "Axios", "Jest", "NEXT", "API", "Other"),
    type_hiring ENUM("CLT", "Estágio", "CNPJ", "Contrato temporário"),
    performance ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_performance VARCHAR(255) NULL,
    delivery_quality ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_delivery_quality VARCHAR(255) NULL,
    team_work ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_team_work VARCHAR(255) NULL,
    commitment ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_commitment VARCHAR(255) NULL,
    punctual ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_punctual VARCHAR(255) NULL,
    work_under_pressure ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_work_under_pressure VARCHAR(255) NULL,
    ceremonies ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_ceremonies VARCHAR(255) NULL,
    leadership_ability ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_leadership_ability VARCHAR(255) NULL,
    proactive ENUM("Insuficiente", "Regular", "Bom", "Excelente"),
    comment_proactive VARCHAR(255) NULL,
    skills VARCHAR(255) NULL,
    general_considerations MEDIUMTEXT NULL,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    SYSTEM_USER_id VARCHAR(45) NOT NULL,
    hashlink VARCHAR(255) NULL,
    FOREIGN KEY (SYSTEM_USER_id) REFERENCES SYSTEM_USER(id),
    FOREIGN KEY (LEAGUER_id) REFERENCES PERFIL_LEAGUER(id)
  );

  CREATE TABLE IF NOT EXISTS ANSWER_FORM (
    id VARCHAR(45) PRIMARY KEY,
    compiled_answer LONGTEXT NOT NULL,
    SYSTEM_USER_id VARCHAR(45) NOT NULL,
    FORM_id_Leaguer VARCHAR(45) NOT NULL,
    FOREIGN KEY (FORM_id) REFERENCES FORM(id),
    FOREIGN KEY (SYSTEM_USER_id) REFERENCES SYSTEM_USER(id)
  );


  CREATE TABLE IF NOT EXISTS TEAM (
    id VARCHAR(45) PRIMARY KEY,
    team VARCHAR(45) NOT NULL,
    SYSTEM_USER_id VARCHAR(45) NULL,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SYSTEM_USER_id) REFERENCES SYSTEM_USER(id)
  );


  CREATE TABLE IF NOT EXISTS QUESTIONS (
    id VARCHAR(45) PRIMARY KEY,
    questions VARCHAR(255) NOT NULL UNIQUE,
    answer VARCHAR(500) NULL,
    SYSTEM_USER_id VARCHAR(45) NULL,
    FORM_id VARCHAR(45) NULL,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (FORM_id) REFERENCES FORM(id),
    FOREIGN KEY (SYSTEM_USER_id) REFERENCES SYSTEM_USER(id)
  );


    DROP TABLE SYSTEM_USER;
    DROP TABLE EMAILS_EVALUATION;
    DROP TABLE PERFIL_LEAGUER;
    DROP TABLE FORM; 
    DROP TABLE ANSWER_FORM; 
    DROP TABLE QUESTIONS; 
    DROP TABLE TEAM; 




    SELECT * FROM SYSTEM_USER;
    SELECT * FROM TEAM;
    SELECT * FROM EMAILS_EVALUATION;
    SELECT * FROM PERFIL_LEAGUER ;
    SELECT * FROM FORM; 
    SELECT * FROM ANSWER_FORM ; 
    SELECT * FROM QUESTIONS; 
    

    ALTER TABLE FORM DROP link;

SELECT *  FROM PERFIL_LEAGUER INNER JOIN FORM ON PERFIL_LEAGUER.id = FORM.LEAGUER_id WHERE LEAGUER_id = "9e9af649-f538-4050-a5e8-4aeecdcd9a16" ;

 WHERE week_day = '${dia}';

ALTER TABLE FORM CHANGE SYSTEM_USER_id SYSTEM_USER_id VARCHAR(255) NULL;

-- "INSERT INTO tbnecessidade "+"(desc_necessidade, progresso_necessidade, fk_id_material, fk_id_tipo)"+ " VALUES (?, ?, (select max(pk_id_Material) from tbmaterial),(select max(pk_id_Tipo) from tbTipoOperacao));


SELECT *  FROM PERFIL_LEAGUER JOIN FORM JOIN ANSWER_FORM JOIN QUESTIONS ON PERFIL_LEAGUER.id = FORM.LEAGUER_id WHERE LEAGUER_id = "9e9af649-f538-4050-a5e8-4aeecdcd9a16" ;


SELECT *  FROM FORM as F INNER JOIN ANSWER_FORM as A ON F.LEAGUER_id = A.LEAGUER_ANSWER_id WHERE LEAGUER_ANSWER_id = "9e9af649-f538-4050-a5e8-4aeecdcd9a16";

SELECT *  FROM PERFIL_LEAGUER INNER JOIN FORM ON PERFIL_LEAGUER.id = FORM.LEAGUER_id INNER JOIN ANSWER_FORM ON PERFIL_LEAGUER.id = ANSWER_FORM.LEAGUER_ANSWER_id  WHERE LEAGUER_id = "9e9af649-f538-4050-a5e8-4aeecdcd9a16" ;