function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = "<strong>You:</strong> " + userInput;
    chatBox.appendChild(userMessage);
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(sendReply, 1000);
}

function sendReply() {
    var replies = ["Hello!", "Hi there!", "Welcome!", "Nice to meet you!"];
    var chatBox = document.getElementById("chat-box");
    var randomReply = replies[Math.floor(Math.random() * replies.length)];
    var botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = "<strong>WombWizard:</strong> " + randomReply;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
