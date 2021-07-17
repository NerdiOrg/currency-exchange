var start_currency = "USD", //  usd, gbp, eur, btc, etc... -- You can also use a select dropdown value so a user can set the start currency, and use an on change event listener!
    end_currency =  "EUR", // usd, gbp, eur, btc, etc... -- You can also use a select dropdown value so a user can set the end currency, and use an on change event listener!
    start_amount = "100", // change this to anything you want -- You can also use a text input value so a user can set the amount dynamically, and use an on change event listener!
    currencies = {"USD":{"EUR":0.85, "GBP":0.73, "BTC":0.000032}, "EUR":{"USD":1.18, "GBP":0.86, "BTC":0.000038}, "BTC":{"EUR":26542.01, "GBP":22747.76, "BTC":31333.90}} // currency exchange rates must be updated frequently, with use of API or another database, but this here serves as an example today on July 17, 2021 UTC according to Google.com quick exchange stats
if(typeof currencies[start_currency] != 'undefined' && typeof currencies[end_currency] != 'undefined'){
    var exchange_rate = currencies[start_currency][end_currency],
          end_amount = exchange_rate * start_amount;
    console.log("1 " + start_currency + " is equal to " + end_result + " " + end_currency + " so  " + start_amount + " " +  start_currency + " is equal to " + end_amount + " " + end_currency)
} else {
    console.log("This currency is not supported at this time.")
}
