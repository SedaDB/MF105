const Sorting = ({setSort}) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end ">
      <select onChange={(e) => setSort(e.target.value)} name="" id="" className='py-1 px-4 rounded outline outline-2 outline-gray-300 focus:outline-gray-400  focus:ring-0'>
        <option disabled className="p-3 ">
          Select
        </option>
        <option value="Inc">Low to High</option>
        <option value="Dec">High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
