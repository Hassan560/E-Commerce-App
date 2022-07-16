import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'

const Profile = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getUsers = collection(db, "users");
    const q = query(getUsers, orderBy("username", "desc"));
    onSnapshot(q, (snapshot) => {
      const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserData(user)
      console.log(user);
    })
  }, [])

  return (
    <>
      {
        userData.map(({ username, email, owner_uid }) => (
          <View key={owner_uid}>
            <Text>{username}</Text>
            <Text>{email}</Text>
          </View>

        ))
      }
    </>
  )
}

export default Profile