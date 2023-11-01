import Image from "next/image";

export function Navbar() {
    return (
        <nav className='w-screen flex align-center justify-between px-4 bg-[#004a99]'>
            <Image
                src={'/logo.webp'}
                width={200}
                height={200}
                alt='Picture of the author'
            />
            <div className='flex flex-col justify-center align-center'>
                <h1 className='text-2xl text-white font-semibold'>
                    Prueba técnica Clickferry
                </h1>
                <span className='text-white'>Hecha por Matías José García Fernández</span>
            </div>
        </nav>
    )
}

export default Navbar