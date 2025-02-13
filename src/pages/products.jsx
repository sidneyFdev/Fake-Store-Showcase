import { useAPI } from "@/contexts/useAPIContext"

const Products = () => {

    const {apiData} = useAPI()

    return (
        <div>
            {
                apiData != null &&
                apiData.map((item) => {
                    console.log(item)
                    return(
                        <div key={item.id}>
                            <img src={item.category.image} width='300' height='300'/>;
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products