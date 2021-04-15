import React from "react"
import {FiMonitor} from "react-icons/fi"
import {RiPagesLine} from "react-icons/ri"
import {BiShoppingBag} from "react-icons/bi"

export default [
  {
    icon: <RiPagesLine className="service-icon" />,
    title: "Landing Pages",
    text: `Single page website with a modern design. These sites are very fast and download in less than 1 second and are within the green range of Google's PageSpeed Insights.`,
  },
  {
    icon: <FiMonitor className="service-icon" />,
    title: "WordPress Websites",
    text: `Eye catching modern websites, designed to be user-friendly and aesthetically pleasing, with all the advantages of wordpress.`,
  },
  {
    icon: <BiShoppingBag className="service-icon" />,
    title: "eCommerce Websites",
    text: `Start selling from an online store adapted to your business, from subscriptions to cupcakes and luxury cars, made with WordPress and WooCommerce.`,
  },
]
