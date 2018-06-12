import ApiService from './ApiService';

class PlayerApiService {

    static drawCards(deck_id, count = 52) {
        return new Promise((resolve, reject) => {

            return ApiService.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`)
                .then(response => {
                    if (response.data.success) {
                        return resolve(response.data);
                    } else {
                        throw response.data;
                    }
                })
                .catch(response => {
                    return response;
                })

        });
    }

}

export default PlayerApiService;