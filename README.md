# WebSocket 90 min

1.	Запустил index.html + открыл консоль (F12)
2.	Пришло в консоль: 
{"message":"You successfully accept challenge","next":"arithmetic", "token":"b55e9e9d797bb6b1"}
- взял полученный "token":"b55e9e9d797bb6b1"
- взял название задачи  arithmetic".

3.	Отправил запрос на получения условий  задачи arithmetic: 
ws.send(JSON.stringify({
"token": "b55e9e9d797bb6b1",
"command": "arithmetic"
}));

6.	Получил ответ в консоль {"name":"arithmetic","task":{"sign":"+","values":[100,300,22,14]}}

7.	Из задания видно "sign":"+" – (сложить значение, которые находятся в массиве) "values":[100,300,22,14], получаю ответ 436 (не помню точных данных)

8.	Отправил решение:
ws.send(JSON.stringify({
"token": "b55e9e9d797bb6b1",
"command": "arithmetic"
"answer": 436
}));

9.	Получил ответ (решение верное и название задачи){"message":"You solve the task","next":"function_evaluation "}

10.	Отправил запрос на получения условий к задаче function_evaluation:
ws.send(JSON.stringify({
"token": " b55e9e9d797bb6b1",
"command": "function_evaluation"
}));

11.	Получил ответ  {"name":"function_evaluation","task":{"fn":"(function function_evaluation() {return 199 + 217 })"}} 

12.	Из задания понял, что надо вернуть результат сложения {return 199 + 217}

13.	Отправил решение:
ws.send(JSON.stringify({
"token": "b55e9e9d797bb6b1",
"command": "function_evaluation"
"answer": 416
}));

13.	Получил ответ (решение верное и название задачи) {"message":"You solve the task","next":"binary_arithmetic"}

14.	Отправил запрос на получения условий к задаче binary_arithmetic:
ws.send(JSON.stringify({
"token": " b55e9e9d797bb6b1",
"command": "binary_arithmetic:"
}));

15.	Получил ответ {"name":"binary_arithmetic","task":{"bits":8}}
….
[[Uint8Array]]: Uint8Array(16) [78, 235, 94, 69, 236, 231, 91, 171, 45, 221, 251, 48, 62, 146, 217, 57]
16.	Из всех четырех массивов, мне нежно только посчитать сумму значений Uint8Array(16) [127, 217, 162, 73, 81, 123, 27, 78, 48, 252, 22, 20, 88, 26, 171, 75]

17.	Отправил решение:
ws.send(JSON.stringify({
"token": " b55e9e9d797bb6b1",
"command": " binary_arithmetic "
"answer": 1590
}));

18.	Получил ответ, что все решено верно

19.	Отправил запрос 
ws.send(JSON.stringify({ 
"token": "b55e9e9d797bb6b1", 
"command": "win" }));

20.	Прилетел ответ с секретным кодом.

21.	Отправил свой гитхаб и секретный код в форму(https://docs.google.com/forms/d/e/1FAIpQLSe4sehTAUjNDp4VZzdtO3VFh0xT_G0GhpvxTZphDwVDbq5iLw/viewform)
