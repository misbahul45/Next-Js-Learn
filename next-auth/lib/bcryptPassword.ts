import bcrypt from  "bcryptjs"
export async function hashPassword(pw:string){
    return await bcrypt.hash(pw,10)
}

export async function verifyPassword(pw:any,hash:string){
    return await bcrypt.compare(pw,hash)
}