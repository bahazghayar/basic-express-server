
module.exports = (req, res, next) => {
    
    if (req.query.name){
        next();
    }else {
        next('Enter a name please') ;
    }
    
};