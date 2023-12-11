import {v2 as cloudinary} from "cloudinary"
import  fs from "fs"
     

const uplodeOncloudinary = async (LocalFilePath)=>{
    try {
        if (!LocalFilePath) return null;
       
       const resp = await cloudinary.uploader.upload(LocalFilePath,{
        resource_type :"auto"
        } )

        //file has been uploded sucees fully 
        console.log(resp);
        console.log(`file has uploded on cloudinary+ ${resp.url}`);

        return  resp;
        
    } catch (error) {
        fs.unlinkSync(LocalFilePath) // local the localical save temp file uplode the fail in case
        return null
    }
}
cloudinary.config({ 
  cloud_name: 'dejkan3sv', 
  api_key: '633925488634971', 
  api_secret: 'yNsQ5tLxH6PzPEtmuQHbnRtzSFQ' 
});
