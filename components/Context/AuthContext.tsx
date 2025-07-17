import { supabase } from '@/lib/supabase'
import { Session, User } from '@supabase/supabase-js'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type AuthContextType = {
    session: Session | null
    user: User | null
    loading: boolean
    signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
            setUser(data.session?.user ?? null)
            setLoading(false)
        }

        getSession()

        const { data: { subscription } } =
            supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                setLoading(false)
            })

        return () => subscription.unsubscribe()
    }, [])

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ session, user, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
