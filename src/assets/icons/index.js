import { ReactComponent as GoogleIcon } from "./icon_google.svg";
import { ReactComponent as LineIcon } from "./img_line.svg";
import { ReactComponent as LineWhiteIcon } from "./icon_LINE_white.svg";
import { ReactComponent as TwitterIcon } from "./icon_Twitter.svg";
import { ReactComponent as FacebookIcon } from "./img_facebook.svg";
import { ReactComponent as FacebookWhiteIcon } from "./img_facebook-white.svg";
import { ReactComponent as InstagramIcon } from "./img_instagram.svg";
import { ReactComponent as PowerByIcon } from "./powerby.svg";
import { ReactComponent as JCBIcon } from "./img_jcb.svg";
import { ReactComponent as MasterIcon } from "./img_master.svg";
import { ReactComponent as VisaIcon } from "./img_visa.svg";
import { TbReportSearch } from "react-icons/tb";
import {
  AiOutlineInfoCircle,
  AiTwotoneShop,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineClockCircle,
  AiOutlineArrowUp, 
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BiUserCircle, BiCube, BiCaretRight } from "react-icons/bi";
import {
  FiShoppingCart,
  FiSearch,
  FiTrash2,
  FiHome,
  FiPhoneCall,
  FiAlertTriangle,
  FiCheck,
} from "react-icons/fi";
import {
  BsList,
  BsCartX,
  BsArrowReturnRight,
  BsFillShareFill,
} from "react-icons/bs";
import {
  HiOutlineLockClosed,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { GrLinkTop, GrLocation } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";

const OrderIcon = styled(TbReportSearch)`
  color: var(--white);
  font-size: 20px;
`;
const FaqIcon = styled(AiOutlineInfoCircle)`
  color: var(--white);
  font-size: 20px;
`;
const AccountIcon = styled(BiUserCircle)`
  color: var(--white);
  font-size: 20px;
`;
const HomeIcon = styled(AiTwotoneShop)`
  color: var(--white);
  font-size: 20px;
`;
const CartIcon = styled(FiShoppingCart)`
  color: var(--white);
  font-size: 30px;
`;
const SearchIcon = styled(FiSearch)`
  color: var(--white);
  font-size: 30px;
`;
const MenuIcon = styled(BsList)`
  color: var(--white);
  font-size: 30px;
`;
const LoginIcon = styled(HiOutlineLockClosed)`
  color: var(--white);
  font-size: 30px;
`;
const CartNoneIcon = styled(BsCartX)`
  color: var(--white);
  font-size: 60px;
`;
const DeleteProductIcon = styled(FiTrash2)`
  color: var(--delete);
  font-size: 14px;
`;
const CancelIcon = styled(RxCross2)`
  color: var(--white);
  font-size: 24px;
`;
const PlusIcon = styled(AiOutlinePlus)`
  color: var(--red-dark);
  font-size: 20px;
`;
const MinusIcon = styled(AiOutlineMinus)`
  color: #ccc;
  font-size: 20px;
`;
const PriceUpIcon = styled(AiOutlineArrowUp)`
  color: var(--white);
  font-size: 20px;
`
const PriceDownIcon = styled(AiOutlineArrowDown)`
  color: var(--white);
  font-size: 20px;
`
const BackTopIcon = styled(GrLinkTop)`
  color: var(--white);
  font-size: 26px;
`;
const BackHomeIcon = styled(BsArrowReturnRight)`
  transform: rotate(180deg);
  font-size: 14px;
`;
const AboutIcon = styled(FiHome)`
  font-size: 14px;
`;
const ProductsIcon = styled(BiCube)`
  font-size: 14px;
`;
const OpenHourIcon = styled(CiCalendarDate)`
  font-size: 20px;
`;
const PhoneIcon = styled(FiPhoneCall)`
  font-size: 20px;
`;
const LocationIcon = styled(GrLocation)`
  font-size: 20px;
`;
const ClockIcon = styled(AiOutlineClockCircle)`
  font-size: 18px;
  color: #aaa;
`;
const BookMarkIcon = styled(FaRegBookmark)`
  font-size: 18px;
  color: #aaa;
`;
const ShareIcon = styled(BsFillShareFill)`
  font-size: 18px;
  color: #aaa;
`;
const AlertIcon = styled(HiOutlineExclamationCircle)`
  font-size: 16px;
  line-height: 16px;
`;
const AlertTriangleIcon = styled(FiAlertTriangle)`
  font-size: 20px;
  line-height: 1;
`;
const ArrowRightIcon = styled(BiCaretRight)`
  font-size: 14px;
`;
const CheckedIcon = styled(FiCheck)`
  font-size: 18px;
`;
const CheckCircleIcon = styled(IoMdCheckmarkCircleOutline)`
  font-size: 18px;
`;

export {
  GoogleIcon,
  LineIcon,
  LineWhiteIcon,
  TwitterIcon,
  FacebookIcon,
  FacebookWhiteIcon,
  InstagramIcon,
  PowerByIcon,
  OrderIcon,
  FaqIcon,
  AccountIcon,
  HomeIcon,
  CartIcon,
  SearchIcon,
  MenuIcon,
  LoginIcon,
  CartNoneIcon,
  DeleteProductIcon,
  CancelIcon,
  PlusIcon,
  MinusIcon,
  BackTopIcon,
  BackHomeIcon,
  AboutIcon,
  ProductsIcon,
  OpenHourIcon,
  PhoneIcon,
  LocationIcon,
  ClockIcon,
  BookMarkIcon,
  ShareIcon,
  AlertIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckedIcon,
  CheckCircleIcon,
  JCBIcon,
  MasterIcon,
  VisaIcon,
  PriceUpIcon,
  PriceDownIcon,
};
