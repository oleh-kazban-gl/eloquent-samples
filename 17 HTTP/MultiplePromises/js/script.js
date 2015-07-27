var btn = document.getElementById('btn1');

btn.onclick = test;

function all(promises) {
    return new Promise(function (success, fail) {
        var results = [];
        var tail = promises.length;

        promises.forEach(function (promise, i) {
            promise.then(function (result) {
                results[i] = result;
                tail--;
                if (tail === 0) {
                    success(results)
                }
            }, function (error) {
                fail(error);
            });
        });
        if (promises.length === 0) {
            success(results);
        }
    });
}

function test() {
// Test code.
    all([]).then(function (array) {
        console.log("This should be []:", array);
    });

    all([soon(1), soon(2), soon(3)]).then(function (array) {
        console.log("This should be [1, 2, 3]:", array);
    });

    all([soon(1), fail(), soon(3)]).then(function (array) {
        console.log("We should not get here");
    }, function (error) {
        if (error.message != "boom") {
            console.log("Unexpected failure:", error);
        }
    });

    function soon(val) {
        return new Promise(function (success) {
            setTimeout(function () {
                    success(val);
                },
                Math.random() * 500);
        });
    }

    function fail() {
        return new Promise(function (success, fail) {
            fail(new Error("boom"));
        });
    }
}
