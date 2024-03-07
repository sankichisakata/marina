import Link from "next/link";
import React from "react";

const news = () => {
  return (
    <div>
      <p>news</p>
      <Link href="/news/newsDetails">ニュース詳細</Link>
    </div>
  );
};

export default news;
