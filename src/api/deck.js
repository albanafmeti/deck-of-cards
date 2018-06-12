import axios from 'axios';

class DeckApi {

    static shuffleCards() {
        return new Promise((resolve, reject) => {
            return axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
                .then(response => {
                    if (response.data.success) {
                        setTimeout(function () {
                            return resolve(response.data);
                        }, 3000)
                    } else {
                        console.log("Something went wrong.", response);
                    }
                })
                .catch(response => {
                    // Handle Error Here.
                    console.log("Something went wrong.", response);
                })
        });
    }

    static drawCards(deck_id) {
        return new Promise((resolve, reject) => {
            return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=50`)
                .then(response => {
                    if (response.data.success) {
                        return resolve(response.data);
                    } else {
                        console.log("Something went wrong.", response);
                    }
                })
                .catch(response => {
                    // Handle Error Here.
                    console.log("Something went wrong.", response);
                })
        });
    }
}

export default DeckApi;