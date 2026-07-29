module.exports = function handler(req,res){
 res.status(200).json([{id:1,name:'AI Strategy Agent',status:'Online'},{id:2,name:'Content Agent',status:'Online'}]);
};
