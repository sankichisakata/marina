import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="
        w-11/12 mx-auto pb-14 md:pb-20 lg:pb-24
        flex flex-col justify-center items-center gap-5 md:gap-8 lg:gap-10
        "
    >
      <div>
        <p className="text-center text-sub-color text-[6rem] md:text-[10rem]">
          404
        </p>
      </div>
      <div className="text-center text-sub-color text-sm md:text-base lg:text-lg font-bold">
        <p>お探しのページは見つかりませんでした。</p>
        <p>
          一時的にアクセスできないか、移動もしくは削除されてしまった可能性がございます。
        </p>
      </div>
      <div className="text-center text-sub-color text-sm md:text-base lg:text-lg font-bold">
        {/* <p>5秒後、自動でトップに戻ります。</p>  */}
        <p>「トップに戻る」ボタンを押してください。</p>
      </div>

      <Link href="/" className="flex flex-col rounded-full">
        <div
          className="
            flex justify-center items-center
            px-5 md:px-7 py-3 md:py-5 
            border-2 border-sub-color
            rounded-full
            "
        >
          <p className="text-center text-sub-color text-sm md:text-base lg:text-lg font-bold">
            トップに戻る
          </p>
        </div>
      </Link>
    </div>
  );
}
