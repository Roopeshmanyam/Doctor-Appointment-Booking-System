import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/docters/General physician') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-blue-100 text-black" : "" }`} >General physician</p>
          <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/docters/Gynecologist') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-blue-100 text-black" : "" }`} >Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/docters/Dermatologist') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-blue-100 text-black" : "" }`} >Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/docters/Pediatricians') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-blue-100 text-black" : "" }`} >Pediatricians</p>
          <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/docters/Neurologist') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-blue-100 text-black" : "" }`} >Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/docters/Gastroenterologist') } className={`w-[94vw] sm:w-auto py-1.5 pl-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-blue-100 text-black" : "" }`} >Gastroenterologist</p>
        </div>
        <div className='grid grid-cols-5 gap-4 pt-1.5 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-x-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                  <p className='text-gray-600 text-sm  '>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
