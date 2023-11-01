export function RouteSelector({ selectedRoute, handleRouteChange }) {
    
    return (
        <div className='w-2/4 m-auto mt-2 rounded-xl flex justify-center align-center bg-white py-2'>
            <select
                className='w-2/5 text-lg font-semibold flex justify-center border-[1px] border-black align-center rounded-lg p-2 shadow-xl'
                value={selectedRoute}
                onChange={handleRouteChange}
            >
                <option value='' disabled>
                    Selecciona sitio
                </option>
                <option value='ALGECEUT'>Algeciras - Ceuta</option>
                <option value='CEUTALGE'>Ceuta - Algeciras</option>
            </select>
        </div>
    )
}

export default RouteSelector
