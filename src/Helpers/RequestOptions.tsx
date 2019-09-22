export const RequestOptions = {
    get(url: any) {
        return {
            method: 'GET',
            url: url
        };
    },
    post(url: any, body: any) {
        return {
            method: 'POST',
            url: url,
            data: body
        };
    },
    patch(url: any, body: any) {
        return {
            method: 'PATCH',
            url: url,
            data: body
        };
    },
    put(url: any, body: any) {
        return {
            method: 'PUT',
            url: url,
            data: body
        };
    },
    delete(url: any) {
        return {
            method: 'DELETE',
            url: url
        };
    }
}
