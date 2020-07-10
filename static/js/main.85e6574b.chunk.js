(this["webpackJsonpreact-budget-app"]=this["webpackJsonpreact-budget-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),s=n.n(r),o=(n(17),n(4)),i=n(7),l=n(1),m=function(e,t){switch(t.type){case"ADD_INCOME":return Object(l.a)(Object(l.a)({},e),{},{incomeTransactions:[t.payload].concat(Object(i.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenseTransactions:[t.payload].concat(Object(i.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==t.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==t.payload}))});default:return e}},u={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},p=Object(a.createContext)(u),E=function(e){var t=e.children,n=Object(a.useReducer)(m,u),r=Object(o.a)(n,2),s=r[0],i=r[1];Object(a.useEffect)((function(){localStorage.setItem("incomeTransactions",JSON.stringify(s.incomeTransactions)),localStorage.setItem("expenseTransactions",JSON.stringify(s.expenseTransactions))}));return c.a.createElement(p.Provider,{value:{incomeTransactions:s.incomeTransactions,expenseTransactions:s.expenseTransactions,addIncome:function(e){i({type:"ADD_INCOME",payload:e})},addExpense:function(e){i({type:"ADD_EXPENSE",payload:e})},deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})}}},t)},d=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Budget App"))},x=function(){var e=Object(a.useContext)(p),t=e.incomeTransactions,n=e.expenseTransactions,r=t.map((function(e){return e.incomeAmount})),s=n.map((function(e){return e.expenseAmount})),o=r.reduce((function(e,t){return e+t}),0).toFixed(2),i=s.reduce((function(e,t){return e+t}),0).toFixed(2);return c.a.createElement("div",{className:"balance"},c.a.createElement("h2",null,"Balance"),c.a.createElement("h3",null,(o-i).toFixed(2),"\u20ac"),c.a.createElement("div",{className:"income-expense"},c.a.createElement("div",{className:"plus"},c.a.createElement("h3",null,"Ingresos"),c.a.createElement("p",null,"+",o,"\u20ac")),c.a.createElement("div",{className:"minus"},c.a.createElement("h3",null,"Gastos"),c.a.createElement("p",null,"-",i,"\u20ac"))))},f=n(3),T=n(6),b=function(){var e=Object(a.useContext)(p),t=e.addIncome,n=e.addExpense,r=Object(a.useState)({incomeText:"",incomeAmount:0}),s=Object(o.a)(r,2),i=s[0],m=s[1],u=i.incomeText,E=i.incomeAmount,d=function(e){m(Object(l.a)(Object(l.a)({},i),{},Object(f.a)({},e.target.name,e.target.value)))},x=Object(a.useState)({expenseText:"",expenseAmount:0}),b=Object(o.a)(x,2),O=b[0],v=b[1],N=O.expenseText,j=O.expenseAmount,A=function(e){v(Object(l.a)(Object(l.a)({},O),{},Object(f.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==u){var n={id:Object(T.v4)(),incomeText:u,incomeAmount:1*E};t(n),m({incomeText:"",incomeAmount:0})}}},c.a.createElement("div",{className:"input-group income"},c.a.createElement("input",{type:"text",placeholder:"A\xf1ade ingreso...",autoComplete:"off",name:"incomeText",value:u,onChange:d}),c.a.createElement("input",{type:"number",placeholder:"Amount",autoComplete:"off",name:"incomeAmount",value:E,onChange:d}),c.a.createElement("input",{type:"submit",value:"A\xf1adir"}))),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==N){var t={id:Object(T.v4)(),expenseText:N,expenseAmount:1*j};n(t),v({expenseText:"",expenseAmount:0})}}},c.a.createElement("div",{className:"input-group expense"},c.a.createElement("input",{name:"expenseText",type:"text",value:N,placeholder:"A\xf1ade gasto...",autoComplete:"off",onChange:A}),c.a.createElement("input",{name:"expenseAmount",type:"number",value:j,placeholder:"Amount",autoComplete:"off",onChange:A}),c.a.createElement("input",{type:"submit",value:"A\xf1adir"}))))},O=function(e){var t=e.incomeTransaction,n=Object(a.useContext)(p).deleteTransaction;return c.a.createElement("li",{className:"transaction"},c.a.createElement("span",{className:"transaction-text"},t.incomeText),c.a.createElement("span",{className:"transaction-amount"},t.incomeAmount,"\u20ac"),c.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"fas fa-trash"})))},v=function(){var e=Object(a.useContext)(p).incomeTransactions;return c.a.createElement("div",{className:"transactions transactions-income"},c.a.createElement("h2",null,"Historial de Ingresos"),c.a.createElement("ul",{className:"transaction-list"},e.map((function(e){return c.a.createElement(O,{key:e.id,incomeTransaction:e})}))))},N=function(e){var t=e.expenseTransaction,n=Object(a.useContext)(p).deleteTransaction;return c.a.createElement("li",{className:"transaction"},c.a.createElement("span",{className:"transaction-text"},t.expenseText),c.a.createElement("span",{className:"transaction-amount"},t.expenseAmount,"\u20ac"),c.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"fas fa-trash"})))},j=function(){var e=Object(a.useContext)(p).expenseTransactions;return c.a.createElement("div",{className:"transactions transactions-expense"},c.a.createElement("h2",null,"Historial de gastos"),c.a.createElement("ul",{className:"transaction-list"},e.map((function(e){return c.a.createElement(N,{key:e.id,expenseTransaction:e})}))))},A=function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(d,null),c.a.createElement(x,null),c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(j,null))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.85e6574b.chunk.js.map