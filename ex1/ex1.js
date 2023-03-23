// Create a pool of N running tasks from an M sized list. Notify when all tasks are done.

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
// only run two promises at a time
const pool_size = 2;
/**
*  Expect to get an array equal to tasks.length
*  with the values or reasons for each of the promises.
*
*  [{value: 1}, {value:2}, {error: 'error'}, ...]
*/
const runTasks = async (tasks, limit)=>{
    if(limit>tasks.length){
        throw new Error("The number of running tasks can't exceed the tasks number")
    }

    const results = [];

    async function execute(iterator){
        for (const [index, task] of iterator) {
            try {
              results[index] = `{value: ${await task()}}`;
            } catch (error) {
              results[index] = `{error: '${error}'}`;
            }
        }
    }

    const workers = new Array(limit)
      .fill(tasks.entries())
      .map(execute);
  
    await Promise.allSettled(workers);
    
    return results;

}

runTasks(tasks, pool_size).then(a=>console.log('Done'));

module.exports = runTasks;
