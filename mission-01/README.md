# 1. 주제
HTML/CSS 1차 과제입니다.

***
# 2. 목표
접근성이 용이한 마크업 구조를 설계합니다.
CSS의 float, flex, position 기능을 사용해서 구현합니다.
***
# 3. 목차
1. HTML5 마크업 구조 설계
2. CSS를 사용한 화면단의 배치
3. hover/focus를 이용하여 효과 적용
***
## 1. HTML5 마크업 구조 설계 

![01-1](https://github.com/vHwav/home-work/assets/148796897/1142e808-d8b9-4887-ae03-bd6e0de023ff)

```

 <section class="section">
    <h2 class="sr-only"> 상품 페이지 </h2>
    <div class="product product-01">
    </div>
    <div class="product product-02">
    </div>
    <div class="product product-03">
    </div>   
 </section>

```
먼저, &lt;section&gt; 태그에 section 클래스로 페이지를 구분합니다 <br>

접근성을 위해 &lt;h2&gt; 태그로 페이지의 제목을 설정합니다. 상품 페이지는 UI 상에서는 보이지 않는 부분임으로 sr-only class를 적용해서 스크린 리더 사용자만 들을 수 있도록 합니다. h1태그 대신 h2 태그를 맨 처음 사용한 이유는 현재 과제로 나온 부분은 상품 페이지만이지만 그 위에 header와 logo 영역이 있을 거라 생각하기 때문입니다.

현재 각각의 상품 페이지에는 동일한 background와 border가 적용되어 있습니다. 그것을 편리하게 적용할 수 있도록 동일한 class 인 product를 준 후, 형태에 따라서 product-01과 product-02 클래스를 추가합니다. 저는 product 부분은 float:left, float:right를 쓸 예정이므로 product-03 class를 추가했습니다.

큰 틀이 나왔으면 다음 세부 요소를 디자인 합니다

![01-2](https://github.com/vHwav/home-work/assets/148796897/b8c235f8-635e-4cef-9d6f-9cdfaebe3f0a)

```
<section class="section">
        <h2 class="sr-only">상품페이지</h2>
        <div class="product product-01">
            <div class="name-group">
                <h3 class="product-logo">
                    <img src="./images/logo_otugi.svg" alt="오뚜기" />
                </h3>
                <p class="product-name">따듯한 차 향기</p>
            </div>
            <img src="./images/product_honey.png" alt="꿀 생강차" />
            <a class="buy-btn" href="/" aria-label="구매하기 버튼">
                <span class="active">구매하기</span>
            </a>
        </div>
        <div class="product product-02">
            <h3 class="product-logo">
                <img src="./images/logo_kamill.svg" alt="카밀" />
            </h3>
            <h4 class="product-names">핸드크림 모음</h4>
            <img src="./images/product_handcream.png" alt="카밀 핸드크림" />
            <a class="buy-btn" href="/" aria-label="구매하기 버튼">
                <span class="active">구매하기</span>
            </a>
        </div>
        <div class="product product-03">
            <h3 class="product-logo">
                <img src="./images/logo_gomgom.svg" alt="곰곰" />
            </h3>
            <h4 class="product-names">고소한 보리차</h4>
            <img src="./images/product_boricha.png" alt="곰곰 보리차" />
            <a class="buy-btn" href="/" aria-label="구매하기 버튼">
                <span class="active">구매하기</span>
            </a>
        </div>
    </section>

```
각 상품 페이지에는 로고가 들어가 있습니다. <br>
제품의 상품 분류를 나타내는 요소임으로 &lt;h3&gt; 태그로 넣은 후 로고 이미지에 접근성을 위해 alt로 어디 회사임을 나타냅니다. <br>
&lt;p&gt; 태그로 추가적인 상품 설명 요소를 넣습니다. 큰 글자와 작은 글자가 있으니 product-name, product-names 로 구분합니다.

product-02 의 경우에는 text-aline:center로 정렬을 끝낼 수 있지만, product-01의 경우에는 가로 정렬이 필요합니다. 저는 이 부분을 flex로 처리할 것이기 때문에, 로고와 설명을 묶는 &lt;div class="name-group"&gt; 요소를 추가합니다.

상품 이미지까지 추가하고 나면 구매하기 버튼을 만듭니다.<br>
구매하기 버튼은 눌렀을 때 상품 구매 창으로 넘어가야 하므로 &lt;a&gt; 태그로 작성합니다. 구매하기 버튼의 default 상태는 화살표 뿐이나, active 시 구매하기라는 단어가 나타나야 하기 때문에  &lt;span&gt;태그로 구매하기 라는 내용도 넣어줍니다. 

저는 이  &lt;span&gt; 태그를 display:none 처리 했다가 나타나게 할 예정이므로 접근성을 위해  &lt;a&gt; 태그에 aria-label="구매하기 버튼" 이라는 속성을 넣어 스크린 리더 사용자가 접근할 수 있도록 합니다.

## 2. CSS를 통한 화면 단의 배치

배치 전, 기본적인 세팅을 먼저 해줍니다. <br>


폰트가 Noto sans 이므로 @import 를 이용해서 폰트를 부른 후, body 태그에 적용시킵니다.<br>
:root 를 사용하여 들어가는 색상에 대해서도 지정해줍니다.<br>
a태그의 color 속성을 inherit로 맞춘 후, sr-only class의 속성값을 정의해줍니다.<br>
active class는 hover, focus 시에만 나타나도록 할 예정이기 때문에 display:none 처리를 합니다.

```
.section {
    width: 502px;
}

```

먼저 화면단의 영역을 정의합니다. figma에서 본 가로 길이가 502px 이므로 section 영역에 width 속성값을 추가합니다.

```
.product {
    background: var(--white);
    border: 1px solid var(--gray-500) ;
    position: relative;
    text-align: center;
    color: var(--gray-800);
    box-sizing: border-box;
}

```

product class에 속성값을 추가합니다.<br>
동일한 background와 border 값을 준 후, 나중에 만들 구매하기 버튼의 속성을 position:absolute로 처리할 것이기 때문에 position:relative의 값도 미리 줍니다. padding이나 border 값이 추가 됐을 때 상자의 크기를 제한 하기 위해 border-box 속성도 추가합니다.


```
.product-01 {
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 24px;
}

.product-02, .product-03 {
    padding: 14px 23px;
    margin-top: 14px;
}
.product-02 {
    float: left;
}

.product-03 {
    padding: 14px 23px ;
    float: right;
}

```

product-01에는 display:flex와 align-items: center 를 이용해 안의 컨텐츠를 구성했습니다. 또한 gap 속성을 사용하면 안의 컨텐츠에 margin 값을 주지 않고도 공간을 줄 수 있습니다.<br>
product-02에는 float:left, product-03에는 float:right 속성을 넣어 배치했습니다.

```
.buy-btn {
    width: 42px;
    height: 42px;
    background: url(./../images/angle-right.png) no-repeat 50% 50% , var(--state-color);
    display: block;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

```
buy-btn은 background image와 color 속성을 사용해 화살표를 만든 후, position 속성을 사용하여 배치했습니다.

## 3. hover/focus를 이용하여 효과 적용

```
.buy-btn:hover, .buy-btn:focus {
    background: var(--active-color);
    width: 112px;
    transition: 0.3s;
}
.buy-btn:hover .active, .buy-btn:focus .active {
    display: block;
    color: var(--white);
    font-size: 1.4rem;
    text-align: center;
    line-height: 42px;
}

```

hover 와 focus 시에 background 와 width의 값이 바뀌며 동작하도록 했습니다. 너무 딱딱하게 보이지 않도록 transition을 추가합니다. <br>
hover,focus 시에 나타나는 active 값도 정의해줍니다.

이대로 마치기엔 너무 심심한 것 같아서 animation 속성도 연습해 보았습니다.

```
@keyframes angle {
    0%{
        transform: translateX(-5px);
        opacity: 1;
    }
    100%{
        transform: translateX(5px);
        opacity: 0;
    }
}

.buy-btn:hover .active::after, .buy-btn:focus .active::after  {
    content: "";
    background: url(./../images/angle-right.png)no-repeat 50% 50% ;
    display: inline-block;
    width: 6px;
    height: 10px;
    margin-left: 16px;

    animation: angle 0.8s infinite alternate running ease-out;
} 

```

# 4. 마치며 궁금했던 점과 개선해야 할점

a태그를 작성할 때 문득 의문이 들었습니다. 처음에는 active class가 display: none 상태라 스크린 리더 사용자가 접근하지 못할 거라는 생각에 aria-label를 추가 했으나, 마우스가 올라가면 display:inline-block으로 바뀌는데 구매하기를 읽을 수 있지 않을까...

> 크롬의 스크린 리더 확장 프로그램을 깔아서 테스트해 본 결과 display:none 상태였어도 마우스가 올라갔을 때 display:inline-block이 되면서 스크린 리더가 인식하는 것을 확인했습니다. 하지만 aria-label이 있을 경우 그것을 우선적으로 인식해 읽는 것을 확인했기에 추가하는 것도 나쁘지 않을 거라 생각합니다.

active를 display:none으로 했다가 display:inline-block으로 바꾸면서 문제는 아니나, 거슬리는 점이 있었습니다. trasition 효과를 0.5s 이상으로 줬을 때 구매하기라는 글자가 줄바꿈이 일어나 있다가 벌어지면서 나오는 점입니다. 이것을 0.3s 이하로 줄이면 눈으로 인식하지 못하나, 늘어날 경우 거슬릴 수 있다 생각합니다.

>active 속성을 display: inline-block, opacity:0, width:0; height:0; 으로 준 후 테스트 하니까 훨씬 부드러워 진 것을 확인할 수 있었습니다. 
