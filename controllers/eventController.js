const Event = require ('../models/event');

exports.createEvent = async (req, res) => {
    try {
        const event =  new Event(req.body);
        await event.save();
        res.status(201).json(event);
    }
    catch(err){
        res.status(500).json({
             message: "Can't create event ",
             err:err 
            })
        
    }
};

exports.getEvents = async (req, res) => {
    try{
        const events = Events.find()
        res.json(events);
    }
    catch(err){
        res.status(500).json({message: err.message})
}
}