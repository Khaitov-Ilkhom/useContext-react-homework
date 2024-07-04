const saveLoaclstorage = (key, data) => {
    if (key === '') {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

export {saveLoaclstorage}