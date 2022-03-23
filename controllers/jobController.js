const mongoose = require('mongoose');
const {Job} = require('../models/job')


exports.createJob = async (req, res) => {
	try{
		let job = new Job();
		job.field = {name:'Node js'};
		await job.save();
		res.status(200).send({ success: true });
		console.log("sent response");
	}
	catch (e) {
		res.status(404).send({message: "Error saving job"});
	}
}
