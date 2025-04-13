import { useState } from "react";
import data from "./data";

const Accordion = () => {
const [selected, setSelected] = useState('null')

  const handleAccordion = (getItemId) => {
    //console.log(getItemId)
    setSelected(getItemId === selected ? null : getItemId)
  }
  return (
    <div className='flex mt-20 m-auto w-3/6 justify-center'>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div  className='flex justify-between p-2'>
                <h3 key={dataItem.id} onClick={() => handleAccordion(dataItem.id)}>
                  {dataItem.title}
                </h3>
                <span
                  className='flex flex-end'
                  // onClick={() => handleAccordion(dataItem.id)}
                >
                  +
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className='p-2'>{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No item found</div>
        )}
      </div>
    </div>
  );
}
export default Accordion;