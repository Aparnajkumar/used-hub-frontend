import { CommonAPI } from "./CommonAPI"
import { serverURL } from "./ServiceURL"

//add new item
export const addItemAPI = async(reqBody)=>{
    return await CommonAPI("post",`${serverURL}/items`,reqBody)
}

//get all Item

export const getallItemAPI=async()=>{
    return await CommonAPI("get",`${serverURL}/items`,"")}

//api to delete Item
export const deleteItemAPI=async(id)=>{
    return await CommonAPI("delete",`${serverURL}/items/${id}`,"")
}
//api to get edit Item
export const getEditItemAPI=async(id)=>{
    return await CommonAPI("get",`${serverURL}/items/${id}`,"")
}

//api to update edit Item
export const updateEditItemAPI=async(id,reqBody)=>{
    return await CommonAPI("put",`${serverURL}/items/${id}`,reqBody)
}

