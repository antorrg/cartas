import {supabase} from './supabaseClient'
import type {ValueLetter } from './types'

export type NewLetter = {
    tema: string
    mensaje: string
}

export async function getLetters():Promise<ValueLetter[]>{
    try {
        const { data, error } = await supabase
                .from('cartas')
                .select('*')
                .eq('aprobada', true)
        if(error){throw new Error('Error leyendo base de datos')}
        return data || []
    } catch (error) {
        console.error('Error en get', error)
        throw error
    }
}

export async function createLetter(values: NewLetter):Promise<void>{
    const { error } = await supabase
        .from('cartas')
        .insert([{ tema: values.tema, mensaje: values.mensaje }])
        //.select()
        if(error) {console.error(error);throw error}
}

export async function counter():Promise<number>{
    const { count, error } = await supabase
        .from('cartas')
        .select('id',{count:'exact', head: true})
        .eq('aprobada', true)
        if(error) {console.error(error);throw error}
        return count as number
}