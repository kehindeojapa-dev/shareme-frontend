// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { searchQuery } from "../utils/data";
import { MasonryLayout, Spinner } from "./index";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [Pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((response) => setPins(response));
      setLoading(false);
    } else {
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your Feed!!!" />;

  return (
    <div>
      Feed
      <MasonryLayout />
    </div>
  );
};

export default Feed;
