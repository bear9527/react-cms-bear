export const getArrPathToKeys = (data: any[])=> {
    for (let i = 0; i < data.length; i++) {
        const oItem = data[i];
        if (oItem.key === 'user') {
            return [oItem.key];
        } else {
            if (oItem.children && oItem.children.length) {
                const result:any = getArrPathToKeys(oItem.children);
                if (result) {
                    return [oItem.key].concat(result);
                }
            }
        }
    }
}


// const result = getItem(data);
// console.log('result:', result);