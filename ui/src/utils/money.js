
const getFormatedRate = function (rate) {
    rate = parseInt(rate);
    if(rate >= 10000000) {
        return (rate/10000000) + " Cr";
    } else if(rate >= 100000) {
        return (rate/100000) + " Lac";
    } else {
        return rate;
    } 
};

export default getFormatedRate;