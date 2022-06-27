module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("users", {
		id: {
			type: DataTypes.STRING(),
			allowNull: true,
			primaryKey: true,
			field: "id",
		},
		bankName: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "bank_name",
		},
		phone: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "phone",
		},
		fullName: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "full_name",
		},
		citizenId: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "citizen_id",
		},
		userName: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "user_name",
		},
		password: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "password",
		},
		smartOtp: {
			type: DataTypes.STRING(),
			allowNull: true,
			field: "smart_otp",
		},
		createdAt: {
			type: DataTypes.JSON(),
			allowNull: true,
			field: "created_at",
		},
		updatedAt: {
			type: DataTypes.JSON(),
			allowNull: true,
			field: "updated_at",
		},
	});
	return Users;
};
