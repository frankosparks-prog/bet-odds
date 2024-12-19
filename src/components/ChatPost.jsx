import React from "react";

function ChatPost({date, time, content}){
  return(
<article className="my-4 p-4 rounded-md shadow-md  text-[0.9rem]">
  <div className="flex gap-4 font-semibold">
  <span className="text-[#999]-500 text-[0.9rem]">{date}</span>
  <span className="text-[#999]-500 text-[0.9rem]">{time}</span>
  </div>
  
  <p>{content}</p>
</article>
  )
}

export default ChatPost;