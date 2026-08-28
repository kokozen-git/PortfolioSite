
class ToggleButton extends HTMLElement{

    constructor(){
        super();
        this.#loadStyles();
    }

    /*####################
    # CSS
    ####################*/

    static #styleElement = null;

    #loadStyles(){

        //すでにCSSが読み込まれている場合は終了
        if(ToggleButton.#styleElement){return;}

        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
        ToggleButton.#styleElement = styleElement;

        const styles = {

            ".toggle-wrapper": {
                position: "relative",
                width: "70px",
                height: "32px",
                margin: "0",
                borderRadius: "999px",
                background: "#444",
                overflow: "hidden"
            },

            //チェックボックス
            ".toggle": {
                appearance: "none",
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                margin: "0",
                borderRadius: "999px",
                boxSizing: "border-box",
                background: "transparent",
                cursor: "pointer"
            },

            //OFF/ONの文字
            ".toggle::before": {
                content: '""',
                position: "absolute",
                zIndex: "2",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
                whiteSpace: "nowrap",
                pointerEvents: "none"
            },

            //〇
            ".toggle-wrapper::after": {
                content: '""',
                position: "absolute",
                zIndex: "2",
                top: "10%",
                left: "4px",
                width: "25.6px",
                height: "25.6px",
                borderRadius: "999px",
                background: "#fff",
                transition: "transform 0.15s",
                pointerEvents: "none"
            },

            //ON時の背景
            ".toggle-wrapper:has(.toggle:hover)": {
                backgroundColor: "#2196f3"
            },

            //ON時の文字
            ".toggle:hover::before": {
                content: '""',
                color: "#fff",
                left: "10px",
                right: "auto"
            },

            //ON時の〇
            ".toggle-wrapper:has(.toggle:hover)::after": {
                transform: "translateX(calc(70px - 32px - 2px))"
            }
        };

        for(const [selector, properties] of Object.entries(styles)){
            this.#registerStyle(
                selector,
                properties
            );
        }
    }
    
    //指定したセレクタにCSSスタイルを登録
    #registerStyle(selector, properties){

        //CSSプロパティを生成
        const cssProperties = [];

        const propertyEntries = Object.entries(properties);
        for (const [property, value] of propertyEntries){
            const cssProperty = this.#createCssProperty(property,value);
            cssProperties.push(cssProperty);
        }

        //セレクタとCSSプロパティからCSSルールを生成
        const cssRule = `${selector}{${cssProperties.join("")}}`;
        
        //CSSルールをstyleへ登録
        ToggleButton.#styleElement.sheet.insertRule(cssRule);
    }
    
    //CSSプロパティを文字列に変換
    #createCssProperty(property, value){

        const uppercaseLetterPattern = /[A-Z]/g;

        const cssProperty = property.replace(
            uppercaseLetterPattern,
            this.#convertUppercaseLetter
        );

        return `${cssProperty}: ${value};`;
    }
    
    #convertUppercaseLetter(letter){
        return `-${letter.toLowerCase()}`;
    }

    /*####################
    # 要素生成
    ####################*/

    connectedCallback(){

        const element = this.#createToggleElement();

        this.#registerCustomStyle(element);

        this.replaceWith(element);
        
    }
    
    //トグル要素を生成
    #createToggleElement(){

        //要素を生成
        const divElement = this.#createDivElement();
        const inputElement = this.#createInputElement();

        //属性を設定
        this.#applyAttributes(divElement, inputElement);

        //要素の親子関係を設定
        divElement.appendChild(inputElement);

        return divElement;
    }

    //input要素を囲むdiv要素を生成
    #createDivElement(){
        const element = document.createElement("div");
        element.classList.add("toggle-wrapper");
        return element;
    }
    
    //input要素を生成
    #createInputElement(){
        const element = document.createElement("input");
        element.type = "checkbox";
        element.classList.add("toggle");

        return element;
    }

    /*####################
    # 属性設定
    ####################*/
    #applyAttributes(divElement, inputElement){
        for(const attribute of this.attributes){

            //class属性を転記
            if(attribute.name === "class"){
                this.#setElementClass(divElement,attribute.value);
                continue;
            }
            
            //data属性は転記しない
            if(attribute.name.startsWith("data-")){
                continue;
            }

            //属性ごとに転記要素を確認
            const targetElement = this.#isInputAttribute(attribute.name)
                ? inputElement
                : divElement;

            //その他の属性を転記
            this.#setElementAttribute(targetElement, attribute);

        }
    }

    //属性ごとに転記要素を判定
    #isInputAttribute(name){
        const inputAttributes = [
            "value",
            "id",
            "name",
            "aria-hidden",
            "checked"
        ];
        return inputAttributes.includes(name);
    }

    //class属性を転記
    #setElementClass(element,value){

        //class属性を空白で分割
        const classNames = value.split(/\s+/);

        //空の値を除外
        const validClassNames = classNames.filter(Boolean);

        //classを要素へ追加
        element.classList.add(...validClassNames);

    }

    //その他の属性を転記
    #setElementAttribute(element,attribute){
        element.setAttribute(
            attribute.name,
            attribute.value
        );
    }

    /*####################
    # カスタムスタイルを設定
    ####################*/

    #registerCustomStyle(element){
        const id = crypto.randomUUID();

        element.dataset.toggleId = id;

        const selector =
        `.toggle-wrapper[data-toggle-id="${id}"]`;

        this.#registerCustomFontStyle(selector);
        this.#registerCustomSize(selector);
        this.#registerBorderStyle(selector);
        this.#registerBackgroundDesign(selector);
        this.#registerCustomToggleDesign(selector);
        
    }

    //フォント系
    #registerCustomFontStyle(selector){

        const offProperties ={};
        const onProperties ={};

        //フォント
        if(this.dataset.font){
            offProperties.fontFamily = this.dataset.font;
        }

        //フォントサイズ
        if(this.dataset.fontSize){
            offProperties.fontSize = this.dataset.fontSize;
        }

        //フォントの太さ
        if(this.dataset.fontWeight){
            offProperties.fontWeight = this.dataset.fontWeight;
        }

        //OFFの文字色
        if(this.dataset.offFontColor){
            offProperties.color = this.dataset.offFontColor;
        }

        //OFFの文字
        if(this.dataset.offContent){
            offProperties.content = `"${this.dataset.offContent}"`;
        }

        //ONの文字色
        if(this.dataset.onFontColor){
            onProperties.color = this.dataset.onFontColor;
        }

        //ONの文字
        if(this.dataset.onContent){
            onProperties.content = `"${this.dataset.onContent}"`;
        }

        if(Object.keys(offProperties).length){
            this.#registerStyle(
                `${selector} .toggle::before`,
                offProperties
            );
        }

        if(Object.keys(onProperties).length){
            this.#registerStyle(
                `${selector}:has(.toggle:hover) .toggle::before`,
                onProperties
            );
        }
    }

    //幅系
    #registerCustomSize(selector){

        const wrapperProperties ={};
        const circleProperties ={};

        //トグルの幅
        if(this.dataset.width){
            wrapperProperties.width = this.dataset.width;
        }

        //トグルの高さ
        if(this.dataset.height){
            wrapperProperties.height = this.dataset.height;

            //〇のサイズ
            circleProperties.width =
                `calc(${this.dataset.height} * 0.8)`;

            circleProperties.height =
                `calc(${this.dataset.height} * 0.8)`;
        }

        //トグルのサイズを登録
        if(Object.keys(wrapperProperties).length){
            this.#registerStyle(
                selector,
                wrapperProperties
            );
        }

        //〇のサイズを登録
        if(Object.keys(circleProperties).length){
            this.#registerStyle(
                `${selector}::after`,
                circleProperties
            );
        }

        //ON時の〇を右へ移動
        if(this.dataset.width && this.dataset.height){
            this.#registerStyle(
                `${selector}:has(.toggle:hover)::after`,{
                    transform:
                        `translateX(calc(${this.dataset.width} - ${this.dataset.height}))`
                }
            );
        }
    }

    //ボーダー
    #registerBorderStyle(selector){
        if(this.dataset.border){
            this.#registerStyle(
                `${selector}`,{
                    border: `${this.dataset.border}`,
                }
            );
        }
    }

    //背景色
    #registerBackgroundDesign(selector) {

        const offBackground = this.dataset.offBackground;
        const onBackground = this.dataset.onBackground;

        const backgroundProperties = {
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        };

        //OFF時の背景
        if(offBackground){
            this.#registerStyle(
                selector,{
                    background: offBackground,
                    ...backgroundProperties,
                }
            );
        }

        //ON時の背景
        if(onBackground){
            this.#registerStyle(
                `${selector}:has(.toggle:hover)`,{
                    background: onBackground,
                    ...backgroundProperties,
                }
            );
        }
    }

    //〇のデザイン
    #registerCustomToggleDesign(selector) {

        const backgroundProperties = {
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        };

        //OFF時の〇
        if(this.dataset.offToggleDesign){
            this.#registerStyle(
                `${selector}::after`,{
                    background: this.dataset.offToggleDesign,
                    ...backgroundProperties
                }
            );
        }

        //ON時の〇
        if(this.dataset.onToggleDesign){
            this.#registerStyle(
                `${selector}:has(.toggle:hover)::after`,{
                    background: this.dataset.onToggleDesign,
                    ...backgroundProperties
                }
            );
        }
    }

    

}

customElements.define("toggle-button", ToggleButton);