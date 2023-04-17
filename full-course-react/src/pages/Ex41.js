import { useEffect, useState } from "react";
import { END, eventChannel, runSaga } from "redux-saga";
import { call, cancel, cancelled, take } from "redux-saga/effects";
import ChartCanvas from "../components/ex41/Graph";
import updateFn from "../utils/updateFn";

function Ex41() {
 const [data, setData]=useState([]);

function updateData() {
  return eventChannel(emitter =>updateFn(emitter, END, 'http://localhost:4000/dataPoints' ));
}

function* saga() {
  const chan = yield call(updateData);
  try{
      while (true) {
          const dataPoints = yield take(chan);
          setData(dataPoints[0])
      }
  }finally{
      if (yield cancelled()) {
          chan.close()
      }
  }
 
}

  useEffect(() => {
    const ru = runSaga({}, saga);
    return () => {
      runSaga({}, function* clearSaga() {
        yield cancel(ru);
      });
    };
  }, []);



  return (
    <div className="App">
      <ChartCanvas label='Graph' dotColor='#36A2EB' lineColor='#9BD0F5' dataPoints={data}></ChartCanvas>
    </div>
  );
}

export default Ex41;
