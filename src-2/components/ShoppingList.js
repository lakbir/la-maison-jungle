import { plantList } from "../datas/plantList"
import CareScale from "./CareScale"

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <div>
                    <CareScale careType='water' scaleValue={plant.water} />
                    <CareScale careType='light' scaleValue={plant.light} />
                    <li key={`${plant.id}`}>{ plant.name } - {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}</li>
                </div>
            ))}
        </ul>
    )
}

export default ShoppingList