const db=require("../config/db");
exports.getUser=(req,res)=>{
    console.log("request comming");
db.query("SELECT * FROM users",(err,result)=>{
    if(err){
        return res.status(500).json(err);
    }else{
        return res.json(result);
    }
});
};

exports.addUser=(req,res)=>{
    console.log("request commig");
    const{name,email}=req.body;
    if(!name||!email){
        return res.status(400).json({message:"name and email required"});
    }

    const checksql="SELECT * FROM users where email=?";
    db.query(checksql,[email],(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }
        if(result.length>0){
            return res.status(200).json({
                message:"user already present"
            });
        };

        const insertSql="INSERT INTO users(name,email) VALUES(?,?)";
        db.query(insertSql,[name,email],(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            res.status(200).json({
                message:"user register successfull",
                userId:result.id
            });
        });
    });
};