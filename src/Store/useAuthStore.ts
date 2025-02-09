import { create } from "zustand";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode for token validation
import { NavigateFunction } from "react-router-dom";

// 🧑‍💻 User Interface
interface User {
    _id?: string;
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

// 🔐 Auth Store Interface
interface AuthState {
    token: string | null;
    user: User | null;
    error: string | null;
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    getUser: (navigate: NavigateFunction) => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("auth-token"),
    user: null,
    error: null,
    isLoggedIn: false,

    // 🔑 Signup Function
    signup: async (name, email, password) => {
        const response = await fetch("https://backend-i-note-book.vercel.app/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();

        if (data.success) {
            localStorage.setItem("auth-token", data.token);
            set({ token: data.token, isLoggedIn: true, error: null });
        } else {
            set({ error: data.message, isLoggedIn: false });
        }
    },

    // 🔑 Login Function
    login: async (email, password) => {
        const response = await fetch("https://backend-i-note-book.vercel.app/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data.success) {
            localStorage.setItem("auth-token", data.token);
            set({ token: data.token, isLoggedIn: true, error: null });
        } else {
            set({ error: data.message, isLoggedIn: false });
        }
    },

    // 👤 Get User from Token
    getUser: async (navigate) => {
        const token = localStorage.getItem("auth-token");

        if (!token) {
            set({ error: "Token is not present", isLoggedIn: false });
            navigate("/signup");
            return;
        }

        try {
            const decodedToken: any = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                set({ error: "Token has expired", isLoggedIn: false });
                localStorage.removeItem("auth-token");
                navigate("/signup");
                return;
            }
        } catch (error) {
            set({ error: "Invalid token", isLoggedIn: false });
            localStorage.removeItem("auth-token");
            navigate("/signup");
            return;
        }

        const response = await fetch("https://backend-i-note-book.vercel.app/auth/getUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        });

        const data = await response.json();
        if (data.success) {
            set({ user: data.user, isLoggedIn: true, error: null });
        } else {
            set({ error: data.message, isLoggedIn: false });
            localStorage.removeItem("auth-token");
            navigate("/signup");
        }
    },
}));

export default useAuthStore;
