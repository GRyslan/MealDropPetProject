const agentService = require("../services/agentService")
async function addAgent(req,res){
    try {
        const {name}=req.body
        const agentExist = await agentService.findAgent(name);
        if (agentExist) {
            return res.status(400).json({message: "Agent already exist"});
        }
        const agentUser = await agentService.createAgent(name);
        return res.status(201).json({message: `Registration successful + ${agentUser}`});
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Registration error"});
    }
}
module.exports={addAgent}
