
export default function updateFn(emitter, END, url) {
  const maxTime = 150;
  let count = 0;
  const interval = setInterval(async () => {
    if (count >= maxTime) {
      emitter(END);
    } else {
      let res = (await(await fetch(url)).json()).slice(count,100+count)
      emitter([res]);
      count++;
    }
  }, 5000);

  return () => {
    clearInterval(interval);
  };
}