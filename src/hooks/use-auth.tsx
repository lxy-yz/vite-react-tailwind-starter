import * as firebaseAuth from "firebase/auth";
import type { User } from "firebase/auth";
import invariant from "../utils";

const AuthContext = createContext<{
  user?: User;
  signin(email: string, password: string): Promise<User>;
  signup(email: string, password: string): Promise<User>;
  signout(): void;
  sendPasswordResetEmail(email: string): Promise<void>;
  confirmPasswordReset(code: string, newPassword: string): Promise<void>;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  invariant(auth, "useAuth must be used within an AuthProvider");
  return auth;
};

function useProvideAuth() {
  const [user, setUser] = useState<User>();

  const signin = async (email: string, password: string) => {
    const response = await firebaseAuth.signInWithEmailAndPassword(
      firebaseAuth.getAuth(),
      email,
      password
    );
    setUser(response.user);
    return response.user;
  };

  const signup = async (email: string, password: string) => {
    const response = await firebaseAuth.createUserWithEmailAndPassword(
      firebaseAuth.getAuth(),
      email,
      password
    );
    setUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await firebaseAuth.signOut(firebaseAuth.getAuth());
    setUser(undefined);
  };

  const sendPasswordResetEmail = (email: string) => {
    return firebaseAuth.sendPasswordResetEmail(firebaseAuth.getAuth(), email);
  };

  const confirmPasswordReset = (code: string, password: string) => {
    return firebaseAuth.confirmPasswordReset(
      firebaseAuth.getAuth(),
      code,
      password
    );
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      firebaseAuth.getAuth(),
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
