import React, { useState } from "react";
import ChatPost from "./ChatPost";
import Footer from "./Footer";

const Chat = () => {
  const [ChatPosts, setChatPosts] = useState([
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    {
      date: "June 13, 2024",
      time: "9:30pm",
      content:
        "Welcome to Odds Hub, your ultimate destination for football odds and match predictions ⚽!",
    },
    // To add more Chat posts as needed
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newContent, setNewContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
      content: newContent,
    };

    // Append the new post to the end of the ChatPosts array
    setChatPosts([...ChatPosts, newPost]);

    // Clear the form fields
    setNewContent("");

    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div className="bg-gradient-to-r to-blue-500 via-blue-300 from-white ">
      <div className="p-4">
        <div className="w-full md:max-w-[800px] mx-auto p-[4rem]">
          <h3 className="font-serif mt-2 underline">Chat 🟦💬🟩</h3>

          {ChatPosts.map((post, index) => (
            <ChatPost
              key={index}
              time={post.time}
              date={post.date}
              content={post.content}
            />
          ))}

          {/* Toggle form visibility */}
          <button
            type="button"
            className="bg-blue-500 text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700"
            onClick={() => setShowForm(!showForm)}
          >
            +
          </button>

          {/* Form to add a new Chat post */}
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="bg-white mt-4 p-6 rounded-md shadow-lg w-full md:max-w-lg mx-auto"
            >
              <textarea
                placeholder="Enter your chat content..."
                value={newContent}
                className="w-full h-32 border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                onChange={(e) => setNewContent(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md mt-3 hover:bg-green-600 transition-all duration-300"
              >
                Add Chat Post
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
