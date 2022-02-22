chrome.runtime.sendMessage({
        type: "GetTOTP",
    },
    function (response) {
        if (response) {
            const totp = response.totp;
            const inp = document.getElementsByName("authcode")[0];
            const title = document.getElementsByTagName("h3")[0];
            const sel = document.getElementsByName("mfa_type")[0]
            const submit = document.getElementsByName("login")[0];
            
            if (document.getElementById("result").innerHTML=="\n\n") {
                title.innerHTML += " (自動ログイン)" + document.getElementById("result").innerHTML=="";
                sel.querySelector("option[value='totp']").setAttribute("selected", "selected");
                inp.value = totp;
                submit.click();
            }else{
                title.innerHTML += " (自動ログインに失敗しました)"
            }
        }
    }
);

