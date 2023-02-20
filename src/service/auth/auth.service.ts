import { signInWithEmailAndPassword, UserCredential, User } from "firebase/auth"
import { auth } from "../.."

const authServiceDef = () => {
    const signIn = async (email: string, password: string): Promise<User | null> => {
        try {
            const authResponse: UserCredential = await signInWithEmailAndPassword(auth, email, password)
            return authResponse.user;
        } catch (error) {
            console.log(error);
            return null
        }
    }

    return {
        signIn
    }
}

export const authService = authServiceDef()