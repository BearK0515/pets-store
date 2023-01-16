import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon } from "../assets/icons";
import { HomeLinkWrapper } from "../components/common/HomeLinkWrapper";
import { StyledContainer } from "./About";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
  }
  hr {
    margin: 10px 0;
    border-top: 1px solid #d9d9d9;
  }
  .content {
    display: flex;
    flex-flow: column;
  }
`;

const Faq = () => {
  const locationHash = useLocation().hash;
  useEffect(() => {
    if (locationHash === "") {
      return;
    } else {
      const dom = document.querySelector(`${locationHash}`);
      dom.scrollIntoView();
    }
  }, [locationHash]);

  return (
    <StyledContainer>
      <div className='cont'>
        <HomeLinkWrapper>
          <HomeIcon color='var(--dark)' />
          <p className='text'>購物說明</p>
        </HomeLinkWrapper>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='payment'
        >
          <StyledWrapper>
            <h4 className='title'>付款方式說明</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='shipping'
        >
          <StyledWrapper>
            <h4 className='title'>寄送方式說明</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='order'
        >
          <StyledWrapper>
            <h4 className='title'>訂單相關說明</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='service'
        >
          <StyledWrapper>
            <h4 className='title'>售後服務說明</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='member_level'
        >
          <StyledWrapper>
            <h4 className='title'>會員權益說明</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='members_redeem'
        >
          <StyledWrapper>
            <h4 className='title'>現金積點規則</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
        <div
          className='item-area'
          style={{ marginBottom: "30px", padding: "30px" }}
          id='policy'
        >
          <StyledWrapper>
            <h4 className='title'>隱私權條款</h4>
            <hr />
            <div className='content'>
              <p>
                頁對入風化封屋拍功。節蛋問尺風！連怪跳重蝶放耳才點肉貫還又因尤空，竹信呢刃前兄旦！相東們吧屋乍河聽戊吹綠助婆常造雄前牛明開夏物寫。
              </p>
              <br />
              <p>
                開二右娘別真科根重言美兄叫登禾清後植祖。兒也科課真條即從兒兄毛口、進占平古午綠看黑頁遠半的羽。奶我燈彩目五你。
              </p>
              <br />
              <p>
                和就他光唱雨月手英跟每做抱金還牠但汗借果！把我兆這我牛綠豆，婆菜乾具田戊申前。車爬幫面節公、國辛現「河道包古早尤胡反」士玉南巴孝定英巾只道京。
              </p>
              <br />
              <p>
                洋斤金肉抱秋元年買後士火且。更叫食中苦爸見朋在比象央唱和司昔物石，跑住草抄愛人歡怕每二日四汗錯語旁休「二西雄抄口何怎」。
              </p>
              <br />
              <p>
                六拉跳打實活苦禾只，把固助語何尺半說休。把常植吃馬麼活停具習足它葉不許見知。清才房走乙眼田黃干，辛休亭生。
              </p>
              <br />
              <p>
                右幾自外裏石耳歡詞放馬天波身光師花黑里：放告錯詞事升跑呢到毛氣聽友村看。沒汁貝原包師正裝牙做寺星蝶羽助金平扒力，魚戊枝學巴弓？視兔紅示力，具乍欠瓜、追右六。
              </p>
              <br />
              <p>
                喜升笑您波到口戶九「樹朵喜波條」把米裝虎書知科。筆杯丁旦荷個是月游士間更視息口，兔我說主找讀乍坡耍片封入丁片植知跳；士冬實福年美助司，訴紅鳥拍夏高丁共或重斥習才再，跟老兄具功父至戊弟帽雄牠路有貫即。
              </p>
              <br />
              <p>秋犬旁音室比帽乞飛，放你香，走怕心牛。</p>
            </div>
          </StyledWrapper>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Faq;
