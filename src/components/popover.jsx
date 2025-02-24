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
          <div className="flex justify-between">
            <FacebookShareButton
              url={"https://graphicfunquiz.netlify.app/result"}
              title={"Check out my results from the GraphiFun quiz!"}
              hashtag="#react"
            >
              <FacebookIcon />
            </FacebookShareButton>
            <WhatsappShareButton
              url={"https://graphicfunquiz.netlify.app/result"}
              title={"Check out my results from the GraphiFun quiz!"}
            >
              <WhatsappIcon />
            </WhatsappShareButton>
            <TwitterShareButton
              url={"https://graphicfunquiz.netlify.app/result"}
              title={"Check out my results from the GraphiFun quiz!"}
            >
              <TwitterIcon />
            </TwitterShareButton>
            <EmailShareButton url={"https://graphicfunquiz.netlify.app/result"}>
              <EmailIcon />
            </EmailShareButton>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
