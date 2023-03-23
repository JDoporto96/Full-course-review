(function(global){
    const delayFn = window.setTimeout;

    function sleep(ms) {
        return new Promise(resolve => delayFn(resolve, ms));
    }

    let root = document.getElementById('results');
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass!== undefined && (el.style.color = pass? 'green' : 'red');
        return el;
    }
    const assert = (pass, message) => {
        return root.appendChild(result(message,pass))
    };

    function test(description, testBlock){
        const parent = root;
        root = assert(undefined, description).appendChild(document.createElement('ul'));
        testBlock();
        root = parent;
    }

    const setTimeout = async function(fn,delay,...args){
        let temp = root
        await sleep(delay)
        root = temp
        fn(...args)
    }

    global.assert = assert;
    global.test = test;
    global.setTimeout = setTimeout;
 })(window);
