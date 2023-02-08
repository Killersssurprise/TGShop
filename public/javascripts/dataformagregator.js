function checkValue() {
    // var form = document.forms[0];
    var goodsNameElement = document.querySelector('input[name="GoodsName"]');
    var goodsNameValue = goodsNameElement.value;

    var goodsPriceElement = document.querySelector('input[name="Price"]');
    var goodsPriceValue = goodsPriceElement.value;

    var goodsCountElement = document.querySelector('input[name="Count"]');
    var goodsCountValue = goodsCountElement.value;

    var goodsDescriptionElement = document.querySelector('input[name="GoodsDescription"]');
    var goodsDescriptionValue = goodsDescriptionElement.value;

    console.log("selectedValue: " + goodsNameValue);

    // var requestOptions = {
    //     method: 'POST',
    //     redirect: 'follow'
    // };
    //
    // fetch('localhost:3000/put-goods-api?name='+goodsNameValue+
    //     '&price='+goodsPriceValue+
    //     '&count='+goodsCountValue+
    //     '&description='+goodsDescriptionValue+'\''
    //     , requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    // const queryString = `localhost:3000/put-goods-api?
    let host = 'http://127.0.0.1:3000';
    const queryString = `/put-goods-api?name=${goodsNameValue}&price=${goodsPriceValue}&count=${goodsCountValue}&description=${goodsDescriptionValue}`;

    fetch(`${host}${encodeURI(queryString)}`, {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        //make sure to serialize your JSON body

    })
        .then((response) => {
            //do something awesome that makes the world a better place
            console.log(response);
        });

}