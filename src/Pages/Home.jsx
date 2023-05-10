import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";

import MonacoEditor from "../Components/MonacoEditor";
import { generateSlug } from "../lib/utils";
import pb from "../lib/pocketbase";

import Navbar from "../Components/Navbar";

function Home() {
  const [title, setTitle] = useState("New Paste");
  const [content, setContent] = useState("Default Content");
  const [slug, setSlug] = useState("");

  let navigate = useNavigate();

  const createPaste = () => {
    (async () => {
      let slug = await generateSlug();
      setSlug(slug);
      const record = await pb.collection("pastes").create({
        title: title,
        content: content,
        slug: slug,
      });
    })();
    navigate(`/${slug}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-2">
        <MonacoEditor initialContent={content} onChange={(content) => setContent(content)} readOnly={false} />
        <form>
          <div className="form-control pt-2">
            <div className="input-group">
              <input
                type="text"
                placeholder="Title"
                value={title}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="btn btn-primary" onClick={() => createPaste()}>
                Create Paste
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
