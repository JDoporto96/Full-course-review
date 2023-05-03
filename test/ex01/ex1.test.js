const runTasks = require('../../src/ex01/ex1');

const taskFactorySample = (delay, resolve, val) => 
       () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))


let testArray;

test('runTasks returns an array', async()=>{
   const tasks = [
      taskFactorySample(500,true, 1),
      taskFactorySample(1000,true, 2),
      taskFactorySample(5000,false, 'error'),
      taskFactorySample(2000,true, 4),
      taskFactorySample(1000,false, 'error'),
      taskFactorySample(1000,false, 'error'),
   ];
   
   const pool_size = 2;

   const result = await runTasks(tasks, pool_size);
   testArray = result;
   expect(Array.isArray(result)).toBeTruthy();
   expect(result).toEqual([
      "{value: 1}" ,
      "{value: 2}",
      "{error: 'error'}",
      "{value: 4}",
      "{error: 'error'}",
      "{error: 'error'}",
   ])
},50000)

test('The result is empty as there are no tasks ', async()=>{
   const result = await runTasks([], 5);

   expect(result).toEqual([])
},50000)

test('Pool size larger than task array', async()=>{
   const tasks = [
      taskFactorySample(500,true, 1),
      taskFactorySample(1000,true, 2),
      taskFactorySample(5000,false, 'error'),
      taskFactorySample(2000,true, 4),
      taskFactorySample(1000,false, 'error'),
      taskFactorySample(1000,false, 'error'),
   ];
   
   const result = await runTasks(tasks, 15);
   expect(result).toEqual([
      "{value: 1}" ,
      "{value: 2}",
      "{error: 'error'}",
      "{value: 4}",
      "{error: 'error'}",
      "{error: 'error'}",
   ])
},50000)





