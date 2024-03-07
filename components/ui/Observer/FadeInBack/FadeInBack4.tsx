"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  afterClass?: string;
};

const FadeInBack4: React.FC<Props> = (props, afterClass) => {
  const { children } = props;
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-5px", // ref要素が現れてから50px過ぎたら
    triggerOnce: false, // 最初の一度だけ実行
  });

  return (
    <div ref={ref} className={`${inView ? "animate-fade-in-bottom-4" : ""}  `}>
      {children}
    </div>
  );
};

export default FadeInBack4;
