import FadeInBack from "@/components/ui/Observer/FadeInBack/FadeInBack";
import FadeInBack2 from "@/components/ui/Observer/FadeInBack/FadeInBack2";

const ColorPalette = () => {
  const text = "Please Follow, MARINA.";

  return (
    <>
      <div className="flex flex-col gap-5 border-4 px-sm w-full">
        <p className="text-center">- カラーパレット -</p>
        <p className="bg-defblack text-defwhite">
          {text}※デフォルトの白と黒カラー
        </p>
        <p className="bg-defwhite text-body">{text}※本文用カラー</p>
        <p className="bg-defwhite text-bodystrong">{text}※本文強調用カラー</p>
        <p className="bg-primary">{text}※プライマリーカラー</p>
        <p className="bg-secondary">{text}※セカンダリーカラー</p>
        <p className="bg-accent text-body">{text}※アクセントカラー</p>
        <p className="bg-info">{text}※通知用カラー</p>
        <p className="bg-success">{text}※成功系用カラー</p>
        <p className="bg-warning">{text}※注意や警告用カラー</p>
        <p className="bg-error">{text}※エラー用カラー</p>
        <p className="bg-gray">{text}※グレー</p>
        <p className="bg-graydark">{text}※濃いめのグレー</p>
        <p className="bg-graylight">{text}※薄めのグレー</p>

        <div className="pt-sm w-full">
          <p className="text-center">- ボーダー -</p>
          <p className="mx-auto border-b border-bordercolor">
            ※ボーダーカラー通常用
          </p>
          <p className="mx-auto mt-xs border-b border-bordercolorstrong">
            ※ボーダーカラー強調用
          </p>
        </div>
        <div className="pt-sm w-full">
          <p className="text-center">- タグ一覧 -</p>
          <FadeInBack afterClass={""}>
            <h1>h1タグ:{text}</h1>
          </FadeInBack>
          <FadeInBack2 afterClass={""}>
            <h2>h2タグ:{text}</h2>
          </FadeInBack2>
          <h3>h3タグ:{text}</h3>
          <h4>h4タグ:{text}</h4>
          <h5>h5タグ:{text}</h5>
          <h6>h6タグ:{text}</h6>
          <p>pタグ:{text}</p>
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
