import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "../lib/pocketbase";

import MonacoEditor from "../Components/MonacoEditor";

function View() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const { slug } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await pb.collection("pastes").getFirstListItem(`slug='${slug}'`);
        setTitle(data.title);
        setContent(data.content);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [slug]);

  return error != null ? (
    <div>{error}</div>
  ) : (
    <div>
      <MonacoEditor initialContent={content} onChange={(content) => setContent(content)} readOnly={true} />
    </div>
  );
}

export default View;
