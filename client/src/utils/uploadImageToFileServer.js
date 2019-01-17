export default async function uploadImageToFileServer(files,label,callback){
    if(!files.length) return;
    for(let i=0;i<files.length;i++){
        const data=new FormData();
        data.append('file',files[i]);
        data.append('upload_preset','lakayou');
        const res=await fetch("https://api.cloudinary.com/v1_1/dejyp5iex/image/upload",{
                                    method:'POST',
                                    body:data
                                    })

       const jsonResponse= await res.json();
    
        // console.log("CLOUDINARY RESPONSE"+JSON.stringify(jsonResponse));

        

        callback(label,jsonResponse);
    
    }
}