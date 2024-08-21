import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Cloud Function to create a Firestore document when a new user signs up
export const createUserDocument = functions.auth.user().onCreate(async (user) => {
  try {


    const newUser = {
        uid: user.uid,
        email:user.email,
        displayName: user.displayName,
        providerData: user.providerData
    };
    // Convert user object to JSON and store it in Firestore
    await db.collection('users').doc(user.uid).set(newUser);
    console.log('User document created successfully for:', user.uid);


  } catch (error) {
    console.error('Error creating user document:', error);
  }
});
