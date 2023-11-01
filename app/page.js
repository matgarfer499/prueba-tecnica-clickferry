'use client'
import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import RouteSelector from './components/RouteSelector'
import Calendar from './components/Calendar'

export default function Home() {
  // Estados para almacenar datos y estados seleccionados
  const [api, setApi] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState('')
  const [emptyDates, setEmptyDates] = useState([])

  // Función para obtener datos del calendario a través de la API creada
  const fetchCalendarData = async (route) => {
    try {
      const response = await fetch(`/api/allData/${route}`)
      if (response.ok) {
        const data = await response.json()
        setApi(data)

        // Filtrar fechas sin datos
        const emptyDates = Object.keys(data.data).filter(
          (date) => data.data[date].length === 0
        )
        setEmptyDates(emptyDates)
      } else {
        console.error('Error al obtener los datos de la API')
      }
    } catch (error) {
      console.error('Error al realizar la solicitud a la API', error)
    }
  }

  // Manejar cambios en la selección de la ruta
  const handleRouteChange = (e) => {
    setSelectedRoute(e.target.value)
  }

  // Efecto que se activa cuando cambia la selección de la ruta
  useEffect(() => {
    if (selectedRoute) {
      fetchCalendarData(selectedRoute)
    }
  }, [selectedRoute])

  return (
    <main>
      <Navbar />
      <RouteSelector
        selectedRoute={selectedRoute}
        handleRouteChange={handleRouteChange}
      />
      {api !== null ? (
        <Calendar emptyDates={emptyDates} />
      ) : (
        <h3 className='text-4xl font-semibold text-[#004998] text-center'>
          Elija destino para mostrar fechas disponibles
        </h3>
      )}
    </main>
  )
}
