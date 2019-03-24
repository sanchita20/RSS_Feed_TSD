
export const fetchUrl = {
    fetch(url){
        return fetch(url)
        .then(response => { return response.json() })
        .then(data => { 
            let data1 = data;
            return data1;
        })
        .catch(error => error)
    }
}