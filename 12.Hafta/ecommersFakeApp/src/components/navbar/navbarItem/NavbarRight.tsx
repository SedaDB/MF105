import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useNavigate } from 'react-router';
import { useCart } from '../../../store/context/cartContext';
import { useStore } from '../../../store/context/cartZustant';

const NavbarRight = () => {
  const navigate = useNavigate()
  const { itemCount, carts } = useCart((state) => state);
  const {count, totalAmount, inc, setTotalAmount } = useStore();



  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="bg-gray-200 outline-none"
        />
        <BiSearchAlt size={28} className="" />
      </div>
      <div>
        <button onClick={inc} className=' btn btn-primary'> Sepeti Arttır {count}</button>
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={()=> navigate("cart")} className="relative cursor-pointer">
        <div
          className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full 
        w-5 h-5 flex items-center justify-center "
        >
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
