document.addEventListener('DOMContentLoaded', (event) => {

    let elements = document.getElementsByName('meal');
    let label = document.getElementsByTagName("label");
    let ol = document.getElementsByTagName("ol");
    let ul = document.getElementsByTagName("ul")[0];
    let len = elements.length;
    let checkValue = '';
    let flag = 0;

    let li_list = document.getElementsByClassName("content")[0].getElementsByTagName("li");
    let li_list_count = li_list.length;

    // パターン1：子要素の数を取得
    let child_nodes_count = ul.childElementCount;

    for (let i = 0; i < child_nodes_count; i++) {
        ul.children[i].addEventListener('click', function () {

            // 追加する要素を作成
            let li = document.createElement('li');
            li.innerHTML = ul.children[i].textContent;

            console.log(ul.children[i].textContent);

            // 末尾に追加
            ol[flag].appendChild(li);

            // リストの追加
            li_list = document.getElementsByClassName("content")[0].getElementsByTagName("li");
            li_list_count = li_list.length;

            list_remove(li_list_count);
            console.log("bbbb");
        });
    }

    function list_remove(li_list_countV) {
        // li_list = document.getElementsByClassName("content")[0].getElementsByTagName("li");
        for (let j = 0; j < li_list_countV; j++) {
            li_list[j].addEventListener('click', function (event) {
                // console.log("J：" + j);
                this.remove();
                li_list = document.getElementsByClassName("content")[0].getElementsByTagName("li");
                li_list_countV2 = li_list.length;
                // console.log("li_list_count：" + li_list.length);
                event.stopImmediatePropagation();
                // event.stopPropagation();
                // console.log(li_list[i].textContent);
            });
        }
    }

    // 追加する要素を作成
    // let li = document.createElement('li');
    // li.innerHTML = 'list_item';

    // for (let i = 0; i < li_list_count; i++) {
    //     li_list[i].addEventListener('click', function () {
    //         li_list[i].remove();
    //         console.log(li_list[i].textContent);
    //     });
    // }

    for (let i = 0; i < len; i++) {
        elements[i].addEventListener('click', function () {
            for (let j = 0; j < len; j++) {
                label[j].classList.remove("selection");
            }
            console.log(elements[i].value);
            label[i].classList.add("selection");
            flag = i;
        });

    }
    console.log(checkValue);
});