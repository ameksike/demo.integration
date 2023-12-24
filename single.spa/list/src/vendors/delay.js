export default function delayForDemo(promise, window) {
    window = window || Math.floor(Math.random() * 2000);
    return new Promise(resolve => {
        setTimeout(resolve, window);
    }).then(() => promise);
}