import { NextResponse } from 'next/server'
import { format, addDays } from 'date-fns'

// Función asincrónica para obtener datos de salidas para una ruta dada.
async function fetchData(route) {
  const numberOfDays = 60
  const data = []
  const currentDate = new Date()

  // Bucle para solicitar datos para cada día.
  for (let i = 0; i < numberOfDays; i++) {
    const currentDay = addDays(currentDate, i)
    const formattedDate = format(currentDay, 'yyyy-MM-dd')
    const url = `https://tadpole.clickferry.app/departures?route=${route}&time=${formattedDate}`

    const request = fetch(url, { next: { revalidate: 10 } }).then((response) =>
      response.json()
    )
    // Esperar a que se complete la solicitud y almacenar el resultado en el objeto 'data'.
    const result = await request
    if(result.length !== 0) {
      data.push(formattedDate)
    }
  }
  return data
}

// Controlador para la solicitud GET.
export async function GET(request, { params }) {
  try {
    const route = params.route
    const data = await fetchData(route)
    return NextResponse.json({ data })
  } catch (error) {
    // En caso de error, responder con un mensaje de error y un estado HTTP 400 (Bad Request).
    return NextResponse.json({ error: 'Ruta no válida' }, { status: 400 })
  }
}
