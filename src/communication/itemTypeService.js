import axios from "axios"
import serverURL from "./serverURL"

class TypeService
{
    getAllType = async () =>
    {
        return await axios.get(serverURL + "type");
    }
}

export default TypeService;