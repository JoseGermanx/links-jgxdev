
import links from '../data/linksData'


const ListItems = () => {

    return (
        <>
            {
                links && links.map((item) => (
                    <div class="w-11/12 max-w-md bg-gray-800 border-2 border-blue-500 rounded-2xl p-4 mb-4 hover:bg-gray-700 flex items-center" key={item.id}>
                        <i class="fa-regular fa-newspaper text-3xl mr-4 text-gray-400"></i>
                        <div>
                            <h3 class="text-xl font-bold">{item.titulo}</h3>
                            <p class="text-gray-300"><a href={item.link}>{item.linkText}</a>{item.descripcion}</p>
                        </div>
                    </div>

                ))

            }
        </>
    )

}

export default ListItems