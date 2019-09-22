import {
    RequestAPI, RequestOptions
} from '../Helpers';

export const DataService = {
    getMenus
};

function getMenus() {
    return RequestAPI.request(RequestOptions.get("/api/menus"));
}