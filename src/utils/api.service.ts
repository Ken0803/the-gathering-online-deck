import axios from "axios";

const DECK_API_URL = 'https://api.magicthegathering.io/v1';

const Axios = axios.create({
  baseURL: DECK_API_URL
});

export const getCardList = async (param: CardListSearchParam) => {
  return new Promise<GatheringCard[]>(async (resolve, reject) => {
    try {
      const result = await Axios.get('/cards', {
        params: param
      });

      resolve(result.data.cards);
    } catch (error) {
      reject(error);
    }
  })
};