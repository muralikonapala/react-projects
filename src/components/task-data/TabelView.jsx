const TabelView = (props) => {
  console.log("a",props)
  return (
    <div>
      <table className='m-auto mt-20 w-2/4 text-center border-spacing-[7px] table-auto border border-collapse border-gray-400'>
        <thead className='bg-amber-100'>
          <tr>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Status</th>
            <th className='border border-gray-300 p-2'>ETA</th>
            <th className='border border-gray-300 p-2'>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.taskData.map((item) => {
            return (
              <tr>
                <td className='border border-gray-300 p-2'>{item.taskName}</td>
                <td className='border border-gray-300 p-2'>{item.status}</td>
                <td className='border border-gray-300 p-2'>{item.date}</td>
                <td className='border border-gray-300 p-2'>
                  <span className='px-2 py-1 bg-amber-200 rounded-lg'>
                    {item.category}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TabelView;