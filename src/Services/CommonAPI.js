import  axios  from "axios";

export const CommonAPI=(httprequest,url,reqBody)=>{
    const reqConfig={
        method:httprequest,
        url,
        data:reqBody
    }

    return axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })

    }