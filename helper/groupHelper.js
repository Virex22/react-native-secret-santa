import { supabase } from "../lib/supabase"

export function PostGroup(name, members, maxAmount, tirageCount, creator ) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('groups')
                .insert([
                    { "name": name, "members": members, "maxAmount": maxAmount, "tirageCount": tirageCount, "creator": creator }
                ])
            if(response.data)
                resolve(response)
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}

export function GetGroups(userId) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('groups')
                .select('*')
            if(response.data)
                resolve(response.data)
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}

export function GetGroup(groupId) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('groups')
                .select('*')
                .eq('id', groupId)
            if(response.data)
                resolve(response.data[0])
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}