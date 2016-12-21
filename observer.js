var subject = {
    events: [],
    subscribe: function(event, fn) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(fn);
    },
    notify: function(event, data) {
        this.events[event].forEach(function(fn) {
            fn(data);
        });
    }
};

//stats

(function() {
    var stats = document.getElementById("stats"); // div
    function _renderStat(data) {
        stats.innerHTML = "#" + data.length;
    }
    subject.subscribe("add_product", _renderStat);
})();


//products

(function() {
    var products = document.getElementById("products"); // div
    function _render(data) {
        products.innerHTML = JSON.stringify(data);
    }
    subject.subscribe("add_product", _render);
})();

//form

(function() {
    var products = [{ "id": 1, "name": "A" }, { "id": 2, "name": "B" }]

    function add() {
        var pid = parseInt(document.getElementById("pid").value);
        var name = document.getElementById("name").value;

        var p = {};
        p.id = pid;
        p.name = name;

        products.push(p);
        subject.notify("add_product", products);
    }

  	document.getElementById("addBtn").addEventListener("click", add);
   
})();
