const runTasks = require('./ex1');

const taskFactorySample = (delay, resolve, val) => 
       () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))
const tasks = [
   taskFactorySample(500,true, 1),
   taskFactorySample(1000,true, 2),
   taskFactorySample(5000,false, 'error'),
   taskFactorySample(2000,true, 4),
   taskFactorySample(1000,false, 'error'),
   taskFactorySample(1000,false, 'error'),
];

const pool_size = 2;

let testArray;

test('runTasks returns an array', async()=>{
   const result = await runTasks(tasks, pool_size);
   testArray = result;
   expect(Array.isArray(result)).toBeTruthy();
},50000)

test('The result array contains {value: 1} ', async()=>{
   expect(testArray).toContain('{value: 1}')
})

test('The result array contains {value: 2} ', async()=>{
   expect(testArray).toContain('{value: 2}')
})

test('The result array contains {value: 3} ', async()=>{
   expect(testArray).toEqual(expect.not.arrayContaining(['{value: 3}']))
})




