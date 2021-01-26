const dateFormated = (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${day <= 9 ? "0" + day : day}/${month <= 9 ? "0" + month : month}/${year}`;
}

export {
    dateFormated,
}
