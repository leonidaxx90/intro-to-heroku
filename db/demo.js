module.exports = function(client) {

  client.query(`CREATE TABLE broker__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   email__c CHARACTER VARYING(80),
   phone__c CHARACTER VARYING(40),
   mobile_phone__c CHARACTER VARYING(40),
   title__c CHARACTER VARYING(30),
   picture__c CHARACTER VARYING(255)
  );`);

  client.query(`CREATE TABLE property__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   thumbnail__c CHARACTER VARYING(255),
   beds__c DOUBLE PRECISION,
   address__c CHARACTER VARYING(100),
   baths__c DOUBLE PRECISION,
   broker__c CHARACTER VARYING(18) REFERENCES broker__c(sfid),
   description__c CHARACTER VARYING(500),
   state__c CHARACTER VARYING(20),
   city__c CHARACTER VARYING(50),
   zip__c CHARACTER VARYING(10),
   title__c CHARACTER VARYING(100),
   picture__c CHARACTER VARYING(255),
   price__c DOUBLE PRECISION,
   location__longitude__s DOUBLE PRECISION,
   location__latitude__s DOUBLE PRECISION
  );`);

  client.query(`CREATE TABLE favorite__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   property__c CHARACTER VARYING(18) REFERENCES property__c(sfid)
  );`);


  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('caroline@ionicrealty.com', '617-244-3672', 'Caroline Kingsley', '617-244-3672', 'a0036000003SsJwAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('jen@ionicrealty.com', '617-244-3672', 'Jennifer Wu', '617-244-3672', 'a0036000003SsJzAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('michael@ionicrealty.com', '617-244-3672', 'Michael Jones', '617-244-3672', 'a0036000003SsJxAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('michelle@ionicrealty.com', '617-244-3672', 'Michelle Lambert', '617-244-3672', 'a0036000003SsK2AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('jonathan@ionicrealty.com', '617-244-3672', 'Jonathan Bradley', '617-244-3672', 'a0036000003SsJyAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('olivia@ionicrealty.com', '617-244-3672', 'Olivia Green', '617-244-3672', 'a0036000003SsK0AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('miriam@ionicrealty.com', '617-244-3672', 'Miriam Aupont', '617-244-3672', 'a0036000003SsK1AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('victor@ionicrealty.com', '617-244-3672', 'Victor Ochoa', '617-244-3672', 'a0036000003SsK3AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg');`);

  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('18 Henry st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg', 4, -71.1109500000000025, '18 Henry st', 3, 'a0036000003SsJwAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKoAAO', 'MA', 'Cambridge', '01742', 'Stunning Victorian', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg', 975000, 42.3566300000000027);`);

  client.query(`INSERT INTO favorite__c (property__c, sfid) VALUES ('a0236000002NHKoAAO', 'a0136000003SsewAAC');`);

};
