const GridView = (props) => {
  return (
    <div className="flex flex-wrap gap-2 w-4/4">
      {
        props.taskData.map((item) => {
          return (
            <div className='mt-20 w-1/4 border m-auto'>
              <div className='text-end'>
                <span className='px-2 py-1 bg-amber-100 rounded-lg'>
                  {item.category}
                </span>
              </div>
              <div className='p-2'>{item.taskName}</div>
              <div className='p-2'>{item.status}</div>
              <div className='p-2'>{item.date}</div>
              <div className='p-2'>{item.desc}</div>
            </div>
          );
        })
        
      }
    </div> 
  );
}
export default GridView;