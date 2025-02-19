import { Card } from "../Domain/Card";
import { Set } from "../Domain/Set";
import axios from "axios";

type SetCardReturn = {
  data: Array<Card>,
  has_more: boolean,
  next_page?: string,
  total_cards: number,
};
const getWhileNext = async (uri: string): Promise<Array<Card>> => {
  const call = axios.get<SetCardReturn>(uri).then((response) => response.data).catch((error => error))
  return call.then(async (response: SetCardReturn) => {
    return response.has_more && !!response.next_page ?
      [...await getWhileNext(response.next_page), ...response.data] :
      response.data
    ;
  }, () => []);
}

export const ScryfallApiRepository = () => ({
  getSetList: async (): Promise<Array<Set>> => {
    return axios
      .get<{data: Array<Set>}>("https://api.scryfall.com/sets")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => error);
  },
  loadSetCards: async (setCode: string, page: number = 1): Promise<Array<Card>> => {
    const call: Promise<SetCardReturn> = axios
      .get<SetCardReturn>("https://api.scryfall.com/cards/search", {
        params: {
          format: "json",
          include_extras: false,
          include_multilingual: false,
          include_variations: false,
          q: `set:${setCode}+game:paper`,
          unique: "prints",
          page,
        }
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => error)
    ;
    return call.then(async (response: SetCardReturn) => {
      return response.has_more && !!response.next_page ?
        [...await getWhileNext(response.next_page), ...response.data] :
        response.data
      ;
    }, () => []);
  }
});
