const dateFormated = (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${day <= 9 ? "0" + day : day}/${month <= 9 ? "0" + month : month}/${year}`;
}

const sleep = (milliseconds) => {
    const start = new Date().getTime();

    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

export {
    dateFormated,
    sleep,
}
