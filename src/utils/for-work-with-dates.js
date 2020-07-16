const countWhenPosted = (date) => {
    let diff = (Date.parse(new Date()) - Date.parse(new Date(date))) / 1000;

    const timeWhenPosted = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0
    }

    if(diff >= (365.25 * 86400)) {
        timeWhenPosted.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeWhenPosted.years * 365.25 * 86400;
    }
    if(diff >= 86400) {
        timeWhenPosted.days = Math.floor(diff / 86400);
        diff -= timeWhenPosted.days * 86400;
    }
    if(diff >= 3600) {
        timeWhenPosted.hours = Math.floor(diff / 3600);
        diff -= timeWhenPosted.hours * 3600;
    }
    if(diff >= 60) {
        timeWhenPosted.min = Math.floor(diff / 60);
        diff -= timeWhenPosted.min * 60;
    }
    return timeWhenPosted;
};

const addLeadingZeros = (value) => {
    let newValue = '';
    if(parseInt(value) < 10) {
        newValue = '0' + value.toString();
    }
    return newValue;
};

export {
    countWhenPosted,
    addLeadingZeros
}