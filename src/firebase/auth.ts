'use client';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

/**
 * Initiates Google sign-in process using a popup.
 * This function is non-blocking.
 * @param authInstance - The Firebase Auth instance.
 */
export function initiateGoogleSignIn(authInstance: Auth): void {
  const provider = new GoogleAuthProvider();
  // CRITICAL: Do NOT 'await' this call.
  // The user's auth state is managed by the onAuthStateChanged listener in the FirebaseProvider.
  signInWithPopup(authInstance, provider);
}
