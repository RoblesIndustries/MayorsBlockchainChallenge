var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(JSON.parse(this.responseText));
    var result = JSON.parse(this.responseText);
    var result_array = result.result;
    console.log('****')
    var result_dic = result_array[0];
    var data_array = result_dic.data;
    var data_dic = data_array[0];
    console.log(data_dic.wallet_id);
  }
});

xhr.open("GET", "https://wallet-api.digitaltown.com/api/v1/wallets?userID=c4276f13-90fe-11e8-bf87-06b9b6fd22b8");
xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1NDVjNTdhMWM4N2RiNGQwMjJiNWRhZjdiMjEyODM2MTAyYmIyYzljOTZiNmNlNWE0NTE0Y2EzNzBmNTBlNTgxZmE0YmFlYWRlNTc1NDMzIn0.eyJhdWQiOiIxMTkiLCJqdGkiOiJkNTQ1YzU3YTFjODdkYjRkMDIyYjVkYWY3YjIxMjgzNjEwMmJiMmM5Yzk2YjZjZTVhNDUxNGNhMzcwZjUwZTU4MWZhNGJhZWFkZTU3NTQzMyIsImlhdCI6MTUzMjYyODQ1MiwibmJmIjoxNTMyNjI4NDUyLCJleHAiOjE1NjQxNjQ0NTIsInN1YiI6Ijg0NTEiLCJzY29wZXMiOlsiSUQiLCJlbWFpbCIsInByb2ZpbGUiLCJidXNpbmVzcyIsImF2YXRhciJdfQ.uSlvjWq-bwpEDJPayZg33lz7GHU090G-g10h28T-2uBIfvBEtOuOKytL9Lev2oFFbJ8LkcfgW2RDuO8g-UIfFReF-tTU1J0JU6W2gwYXYK1udF3KwZJ0oRNMrvm_DGhK-FRu3ouJYBzYK7kxGoQOftE7rs7bT20FuDZmiwzNu7zGFUCF1lreveu8XI6QdiACn1XUPxwXAhx-8j_xQaY1Oo4-ilZqNSbxigU175rCRPhwrn9HsxXz5DZ_8PKxIGK1pkuZeCAg6rt2qITaiETs_qWVbFDEzJQvMmHVbhXZ7XaUZ4mMISmZMPW3AAi4BwHcJTK1-hA1rDSSbyEMqZWOL6IgjleySyhSb5dYCndwl8YPVfzmiu7xRZudxiAdEmEP4vT9KBdMWfIZVy0q4kzF9917QevxhQVMIQc8cSQKsgF_E2hHOlY_CTCJSsmKeeIQoA7rF1sQBiD7Qo8nK-AiA7jV8YatEm9JiXqLQfLyLzBeTZgR_uD2XhodRwcia75ZEkli3gp268wyA7soXHYT-J951k5JwEPGgxltbkl_1kXnAub3mQFA_GTkcrgQ8R9eGFoATD9Pnu2LtVlPZjpew6MM6_Q6TvzmCJBLGudIxT50eRNk0kqIwIiRpgqKIV8Oipg07YqfspmyBK4pI52Shp-fVoG5mi-Zhu2X9OzRs-4");

xhr.send(data);
