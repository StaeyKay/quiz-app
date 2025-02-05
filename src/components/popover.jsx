import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  EmailIcon,
  EmailShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const PopoverComponent = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <button className="flex items-center justify-center h-[62px] gap-3 bg-[#231e20] border-[4px] border-white rounded-xl text-[15px] md:text-[25px] font-bold px-5 py-2">
              Share
              <FaShareAlt />
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          {/* <div className="flex justify-between">
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
          </div> */}
          <div className="flex justify-between">
            <FacebookShareButton
              url={"http://localhost:5173/result"}
              title={"Check out my results from the GraphiFun quiz!"}
              hashtag="#react"
            >
              <FacebookIcon />
            </FacebookShareButton>
            <WhatsappShareButton
              url={"http://localhost:5173/result"}
              title={"Check out my results from the GraphiFun quiz!"}
            >
              <WhatsappIcon />
            </WhatsappShareButton>
            <TwitterShareButton
              url={"http://localhost:5173/result"}
              title={"Check out my results from the GraphiFun quiz!"}
            >
              <TwitterIcon />
            </TwitterShareButton>
            <EmailShareButton url={"http://localhost:5173/result"}>
              <EmailIcon />
            </EmailShareButton>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
