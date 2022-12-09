import { supabase } from "./supabase";

export function RegisterUser(email, password) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if( response.data.user.aud == 'authenticated' )
                resolve(response)
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}

 // register can't send psoeudo with supabase, this function is used to update it
export function UpdatePsoeudo(psoeudo) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.from('profiles')
                .update({ "full_name": psoeudo })
                .match({ id: supabase.auth.user().id })
            if( response.data )
                resolve(response)
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}

export function LoginUser(email, password) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if( response.data.user.aud == 'authenticated' )
                resolve(response)
            if (response.error)
                reject(response.error)
        } catch (error) {
            reject(error)
        }
    })
}