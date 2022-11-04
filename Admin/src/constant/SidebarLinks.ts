import {AiOutlineHome} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'
import {FiUsers} from 'react-icons/fi'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {BiBus} from 'react-icons/bi'
import {SiGithubsponsors} from 'react-icons/si'
export const sidebarLinks=[
    {
        id:"1",
        content:"Dashboard",
        icon:AiOutlineHome,
        path:"/"
    },
    {
        id:"2",
        content:"Trips",
        icon:SiYourtraveldottv,
        path:"/trips"
    },
    {
        id:"3",
        content:"Clients",
        icon:FiUsers,
        path:"/clients"
    },
    {
        id:"4",
        content:"Bookings",
        icon:FaRegMoneyBillAlt,
        path:"/reservations"
    },
    {
        id:"5",
        content:"Buses",
        icon:BiBus,
        path:"/buses"
    },
    {
        id:"6",
        content:"Companies",
        icon:SiGithubsponsors,
        path:"/companies"
    },

]