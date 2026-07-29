module.exports = function handler(req,res){
 res.status(200).json([{id:1,event:'System initialized',time:new Date().toISOString()}]);
};
