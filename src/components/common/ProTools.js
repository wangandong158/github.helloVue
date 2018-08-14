let ProTools = {}

let prods = JSON.parse(localStorage.getItem("prods")) || {}

ProTools.addOrUpData = function (p) {
    if (prods[p.id]) {
        prods[p.id] += p.num
    } else {
        prods[p.id] = p.num
    }
    this.save()
}

ProTools.delete = function (id) {
    delete prods[id];
    this.save()
}

ProTools.getProds = function () {
    return JSON.parse(localStorage.getItem("prods"))|| {}
}

ProTools.getTotlalCount = function () {
    let sun = 0;
    for (let id in JSON.parse(localStorage.getItem("prods"))|| {}) {
        sun += prods[id];
    }
    return sun;
}

ProTools.save = function () {
    localStorage.setItem("prods",JSON.stringify(prods));
}

export default ProTools;
