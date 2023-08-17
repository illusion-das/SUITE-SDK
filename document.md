# 시작하기
레포지토리 내의 UI-Kit을 다운 받아, 프로젝트를 시작합니다.

<br>
<br>

# 앱 아이콘과 이름
- 앱 아이콘은 `1024*1024` 규격에서 `921*921` 사이즈로 디자인합니다.
- Figma 기준 `241` 정도의 라운딩이 필요합니다.
- 앱의 이름은 `6자`를 넘어서는 안됩니다.

<br>
<br>

# 시뮬레이션 하기
브라우저에서 `1280*480`으로 반응형 모드를 활성화하고,<br>
HTML 파일을 가져와 렌더링하거나, 서버를 구동하여, 브라우저에 표시합니다.

<br>
<br>

# 레이아웃 배치 시작하기
모든 앱은 `<app-layout>` 태그로 시작하고 닫힙니다. 이 바깥에는 커스텀 요소가 아니라면,
절대 배치하지 마십시오.<br><br>

- 아래는 Hello, World를 디스플레이 가운데에 배치하는 코드입니다.
```html
<app-layout>

    <layout-center>
        <header-text>Hello, World!</header-text>
    </layout-center>

</app-layout>
```

<br>

# 콘텐츠 영역과 컨트롤 영역
기본적으로 SUITE-UI의 앱은 콘텐츠 영역과 컨트롤 영역으로 나뉩니다.<br>
콘텐츠 영역에서는 표시 할 주 콘텐츠를 나타내고, 컨트롤 영역에선 유저가 상호작용 할 수 있는 버튼 등을 나타냅니다.<br><br>
이는 SUITE-UI SDK에서 각각 `<content-area>`, `<control-area>` 태그를 사용하여, 쉽게 나눌 수 있습니다.<br><br>

- 아래는 영역을 나뉘어, 콘텐츠 영역에 Hello, World를, 컨트롤 영역에는 빈
버튼 하나를 배치합니다.
```html
<app-layout>

    <content-area>
        <layout-center>
            <header-text>Hello, World!</header-text>
        </layout-center>
    </content-area>

    <control-area>
        <primary-button></primary-button>
    </control-area>

</app-layout>
```

<br>

# 버튼의 종류
버튼에는 강조 할 때 사용하는 `<primary-button>` 태그와 보조 버튼인 `<secondary-button>` 태그가 있습니다.

<br>

# 버튼에 텍스트(라벨) 추가하기
버튼에 텍스트를 추가하고 싶다면, 버튼 태그 안에 `<button-label>` 태그를 사용해 내용을 작성해보세요.<br><br>

- 버튼 안에 `반가워요!`를 삽입하기 위해서는, `<control-area>`의 내용을 아래와 같이 변경해야합니다.
```html
<control-area>
    <primary-button>
        <button-label>반가워요!</button-label>
    </primary-button>
</control-area>
```

<br>

# 상/하 비율로 레이아웃 나누기
버튼 조작 부를 상/하로 나뉘어보겠습니다.<br>
이 경우에는 `<layout-split>`을 사용합니다.<br>
`<layout-split>`에는 각각 8, 7, 6, 4, 3, 2 비율이 존재하며,
가장 기본적인 `<layout-split>` 태그는 절반의 비율을 뜻합니다.<br>
만약, 화면을 7:3으로 나누고 싶다면, `<layout-split-7>`과 `<layout-split-3>`을 사용하면 됩니다.<br><br>

- 아래는 레이아웃을 절반으로 나누고, 버튼을 2개 배치합니다.
```html
<control-area>

    <layout-split>
        <primary-button>
            <button-label>반가워요!</button-label>
        </primary-button>
    </layout-split>

    <layout-split>
        <secondary-button>
            <button-label>안녕하세요!</button-label>
        </secondary-button>
    </layout-split>

</control-area>
```

<br>

# SUITE-UI 표준 레이아웃
SUITE-UI에서는 컨트롤 영역에서 상단과 중단으로 컨트롤 영역을 나눕니다.<br>
상단에는 대부분의 시스템 요소가 삽입됩니다. 상단과 중단을 나누는 태그는 각각 `<top-control>`과 `<middle-control>` 입니다.<br><br>

* 아래는 표준 레이아웃에 맞게 재배치합니다.
```html
<control-area>

    <top-control></top-control>

    <middle-control>

        <layout-split>
            <primary-button>
                <button-label>반가워요!</button-label>
            </primary-button>
        </layout-split>

        <layout-split>
            <secondary-button>
                <button-label>안녕하세요!</button-label>
            </secondary-button>
        </layout-split>

    </middle-control>

</control-area>
```

<br>

# 좌/우로 레이아웃 나누기
레이아웃을 좌/우로 나눠야한다면, `<row-split>` 태그를 사용하여 나눌 수 있습니다.

- 아래는 버튼을 좌/우로 다시 나눕니다.
```html
<control-area>

    <top-control></top-control>

    <middle-control>

        <row-area>
            <row-split>
                <primary-button>
                    <button-label>반가워요!</button-label>
                </primary-button>
            </row-split>

            <row-split>
                <secondary-button>
                    <button-label>안녕하세요!</button-label>
                </secondary-button>
            </row-split>
        </row-area>

    </middle-control>

</control-area>
```

<br>

# 뒤로가기 인터렉션
앱을 나가는 버튼을 추가해보겠습니다.

- 아래는 앱을 나가는 버튼을 쉽게 만들어주는 태그입니다.
```html
<top-control>
    <back-button>
        <back-button-icon></back-button-icon>
        <back-button-label>나가기</back-button-label>
    </back-button>
</top-control>
```