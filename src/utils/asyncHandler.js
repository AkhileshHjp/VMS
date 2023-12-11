const asyncHandler = (requstHandeler)=>{
    (req,res,next)=>{
        Promise.resolve(requstHandeler(req,res,next)).
        catch((err) => next(err))
    }
}




// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn(req, res, next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message : err.message
//         })
//     }
//  }


 export {asyncHandler}
