import axios from 'axios';

class DeskApi {

    static shuffleCards() {
        return new Promise((resolve, reject) => {
            return axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
                .then(response => {
                    resolve(response.data);
                })
                .catch(response => {
                    // Handle Error Here.
                    console.log("Something went wrong.", response);
                })
        });
    }

}

export default DeskApi;