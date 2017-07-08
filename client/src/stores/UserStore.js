import {observable, action} from 'mobx';
import axios from 'axios';

export default class UserStore {

    /**
     * @type Object
     */
    @observable user;

    /**
     * @param {String} accessToken
     */
    @action fetch(accessToken) {
        axios.get(`https://api.github.com/user?access_token=${accessToken}`)
            .then((response) => {
                this.user = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.warn(error);
            });
    }

}
