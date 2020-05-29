import axios from "axios"
import serverURL from "./serverURL"

class ItemService
{
    getAllItem = async () =>
    {
        return await axios.get(serverURL + "item");
    }
    getAllItemName = async () =>
    {
        return await axios.get(serverURL + "item/name");
    }
    getAllItemQuantity = async () =>
    {
        return await axios.get(serverURL + "item/quantity");
    }
    getFilterNameItemList = async (typeId) =>
    {
        return await axios.get(serverURL + "item/" + typeId + "/name");
    }
    getFilterQuantityItemList = async (typeId) =>
    {
        return await axios.get(serverURL + "item/" + typeId + "/quantity");
    }

    addNewItem = async (newItem) =>
    {
        return await axios.post(serverURL + "item/new", newItem);
    }

    changeOneItemQuantity = async (itemId, amount) =>
    {
        return await axios.put(serverURL + "item/changeOne/" + itemId + "/" + amount);
    }

    saveEdit = async (target) =>
    {
        return await axios.put(serverURL + "item/one", target);
    }

    removeItem = async (targetId) =>
    {
        return await axios.delete(serverURL + "item/remove/" + targetId);
    }
}

export default ItemService;