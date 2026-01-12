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
export async function initiateGoogleSignIn(authInstance: Auth): Promise<void> {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(authInstance, provider);
}
