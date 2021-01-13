
    function $(fas) {
        return document.querySelector(fas)
    }

    function fn(fas) {
        return document.querySelectorAll(fas)
    }

    function htmlfile() {
        this.arr = []
        this.html = ""
        html = html + ` 
         <div style="width: 850px; height: 450px;border: 1px solid red;margin: 0 auto;position: relative;">
        <div class="pay1"  style="width: 100%; height:110px;border: 1px solid red;">0</div>
        <div class="pay" style="width: 100%; height:537px;border: px solid red;">
        <button class="run">1</button>
        <button class="run">2</button>
        <button class="run">3</button>
        <button class="run">4</button>
        <button class="run">5</button>
        <button class="run">6</button>
        <button class="run">7</button>
        <button class="run">8</button>
        <button class="run">9</button>
        <button id="pop"  style="width: 350px;">清空</button>
        <button id="fne"   style="width: 380px; position: absolute;margin-left: 14px;">退格</button>
    </div>
    </div>`
        document.body.innerHTML = window.html
        fn('.run').forEach((item, index) => {
            item.onclick = () => {
                window.arr.push(item.innerHTML)
                console.log(window.arr);
                this.font = arr.join(" ")
                $('.pay1').innerHTML = window.font+"克"
            }
            $('#pop').onclick = () => {
                window.arr = []
                window.arr.length = 0
                $('.pay1').innerHTML = window.arr+"克"
            }
            $('#fne').onclick = () => {
                let item = window.arr.pop()
                $('.pay1').innerHTML = item
                this.list = window.arr.join(" ")
                $('.pay1').innerHTML= window.list+"克"

            }
        })





    }
    htmlfile()
