module.exports = {
	HOST: "db.capm9hnsg2zp.us-east-1.rds.amazonaws.com",
	USER: "admin",
	PASSWORD: "PortalBE",
	DB: "sys",
	dialect: "mysql",

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
