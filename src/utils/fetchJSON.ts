export const fetchJSON = async <T>(path: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (error) {
                        reject('Failed to parse JSON.');
                    }
                } else {
                    reject('Failed to fetch data.');
                }
            }
        };
        xhr.send();
    });
};