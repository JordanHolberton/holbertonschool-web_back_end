/* eslint-disable */
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'Success'
            });
            return ("Got a response from the API");
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}