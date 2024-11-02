import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const SectionProducts = () => {
        const [data, setData] = useState([])
        useEffect(() => {
                const getAllMenu = async () => {
                        const response = await axios.get('http://localhost:3001/api/menu/menu-items')
                        setData(response.data)
                }

                getAllMenu()
        })

        return (
                <div className="mx-45 lg:mx-14">
                        <h1 className=" font-bold text-2xl mt-10">Produk Kami</h1>
                        <p className="text-sm">Kami mengundang Anda untuk menjelajahi pilihan kantin kami.</p>
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {data.map((item) => (
                                        <div class="p-6 rounded-2xl border-2 border-black shadow-black transition duration-300 shadow-shadow-card">
                                                <h1 class="font-bold text-lg">{item.name}</h1>
                                                <p class="text-neutral-600 text-sm">
                                                        {item.desc}.
                                                </p>
                                                <h1 className="font-bold mt-4 text-xl">{item.price}</h1>
                                                <Link to={`/order/${item.id}`} className="bg-black text-white px-5 py-2 flex align-middle items-center justify-center gap-1 rounded-full mt-5 w-full font-semibold">Pesan</Link>
                                        </div>
                                ))}

                        </div>
                </div>
        )
}

export default SectionProducts