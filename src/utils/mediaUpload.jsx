import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51d2FvcXNlaW5xYWRpZmZtd2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5ODgxMzMsImV4cCI6MjA2MDU2NDEzM30.etLwcExGNwWzKEAoBxS4lRGdlrWVeqd3Ovs7hxyeERM"
const supabase_url = "https://nuwaoqseinqadiffmwhl.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function mediaUpload(file){

    return new Promise ((resolve, reject)=>{
        if(file == null){
            reject("No file selected")
        }
        
        const timestamp = new Date().getTime();
        const fileName = timestamp+file.name
    
        supabase.storage.from("images").upload(fileName, file, {
            cacheControl : '3600',
            upsert : false,
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl)
        }).catch(()=>{
            reject("Error uploading file")
        })
    });

}