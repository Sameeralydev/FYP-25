import React, { useEffect, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db, auth } from "../firebase"
import { signOut } from "firebase/auth"
import { replace, useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [forms, setForms] = useState([])
  const [userEmail, setUserEmail] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserEmail(user.email)

        // ✅ Sirf us email ka data lao jo login hua hai
        try {
          const q = query(
            collection(db, "contactForms"),
            where("email", "==", user.email)
          )
          const querySnapshot = await getDocs(q)
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setForms(data)
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      } else {
        setUserEmail("")
        setForms([])
      }
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <div className="p-8 eb-garamond-google bg-gray-50 min-h-screen">
      {/* 🔹 Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome{userEmail ? `, ${userEmail}` : ""}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/",{replace: true})}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🔹 Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Service</th>
              <th className="border px-4 py-2 text-left">Message</th>
              <th className="border px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {forms.length > 0 ? (
              forms.map((form) => (
                <tr key={form.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{form.id}</td>
                  <td className="border px-4 py-2">{form.email}</td>
                  <td className="border px-4 py-2">{form.name}</td>
                  <td className="border px-4 py-2">{form.phone}</td>
                  <td className="border px-4 py-2">{form.service}</td>
                  <td className="border px-4 py-2">{form.message}</td>
                  <td className="border px-4 py-2">
                    {form.createdAt?.toDate
                      ? form.createdAt.toDate().toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No records found for your email.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
