import axios from "axios";
import { GetContractABIParams } from "src/types/get-contract-abi-params";

export const getContractABI = async (params: GetContractABIParams) => {
    const { explorer_base_url, explorer_api_key, contract_address } = params;
    const { data: { result: abi } } = await axios.get(`${explorer_base_url}/api?module=contract&action=getabi&address=${contract_address}&apikey=${explorer_api_key}`)
    return abi;
}
