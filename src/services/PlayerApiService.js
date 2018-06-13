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

    static moveCardsToPile(deck_id, pile_name, codes) {
        return new Promise((resolve, reject) => {

            return ApiService.get(`https://deckofcardsapi.com/api/deck/${deck_id}/pile/${pile_name}/add/?cards=${codes}`)
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