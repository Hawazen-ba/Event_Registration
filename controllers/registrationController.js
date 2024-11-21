const Registration = require('../models/registration')

exports.registration =async (req, res) =>  {
    try{
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({message : "Registration saved successfully"})
    } catch(err){
        res.status(500).json ({message : err.message})
    }

};

exports.getRegistrations = async (req, res) => {
    try{
        const registration = await Registration.find().populate('event');
        res.status(200).json(registration);
    }catch(err){
   res.status(500).json({message : err.message});
    }
};