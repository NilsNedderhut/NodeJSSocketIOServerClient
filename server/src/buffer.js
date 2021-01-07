class Buffer {
    dataset = {};
    maxLength;

    constructor(maxLength) {
        this.maxLength = maxLength;
    }

    getAllIds() {
        return Object.keys(this.dataset);
    }

    getDataObj(id) {
        return Object.keys(this.dataset[id]).map(type => { return { type, data: this.getData(id, type) } });
    }

    getData(id, type) {
        return this.dataset[id][type];
    }

    addData({id , data}) {
        if (!this.dataset.hasOwnProperty(id))
            this.initNewID(id, data);
        data.forEach(date => {
            this.addValueToArray(id, date);
        });
    }

    initNewID(id, data) {
        this.dataset[id] = {};
        data.forEach(date => {
            this.dataset[id][date.type] = [];            
        });
    }

    addValueToArray(id, {type ,value}) {
        this.dataset[id][type].push(value);
        if (this.dataset[id][type].length > this.maxLength)
            this.dataset[id][type].pop();
    }

}

module.exports = Buffer;