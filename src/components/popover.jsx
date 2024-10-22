import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const PopoverComponent = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div>
            <button className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-xl text-[25px] font-bold px-5 py-2">
              Share
              <FaShareAlt />
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-between">
            <a
              href="https://www.facebook.com/sharer.php?u=https://example.com"
              target="_blank"
              className="text-blue-600"
            >
              <FaFacebook size={25} />
            </a>
            <a
              class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20content!&url=https://example.com&hashtags=AwesomeContent,TwitterShare"
              target="_blank"
              data-size="large"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              href="https://wa.me/?text=${encodeURIComponent(message)}"
              target="_blank"
              className="text-green-500"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
