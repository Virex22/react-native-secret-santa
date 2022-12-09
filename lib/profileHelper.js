import { supabase } from "./supabase";

export function UpdateProfile(id, pseudo, wishList) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('profiles')
                .update({ "full_name": pseudo, "wish_list": wishList })
                .eq('id', id)
            if(response.data)
                resolve(response.data[0])
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}

export function GetProfile(id) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('profiles')
                .select('*')
                .eq('id', id)
            if(response.data)
                resolve(response.data[0])
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}