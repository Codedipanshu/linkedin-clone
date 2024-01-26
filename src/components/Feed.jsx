import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const { displayName, email, photoUrl } = useSelector(selectUser);

  // eslint-disable-next-line
  async function getposts(db) {
    const postsCol = collection(db, "posts");

    // Create a query that orders the posts by timestamp
    const q = query(postsCol, orderBy("timestamp", "desc"));

    const postSnapshot = await getDocs(q);
    setPosts(
      postSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  }

  useEffect(() => {
    getposts(db);
  }, [getposts]);

  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: displayName,
      description: email,
      message: input,
      photoUrl: photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption title={"Photo"} Icon={ImageIcon} color={"#70B5F9"} />
          <InputOption
            title={"Video"}
            Icon={SubscriptionsIcon}
            color={"#E7A33E"}
          />
          <InputOption title={"Event"} Icon={EventNoteIcon} color={"#C0CBCD"} />
          <InputOption
            title={"Write article"}
            Icon={CalendarViewDayIcon}
            color={"#7FC15E"}
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
