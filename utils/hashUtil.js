import bcrypt from "bcrypt"

// hashSync untuk enkripsi 
export const hash = (plainText) => {
    return bcrypt.hashSync(plainText, 10)
}

export const compare = (plainText, hashText) => {
    return bcrypt.compareSync(plainText, hashText)
} 