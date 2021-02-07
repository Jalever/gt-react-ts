import * as React from "react";
const { useState, memo, useMemo, useCallback } = React;

interface iData {
  number: number
}

interface iSubCounterProps {
  data: iData,
  handleAddNum(): void
}

let SubCounter: React.FC<iSubCounterProps> = props => {
  const { data, handleAddNum } = props;
  console.warn('SubCounter Render');
  console.log('SubCounter Render');
  console.log('\n');

  return (
    <button onClick={handleAddNum}>{data.number}</button>
  );
};

SubCounter = memo(SubCounter);



let oldData: any, oldOnHandleAddNum: any;
const Counter6: React.FC = () => {
  const [name, setName] = useState('Counter');
  const [number, setNumber] = useState(0);
  // const data: iData = { number };
  const data: iData = useMemo(() => ({ number }), [number])
  const onAddNum = useCallback(() => {
    setNumber(number + 2)
  }, [number])

  // console.warn('data === oldData');
  // console.log(data === oldData);
  // console.warn('oldOnHandleAddNum === onAddNum');
  // console.log(oldOnHandleAddNum === onAddNum);
  // console.log('\n');
  // oldData = data;
  // oldOnHandleAddNum = onAddNum;


  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <SubCounter
        data={data}
        handleAddNum={onAddNum}
      />
    </>
  );
}

export default Counter6;