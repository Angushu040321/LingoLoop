'use client';


import { useClerk } from '@clerk/clerk-react'
import { useAuth } from '@clerk/nextjs'
import { Button, NativeSelect, TextField, useRadioGroup } from '@mui/material'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { getFirestore, setDoc } from 'firebase/firestore'
import { doc, getDoc, addDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useId, useState } from 'react'
import { db, auth, analytics } from '../../firebase.js'
import { headers } from 'next/headers.js'
import { SignedIn, UserButton } from '@clerk/nextjs';

const getFirestoreData = async () => {
    const { userId } = useAuth()
    const docRef = doc(db, 'users', userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
    } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!')
    }
}

const setFirestoreData = async (userId) => {

    const docRef = doc(db, 'users', userId)
    await setDoc(docRef, { user_id: userId })

}


async function saveCards(userId, inventory) {
    const docRef = doc(db, 'users', userId)

    await updateDoc(docRef, { inventory: arrayUnion(inventory) })
}








export default function Home() {

    const { getToken, userId } = useAuth()

    // Handle if the user is not signed in
    // You could display content, or redirect them to a sign-in page
    


    const signIntoFirebaseWithClerk = async () => {
        const token = await getToken({ template: 'integration_firebase' })

        const userCredentials = await signInWithCustomToken(auth, token || '')
        // The userCredentials.user object can call the methods of
        // the Firebase platform as an authenticated user.
        console.log('User:', userCredentials.user)
    }
    setFirestoreData(userId);
    const [value, setValue] = useState('')
    const [langToLearn, setToLearn] = useState('')
    const [native, setnative] = useState('')
    const [inventory, setInventory] = useState({})

    const getResponse = async () => {
        if (!value || !langToLearn || !native) {
            return
        }
        try {
            const pack = {
                method: 'POST',
                body: JSON.stringify({
                    nativeLang: native,
                    langToLearn: langToLearn,
                    prompt: value

                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const response = await fetch('/api', pack)

            const cards = await response.json()
            setInventory({ nativeLang: native, targetLang: langToLearn, prompt: value, cards });

            console.log(JSON.stringify(cards))

            console.log(cards)

        }
        catch (error) {
            console.log(error)
        }



    }



    return (
        
        <box>
            <UserButton>
                
            </UserButton>
            <TextField
                value={native}
                placeholder="Enter what language you are comfortable with"
                onChange={(e) => setnative(e.target.value)}
            />
            <TextField
                value={langToLearn}
                placeholder="Enter what language you want learn"
                onChange={(e) => setToLearn(e.target.value)}
            />

            <TextField
                value={value}
                placeholder="Enter what type of words you want learn"
                onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={getResponse}>
                send
            </Button>

            <Button onClick={() => saveCards(userId, inventory)}>
                save
            </Button>


        </box>
    )











}