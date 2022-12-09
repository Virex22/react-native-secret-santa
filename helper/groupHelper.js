import { supabase } from "../lib/supabase"

export function PostGroup(name, members, maxAmount, creator ) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('groups')
                .insert([
                    { "name": name, "members": members, "creator": creator , "max_amount" : maxAmount}
                ]).select('*')
            if(response.data)
                resolve(response.data[0])
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
                .filter('members', 'like', `%${userId}%`)
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

export function addGroupMembers(groupId, userId, pseudo) {
    return new Promise(async(resolve, reject) => {
        try {
            const getResponse = await supabase.from('groups')
                .select('members')
                .eq('id', groupId);
            let members = JSON.parse(getResponse.data[0].members);
            if (!members.some(member => member.id === userId)) {
                members.push({id: userId, name: pseudo});
            }
            else{
                resolve();
            }
            const response = await supabase.from('groups')
                .update({ members: JSON.stringify(members) })
                .eq('id', groupId)
            if (response.error)
                reject(response.error);
            else
                resolve(response.data);
        } catch (error) {
            reject(error)
        }
    })
}

export function removeGroup(groupId) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('groups')
                .delete()
                .eq('id', groupId)
            if (response.error)
                reject(response.error);
            else
                resolve(response.data);
        } catch (error) {
            reject(error)
        }
    })
}

