import ApiService from './ApiService';

class DeckApiService {

    static shuffleCards(deck_count = 1) {
        return new Promise((resolve, reject) => {

            return ApiService.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deck_count}`)
                .then(response => {
                    if (response.data.success) {
                        return resolve(response.data);
                    } else {
                        throw response.data;
                    }
                })
                .catch(response => {
                    return response;
                });

        });
    }

}

export default DeckApiService;