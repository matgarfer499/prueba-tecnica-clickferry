'use client'
import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import RouteSelector from './components/RouteSelector'
import Calendar from './components/Calendar'

export default function Home() {
  // Estados para almacenar datos y estados seleccionados
  const [selectedRoute, setSelectedRoute] = useState('')
  const [dates, setDates] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Función para obtener datos del calendario a través de la API creada
  const fetchCalendarData = async (route) => {
    try {
      setIsLoading(true) // Muestra el indicador de carga

      const response = await fetch(`/api/allData/${route}`)
      const {data} = await response.json()
      setDates(data)
    } catch (error) {
      console.error('Error al realizar la solicitud a la API', error)
    } finally {
      setIsLoading(false) // Oculta el indicador de carga
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
      {isLoading ? (
        <LoadingIcon />
      ) : dates !== null ? (
        <Calendar dates={dates} />
      ) : (
        <h3 className='text-4xl font-semibold text-[#004998] text-center'>
          Elija destino para mostrar fechas disponibles
        </h3>
      )}
    </main>
  )
}

const LoadingIcon = () => (
  <svg
    className='m-auto mt-12'
    width='120'
    height='30'
    viewBox='0 0 120 30'
    xmlns='http://www.w3.org/2000/svg'
    fill='#00000'
  >
    <circle cx='15' cy='15' r='15'>
      <animate
        attributeName='r'
        from='15'
        to='15'
        begin='0s'
        dur='0.8s'
        values='15;9;15'
        calcMode='linear'
        repeatCount='indefinite'
      />
      <animate
        attributeName='fill-opacity'
        from='1'
        to='1'
        begin='0s'
        dur='0.8s'
        values='1;.5;1'
        calcMode='linear'
        repeatCount='indefinite'
      />
    </circle>
    <circle cx='60' cy='15' r='9' fill-opacity='0.3'>
      <animate
        attributeName='r'
        from='9'
        to='9'
        begin='0s'
        dur='0.8s'
        values='9;15;9'
        calcMode='linear'
        repeatCount='indefinite'
      />
      <animate
        attributeName='fill-opacity'
        from='0.5'
        to='0.5'
        begin='0s'
        dur='0.8s'
        values='.5;1;.5'
        calcMode='linear'
        repeatCount='indefinite'
      />
    </circle>
    <circle cx='105' cy='15' r='15'>
      <animate
        attributeName='r'
        from='15'
        to='15'
        begin='0s'
        dur='0.8s'
        values='15;9;15'
        calcMode='linear'
        repeatCount='indefinite'
      />
      <animate
        attributeName='fill-opacity'
        from='1'
        to='1'
        begin='0s'
        dur='0.8s'
        values='1;.5;1'
        calcMode='linear'
        repeatCount='indefinite'
      />
    </circle>
  </svg>
)
